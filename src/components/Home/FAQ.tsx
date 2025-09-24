"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "Is This Extension Free?",
    answer:
      "Yes! The core version with key metrics is free. We offer a Pro plan with more in-depth data and historical trends.",
  },
  {
    id: "02",
    question: "Which Browsers Do You Support?",
    answer:
      "We support Chrome, Firefox, and Edge. Safari support is in development.",
  },
  {
    id: "03",
    question: "How Accurate Is The Data?",
    answer:
      "We use multiple trusted sources and update data frequently to ensure accuracy.",
  },
  {
    id: "04",
    question: "What Are My Homeownership Program Obligations?",
    answer:
      "Your obligations depend on the specific program. Typically, you must maintain residency and stay current on payments.",
  },
  {
    id: "05",
    question: "How Long Does The Homeownership Program Process Take?",
    answer:
      "The process length varies but typically takes between 30–90 days depending on your situation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-[45px] font-bold text-center mb-14">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-[#00000014]">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="py-6 my-3">
            <button
              className="flex items-start w-full text-left gap-6"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-[#000000] text-[24px]">
                {faq.id}
              </span>
              <div className="flex-1">
                <h3 className="font-medium text-[#000000] text-[24px]">
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <p className="mt-2 text-[18px] text-[#000000]">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div className="ml-auto">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
