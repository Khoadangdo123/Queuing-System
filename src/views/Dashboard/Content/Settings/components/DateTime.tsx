import React from 'react'

import { DatePicker, Typography } from 'antd'
import { VscCalendar } from 'react-icons/vsc';
import { ReactComponent as ArrowLeft } from '../../../../Dashboard/Content/Service/svg/arrowLeft.svg';


import moment from 'moment';
const dateFormat = 'DD/MM/YYYY';

const { Text, Title } = Typography;


const ArrowLeftIcon = () => {
	return (
		<ArrowLeft
			style={{
				fontSize: 18,
				color: 'rgb(40, 39, 57)'
			}}
			/>
	)
}

const CalendarIcon = (
	<VscCalendar
		style={{
			paddingLeft: 3,
			fontSize: 18,
			color: '#FF7506'
		}}
	/>
);


const DateTime = () => {
	return (
		<div>
			<div>
				<Title
					level={4}
					style={{
						fontSize: 16,
						color: '#282739',
						fontWeight: 600,
						marginLeft: 10
					}}
				>
					Chọn thời gian
				</Title>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', width: 430 }}>
				<div>
					<DatePicker
						defaultValue={moment('21/02/1023', dateFormat)}
						suffixIcon={
							CalendarIcon
						}
						format={dateFormat}
						style={{
							marginLeft: 10,
							width: 200,
						}}
					/>
				</div>
				<div style={{ marginTop: 13 }}>
					<ArrowLeftIcon />
				</div>
				<div>
					<DatePicker
						// defaultValue={moment(resultNextDate, dateFormat)}
						suffixIcon={
							CalendarIcon
						}
						placeholder={"Chọn thời gian"}
						format={dateFormat}
						style={{
							width: 200,
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default DateTime
