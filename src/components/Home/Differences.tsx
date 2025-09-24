import {
  architectureList,
  carbonReportList,
  insightList,
  technologyList,
  trafficList,
} from "@/lib/Differences";
import React from "react";

export default function Differences() {
  const plans = ["Free", "Basic", "Enthusiast", "Expert"];

  const carbonReport = carbonReportList;
  const architectures = architectureList;
  const insights = insightList;
  const traffics = trafficList;
  const technologies = technologyList;

  return (
    <section className="w-full md:py-[134px] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {"What's The Difference?"}
        </h2>

        <table className="w-full text-sm md:text-base">
          <thead>
            <tr>
              <th className="p-3 text-left border-r border-[#CECCDE]"></th>
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
            {/* Carbon Report Section */}
            <tr className="border-b border-[#CECCDE]">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Carbon Report
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {carbonReport.map((row, idx) => (
              <tr key={`carbon-${idx}`} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-[#CECCDE] border-b p-2 ${
                      i === 0 ? "text-left font-medium" : "text-center"
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

            {/* Architecture Report Section */}
            <tr className="border-b border-[#CECCDE]">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Architecture Report
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {architectures.map((row, idx) => (
              <tr key={`arch-${idx}`} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-[#CECCDE] border-b p-2 ${
                      i === 0 ? "text-left font-medium" : "text-center"
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

            {/* Insights Section */}
            <tr className="border-b border-[#CECCDE]">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Insights
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {insights.map((row, idx) => (
              <tr key={`insight-${idx}`} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-[#CECCDE] border-b p-2 ${
                      i === 0 ? "text-left font-medium" : "text-center"
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

            {/* Traffic Analysis Section */}
            <tr className="border-b border-[#CECCDE]">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Traffic Analysis
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {traffics.map((row, idx) => (
              <tr key={`traffic-${idx}`} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-[#CECCDE] border-b p-2 ${
                      i === 0 ? "text-left font-medium" : "text-center"
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

            {/* Technology Section */}
            <tr className="border-b border-[#CECCDE]">
              <td className="p-2 font-bold text-left border-r border-[#CECCDE]">
                Technology
              </td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-x border-[#CECCDE]"></td>
              <td className="border-l border-[#CECCDE]"></td>
            </tr>

            {technologies.map((row, idx) => (
              <tr key={`tech-${idx}`} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`border-[#CECCDE] border-b p-2 ${
                      i === 0 ? "text-left font-medium" : "text-center"
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
