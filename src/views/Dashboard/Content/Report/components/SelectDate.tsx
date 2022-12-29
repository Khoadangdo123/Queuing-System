
import React, { useState } from 'react';
import moment from 'moment';

import { Typography, Select, Input, DatePicker, Checkbox, Button, Space } from 'antd';

import { ReactComponent as ArrowLeft } from '../../Service/svg/arrowLeft.svg';
import { formatDateCurrent } from '../../../../../config/theme/time';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { VscCalendar } from 'react-icons/vsc';

import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import type { SelectProps } from 'antd';

const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

const dateFormat = 'DD/MM/YYYY';


type AddFunctionDevice = {
	handleAddData?: () => void;
}

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

const SelectDate = () => {

	// const dateCurrent = new Date();
	// let resultCurrentDate = formatDateCurrent(dateCurrent);

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
						defaultValue={moment('27/12/2022', dateFormat)}
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

export default SelectDate
