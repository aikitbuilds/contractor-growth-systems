
import { CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      type: 'success',
      title: 'Script Implementation',
      description: 'Team has improved value proposition delivery by 35% this week. Keep momentum going!',
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      type: 'warning',
      title: 'Objection Handling',
      description: 'Analysis identified pricing objections as a common challenge in recent lost deals.',
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />
    },
    {
      type: 'recommendation',
      title: 'Recommended Training',
      description: 'Module: "Mastering the One-Call Close" for team members Alex and Sarah',
      icon: <BookOpen className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <div className="space-y-3">
      {insights.map((insight, index) => (
        <div 
          key={index} 
          className="flex items-start p-3 border rounded-md bg-white"
        >
          <div className="mr-3 mt-0.5">
            {insight.icon}
          </div>
          <div>
            <h4 className="text-sm font-medium">{insight.title}</h4>
            <p className="text-xs text-gray-600">{insight.description}</p>
          </div>
        </div>
      ))}
      
      <div className="mt-4 text-center">
        <button className="text-xs text-primary hover:underline">
          View Full AI Analysis Report
        </button>
      </div>
    </div>
  );
};

export default AIInsights;
