import React, { useState } from 'react';
import moment from 'moment';

import { ReactComponent as ArrowLeft } from '../../svg/arrowLeft.svg';
import { ThemeProvider, themes, useTheme } from '../../../../../../config/theme/theme';
import { Col, Row, Typography, Select, Input, DatePicker, Checkbox, Button, Space } from 'antd';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { VscCalendar } from 'react-icons/vsc';

import Tabling from '../Tabling';
import { formatDateCurrent } from '../../../../../../config/theme/time';

const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

type ThemeNames = keyof typeof themes;

type AddFunctionDevice = {
	handleAddData?: () => void;
}

const dateFormat = 'DD/MM/YYYY';

const CalendarIcon = (
	<VscCalendar
		style={{
			paddingLeft: 3,
			fontSize: 18,
			color: '#FF7506'
		}}
	/>
);

const suffixIcon = (
	<BiSearch
		style={{
			fontSize: 24,
			color: '#FF7506'
		}}
	/>
);

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


const Information = ({ handleAddData } : AddFunctionDevice) => {

	const [select1, setSelect1] = useState(false);
	const [select2, setSelect2] = useState(false);
	const [select3, setSelect3] = useState(false);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	const handleChangeUpAndDown2 = () => {
		setSelect2(!select2);
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const dateCurrent = new Date();
	let resultCurrentDate = formatDateCurrent(dateCurrent);
	
	return (
		<div style={{ padding: '0px 0 0 0px', width: '100%' }}>
			<ThemeProvider value={themeName}>
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} xl={17}>
						<div style={{ display: 'flex' }}>
							<div>
								<Title
									level={4}
									style={{
										fontSize: 16,
										color: '#282739',
										fontWeight: 600
									}}
								>
									Trạng thái
								</Title>
								<Select
									showArrow={true}
									suffixIcon={
										select1 ? (
											<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
										) : (
											<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
										)
									}
									defaultValue="Tất cả"
									style={{ width: 160, marginLeft: 0 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown1}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Đã hoàn thành">Đã hoàn thành</Option>
									<Option value="Đã thực hiện">Đã thực hiện</Option>
									<Option value="Vắng">Vắng</Option>
								</Select>
							</div>
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
											defaultValue={moment(resultCurrentDate, dateFormat)}
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
						</div>
					</Col>
					<Col xs={2} sm={4} md={6} lg={8} xl={7}>
						<div>
							<Title
								level={4}
								style={{
									fontSize: 16,
									color: '#282739',
									fontWeight: 600,
									marginLeft: 40
								}}
							>
								Từ khoá
							</Title>
							<Input
								className='input-customize'
								placeholder='Nhập từ khóa'
								style={{ width: 206, height: 50, fontSize: 16, marginLeft: 30 }}
								suffix={suffixIcon}
							/>
						</div>
					</Col>
				</Row>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-evenly'
					}}
				>
					<div
						style={{
							marginTop: '13px',
							width: '100%'
						}}
					>
						<Tabling />
					</div>
				</div>
			</ThemeProvider>
		</div>
	)
}

export default Information;