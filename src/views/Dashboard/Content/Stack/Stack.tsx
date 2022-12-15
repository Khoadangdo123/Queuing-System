
import SelectionStack from './components/InformationStack/InformationStack';

import React, { useState } from 'react';
import { Select, Typography } from 'antd';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { Option } from 'antd/lib/mentions';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';

const { Title } = Typography;

type ThemeNames = keyof typeof themes;

const Stack = () => {

	const [add, setAdd] = useState(false);
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
					<div>
						<Title level={4}>
							Quản lý cấp số
						</Title>
						<div>
							<Title level={2}>
								CẤP SỐ MỚI
							</Title>
							<Title level={4}>
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
									style={{ width: 500 }}
									onChange={handleChange}
									onClick={handleChangeUpAndDown1}
								>
									<Option value="Tất cả">Tất cả</Option>
									<Option value="Đang chờ">Đang chờ</Option>
									<Option value="Đã sử dụng">Đã sử dụng</Option>
									<Option value="Bỏ qua">Bỏ qua</Option>
								</Select>
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
