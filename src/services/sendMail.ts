import axios from 'axios';

export const sendMail = async (link: string): Promise<boolean> => {
  try {
    const response = await axios.post('/api/mailbox/brevo-mail-handler', {
      email: 'apointoo@vizuh.com',
      msg: link,
    });
    return response.status === 200;
  } catch (err) {
    console.error(err);
    return false;
  }
};
