import React from "react";

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

const ListProjectSection = () => {
    return (
        <div className="bg-[#F5F6F8] rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="max-h-[500px] overflow-y-auto">
                <table className="w-full text-sm text-left border-collapse">
                    {/* HEADER */}
                    <thead className="bg-[#E9ECEF] sticky top-0 z-10">
                        <tr className="text-gray-600 font-medium">
                            <th className="px-5 py-3">Projeto</th>
                            <th className="px-5 py-3">Origens</th>
                            <th className="px-5 py-3">Órgão</th>
                            <th className="px-5 py-3">Município</th>
                            <th className="px-5 py-3">Prazo</th>
                            <th className="px-5 py-3">Avanço</th>
                            <th className="px-5 py-3">Linha estratégica</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="text-gray-700">
                        {[...Array(25)].map((_, i) => (
                            <tr
                                key={i}
                                className={`${
                                    i % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#F5F6F8]"
                                } hover:bg-[#EEF1F4] transition-colors`} // Alternating rows
                            >
                                <td className="px-5 py-3 truncate max-w-xs">
                                    Ações de custeio para o Projeto Combate e Arte
                                </td>
                                <td className="px-5 py-3">Plano Gov</td>
                                <td className="px-5 py-3">Lorem Ipsum</td>
                                <td className="px-5 py-3">Macapá</td>
                                <td className="px-5 py-3">10/10/2025</td>
                                <td className="px-5 py-3">Lorem Ipsum</td>
                                <td className="px-5 py-3">Lorem Ipsum</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProjectSection;