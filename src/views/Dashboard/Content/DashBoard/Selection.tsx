import React, { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

import { Select, Typography } from 'antd';

const { Text } = Typography;

const options = [
	{
		value: 'Ngày',
		label: <>Ngày</>
	},
	{
		value: 'Tuần',
		label: <>Tuần</>
	},
	{
		value: 'Tháng',
		label: <>Tháng</>
	}
]

const Selection: React.FC = () => {

	const [time, setTime] = useState();

	return (
		<div>
			<Select
				suffixIcon={<BsCaretDownFill />}
				value={time}
				defaultValue={'Ngày'}
				style={{ width: 120, margin: '6px 0 0 10px' }}
				bordered={true}
				options={options}
			/>
		</div>
	)
}

export default Selection
