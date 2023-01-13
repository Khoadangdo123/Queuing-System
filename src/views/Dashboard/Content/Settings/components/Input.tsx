import React, { useState } from 'react'
import './input.css';
import { Input, Select, Typography } from 'antd';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { ThemeProvider, themes, useTheme } from '../../../../../config/theme/theme';

type ThemeNames = keyof typeof themes;

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const SearchIcon = (
	<BiSearch
		style={{
			fontSize: 24,
			color: '#FF7506'
		}}
	/>
);

const SelectText = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const [select1, setSelect1] = useState(false);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	return (
		<div style={{ marginLeft: 26 }}>
			<ThemeProvider value={themeName}>
				<Title
					level={4}
					style={{
						fontSize: 16,
						color: '#282739',
						fontWeight: 600
					}}
				>
					Tên vai trò
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
					// onChange={handleChange}
					// onClick={handleChangeUpAndDown1}
				>
					<Option value="Tất cả">Tất cả</Option>
					<Option value="Hoạt động">Hoạt động</Option>
					<Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
				</Select>
			</ThemeProvider>
		</div>
	)
}

const SelectTextRowOne = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const [select1, setSelect1] = useState(false);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	return (
		<div>
			<ThemeProvider value={themeName}>
				<Select
					showArrow={true}
					suffixIcon={
						select1 ? (
							<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
						) : (
							<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
						)
					}
					defaultValue="Kế toán"
					style={{ width: '100%', fontSize: 16 }}
					// onChange={handleChange}
					size='large'
					onClick={handleChangeUpAndDown1}
				>
					<Option 
						style={{ fontSize: 16 }}
						value="Tất cả">Kế toán</Option>
					<Option 
						style={{ fontSize: 16 }}
						value="Hoạt động">Quản lý</Option>
					<Option 
						style={{ fontSize: 16 }}
						value="Ngưng hoạt động">Admin</Option>
				</Select>
			</ThemeProvider>
		</div>
	)
}

const SelectTextRowTwo = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const [select1, setSelect1] = useState(false);

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	return (
		<div>
			<ThemeProvider value={themeName}>
				<Select
					showArrow={true}
					suffixIcon={
						select1 ? (
							<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
						) : (
							<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
						)
					}
					defaultValue="Ngưng hoạt động"
					style={{ width: '100%', height: 50 }}
					// onChange={handleChange}
					size='large'
					onClick={handleChangeUpAndDown1}
				>
					<Option 
						style={{ fontSize: 16 }}
						value="Tất cả">Tất cả</Option>
					<Option 
						style={{ fontSize: 16 }}
						value="Hoạt động">Ngưng hoạt động</Option>
					<Option 
						style={{ fontSize: 16 }}
						value="Ngưng hoạt động">Hoạt động</Option>
				</Select>
			</ThemeProvider>
		</div>
	)
}

const InputTextArea = () => {
	return (
		<TextArea
			className='description_text' 
			rows={8}
			placeholder={'Nhập mô tả'}
		/>
	);
}

const InputTextSystem = () => {

	

	return (
		<Input
			style={{ height: 50 }}
			className='input_text'
			placeholder='Nhập tên vai trò' 
		/>
	)
}

type typeInput = {
	type: string;
	placehoderType: string
}

const InputText = (propsInput : typeInput) => {

	const handleChangePassword = (visible) => {
		return (
			(
				visible ? 
					<AiOutlineEye style={{ fontSize: 18, color: '#FF7506', cursor: 'pointer' }} /> 
					: <AiOutlineEyeInvisible style={{ fontSize: 18, cursor: 'pointer' }} />
			)
		)
	}

	if (propsInput.type == 'text') {
		return (
			<Input
				style={{ height: 50 }}
				className='input_text'
				placeholder={`${propsInput.placehoderType}`}
			/>
		)
	} else if (propsInput.type == 'password') {

		return (
			<Input.Password
				style={{ height: 50 }}
				className='input_text'
				placeholder={`${propsInput.placehoderType}`}
				iconRender={handleChangePassword}
			/>
		)
	} else {
		return (
			<Input
				style={{ height: 50 }}
				className='input_text'
				placeholder="Failed"
			/>
		)
	}

}

const InputSearch = () => {
	return (
		<div>
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
					style={{ width: 300, height: 50, fontSize: 16 }}
					suffix={SearchIcon}
				/>
			</div>
		</div>
	)
}

const InputSearchNotes = () => {
	return (
		<div>
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
					style={{ width: 270, height: 50, fontSize: 16 }}
					suffix={SearchIcon}
				/>
			</div>
		</div>
	)
}

export { InputSearch, InputSearchNotes, InputText, InputTextArea, InputTextSystem, SelectText, SelectTextRowOne, SelectTextRowTwo }
