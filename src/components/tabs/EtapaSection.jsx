import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Plano obras", value: 1600 },
  { name: "Plano de entregas", value: 1600 },
  { name: "Plano de parcerias", value: 1600 },
  { name: "GI", value: 1600 },
  { name: "PPA", value: 1600 },
  { name: "PPA 2", value: 1600 },
  { name: "PPA 3", value: 1600 },
  { name: "PPA 4", value: 1600 },
  { name: "PPA 5", value: 1600 },
  { name: "Povos indígenas", value: 1100 },
  { name: "Povos indígenas 2", value: 1100 },
  { name: "Povos indígenas 3", value: 1100 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
  { name: "Plano Gov", value: 600 },
];

const EtapaSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border relative">
      <h2 className="text-lg font-semibold mb-4">Projetos por etapa</h2>

      {/* Chart container */}
      <div className="relative h-[480px]"> {/* Increased height from 400 to 480 */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ bottom: 80 }}> {/* extra bottom margin */}
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={80} // keeps enough space for rotated labels
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#5B6EF5" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EtapaSection;