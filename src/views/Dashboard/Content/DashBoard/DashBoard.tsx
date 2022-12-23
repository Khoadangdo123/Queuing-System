import './Dashboard.css';

import React, { useState } from 'react';

import Calendar from 'react-calendar';

import { BsCalendar, BsCalendarCheck, BsFillFlagFill, BsArrowUp, BsFillCaretDownFill, BsCaretDownFill } from 'react-icons/bs';
import { RiUserVoiceLine, RiComputerLine } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';
import { TbMessages } from 'react-icons/tb';
import { ImStack } from 'react-icons/im';

import { Col, Row, Card, Typography, Dropdown, Space, Progress } from 'antd';
import type { MenuProps } from 'antd';

import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import '../index.css';
import { ChartDay, ChartWeek, ChartMonth } from './Chart';
import { Selection, options } from './Selection';


const { Title, Text } = Typography;

type ThemeNames = keyof typeof themes;

const items: MenuProps['items'] = [
	{
		label: '1st menu item',
		key: '0',
	},
	{
    type: 'divider',
  },
	{
		label: '2nd menu item',
		key: '1',
	},
	{
    type: 'divider',
	},
	{
    label: '3rd menu item',
    key: '3',
  },
]

const ColorStyleCard = [
	{
		cardColor: '#6695FB',
	},
	{
		cardColor: '#35C75A',
	},
	{
		cardColor: '#FFAC6A',
	},
	{
		cardColor: '#F86D6D',
	}
]

const TitleBorderOne = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 30 }}>
			<div
				style={{
					marginTop: '4px',
					width: 50,
					height: 50,
					borderRadius: '50%',
					backgroundColor: 'rgb(174 197 246)',
					backdropFilter: '50%',
					display: 'flex',
					justifyContent: 'center',
					lineHeight: '55px',
					fontSize: 26
				}}>
				<div>
					<BsCalendar style={{ color: 'rgb(9 87 255)' }} />
				</div>
			</div>
			<Title level={4}>
				<Text>
					Số thứ tự
				</Text>
				<br />
				<Text>
					đã cấp
				</Text>
			</Title>
		</div>
	)
}

const TitleBorderTwo = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 22 }}>
			<div
				style={{
					marginTop: '4px',
					width: 50,
					height: 50,
					borderRadius: '50%',
					backgroundColor: 'rgb(201 255 215)',
					backdropFilter: '50%',
					display: 'flex',
					justifyContent: 'center',
					lineHeight: '55px',
					fontSize: 26
				}}>
				<div>
					<BsCalendarCheck style={{ color: '#35C75A' }} />
				</div>
			</div>
			<Title level={4}>
				<Text>
					Số thứ tự
				</Text>
				<br />
				<Text>
					đã sử dụng
				</Text>
			</Title>
		</div>
	)
}

const TitleBorderThree = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 28 }}>
			<div
				style={{
					marginTop: '4px',
					width: 50,
					height: 50,
					borderRadius: '50%',
					backgroundColor: 'rgb(255 218 188)',
					backdropFilter: '50%',
					display: 'flex',
					justifyContent: 'center',
					lineHeight: '55px',
					fontSize: 26
				}}>
				<div>
					<RiUserVoiceLine style={{ color: '#FFAC6A' }} />
				</div>
			</div>
			<Title level={4}>
				<Text>
					Số thứ tự
				</Text>
				<br />
				<Text>
					đang chờ
				</Text>
			</Title>
		</div>
	)
}

const TitleBorderFour = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 24 }}>
			<div
				style={{
					marginTop: '4px',
					width: 50,
					height: 50,
					borderRadius: '50%',
					backgroundColor: 'rgb(255 201 201)',
					backdropFilter: '50%',
					display: 'flex',
					justifyContent: 'center',
					lineHeight: '55px',
					fontSize: 26
				}}>
				<div>
					<BsFillFlagFill style={{ color: '#F86D6D' }} />
				</div>
			</div>
			<Title level={4}>
				<Text>
					Số thứ tự
				</Text>
				<br />
				<Text>
					đã bỏ qua
				</Text>
			</Title>
		</div>
	)
}

const ChartSelection = ({ chartType } : { chartType: string }) => {
	if (chartType == "day") {
		return (
			<>
				<ChartDay />
			</>
		)
	} else if (chartType == "week") {
		return (
			<>
				<ChartWeek />
			</>
		)
	} else if (chartType == 'month') {
		return (
			<>
				<ChartMonth />
			</>
		)
	} else {
		return null;
	}
}

const DashBoard: React.FC = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');

	const [valueSelect, setValueSelect] = useState('day');

	const handleChangeDate = (value: string) => {
		setValueSelect(value);
	}

	// console.log(window.location.href.split('/')[3]);

	const theme = useTheme(themeName);

	return (
		<ThemeProvider value={themeName}>
			<div style={{ width: '100%', height: '100vh' }}>
				<Row>
					<Col flex={3} style={{ padding: '20px 0px 0px 0px' }}>
						<div style={{ width: '100%', paddingLeft: '20px' }}>
							<Title level={3} style={{ marginLeft: 2, fontSize: 26, fontWeight: 900, color: theme.textColorOrange }}>
								Biểu đồ cấp số
							</Title>
							<div>
								<div className="site-card-wrapper">
									<Row gutter={16} style={{ display: 'flex', justifyContent: 'space-between' }}>
										<Col span={5}>
											<Card
												title={<TitleBorderOne />}
												bordered={false}
												style={{ borderRadius: 16 }}
											>
												<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px 10px 25px' }}>
													<div style={{ marginTop: 0 }}>
														<Text style={{ fontSize: 30, fontWeight: 700, color: '#535261' }}>
															4.221 
														</Text>
													</div>
													<div
														style={{ lineHeight: '12px', marginTop: '12px', height: 22, backgroundColor: 'rgb(255, 218, 188)', paddingTop: '4px', paddingLeft: '6px', paddingRight: '8px', borderRadius: '10px', marginBottom: 10 }}
													>
														<Text style={{ fontSize: 12, display: 'flex', color: '#FF9138', fontWeight: 400 }} >
															<div>
																<BsArrowUp />
															</div>
															32,41%
														</Text>
													</div>
												</div>
											</Card>
										</Col>
										<Col span={5}>
											<Card
												title={<TitleBorderTwo />}
												bordered={false}
												style={{ borderRadius: 16 }}
											>
												<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px 10px 25px' }}>
													<div style={{ marginTop: 0 }}>
														<Text style={{ fontSize: 30, fontWeight: 700, color: '#535261' }}>
															3.721 
														</Text>
													</div>
													<div
														style={{ lineHeight: '12px', marginTop: '12px', height: 22, backgroundColor: 'rgb(255 201 201)', paddingTop: '4px', paddingLeft: '6px', paddingRight: '8px', borderRadius: '10px' }}
													>
														<Text style={{ fontSize: 12, display: 'flex', color: '#E73F3F', fontWeight: 400 }} >
															<div>
																<BsArrowUp />
															</div>
															32,41%
														</Text>
													</div>
												</div>
											</Card>
										</Col>
										<Col span={5}>
											<Card
												title={<TitleBorderThree />}
												bordered={false}
												style={{ borderRadius: 16 }}
											>
												<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px 10px 25px' }}>
													<div style={{ marginTop: 0 }}>
														<Text style={{ fontSize: 30, fontWeight: 700, color: '#535261' }}>
															468
														</Text>
													</div>
													<div
														style={{ lineHeight: '12px', marginTop: '12px', height: 22, backgroundColor: 'rgb(255, 218, 188)', paddingTop: '4px', paddingLeft: '6px', paddingRight: '8px', borderRadius: '10px' }}
													>
														<Text style={{ fontSize: 12, display: 'flex', color: '#FF9138', fontWeight: 400 }} >
															<div>
																<BsArrowUp />
															</div>
															56,41%
														</Text>
													</div>
												</div>
											</Card>
										</Col>
										<Col span={5}>
											<Card
												title={<TitleBorderFour />}
												bordered={false}
												style={{ borderRadius: 16 }}
											>
												<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px 10px 25px' }}>
													<div style={{ marginTop: 0 }}>
														<Text style={{ fontSize: 30, fontWeight: 700, color: '#535261' }}>
															32
														</Text>
													</div>
													<div
														style={{ lineHeight: '12px', marginTop: '12px', height: 22, backgroundColor: 'rgb(255 201 201)', paddingTop: '4px', paddingLeft: '6px', paddingRight: '8px', borderRadius: '10px' }}
													>
														<Text style={{ fontSize: 12, display: 'flex', color: '#E73F3F', fontWeight: 400 }} >
															<div>
																<BsArrowUp />
															</div>
															22,41%
														</Text>
													</div>
												</div>
											</Card>
										</Col>
									</Row>
								</div>
							</div>
							<div 
								style={{ backgroundColor: '#FFFFFF', padding: "30px 0px 20px 0px", marginTop: 32, borderRadius: 16 }}
								className="chart_statistic"
							>
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between', width: '88%' }}>
										<div>
											<Title style={{ fontWeight: 700, fontSize: 20, color: theme.textColorBlack }}>
												Bảng thống kê theo ngày
											</Title>
											<Text style={{ fontWeight: 400, fontSize: 14, color: theme.textColorGray }}>
												Tháng 11/2021
											</Text>
										</div>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div>
												<Title style={{ fontSize: 20, fontWeight: 600, marginTop: '16px' }}>Xem theo</Title>
											</div>
											<div>
												{/* Todo: Need fix this */}
												{/* <Dropdown menu={{ items }} trigger={['click']}>
												<a style={{ display: 'flex', width: '106px', height: '42px', justifyContent: 'center' }} onClick={e => e.preventDefault()}>
													<Space align='center'>
														<Text style={{ fontSize: 16 }}>
															Ngày
														</Text>
														<BsFillCaretDownFill style={{ marginTop: '12px', color: theme.textColorOrange }} />
													</Space>
												</a>
												</Dropdown> */}
												<Selection valueChange={handleChangeDate} />
											</div>
										</div>
									</div>
								</div>
								<div style={{ width: '100%', marginTop: 20, display: 'flex', justifyContent: 'center' }}>
									<ChartSelection chartType={valueSelect} />
								</div>
							</div>
						</div>
					</Col>
					<Col flex={2}>
						<div style={{ paddingLeft: 20 }}>
							<div style={{ backgroundColor: '#FFFFFF', paddingBottom: 160, paddingTop: 20, borderRadius: 16 }}>
								<Title  style={{ fontWeight: 700, fontSize: 24, color: theme.textColorOrange, marginLeft: 35 }}>
									Tổng quan
								</Title>
								<div style={{ marginTop: '2em' }}>
									<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0 20px 0' }}>
										<div style={{ width: '200px', display: 'flex', justifyContent: 'space-evenly' }}>
											<div style={{ position: 'relative' }}>
												<Progress
													type='circle'
													strokeColor={{ '100%': '#FF7506' }}
													percent={90}
													width={80}
												/>
												<Progress
													type='circle'
													width={65}
													strokeColor={{ '100%': '#7E7D88' }}
													percent={10}
													style={{ position: 'absolute', top: '7.6px', left: '7.8px' }}
													showInfo={false}
												/>
											</div>
											<div style={{ marginTop: '2px' }}>
												<Title style={{ fontSize: 30, fontWeight: 800, color: '#535261' }}>4.221</Title>
												<div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
													<div style={{ marginTop: '4px' }}>
														<RiComputerLine style={{ color: theme.textColorOrange, fontSize: 18 }} />
													</div>
													<div>
														<Text style={{ fontSize: 16, fontWeight: 600, color: theme.textColorOrange }}>
															Thiết bị
														</Text> 
													</div>
												</div>
											</div>
										</div>
										<div style={{ display: 'flex', justifyContent: 'center' }}>
											<div style={{ width: '200px', marginTop: '16px' }}>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div style={{ display: 'flex' }}>
														<div style={{ marginTop: '2px' }}>
															<GoPrimitiveDot style={{ color: '#FFD130' }} />
														</div>
														<div>
															<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Đang hoạt động</Text>
														</div>
													</div>
													<div>
														<Title level={5} style={{ color: theme.textColorOrange, fontWeight: 700, fontSize: 16  }}>3.799</Title>
													</div>
												</div>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div>
														<div style={{ display: 'flex' }}>
															<div style={{ marginTop: '2px' }}>
																<GoPrimitiveDot />
															</div>
															<div>
																<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Ngưng hoạt động</Text>
															</div>
														</div>
													</div>
													<div>
														<Title level={5} style={{ color: theme.textColorOrange, fontWeight: 700, fontSize: 16  }}>422</Title>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0 20px 0' }}>
										<div style={{ width: '200px', display: 'flex', justifyContent: 'space-evenly' }}>
											<div style={{ position: 'relative' }}>
												<Progress
													type='circle'
													strokeColor={{ '100%': '#4277FF' }}
													percent={76}
													width={80}
												/>
												<Progress
													type='circle'
													width={65}
													strokeColor={{ '100%': '#7E7D88' }}
													percent={30}
													style={{ position: 'absolute', top: '7.6px', left: '7.8px' }}
													showInfo={false}
												/>
											</div>
											<div style={{ marginTop: '2px' }}>
												<Title style={{ fontSize: 30, fontWeight: 800, color: '#535261' }}>276</Title>
												<div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
													<div style={{ marginTop: '4px' }}>
														<TbMessages style={{ color: '#4277FF', fontSize: 18, marginRight: '6px' }} />
													</div>
													<div>
														<Text style={{ fontSize: 16, fontWeight: 600, color: '#4277FF' }}>
															Dịch vụ
														</Text> 
													</div>
												</div>
											</div>
										</div>
										<div style={{ display: 'flex', justifyContent: 'center' }}>
											<div style={{ width: '200px', marginTop: '16px' }}>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div style={{ display: 'flex' }}>
														<div style={{ marginTop: '2px' }}>
															<GoPrimitiveDot style={{ color: '#4277FF' }} />
														</div>
														<div>
															<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Đang hoạt động</Text>
														</div>
													</div>
													<div>
														<Title level={5} style={{ color: '#4277FF', fontWeight: 700, fontSize: 16 }}>3.799</Title>
													</div>
												</div>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div>
														<div style={{ display: 'flex' }}>
															<div style={{ marginTop: '2px' }}>
																<GoPrimitiveDot />
															</div>
															<div>
																<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Ngưng hoạt động</Text>
															</div>
														</div>
													</div>
													<div>
														<Title level={5} style={{ fontWeight: 700, color: '#4277FF' }}>422</Title>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0 20px 0' }}>
										<div style={{ width: '200px', display: 'flex', justifyContent: 'space-evenly' }}>
											<div style={{ position: 'relative' }}>
												<Progress
													type='circle'
													strokeColor={{ '100%': '#35C75A' }}
													percent={86}
													width={80}
												/>
												<Progress
													type='circle'
													width={65}
													strokeColor={{ '100%': '#7E7D88' }}
													percent={16}
													style={{ position: 'absolute', top: '7.6px', left: '7.8px' }}
													showInfo={false}
												/>
												<Progress
													type='circle'
													width={50}
													strokeColor={{ '100%': '#F178B6' }}
													percent={13}
													style={{ position: 'absolute', top: '15.5px', left: '15.5px' }}
													showInfo={false}
												/>
											</div>
											<div style={{ marginTop: '2px' }}>
												<Title style={{ fontSize: 30, fontWeight: 800, color: '#535261' }}>276</Title>
												<div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
													<div style={{ marginTop: '4px' }}>
														<ImStack style={{ color: '#35C75A', fontSize: 18, marginRight: '6px' }} />
													</div>
													<div>
														<Text style={{ fontSize: 16, fontWeight: 600, color: '#35C75A' }}>
															Cấp số
														</Text> 
													</div>
												</div>
											</div>
										</div>
										<div style={{ display: 'flex', justifyContent: 'center' }}>
											<div style={{ width: '200px', marginTop: '0px' }}>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div style={{ display: 'flex' }}>
														<div style={{ marginTop: '2px' }}>
															<GoPrimitiveDot style={{ color: '#35C75A' }} />
														</div>
														<div>
															<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Đang hoạt động</Text>
														</div>
													</div>
													<div>
														<Title level={5} style={{ color: '#35C75A', fontWeight: 700, fontSize: 16 }}>3.799</Title>
													</div>
												</div>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div>
														<div style={{ display: 'flex' }}>
															<div style={{ marginTop: '2px' }}>
																<GoPrimitiveDot />
															</div>
															<div>
																<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Ngưng hoạt động</Text>
															</div>
														</div>
													</div>
													<div>
														<Title level={5} style={{ fontWeight: 700, color: '#35C75A' }}>422</Title>
													</div>
												</div>
												<div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
													<div>
														<div style={{ display: 'flex' }}>
															<div style={{ marginTop: '2px' }}>
																<GoPrimitiveDot style={{ color: '#F178B6' }} />
															</div>
															<div>
																<Text style={{ color: theme.textColorGray, fontSize: 14 }}>Bỏ qua</Text>
															</div>
														</div>
													</div>
													<div>
														<Title level={5} style={{ fontWeight: 700, color: '#35C75A' }}>32</Title>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
									<Calendar className="react_cal" style={{ width: '400px' }} />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</ThemeProvider>
	)
}

export default DashBoard
