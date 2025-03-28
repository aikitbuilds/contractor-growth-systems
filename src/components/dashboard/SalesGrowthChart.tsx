
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';

// Sample data showing growth after BDC implementation
const data = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 45000 },
  { month: 'Mar', revenue: 48000, implementation: 'BDC Implementation' },
  { month: 'Apr', revenue: 52000 },
  { month: 'May', revenue: 60000 },
  { month: 'Jun', revenue: 72000 },
  { month: 'Jul', revenue: 78000 },
  { month: 'Aug', revenue: 85000 },
];

const SalesGrowthChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
        />
        <YAxis 
          tickFormatter={(value) => `$${value/1000}k`}
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
        />
        <Tooltip 
          formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
        <ReferenceLine
          x="Mar"
          stroke="#00BCD4"
          strokeWidth={2}
          strokeDasharray="3 3"
          label={{ value: "BDC Implementation", position: 'top', fill: '#00BCD4', fontSize: 12 }}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#0A2A4F" 
          strokeWidth={3}
          dot={{ stroke: '#0A2A4F', strokeWidth: 2, r: 4, fill: 'white' }}
          activeDot={{ r: 6, stroke: '#00BCD4', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGrowthChart;
