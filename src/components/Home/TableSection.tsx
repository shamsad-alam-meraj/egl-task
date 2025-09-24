import React from "react";

interface TableSectionProps {
  title: string;
  rows: string[][];
}

export default function TableSection({ title, rows }: TableSectionProps) {
  return (
    <>
      {/* Section header */}
      <tr className="border-b border-[#CECCDE]">
        <td className="p-2 font-bold text-left border-r text-2xl border-[#CECCDE] font-manrope">
          {title}
        </td>
        <td className="border-x border-[#CECCDE]"></td>
        <td className="border-x border-[#CECCDE]"></td>
        <td className="border-x border-[#CECCDE]"></td>
        <td className="border-l border-[#CECCDE]"></td>
      </tr>

      {/* Section rows */}
      {rows.map((row, rowIdx) => (
        <tr key={`${title}-${rowIdx}`} className="hover:bg-green-50 font-inter">
          {row.map((cell, i) => (
            <td
              key={i}
              className={`border-[#CECCDE] border-b p-2  text-[16px] ${
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
              } `}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
