import React, { useState } from 'react';

import { ThemeProvider, themes, useTheme } from '../../../../../../config/theme/theme';
import { Col, Row, Typography, Select, Input, Button } from 'antd'; 

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Tabling from '../Tabling';

const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

type ThemeNames = keyof typeof themes;

type AddFunctionDevice = {
	handleAddData: () => void;
}

const suffixIcon = (
	<BiSearch
		style={{
			fontSize: 24,
			color: '#FF7506'
		}}
	/>
);

const InformationDevice = ({ handleAddData } : AddFunctionDevice) => {

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
	
	return (
		<div style={{ padding: '0px 0 0 0px', width: '100%' }}>
			<ThemeProvider value={themeName}>
				<Title level={4} style={{ color: theme.textColorOrange, fontWeight: 700, marginLeft: 38, marginBottom: 8, marginTop: 2 }}>
					Danh sách thiết bị
				</Title>
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} xl={10}>
						<div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px 0 20px' }}>
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
										select2 ? (
											<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
										) : (
											<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
										)
									}
									defaultValue="Tất cả"
									style={{ width: 300 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown2}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Kết nối">Kết nối</Option>
									<Option value="Mất kết nối">Mất kết nối</Option>
								</Select>
							</div>
						</div>
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} xl={4}>
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
									Thêm thiết bị
								</Title>
							</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	)
}

export default InformationDevice;