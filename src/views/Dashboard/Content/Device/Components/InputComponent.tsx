import React, { ChangeEvent, useState, useEffect, useContext } from 'react';

import '../Device.css';

import { Col, Row, Typography, Select, Input, Button } from 'antd'; 
import { CgAsterisk } from 'react-icons/cg';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import { ThemeProvider, useTheme, themes } from '../../../../../config/theme/theme';
import { InputContext } from '../Device';

const { Option } = Select;
const { Title, Text } = Typography;


type ThemeNames = keyof typeof themes;


const InputFormOnes = () => {
	
	const { dataInputGlobal, handleInputChange } = useContext(InputContext);

	const FormInputRowOnes = [
		{
			title: 'Mã thiết bị:',
			placeholderInput: 'Nhập mã thiết bị',
			nameInput: 'DeviceCode',
			// valueName: dataInputGlobal.DeviceCode,
		},
		{
			title: 'Tên thiết bị:',
			placeholderInput: 'Nhập mã thiết bị',
			nameInput: 'DeviceName',
			valueName: dataInputGlobal.DeviceName,
		},
		{
			title: 'Địa chỉ IP:',
			placeholderInput: 'Nhập địa chỉ IP',
			nameInput: 'IpAddress',
			valueName: dataInputGlobal.IpAddress,
		},
	];

	return (
		<>
			{
				FormInputRowOnes.map((FormInputRowOne, index) => {
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
										{FormInputRowOne.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>	
							</Title>
								<Input
									value={FormInputRowOne.valueName}
									name={FormInputRowOne.nameInput}
									className='input-customize'
									placeholder={
										FormInputRowOne.placeholderInput
									}
									allowClear
									onChange={handleInputChange}
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


	const { dataInputGlobal, handleInputChange } = useContext(InputContext);

	const FormInputRowTwos = [
		{
			title: 'Tên đăng nhập:',
			placeholderInput: 'Nhập tài khoản',
			nameInput: 'UserName',
			valueName: dataInputGlobal.UserName,
		},
		{
			title: 'Mật khẩu:',
			placeholderInput: 'Nhập mật khẩu',
			nameInput: 'Password',
			valueName: dataInputGlobal.Password,
		}
	]

	return (
		<>
			{
				FormInputRowTwos.map((FormInputRowTwo, index) => {
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
									{FormInputRowTwo.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>
							</Title>
							<Input
								value={FormInputRowTwo.valueName}
								name={FormInputRowTwo.nameInput}
								className='input-customize'
								placeholder={
									FormInputRowTwo.placeholderInput
								}
								allowClear
								onChange={handleInputChange}
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

	const { selectDevice, handleChangeSelect } = useContext(InputContext);

	const handleChangeUpAndDown3 = () => {
		setSelect3(!select3);
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
					value={selectDevice}
					defaultValue={selectDevice}
					style={{
						width: 700,
						height: 50,
						fontSize: 16,
						marginBottom: 30
					}}
					onChange={handleChangeSelect}
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


const InputFormOnesUpdated = () => {
	
	const { dataInputGlobal, handleInputChange } = useContext(InputContext);

	const FormInputRowOnes = [
		{
			title: 'Mã thiết bị:',
			placeholderInput: 'Nhập mã thiết bị',
			nameInput: 'DeviceCode',
			valueName: dataInputGlobal.DeviceCode,
		},
		{
			title: 'Tên thiết bị:',
			placeholderInput: 'Nhập mã thiết bị',
			nameInput: 'DeviceName',
			valueName: dataInputGlobal.DeviceName,
		},
		{
			title: 'Địa chỉ IP:',
			placeholderInput: 'Nhập địa chỉ IP',
			nameInput: 'IpAddress',
			valueName: dataInputGlobal.IpAddress,
		},
	];

	return (
		<>
			{
				FormInputRowOnes.map((FormInputRowOne, index) => {
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
										{FormInputRowOne.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>	
							</Title>
								<Input
									value={FormInputRowOne.valueName}
									name={FormInputRowOne.nameInput}
									className='input-customize'
									placeholder={
										FormInputRowOne.valueName
									}
									allowClear
									onChange={handleInputChange}
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


const InputFormTwosUpdated = () => {


	const { dataInputGlobal, handleInputChange } = useContext(InputContext);

	useEffect(() => {
		// console.log(dataInputGlobal)
	}, [])

	const FormInputRowTwos = [
		{
			title: 'Tên đăng nhập:',
			placeholderInput: 'Nhập tài khoản',
			nameInput: 'UserName',
			valueName: dataInputGlobal.UserName,
		},
		{
			title: 'Mật khẩu:',
			placeholderInput: 'Nhập mật khẩu',
			nameInput: 'Password',
			valueName: dataInputGlobal.Password,
		}
	]

	return (
		<>
			{
				FormInputRowTwos.map((FormInputRowTwo, index) => {
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
									{FormInputRowTwo.title}
									<div>
										<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
									</div>
								</div>
							</Title>
							<Input
								value={FormInputRowTwo.valueName}
								name={FormInputRowTwo.nameInput}
								className='input-customize'
								placeholder={
									FormInputRowTwo.valueName

								}
								allowClear
								onChange={handleInputChange}
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

const SelectionUpdated = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);
	const [select3, setSelect3] = useState(false);

	const { selectDevice, handleChangeSelect } = useContext(InputContext);

	const handleChangeUpAndDown3 = () => {
		setSelect3(!select3);
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
					value={selectDevice}
					defaultValue={selectDevice}
					style={{
						width: 700,
						height: 50,
						fontSize: 16,
						marginBottom: 30
					}}
					onChange={handleChangeSelect}
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
				<InputFormTwosUpdated />
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
					<InputFormOnes

					/>
				</Col>
				<Col span={10}>
					<Selection />
				</Col>
				<Col span={1}></Col>
			</Row>
		
	)
}

const InputComponentUpdated = () => {
	// NOTE: When Code span is 1 only horizontal Row of Column

	return (
		
			<Row>
				<Col span={1}></Col>		
				<Col span={10}>
					{/* Form Input Row of 1 */}
					<InputFormOnesUpdated

					/>
				</Col>
				<Col span={10}>
					<SelectionUpdated
						
					/>
				</Col>
				<Col span={1}></Col>
			</Row>
		
	)
}

export { InputComponent, InputComponentUpdated } ;