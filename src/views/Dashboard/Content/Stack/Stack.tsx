
import SelectionStack from './components/InformationStack/InformationStack';
import { ButtonFuncPrintNumber } from './components/ButtonFuncStack';

import React, { useState } from 'react';
import { Select, Typography } from 'antd';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { Option } from 'antd/lib/mentions';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';

const { Title } = Typography;

type ThemeNames = keyof typeof themes;

const Stack = () => {

	const [add, setAdd] = useState(true);
	const [select1, setSelect1] = useState(false);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const handleChangeUpAndDown1 = () => {
			setSelect1(!select1);
		}
	const handleChange = (value: string) => {
			console.log(`selected ${value}`);
		};

	const supplyNumber = () => {
		setAdd(!add);
	}

	return (
		<>
		{
			add ? (
				<ThemeProvider value={themeName}>
					<Title level={4} style={{ marginLeft: 36, marginTop: 10, marginBottom: 30, color: theme.textColorOrange, fontWeight: 700 }}>
						Quản lý cấp số
					</Title>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div style={{ width: 1650, height: '85vh',backgroundColor: 'white', padding: 50, borderRadius: 20, textAlign: 'center' }}>
							<div>
								<Title level={2} style={{ color: theme.textColorOrange, fontWeight: 700, fontSize: 32 }}>
									CẤP SỐ MỚI
								</Title>
								<Title level={4} style={{ marginBottom: 30, fontWeight: 700, lineHeight: 2, color: theme.textColorGray }}>
									Dịch vụ khách hàng lựa chọn
								</Title>
								<div>
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
										style={{ width: 500, textAlign: 'left' }}
										onChange={handleChange}
										onClick={handleChangeUpAndDown1}
									>
										<Option value="Tất cả">Khám tim mạch</Option>
										<Option value="Đang chờ">Khám sản - Phụ khoa</Option>
										<Option value="Đã sử dụng">Khám răng hàm mặt</Option>
										<Option value="Bỏ qua">Khám tai mũi họng</Option>
									</Select>
								</div>
								<div style={{ marginTop: 100, width: "100%", display: 'flex', justifyContent: 'center' }}>
									<div style={{ width: 350, display: 'flex', justifyContent: 'space-between' }}>
										<ButtonFuncPrintNumber />
									</div>
								</div>
							</div>
						</div>
					</div>
				</ThemeProvider>
			) : (
				<div>
					<SelectionStack
						handleAddData={supplyNumber}
					/>
				</div>
			)
		}
		</>
	)
}

export default Stack
