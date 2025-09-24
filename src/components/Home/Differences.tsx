"use client";

import React from "react";
import {
  architectureList,
  carbonReportList,
  insightList,
  technologyList,
  trafficList,
} from "@/lib/Differences";
import TableSection from "./TableSection";
import { motion } from "framer-motion";

export default function Differences() {
  const plans = ["Free", "Basic", "Enthusiast", "Expert"];

  return (
    <section className="w-full md:py-[134px] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-[55px] font-bold text-center mb-14 font-manrope">
          {"What's The Difference?"}
        </h1>

        {/* Responsive wrapper with horizontal scroll */}
        <motion.div
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[900px] text-sm md:text-base border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="p-3 text-left border-r border-[#CECCDE] bg-gray-50 font-manrope"></th>
                {plans.map((plan, idx) => (
                  <th
                    key={plan}
                    className={`${
                      idx === plans.length - 1 ? "border-l" : "border-x"
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
                {plans.map((plan, idx) => (
                  <td
                    key={idx}
                    className="py-3 cursor-pointer bg-primary text-white font-bold text-sm md:text-base hover:bg-green-700 transition font-inter"
                  >
                    Get Started
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
