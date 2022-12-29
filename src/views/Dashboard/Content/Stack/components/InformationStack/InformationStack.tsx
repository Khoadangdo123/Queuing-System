import React, { useState } from 'react';
import moment from 'moment';

import { Col, Row, Typography, Select, Input, DatePicker, Checkbox, Button, Space } from 'antd';

import { formatDateCurrent } from '../../../../../../config/theme/time';
import { ReactComponent as ArrowLeft } from '../../../Service/svg/arrowLeft.svg';
import { ThemeProvider, themes, useTheme } from '../../../../../../config/theme/theme';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { VscCalendar } from 'react-icons/vsc';
import Tabling from '../Tabling';

import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import type { SelectProps } from 'antd';

const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

const options: SelectProps['options'] = [
	{
		value: 'Tất cả',
		label: 'Tất cả',
	},
	{
		value: 'Khám sản - Phụ khoa',
		label: 'Khám sản - Phụ khoa',
	},
	{
		value: 'Khám răng hàm mặt',
		label: 'Khám răng hàm mặt',
	},
	{
		value: 'Khám tai mũi họng',
		label: 'Khám tai mũi họng',
	},
	{
		value: 'Khám tổng quát',
		label: 'Khám tổng quát',
	},
	{
		value: 'Khám tai mũi họng',
		label: 'Khám tai mũi họng'
	}
];

type ThemeNames = keyof typeof themes;

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

const suffixIcon = (
	<BiSearch
		style={{
			fontSize: 24,
			color: '#FF7506'
		}}
	/>
);

const SelectionStack = ({ handleAddData } : AddFunctionDevice) => {

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
				<Title level={4} style={{ color: theme.textColorOrange, fontWeight: 700, marginLeft: 38, marginBottom: 8, marginTop: 2 }}>
					Danh sách thiết bị
				</Title>
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} xl={10}>
						<div style={{ display: 'flex', padding: '0 20px 0 20px', justifyContent: 'space-around' }}>
							<div>
								<Title
									level={4}
									style={{
										fontSize: 16,
										color: '#282739',
										fontWeight: 600
									}}
								>
									Tên dịch vụ
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
									style={{ width: 200 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown1}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Đang chờ">Đang chờ</Option>
									<Option value="Đã sử dụng">Đã sử dụng</Option>
									<Option value="Bỏ qua">Bỏ qua</Option>
								</Select>
							</div>
							<div>
								<Title
									level={4}
									style={{
										fontSize: 16,
										color: '#282739',
										fontWeight: 600
									}}
								>
									Tình trạng
								</Title>
								<Select
									showArrow={true}
									suffixIcon={
										select2 ? (
											<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
										) : (
											<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
										)
									}
									defaultValue="Tất cả"
									style={{ width: 200 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown2}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Kiosk">Kiosk</Option>
									<Option value="Hệ thống">Hệ thống</Option>
								</Select>
							</div>
							<div>
								<Title
									level={4}
									style={{
										fontSize: 16,
										color: '#282739',
										fontWeight: 600
									}}
								>
									Nguồn cấp
								</Title>
								<Select
									showArrow={true}
									suffixIcon={
										select2 ? (
											<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
										) : (
											<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
										)
									}
									options={options}
									defaultValue="Tất cả"
									style={{ width: 200 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown2}
								/>
							</div>
						</div>
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} xl={6}>
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
								Trạng thái hoạt động
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
					</Col>
					<Col xs={2} sm={4} md={6} lg={8} xl={8}>
						<div
							style={{
								marginLeft: 30	
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
								className='input-customize'
								placeholder='Nhập từ khóa'
								style={{ width: 404, height: 50, fontSize: 16 }}
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
							width: '90%'
						}}
					>
						<Tabling />
						</div>
					<div
						style={{ marginTop: '30px', width: 70, height: 100, textAlign: 'center', backgroundColor: '#FFF2E7' }}
						onClick={handleAddData}
					>
							<div style={{ cursor: 'pointer', lineHeight: 2 }}>
								<BsFillPlusSquareFill style={{ fontSize: 28, marginTop: '16px', color: '#FF9138' }} />
								<Title style={{ fontSize: 16, color: '#FF7506', fontWeight: 600 }}>
									Cấp
									<br />
									số mới
								</Title>
							</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	)
}

export default SelectionStack;