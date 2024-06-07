"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/faq-img.png";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>FAQ,s</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can Appointoo help improve my practice&apos;s
                        efficiency?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Appointoo enhances efficiency by providing a seamless
                        appointment scheduling process, integrating with
                        existing EHR systems like NexHealth, Open Dental, and
                        DrChrono, and offering advanced analytics to track and
                        optimize your patient booking journey. This reduces
                        administrative tasks and improves overall operational
                        efficiency.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is my patients&apos; data secure with Appointoo?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        es, your patients&apos; data security is our top
                        priority. Appointoo is built to not store any patient
                        information, ensuring compliance and peace of mind. If
                        needed, patient information storage can be requested as
                        a management service with dedicated HIPAA-compliant
                        servers.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How quickly can we implement Appointoo in our practice?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Appointoo is designed for quick implementation with
                        minimal disruption to your practice’s daily operations.
                        Our dedicated support team is here to assist you every
                        step of the way, ensuring a smooth transition and fast
                        deployment.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What kind of support does Appointoo offer after
                        implementation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We offer ongoing support to ensure that your practice
                        continues to benefit from our solutions. This includes
                        continuous optimization, assistance with any issues that
                        arise, and updates to keep your system running smoothly.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does Appointoo help in tracking patient bookings and
                        improving marketing efforts?{" "}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Appointoo integrates with tools like Google Analytics to
                        track and understand your patients&apos; booking
                        journey. This provides valuable insights that can help
                        you improve your marketing efforts and enhance patient
                        experience.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I get started with Appointoo?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Getting started with Appointoo is easy. Contact us today
                        to schedule a demo and explore the features and benefits
                        tailored to your specific requirements. You can also get
                        a quote by visiting our website and filling out the
                        necessary information.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={360} height={465} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
