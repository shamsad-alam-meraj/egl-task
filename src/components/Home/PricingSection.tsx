"use client";

import { planList } from "@/lib/Plans";
import { ChevronRight, CircleCheck } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const plans = planList;
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full md:pt-[134px] pt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-[55px] font-bold capitalize">
          Select the pricing plan that <br /> best suits your needs.
        </h2>

        {/* Toggle */}
        <div className="flex items-center justify-center  md:mt-[93px] mt-12 md:mb-[50px] mb-12">
          <div className="flex gap-3 relative p-5">
            <span className="fw-medium text-16">Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-[58px] h-[29px] bg-[#000000] rounded-full flex items-center transition"
            >
              <span
                className={`absolute left-0.5 w-[26px] h-[26px] rounded-full bg-white shadow transform transition ${
                  yearly ? "translate-x-7 right-0.5" : ""
                }`}
              />
            </button>
            <span className="fw-medium text-16">Yearly</span>

            <p className="gap-[10px] px-[20px] py-[7px] text-xs bg-primary text-white rounded-full rotate-[20.85deg] absolute top-[-10px] right-[-50px]">
              Save 40%
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:mb-[56px] mb-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={` text-left shadow-sm transition transform   ${
                plan.highlight
                  ? "px-3 py-5 scale-105 bg-white rounded-2xl border-[15px] border-[#DEEDEA]"
                  : " px-6 py-8  bg-[#F6FAF7] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#DEEDEA]"
              }`}
            >
              <h5 className="text-xl font-bold mb-[14px]  ">{plan.name}</h5>

              <p className="text-sm text-[#595959] mb-6">
                {plan.description} <br /> {plan.description2}{" "}
              </p>

              <h1 className="md:text-[55px] text-20 font-bold text-[#000000] mb-4">
                ${yearly ? 115.2 : plan.price}
              </h1>
              <p className="text-[#595959] mb-[42px] font-bold">
                {plan.description3}
              </p>
              <button
                className={`w-full py-5  transition text-20 font-bold rounded-full ${
                  plan.highlight
                    ? "text-white bg-primary hover:text-primary hover:bg-white"
                    : "bg-white text-primary  hover:bg-primary hover:text-white"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3 text-sm mt-11">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 py-0.5">
                    <CircleCheck className="w-5 h-5 text-[#191F33] " />
                    <p className="text-[#191F33]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom extra cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="rounded-[24px] py-[50px] pl-10 pr-9 text-left hover:shadow-md transition border border-[#E5E5E5] flex items-center">
            <div>
              <h5 className="text-[20px]  font-bold">Free</h5>
              <p className="text-[55px] font-bold my-2">$0</p>
              <h6 className="text-gray-600 text-[16px] font-semibold">
                Get started on your creative journey with text-based editing and
                give our AI tools a spin. 1 person included.
              </h6>
            </div>
            <div className="ml-12">
              <ChevronRight className="w-5 h-5 text-[#191F33]" />
            </div>
          </div>
          <div className="rounded-[24px] py-[50px] pl-10 pr-9 text-left hover:shadow-md transition border border-[#E5E5E5] flex items-center">
            <div>
              <h5 className="text-[20px]  font-bold">Enterprise</h5>
              <p className="text-[55px] font-bold my-2">Custom</p>
              <h6 className="text-gray-600 text-[16px] font-semibold">
                Get started on your creative journey with text-based editing and
                give our AI tools a spin. 1 person included.
              </h6>
            </div>
            <div className="ml-12">
              <ChevronRight className="w-5 h-5 text-[#191F33]" />
            </div>
          </div>
        </div>

        <button className="mt-14 md:px-[68px] px-5 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-primary transition">
          Compare All Features And Plans
        </button>
      </div>
    </section>
  );
}
