import { useState } from "react";
import StrageticNotionTab from "./tabs/StrageticNotionTab";
import OrigemSection from "./tabs/OrigemSection";
import MunicipiosSection from "./tabs/MunicipiosSection";
import EtapaSection from "./tabs/EtapaSection";
import ListProjectSection from "./tabs/ListProjectSection";
import OrganSection from "./tabs/OrganSection";
import DeliveryTimeSection from "./tabs/DeliveryTimeSection";
export default function Header() {
    const tabs = [
        "Linhas estratégicas",
        "Origem",
        "Municípios",
        "Prazo entrega",
        "Órgão",
        "Etapa",
        "Lista de projetos",
    ];

    const [active, setActive] = useState(0);

    const renderContent = () => {
        const activeTab = tabs[active];
        switch (activeTab) {
            case "Linhas estratégicas":
                return (
                    <div className="border rounded-lg bg-white p-6 shadow-sm">
                        <StrageticNotionTab />
                    </div>
                );
            case "Origem":
                return (
                    
                        <OrigemSection />
                    
                );
            case "Municípios":
                return (
                    <div className="border rounded-lg bg-white p-6 shadow-sm">
                        <MunicipiosSection />
                    </div>
                );
            case "Etapa":
                return (
                    <div className="border rounded-lg bg-white p-6 shadow-sm">
                        <EtapaSection />
                    </div>
                );
            case "Órgão":
                return (
                    <div className="border rounded-lg bg-white p-6 shadow-sm">
                        <OrganSection />
                    </div>
                );
            case "Lista de projetos":
                return <ListProjectSection />;
            case "Prazo entrega":
                return <DeliveryTimeSection />;
            default:
                return (
                    <div className="border rounded-lg bg-white p-6 shadow-sm">
                        <div className="p-6">Coming soon...</div>
                    </div>
                );
        }
    };

    return (
        <div className="mb-8 space-y-6">
            {/* === Top Group: Header + Tabs === */}
            <div className="border rounded-lg bg-white p-6 shadow-sm sticky top-0 z-50">
                {/* Top Row: Left Title + Right Controls */}
                <div className="flex justify-between items-start mb-6">
                    {/* Left Title */}
                    <div>
                        <h1 className="text-2xl font-semibold">
                            Amapá, a fronteira do futuro
                        </h1>
                        <p className="text-gray-500">Plano Amapá 2043</p>
                    </div>

                    {/* Right Controls */}
                    <div className="flex gap-4 items-start">
                        {/* Filter Summary Box */}
                        <div className="border rounded-lg bg-gray-50 px-4 py-3 min-w-[320px]">
                            <p className="text-sm text-gray-500 mb-1">
                                Despesas - Filtros aplicados
                            </p>
                            <p className="text-sm text-[#4F6BED] font-medium">
                                2 filtros aplicados: Ano: 2025 Emenda: Sem emenda
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                            <button className="px-5 py-2 rounded-lg border border-[#4F6BED] text-[#4F6BED] font-medium hover:bg-[#EEF2FF] transition">
                                Filtros
                            </button>
                            <button className="px-5 py-2 rounded-lg border border-[#C7D2FE] text-[#4F6BED] font-medium hover:bg-[#F5F7FF] transition">
                                Limpar filtros
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs (full-width) */}
                <div className="flex pt-4 w-full">
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className="flex-1 text-center text-lg pb-3 relative"
                        >
                            <span className={`font-medium ${active === i ? "text-[#4F6BED] font-semibold" : "text-gray-500"}`}>
                                {t}
                            </span>

                            {/* Half-width bottom border */}
                            {active === i && (
                                <span className="absolute bottom-0 left-1/4 w-1/2 border-b-2 border-[#4F6BED]" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* === Content Group === */}
            {renderContent()}
        </div>
    );
}