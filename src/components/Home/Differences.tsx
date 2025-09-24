import { architectureList, carbonReportList } from "@/lib/Differences";
import React from "react";

export default function Differences() {
  const plans = ["Free", "Basic", "Enthusiast", "Expert"];

  const carbonReport = carbonReportList;
  const architectures = architectureList;

  return (
    <section className="w-full md:py-[134px] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {"What's The Difference?"}
        </h2>

        <table className="w-full  text-sm md:text-base">
          <thead>
            <tr className="">
              <th className=" p-3 text-left border-r  border-[#CECCDE]"></th>
              {plans.map((plan) => (
                <th
                  key={plan}
                  className={`${
                    plans.indexOf(plan) === plans.length - 1
                      ? "border-l"
                      : "border-x"
                  } border-[#CECCDE] p-3 text-center font-semibold`}
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Section header */}
            <tr className="border-b border-[#CECCDE] pl-2">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Carbon Report
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {/* Rows */}
            {carbonReport.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={` border-[#CECCDE] border-b  p-2 ${
                      i === 0 ? "text-left font-medium " : "text-center "
                    } ${
                      cell === "✓"
                        ? "text-green-400"
                        : cell === "✗"
                        ? "text-red-400"
                        : ""
                    } ${
                      i === row.length - 1
                        ? "border-l"
                        : i === 0
                        ? "border-r"
                        : "border-x"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
