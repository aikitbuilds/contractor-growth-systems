
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Website',
    leads: 120,
    conversionRate: 35,
  },
  {
    name: 'Referrals',
    leads: 85,
    conversionRate: 45,
  },
  {
    name: 'Paid Ads',
    leads: 150,
    conversionRate: 25,
  },
  {
    name: 'Social',
    leads: 95,
    conversionRate: 20,
  },
  {
    name: 'Direct Mail',
    leads: 65,
    conversionRate: 15,
  },
];

const LeadSourcesChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 30,
        }}
        barGap={0}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }} 
          axisLine={{ stroke: '#E5E7EB' }} 
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          label={{ value: 'Leads Generated', angle: -90, position: 'insideLeft', dy: 50, fontSize: 12, fill: '#666' }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          label={{ value: 'Conversion Rate (%)', angle: 90, position: 'insideRight', dy: 50, fontSize: 12, fill: '#666' }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
        <Legend wrapperStyle={{ bottom: -10 }} />
        <Bar 
          yAxisId="left" 
          dataKey="leads" 
          fill="#0A2A4F" 
          name="Leads Generated"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          yAxisId="right" 
          dataKey="conversionRate" 
          fill="#00BCD4" 
          name="Conversion Rate (%)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LeadSourcesChart;
