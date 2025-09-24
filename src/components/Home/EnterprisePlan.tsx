"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import {
  Clock,
  FileText,
  Link,
  Lock,
  Monitor,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function EnterprisePlan() {
  const radarData = [
    { subject: "Organic Traffic", value: 60 },
    { subject: "Link Power", value: 80 },
    { subject: "Natural Profile", value: 70 },
  ];

  return (
    <section className="w-full bg-[#EEF8F480] py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-48 gap-10 items-center px-6">
        {/* LEFT SIDE */}
        <div className="font-manrope">
          <h2 className="text-3xl md:text-[55px] font-bold leading-snug ">
            Enterprise: <br />{" "}
            <span className="text-3xl md:text-[50px] ">
              A Plan For Any Team
            </span>
          </h2>
          <p className="text-[#595959] mt-6 mb-10">
            Make everyone a collaborator — and make more video
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-700">
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <Lock className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">SSO and SCIM</h6>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <Users className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">
                Dedicated account representative
              </h6>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <FileText className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">
                Custom invoicing options
              </h6>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <Clock className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">
                Priority support (with SLA)
              </h6>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <Shield className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">
                Security review
              </h6>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full w-8 h-8 p-3">
                <Link className="w-4 h-4 text-[#1C9876]" />
              </div>
              <h6 className="text-[16px] text-[#595959] pt-2">
                Descript service agreement
              </h6>
            </li>
          </ul>

          <button className="mt-8 bg-primary hover:bg-white hover:text-primary text-white font-medium px-10 py-3 rounded-full">
            Contact us to learn more
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-col lg:flex-row font-inter">
          {/* Left  */}
          <div className="flex flex-col">
            {/* Toggle */}
            <div className="flex gap-2 self-end bg-gray-100 rounded-full px-3 py-1 text-sm shadow-inner">
              <button className="px-4 py-1 bg-white rounded-full shadow font-medium transition flex items-center gap-2">
                <Monitor /> <p>Desktop</p>
              </button>
              <button className="px-4 py-1 text-gray-500 hover:text-gray-700 transition flex items-center gap-2">
                <Smartphone /> <p>Mobile</p>
              </button>
            </div>
            {/* Upper Circle  */}
            <div className="flex justify-center w-full p-6">
              {" "}
              <div className="flex flex-col items-center justify-center  w-30">
                <CircularProgressbar
                  value={92}
                  text="92"
                  strokeWidth={12}
                  styles={buildStyles({
                    pathColor: "#0ABD8B",
                    textColor: "#111",
                    trailColor: "#e5e7eb",
                    strokeLinecap: "round",
                    textSize: 15,
                  })}
                />
              </div>
            </div>
            {/* legend  */}
            <div className="flex justify-center gap-3 mt-4 text-xs font-medium text-gray-600">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span> 0–49
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>{" "}
                50–89
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>{" "}
                90–100
              </div>
            </div>
            {/* Lower Circle  */}
            <h6 className="text-[14px] font-semibold text-center mt-6">
              Page Authority
            </h6>

            <div className="flex flex-col items-center justify-center p-6">
              <div className="w-30">
                <CircularProgressbar
                  value={60}
                  text="60%"
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: "#0ABD8B",
                    textColor: "#111",
                    trailColor: "#e5e7eb",
                    strokeLinecap: "round",
                    textSize: 15,
                  })}
                />
              </div>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="flex-col flex items-center w-full overflow-visible">
            <h6 className="text-[14px] font-semibold text-center mb-6">
              Domain Authority
            </h6>

            <div className="flex flex-col items-center justify-center px-6">
              <div className="w-30">
                <CircularProgressbar
                  value={60}
                  text="60%"
                  strokeWidth={11}
                  styles={buildStyles({
                    pathColor: "#0ABD8B",
                    textColor: "#111",
                    trailColor: "#e5e7eb",
                    strokeLinecap: "round",
                    textSize: 13,
                  })}
                />
              </div>
            </div>
            <div className="flex gap-1 justify-start items-center py-6">
              <h2 className="font-bold text-lg">60</h2>
              <div className="text-[#0ABD8B] bg-[#D8F3E4] px-1 py-1 rounded-full">
                very good and niche relevant
              </div>
            </div>

            {/* Radar chart */}
            <div className="w-full h-full z-1">
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="55%"
                  data={radarData}
                >
                  <PolarGrid
                    stroke="#e5e7eb"
                    gridType="circle"
                    radialLines={false}
                  />

                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 12, fill: "#374151" }}
                    stroke="none"
                  />

                  <Radar
                    dataKey="value"
                    stroke="#16a34a"
                    strokeWidth={2}
                    fill="#16a34a"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
