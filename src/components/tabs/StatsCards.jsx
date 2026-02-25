const stats = [
  { number: 7, label: "Linhas estratégicas" },
  { number: 40, label: "Estratégias" },
  { number: 178, label: "Ações estratégicas" },
  { number: 651, label: "Projetos" },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">
      {stats.map((s, i) => (
        <div
          key={i}
          className="relative border border-blue-300 rounded-xl p-5 bg-gray-50 flex items-center"
        >
          {/* left vertical line */}
          <div className="absolute left-3 top-4 bottom-4 w-1 bg-blue-500 rounded-r"></div>

          <div className="pl-4">
            <div className="text-2xl font-semibold">{s.number}</div>
            <div className="text-gray-500 text-sm">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}