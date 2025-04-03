import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features of your selected plan for 7 days. You won't be charged until the trial period ends, and you can cancel anytime before then with no obligations.",
    },
    {
      question: "Can I switch plans after subscribing?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 7-day money-back guarantee if you're not satisfied with our service. After this period, we don't provide refunds for partial months, but you can cancel anytime to avoid future charges.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, UPI payments (PhonePe, Google Pay, Paytm), and net banking from all major Indian banks. For annual plans above ₹3,000, EMI options are also available.",
    },
    {
      question: "How do mock interviews work?",
      answer:
        "Our mock interviews simulate real interview experiences using AI and occasionally real interviewers. You'll receive questions based on your target companies and roles, followed by detailed feedback on your performance and areas of improvement.",
    },
    {
      question: "Can I share my account with friends?",
      answer:
        "Each subscription is meant for individual use only. Account sharing is against our terms of service and may result in account suspension. We offer special discounts for groups and campus plans if you're interested.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-white">
      <div className="container flex justify-between mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-gray-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-500 text-sm uppercase font-medium">
              FAQs
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <br /> Questions
          </h2>
          <div>
            <p>
              Doesn't found what are you looking for?{" "}
              <span className="font-semibold text-blue-400 cursor-pointer underline">
                Contact us
              </span>
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="font-medium text-xl text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] pb-6" : "max-h-0"
                }`}
              >
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        {/* <div className="mt-16 max-w-3xl">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our
              support team.
            </p>
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all">
              Contact Support
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQSection;
