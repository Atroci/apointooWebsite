import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';
import axios from 'axios';

const BREVO_API_URL = 'https://api.sendinblue.com/v3';

const schema = yup.object().shape({
  firstname: yup.string().required(),
  email: yup.string().email().required(),
  phonenumber: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  consent: yup.boolean().oneOf([true], 'Consent is required').required(),
});

const footerSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstname, email, phonenumber, subject, message, consent } = body;

  if (firstname && subject && message && consent !== undefined) {
    // Handle full contact form submission
    try {
      await schema.validate(body);
    } catch (err) {
      return NextResponse.json({ error: (err as yup.ValidationError).errors.join(', ') }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: 'Consent is required' }, { status: 400 });
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      };

      const emailData = {
        sender: { email: email },
        to: [{ email: process.env.DESTINATION_EMAIL }],
        subject: subject,
        htmlContent: `
          <p><strong>First Name:</strong> ${firstname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phonenumber}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      await axios.post(`${BREVO_API_URL}/smtp/email`, emailData, { headers });
      
      return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });
    } catch (error: any) {
      console.error(error);

      if (error.response && error.response.data && error.response.data.message) {
        return NextResponse.json({ error: error.response.data.message }, { status: 500 });
      } else {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
    }
  } else {
    // Handle footer email subscription
    try {
      await footerSchema.validate(body);
    } catch (err) {
      return NextResponse.json({ error: (err as yup.ValidationError).errors.join(', ') }, { status: 400 });
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      };

      try {
        // Check if the contact already exists
        await axios.get(`${BREVO_API_URL}/contacts/${email}`, { headers });

        // If contact exists, update their lists to include the new list
        const updateContact = {
          listIds: [parseInt(process.env.BREVO_LIST_ID || '0')],
        };

        await axios.put(`${BREVO_API_URL}/contacts/${email}`, updateContact, { headers });
        return NextResponse.json({ message: 'Contact updated and added to the list' }, { status: 200 });
      } catch (error: any) {
        if (error.response && error.response.status !== 404) {
          throw error;
        }

        // If contact does not exist, create a new one
        const createContact = {
          email,
          listIds: [parseInt(process.env.BREVO_LIST_ID || '0')],
        };

        await axios.post(`${BREVO_API_URL}/contacts`, createContact, { headers });

        return NextResponse.json({ message: 'Your message has been received and you have been added to the list' }, { status: 200 });
      }
    } catch (error: any) {
      console.error(error);

      if (error.response && error.response.data && error.response.data.message) {
        return NextResponse.json({ error: error.response.data.message }, { status: 500 });
      } else {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
    }
  }
}
