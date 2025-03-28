
import { Progress } from "@/components/ui/progress";

const TeamPerformance = () => {
  const teamActivity = {
    callsMade: 187,
    meetingsBooked: 42,
    proposalsSent: 35
  };

  const topPerformers = [
    {
      name: "Sarah Johnson",
      revenue: 56500,
      progress: 85
    },
    {
      name: "Michael Chen",
      revenue: 48750,
      progress: 73
    },
    {
      name: "David Martinez",
      revenue: 43200,
      progress: 65
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-2">
          <p className="text-2xl font-bold text-primary">{teamActivity.callsMade}</p>
          <p className="text-xs text-gray-500">Calls Made</p>
        </div>
        <div className="text-center p-2">
          <p className="text-2xl font-bold text-primary">{teamActivity.meetingsBooked}</p>
          <p className="text-xs text-gray-500">Meetings</p>
        </div>
        <div className="text-center p-2">
          <p className="text-2xl font-bold text-primary">{teamActivity.proposalsSent}</p>
          <p className="text-xs text-gray-500">Proposals</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Top Performers - This Month</h4>
        <div className="space-y-3">
          {topPerformers.map((performer, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm">{performer.name}</span>
                <span className="text-sm font-medium">${performer.revenue.toLocaleString()}</span>
              </div>
              <Progress value={performer.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;
