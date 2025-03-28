
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  LabelList 
} from 'recharts';

const data = [
  {
    name: 'Lead',
    value: 35,
    count: 35,
    fill: '#E0F7FA',
  },
  {
    name: 'Qualified',
    value: 28,
    count: 28, 
    fill: '#B2EBF2',
  },
  {
    name: 'Proposal',
    value: 20,
    count: 20,
    fill: '#80DEEA',
  },
  {
    name: 'Negotiation',
    value: 16,
    count: 16,
    fill: '#4DD0E1',
  },
  {
    name: 'Closed Won',
    value: 12,
    count: 12,
    fill: '#00BCD4',
  },
];

const SalesPipeline = () => {
  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <text 
          x={x + width / 2} 
          y={y - radius - 5} 
          fill="#666" 
          textAnchor="middle" 
          dominantBaseline="middle"
          fontSize={12}
        >
          {value}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-md shadow-md">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm">{`Count: ${data.count}`}</p>
          <p className="text-sm">{`Conversion: ${Math.round((data.value / 35) * 100)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 40, right: 30, left: 20, bottom: 30 }}
        barSize={60}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name"
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          domain={[0, 'dataMax + 5']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" isAnimationActive={false}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
          <LabelList dataKey="count" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesPipeline;
