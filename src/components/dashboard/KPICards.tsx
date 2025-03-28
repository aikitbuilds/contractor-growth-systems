
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const KPICards = () => {
  const kpis = [
    {
      title: "Closing Rate",
      value: "35%",
      trend: "+10%",
      isPositive: true,
      description: "Since Q1"
    },
    {
      title: "Average Deal Size",
      value: "$8,500",
      trend: "+15%",
      isPositive: true,
      description: "Since Q1"
    },
    {
      title: "Sales Cycle Length",
      value: "28 Days",
      trend: "-5 Days",
      isPositive: true, // Negative days is positive performance
      description: "Since Q1"
    }
  ];

  return (
    <div className="space-y-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="p-4 border rounded-lg bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
              <p className="text-2xl font-bold mt-1">{kpi.value}</p>
            </div>
            <div className={`flex items-center ${kpi.isPositive ? 'text-accent' : 'text-red-500'}`}>
              {kpi.isPositive ? 
                <ArrowUpIcon className="h-4 w-4 mr-1" /> : 
                <ArrowDownIcon className="h-4 w-4 mr-1" />
              }
              <span className="text-sm font-medium">{kpi.trend}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">{kpi.description}</p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
