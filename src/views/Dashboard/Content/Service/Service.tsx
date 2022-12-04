import React, { useState } from 'react';
import moment from 'moment';

import { ReactComponent as ArrowLeft } from './svg/arrowLeft.svg';
import { Col, Row, Typography, Select, Input, DatePicker } from 'antd'; 

import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { formatDateCurrent } from '../../../../config/theme/time';

import { VscCalendar } from 'react-icons/vsc';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';

import Tabling from './Components/Tabling';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

type ThemeNames = keyof typeof themes;

const dateFormat = 'DD/MM/YYYY';

const SearchIcon = (
	<BiSearch
		style={{
			fontSize: 24,
			color: '#FF7506'
		}}
	/>
);

const CalendarIcon = (
	<VscCalendar
		style={{
			paddingLeft: 3,
			fontSize: 18,
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

const Service = () => {

	const [select1, setSelect1] = useState(false);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const dateCurrent = new Date();
	let resultCurrentDate = formatDateCurrent(dateCurrent);

	return (
		<div style={{ padding: '0px 0 0 0px', width: '100%' }}>
			<ThemeProvider value={themeName}>
				<Title level={4} style={{ color: theme.textColorOrange, fontWeight: 700, marginLeft: 32, marginBottom: 8, marginTop: 2 }}>
					Danh sách thiết bị
				</Title>
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} xl={12}>
						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<div>
								<Title
									level={4}
									style={{
										fontSize: 16,
										color: '#282739',
										fontWeight: 600
									}}
								>
									Trạng thái hoạt động
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
									style={{ width: 300 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown1}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Hoạt động">Hoạt động</Option>
									<Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
								</Select>
							</div>
							<div>
								<div>
									<Title
										level={4}
										style={{
											fontSize: 16,
											color: '#282739',
											fontWeight: 600
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
					<Col xs={20} sm={16} md={12} lg={8} xl={2}>
					</Col>
					<Col xs={2} sm={4} md={6} lg={8} xl={10}>
						<div
							style={{
								marginLeft: '180px'	
							}}
						
						>
							<Title
								level={4}
								style={{
									fontSize: 16,
									color: '#282739',
									fontWeight: 600
								}}
							>
								Từ khoá
							</Title>
							<Input
								placeholder='Nhập từ khóa'
								style={{ width: 400, height: 50, fontSize: 16 }}
								suffix={SearchIcon}
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
							width: '90%'
						}}
					>
						<Tabling />
						</div>
					<div
						style={{ marginTop: '30px', width: 70, height: 100, textAlign: 'center', backgroundColor: '#FFF2E7' }}
						// onClick={handleAddData}
					>
							<div style={{ cursor: 'pointer', lineHeight: 2 }}>
								<BsFillPlusSquareFill style={{ fontSize: 28, marginTop: '16px', color: '#FF9138' }} />
								<Title style={{ fontSize: 16, color: '#FF7506', fontWeight: 600 }}>
									Thêm thiết bị
								</Title>
							</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	)
}

export default Service;