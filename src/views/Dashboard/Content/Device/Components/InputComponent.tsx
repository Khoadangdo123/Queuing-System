import React, { useState } from 'react';

import '../Device.css';

import { Col, Row, Typography, Select, Input, Button } from 'antd'; 
import { CgAsterisk } from 'react-icons/cg';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import { ThemeProvider, useTheme, themes } from '../../../../../config/theme/theme';

const { Option } = Select;
const { Title, Text } = Typography;

const FormInputRowOnes = [
	{
		title: 'Mã thiết bị:',
		placeholderInput: 'Nhập mã thiết bị',
	},
	{
		title: 'Tên thiết bị:',
		placeholderInput: 'Nhập mã thiết bị',
	},
	{
		title: 'Địa chỉ IP:',
		placeholderInput: 'Nhập địa chỉ IP',
	},
];

const FormInputRowTwos = [
	{
		title: 'Tên đăng nhập:',
		placeholderInput: 'Nhập tài khoản',
	},
	{
		title: 'Mật khẩu:',
		placeholderInput: 'Nhập mật khẩu'
	}
]

type ThemeNames = keyof typeof themes;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	console.log(e);
};

const InputFormOnes = () => {
	return (
		<>
			{
				FormInputRowOnes.map((FormInputRowTwo, index) => {
					return (
						<div
							key={index}
							style={{
								marginLeft: 38
							}}
						>
							<Title
								level={4}
								style={{
									fontSize: 16,
									fontWeight: 600
								}}
							>
								<div style={{ display: 'flex' }}>
										{FormInputRowTwo.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>	
							</Title>
								<Input
									className='input-customize'
									placeholder={
										FormInputRowTwo.placeholderInput
									}
									allowClear
									onChange={onChange}
									style={{
										width: 700,
										height: 50,
										fontSize: 16,
										marginBottom: 30
									}}
								/>
						</div>
					)
				})
			}	
		</>
	)
};

const InputFormTwos = () => {
	return (
		<>
			{
				FormInputRowTwos.map((FormInputRowOne, index) => {
					return (
						<div
							key={index}
						>
							<Title
								level={4}
								style={{
									fontSize: 16,
									fontWeight: 600
								}}
							>
								<div style={{ display: 'flex' }}>
									{FormInputRowOne.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>
							</Title>
							<Input
								className='input-customize'
								placeholder={
									FormInputRowOne.placeholderInput
								}
								allowClear
								onChange={onChange}
								style={{
									width: 700,
									height: 50,
									fontSize: 16,
									marginBottom: 30
								}}
							/>
						</div>
					)
				})
			}
		</>
	)
};

const Selection = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const [select3, setSelect3] = useState(false);

	const handleChangeUpAndDown3 = () => {
		setSelect3(!select3);
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<ThemeProvider value={themeName}>
			<div 
				style={{
					marginLeft: 160
				}}
			>
				<Title
					level={4}
					style={{
						fontSize: 16,
						fontWeight: 600
					}}
				>
					<div style={{ display: 'flex' }}>
							{'Loại thiết bị:'}
						<div>
							<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
						</div>
					</div>	
				</Title>
				<Select
					showArrow={true}
					suffixIcon={
						select3 ? (
							<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
						) : (
							<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
						)
					}
					defaultValue="Kiosk"
					style={{
						width: 700,
						height: 50,
						fontSize: 16,
						marginBottom: 30
					}}
					onChange={handleChange}
					onClick={handleChangeUpAndDown3}
				>
					<Option 
						value="Kiosk"
					>
						Kiosk
					</Option>
					<Option
						value="Display counter"
					>
						Display counter
					</Option>
				</Select>
				{/* Select Code Row of 2 */}
				<InputFormTwos />
			</div>
		</ThemeProvider>
	)
}

const InputComponent = () => {
	// NOTE: When Code span is 1 only horizontal Row of Column

	return (
		
			<Row>
				<Col span={1}></Col>		
				<Col span={10}>
					{/* Form Input Row of 1 */}
					<InputFormOnes />
				</Col>
				<Col span={10}>
					<Selection />
				</Col>
				<Col span={1}></Col>
			</Row>
		
	)
}

export default InputComponent;