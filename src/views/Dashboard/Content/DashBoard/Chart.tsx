import React from 'react';
import { CartesianGrid, XAxis, YAxis, AreaChart, Tooltip, Area } from 'recharts';


const data = [
	{ name: '12', uv: 3700, pv: 6000, amt: 2400 },
	{ name: '14', uv: 4241, pv: 6000, amt: 2400 },
	{ name: '15', uv: 3300, pv: 6000, amt: 2400 },
	{ name: '17', uv: 3900, pv: 6000, amt: 2400 },
	{ name: '20', uv: 3000, pv: 6000, amt: 2400 },
	{ name: '24', uv: 4000, pv: 6000, amt: 2400 },
	{ name: '27', uv: 2600, pv: 6000, amt: 2400 },
	{ name: '28', uv: 4100, pv: 6000, amt: 2400 },
	{ name: '29', uv: 3800, pv: 6000, amt: 2400 },
	{ name: '30', uv: 4050, pv: 6000, amt: 2400 },
	{ name: '31', uv: 3950, pv: 6000, amt: 2400 },
];

const Chart: React.FC = () => {


	return (
		<>
			<AreaChart width={1000} height={540} data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#5185F7" stopOpacity={0.5}/>
						<stop offset="50%" stopColor="#5185F7" stopOpacity={0}/>
					</linearGradient>
					{/* Use Take Xaxis in chart */}
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#FFFFFF" stopOpacity={0}/>
						<stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Area type="monotone" dataKey="uv" stroke="#5185F7" fillOpacity={1} fill="url(#colorUv)" />
			</AreaChart>
		</>
	)
}

export default Chart
