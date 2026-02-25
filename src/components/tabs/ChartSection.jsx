
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
const data=[
{name:"Educação, Inovação e Tecnologia",value:140},
{name:"Desenvolvimento Econômico",value:240},
{name:"Saúde e Bem-estar",value:180},
{name:"Infraestrutura e Mobilidade",value:320},
{name:"Governança e Participação Pública",value:320},
{name:"Inclusão Social",value:320},
{name:"Segurança Pública",value:320},
];
const colors=["#ec4899","#6366f1","#f472b6","#f87171","#a78bfa","#d946ef","#fb923c"];
export default function ChartSection(){
 return(
 <div>
  <h2 className="font-semibold mb-6">Projetos por linha estratégica</h2>
  <div className="w-full h-[400px]">
   <ResponsiveContainer>
    <BarChart data={data} layout="vertical" margin={{left:50,right:20}}>
     <XAxis type="number"/>
     <YAxis dataKey="name" type="category" width={220}/>
     <Tooltip/>
     <Bar dataKey="value" radius={[6,6,6,6]}>
      {data.map((_,i)=>(<Cell key={i} fill={colors[i%colors.length]} />))}
     </Bar>
    </BarChart>
   </ResponsiveContainer>
  </div>
 </div>
 )
}
