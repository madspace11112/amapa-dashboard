import React from "react";
import Draggable from "react-draggable"; // <- import the library
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
];

const OrganSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border relative">
      <h2 className="text-lg font-semibold mb-4">Projectos por Órgão</h2>

      <div className="relative h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 80, right: 20, top: 20, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={150} />
            <Tooltip />
            <Bar dataKey="value" fill="#5B6EF5" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>

        {/* Draggable Overlay Card */}
        <Draggable>
          <div className="absolute top-20 right-4 w-[200px] border border-blue-300 rounded-lg p-2 bg-white shadow-lg cursor-move">
            <div className="absolute left-3 top-4 bottom-4 w-1 bg-blue-500 rounded-r"></div>
            <div className="pl-4">
              <div className="text-3xl font-semibold text-gray-800">2</div>
              <div className="text-sm text-gray-500">Projetos sem Órgão</div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default OrganSection;