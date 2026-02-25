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
];

const cardData = [
  { id: 1, title: "Projetos", value: 651 },
  { id: 2, title: "Programas GI", value: 34 },
  { id: 3, title: "Projetos sem origem", value: "--" },
];

const OrganSection = () => {
  return (
    <div className="flex items-start  space-x-6 relative">
      {/* Chart Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border flex-1">
        <h2 className="text-lg font-semibold mb-4">Projectos por origem</h2>

        <div className="h-[480px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ left: 80, right: 20, top: 20, bottom: 20 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#5B6EF5" radius={[4, 4, 0, 0]} barSize={70} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cards Section - completely outside chart container */}
      <div className="flex flex-col space-y-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-[200px] border border-blue-300 rounded-lg p-4 bg-white shadow-lg"
          >
            <div className="flex items-center">
              <div className="w-1 h-12 bg-blue-500 rounded-r mr-3"></div>
              <div>
                <div className="text-3xl font-semibold text-gray-800">{card.value}</div>
                <div className="text-sm text-gray-500">{card.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganSection;