import React, { MouseEventHandler, useState } from 'react';

import { useSpring, animated, useTransition } from 'react-spring';
import { BsFillBellFill } from 'react-icons/bs';
import { Image, Typography, Layout, Menu, Space, Select } from 'antd';
import type { MenuProps } from 'antd';

import './Heading.css';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { UserImg } from '../../Img/Image';

const { Header, Content, Footer, Sider } = Layout;
const { Text, Title } = Typography;
const { Option } = Select; 

type MenuItem = Required<MenuProps>['items'][number];
type ThemeNames = keyof typeof themes;


const notifyTitles = [
	{
		titleUser: 'Người dùng: Nguyễn Thị Thùy Dung',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Nguyễn Thiên Chinh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Võ Thị Kim Liên',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Hoàng Nguyễn Quốc Huy',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Võ Ngọc Lan Anh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Nguyễn Thị Trúc Anh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Nguyễn Thị Thùy Dung',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Nguyễn Thiên Chinh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Võ Thị Kim Liên',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Hoàng Nguyễn Quốc Huy',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Võ Ngọc Lan Anh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
	{
		titleUser: 'Người dùng: Nguyễn Thị Trúc Anh',
		titleTime: 'Thời gian nhận số: 12h20 ngày 30/11/2021'
	},
];

const Heading = () => {
	
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const [open, setOpen] = useState(false);
	
	const transitions = useSpring({
		from: {
			opacity: open ? 0 : 1,
		},
		to: async (next, cancel) => {
			await next({
				opacity: open ? 1 : 0
			});
		}
  });

	const theme = useTheme(themeName);

	const handleChangeList:MouseEventHandler<HTMLDivElement> = () => {
		setOpen(!open)
	}

	return (
		<div>
			<ThemeProvider value={themeName}>
				<Header className="site-layout-background" style={{ height: 60, padding: 0, background: '#fff' }}>
					<div
						style={{ 
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0 70px 0 70px'
						}}
					>
						<div>
							<Text style={{
								fontSize: 20,
								fontWeight: 700,
								color: theme.textColorOrange
							}}>
								Thông tin cá nhân
							</Text>
						</div>
						<div style={{ display: 'flex', width: 280, justifyContent: 'space-evenly' }}>
							<div
								onClick={handleChangeList}
								style={{ lineHeight: 5, position: 'relative' }}>
								<BsFillBellFill
									style={{ fontSize: 16, color: theme.textColorOrange, cursor: 'pointer' }}
								/>
								{
									open ? (
										<>
											<animated.div
												style={
													{
														...transitions,
														position: 'absolute',
														width: 360,
														left: -173,
														borderRadius: '8px',
														zIndex: '3'
													}
												}
											>
												<Title style={{
													color: theme.textColorPrimary,
													background: theme.background,
													paddingLeft: '24px',
													fontWeight: 700,
													fontSize: 20,
													lineHeight: 3,
													margin: 0,
													borderRadius: '8px 8px 0 0'
												}}>Thông báo</Title>
												<ul
													className='dropdown_list'
												>
													{
														notifyTitles.map((title) => {
															return (
																<>
																	<li className='list_of_dropdown'>
																		<Text style={{ fontSize: 16, color: theme.textColorOrangeTwo, fontWeight: 700 }}>
																			{title.titleUser}
																		</Text>
																		<br />
																		<Text style={{ fontSize: 16, color: theme.textColorGray, fontWeight: 400 }}>
																			{title.titleTime}
																		</Text>
																		<hr className='line_list' />
																	</li>
																</>
															)
														})
													}
												</ul>
											</animated.div>
										</>
									): (
										<>
											
										</>
									)
								}
							</div>
							<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
								<div>
									<Image
										src={UserImg}
									/>
								</div>
								<div style={{ marginLeft: '10px' }}>
									<div style={{ height: '3vh', lineHeight: '52px' }}>
										<Text style={{
											color: '#7E7D88', fontWeight: 400
										}}>Xin chào</Text>
									</div>
									<div style={{ height: '3vh', lineHeight: '28px' }}>
										<Text style={{ color: '#535261', fontWeight: 700 }}>Lê Quỳnh Ái Vân</Text>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Header>
			</ThemeProvider>
		</div>
	)
}

export default Heading
