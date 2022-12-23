import React, { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

import { Select, Typography } from 'antd';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const { Text } = Typography;

const options = [
	{
		value: 'day',
		label: <>Ngày</>
	},
	{
		value: 'week',
		label: <>Tuần</>
	},
	{
		value: 'month',
		label: <>Tháng</>
	}
]

type funcSelect = {
	valueChange : any;
}

const Selection = ({ valueChange } : funcSelect ) => {

	const [time, setTime] = useState();
	const [select1, setSelect1] = useState(false);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	return (
		<div>
			<Select
				suffixIcon={
					select1 ? (
						<MdArrowDropUp style={{ fontSize: 34, fontWeight: 1000,color: '#FF9138' }} />
					) : (
						<MdArrowDropDown style={{ fontSize: 34, fontWeight: 1000,color: '#FF9138' }} />
					)
				}
				value={time}
				defaultValue={'Ngày'}
				style={{ width: 110, margin: '6px 0 0 10px' }}
				bordered={true}
				options={options}
				onChange={valueChange}
				onClick={handleChangeUpAndDown1}
				
			/>
		</div>
	)
}

export { Selection, options }
