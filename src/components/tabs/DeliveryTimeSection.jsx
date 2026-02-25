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
    { id: 1, title: "Dotação inicial", value: 22 },
    { id: 2, title: "Total dotação atualizada", value: 51 },
    { id: 3, title: "Ajuste dotação", value: 110 },
];

const DeliveryTimeSection = () => {
    return (
        <div>
            {/* TOP SECTION */}
            <div className="flex justify-between items-start mb-6">

                {/* LEFT → Cards */}
                <div className="flex gap-4">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="w-[250px] h-[120px] border border-blue-300 rounded-lg p-4 bg-white shadow-sm flex items-center"
                        >
                            <div className="flex items-center">
                                <div className="w-1 h-16 bg-blue-500 rounded-r mr-3"></div>
                                <div>
                                    <div className="text-2xl font-semibold text-gray-800">
                                        {card.value}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {card.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* RIGHT → Dropdown Filters */}
                <div className="flex flex-col gap-4 w-[200px]">

                    {/* Origem */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Origem
                        </label>
                        <div className="relative">
                            <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Selecionar</option>
                                <option>Opção 1</option>
                                <option>Opção 2</option>
                            </select>

                            {/* Arrow */}
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Municípios */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Municípios
                        </label>
                        <div className="relative">
                            <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Selecionar</option>
                                <option>Município A</option>
                                <option>Município B</option>
                            </select>

                            {/* Arrow */}
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h2 className="text-lg font-semibold mb-6">
                    Projectos por Órgão
                </h2>



                {/* CHART */}
                {/* CHART */}
                <div className="h-[480px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ bottom: 80 }}> {/* extra bottom margin */}
                            <XAxis
                                dataKey="name"
                                angle={-90}
                                textAnchor="end"
                                interval={0}
                                height={80} // keeps enough space for rotated labels
                            />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#5B6EF5" radius={[4, 4, 0, 0]} barSize={20}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DeliveryTimeSection;