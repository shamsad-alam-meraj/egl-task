import {
  architectureList,
  carbonReportList,
  insightList,
  technologyList,
  trafficList,
} from "@/lib/Differences";
import React from "react";
import TableSection from "./TableSection";

export default function Differences() {
  const plans = ["Free", "Basic", "Enthusiast", "Expert"];

  return (
    <section className="w-full md:py-[134px] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-[55px] font-bold text-center mb-14">
          {"What's The Difference?"}
        </h1>

        {/* Responsive wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm md:text-base border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="p-3 text-left border-r border-[#CECCDE] bg-gray-50"></th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className={`${
                      plans.indexOf(plan) === plans.length - 1
                        ? "border-l"
                        : "border-x"
                    } border-[#CECCDE] py-4 px-3 text-center text-xl font-bold bg-gray-50`}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <TableSection title="Carbon Report" rows={carbonReportList} />
              <TableSection
                title="Architecture Report"
                rows={architectureList}
              />
              <TableSection title="Insights" rows={insightList} />
              <TableSection title="Traffic Analysis" rows={trafficList} />
              <TableSection title="Technology" rows={technologyList} />
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td className="py-2 bg-primary text-white font-bold text-14">
                  Get Started
                </td>
                <td className="py-2 bg-primary text-white font-bold text-14">
                  Get Started
                </td>
                <td className="py-2 bg-primary text-white font-bold text-14">
                  Get Started
                </td>
                <td className="py-2 bg-primary text-white font-bold text-14">
                  Get Started
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
