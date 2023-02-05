import React, { ChangeEvent, useState } from 'react';
import moment from 'moment';

import { ReactComponent as ArrowLeft } from './svg/arrowLeft.svg';
import { Col, Row, Typography, Select, Input, DatePicker, Checkbox, Button, Space } from 'antd';

import type { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { formatDateCurrent } from '../../../../config/theme/time';
import { ButtonFuncAddAndCancelService } from './Components/ButtonFuncService';
import Information from './Components/InformationService/Information';

import { VscCalendar } from 'react-icons/vsc';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { CgAsterisk } from 'react-icons/cg';
import { MdNoteAlt } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';

import Tabling from './Components/Tabling';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;
const { Option, OptGroup } = Select;
const { TextArea } = Input;

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

	const [updated, setUpdated] = useState(false);
	const [add, setAdd] = useState(false);
	const [addSuccess, setAddSuccess] = useState(false);
	const [select1, setSelect1] = useState(false);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	// useState use for function Checkbox
	const [checked, setChecked] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const onClickUpdatedList = () => {
		setUpdated(!updated)
	}

	const onClickCancelList = () => {
		setAddSuccess(!addSuccess);
	}

	const onChangeClickSuccessChange = () => {
		setAddSuccess(!addSuccess);
	}

	const onChangeClickHandleChange = () => {
		setAdd(!add);
	}

	const onChangeAddData = () => {
		setAdd(!add);
	}


	const [increase, setIncrease] = useState(false);
	const [prefix, setPrefix] = useState(false);
	const [surfix, setSurfix] = useState(false);
	const [reset, setReset] = useState(false);

	const onChangeCheckBoxIncrease = (e: CheckboxChangeEvent) => {
		setIncrease(e.target.checked);
	}

	const onChangeCheckBoxPrefix = (e: CheckboxChangeEvent) => {
		setPrefix(e.target.checked);
	}

	const onChangeCheckBoxSurfix = (e : CheckboxChangeEvent) => {
		setSurfix(e.target.checked);
	}

	const onChangeCheckBoxResetDay = (e: CheckboxChangeEvent) => {
		setReset(e.target.checked);
	}

	const handleChangeUpAndDown1 = () => {
		setSelect1(!select1);
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleAdd = () => {
		setAdd(!add);
		console.log(add);
	}

	const [valueDevice, setValueDevice] = useState('');
	const [nameService, setNameService] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');

	const handleChangeInputDeviceCode = (event: ChangeEvent<HTMLInputElement>) => {
		setValueDevice(event.target.value)
	}

	const handleChangeInputNameService = (event: ChangeEvent<HTMLInputElement>) => {
		setNameService(event.target.value);
	}

	const handleChangeAreaDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescriptionValue(event.target.value);
	}
	
	const dateCurrent = new Date();
	let resultCurrentDate = formatDateCurrent(dateCurrent);

	const InfoAndRulesIncrease = () => {
		if (increase === true) {
			return (
				<>
					<div className="space-align-container" style={{ marginBottom: 20 }}>
						<div className="space-align-block">		
							<Space align="center">
								<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
									Tăng tự động:
								</Title>
								<div style={{ display: 'flex', marginLeft: 20 }}>
									<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
										<div className="space-align-block" style={{ marginTop: '6px' }}>
											<Space align='center'>
												<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
													0001
												</Text>	
											</Space>
										</div>
									</div>
									<Title level={5} style={{ margin: '9px', color: theme.textColorBlack, fontWeight: 600 }}>
										đến
									</Title>
									<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
										<div className="space-align-block" style={{ marginTop: '6px' }}>
											<Space align='center'>
												<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
													9999
												</Text>	
											</Space>
										</div>
									</div>
								</div>	
							</Space>
						</div>	
					</div>
				</>
			)
		} else {
			return (
				<></>
			)
		}
	}

	return (
		<div style={{ padding: '0px 0 0 0px', width: '100%' }}>
			<ThemeProvider value={themeName}>
				{
					add ? (
						<>
							<div>
								<div>
									<Title level={3} style={{ marginTop: 5, marginLeft: 85, color: theme.textColorOrange, fontWeight: 700 }}>
										Quản lý dịch vụ	
									</Title>
								</div>
								{
									addSuccess ? (
										<>
											{
												updated ? (
													<>
														OKE
													</>
												) : (
													<div style={{ marginTop: 10, width: '100%', height: '80vh' }}>
														<Row>
															<Col xl={8}>
																<div style={{ marginLeft: 86, background: '#FFFFFF', padding: 40, paddingBottom: 300, borderRadius: 12 }}>
																	<div>
																		<Title level={4} style={{ marginBottom: 20, color: theme.textColorOrange, fontWeight: 700 }}>
																			Thông tin dịch vụ
																		</Title>
																		<div className="space-align-container" style={{ marginBottom: 20 }}>
																			<div className="space-align-block">
																				<Space align="center">
																					<Title level={5} style={{ marginBottom: 2, color: theme.textColorBlack, fontWeight: 600 }}>
																						Mã dịch vụ:
																					</Title>
																					<Text style={{ marginLeft: 30, color: theme.textColorBlack, fontWeight: 400, fontSize: 16 }}>
																					201
																					</Text>
																				</Space>
																			</div>
																		</div>
																		<div className="space-align-container" style={{ marginBottom: 20 }}>
																			<div className="space-align-block">
																				<Space align="center">
																					<Title level={5} style={{ marginBottom: 2, color: theme.textColorBlack, fontWeight: 600 }}>
																					Tên dịch vụ: 
																					</Title>
																					<Text style={{ marginLeft: 28, color: theme.textColorBlack, fontWeight: 400, fontSize: 16 }}>
																					Khám tim mạch
																					</Text>
																				</Space>
																			</div>
																		</div>
																		<div className="space-align-container" style={{ marginBottom: 20 }}>
																			<div className="space-align-block">
																				<Space align="center">
																					<Title level={5} style={{ marginBottom: 2, color: theme.textColorBlack, fontWeight: 600 }}>
																					Mô tả:
																					</Title>
																					<Text style={{ marginLeft: 68, color: theme.textColorBlack, fontWeight: 400, fontSize: 16 }}>
																					Chuyên các bệnh lý về tim
																					</Text>
																				</Space>
																			</div>
																		</div>
																	</div>


																	<div>
																		<Title level={4} style={{ marginBottom: 20, color: theme.textColorOrange, fontWeight: 700 }}>
																		Quy tắc cấp số
																		</Title>
																		<InfoAndRulesIncrease />
																		{/* Prefix */}
																		<>
																			<div className="space-align-container" style={{ marginBottom: 20 }}>
																				<div className="space-align-block">		
																					<Space align="center">
																						<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																							Prefix:
																						</Title>
																						<div style={{ display: 'flex', marginLeft: 76 }}>
																							<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
																								<div className="space-align-block" style={{ marginTop: '6px' }}>
																									<Space align='center'>
																										<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
																											0001
																										</Text>	
																									</Space>
																								</div>
																							</div>
																						</div>	
																					</Space>
																				</div>	
																			</div>
																		</>
																		{/* Reset Days Components */}
																		<>
																			<div className="space-align-container">
																				<div className="space-align-block">
																					<Space align="center">
																						<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																						Reset mỗi ngày
																						</Title>
																					</Space>
																				</div>
																			</div>
																			<div className="space-align-container">
																				<div className="space-align-block" style={{ marginTop: 20 }}>
																					<Space align="center">
																						<Text style={{ fontWeight: 400, fontSize: 16, color: theme.textColorBlack }}>
																						Ví dụ: 201-2001
																						</Text>
																					</Space>
																				</div>
																			</div>
																		</>
																	</div>

																</div>
															</Col>
															<Col xl={1}>
															</Col>
															<Col xl={15}>
																<div style={{ display: 'flex', width: '92%', justifyContent: 'center' }}>
																	<div style={{ background: '#FFFFFF', width: '90%', padding: 20, paddingBottom: 20, borderRadius: 12 }}>
																		<Information />
																	</div>
																</div>	
															</Col>
														</Row>
														<div style={{ left: 1610, top: -784, position: 'relative', width: 40 }}>
															<div 
															style={{ 
																width: 90, 
																height: 110, 
																display: 'flex', 
																justifyContent: 'center', 
																background: '#FFF2E7', 
																padding: '20px 10px 10px 10px', 
																cursor: 'pointer' 
															}}
															onClick={onClickUpdatedList}
															>
																<div style={{ textAlign: 'center' }}>
																	<MdNoteAlt style={{ fontSize: 30, color: theme.textColorOrange }} />
																	<div>
																		<Text style={{ color: theme.textColorOrange, fontSize: 14, fontWeight: 500 }}>
																		Cập nhật danh sách
																		</Text>
																	</div>
																</div>
															</div>
															<div style={{ 
																width: 90, 
																height: 90, 
																display: 'flex', 
																justifyContent: 'center', 
																background: '#FFF2E7', 
																padding: '20px 10px 2px 10px', 
																cursor: 'pointer' 
																}}
																onClick={onClickCancelList}
															>
																<div style={{ textAlign: 'center' }}>
																	<RiArrowGoBackFill style={{ fontSize: 20, color: theme.textColorOrange }} />
																	<div>
																		<Text style={{ color: theme.textColorOrange, fontSize: 14, fontWeight: 500 }}>
																		Quay lại
																		</Text>
																	</div>
																</div>
															</div>
														</div>
													</div>
												)
											}
										</>
									): (	
										<>
											<div style={{ display: 'flex', justifyContent: 'center' }}>
												<div style={{ marginTop: 0, background: 'white', width: '90%', paddingTop: 20, paddingBottom: 20, borderRadius: 16 }}>
													<Title level={4} style={{ marginLeft: 102, color: theme.textColorOrange, fontWeight: 700 }}>
														Thông tin dịch vụ
													</Title>
													<Row>
														<Col span={12}>
															<div>
																<div style={{ display: 'flex', margin: '30px 0 5px 104px' }}>
																	<div>
																		<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																			Mã dịch vụ: 
																		</Title>
																	</div>
																	<div style={{ marginTop: 4, marginLeft: 4 }}>
																		<CgAsterisk style={{ color: '#FF4747', fontSize: 12 }} />
																	</div>
																</div>
																<div style={{ textAlign: 'center' }}>
																	<Input
																		onChange={handleChangeInputDeviceCode}
																		placeholder="201"
																		style={{ width: '76%', height: 50, fontSize: 16, fontWeight: 400 }}
																	/>
																</div>
															</div>
															<div>
																<div style={{ display: 'flex', margin: '30px 0 5px 104px' }}>
																	<div>
																		<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																			Tên dịch vụ :
																		</Title>
																	</div>
																	<div style={{ marginTop: 4, marginLeft: 4 }}>
																		<CgAsterisk style={{ color: '#FF4747', fontSize: 12 }} />
																	</div>
																</div>
																<div style={{ textAlign: 'center' }}>
																	<Input
																		onChange={handleChangeInputNameService}
																		placeholder="Khám tim mạch"
																		style={{ width: '76%', height: 50, fontSize: 16, fontWeight: 400 }}
																	/>
																</div>	
															</div>
														</Col>
														<Col span={12}>
															<div style={{ display: 'flex', margin: '30px 0 0 70px' }}>
																<div>
																	<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																		Mô tả:
																	</Title>
																</div>
															</div>
															<div style={{ textAlign: 'center' }}>
																	<TextArea
																		value={descriptionValue}
																		onChange={handleChangeAreaDescription}
																		rows={7}
																		placeholder={"Mô tả dịch vụ"}
																		maxLength={1000}
																		style={{
																			fontSize: 16,
																			fontWeight: 400,
																			width: '84%',
																			height: 171
																		}}
																	/>
															</div>	
														</Col>
													</Row>
													<div style={{ marginLeft: 104, marginTop: 40 }}>
														<Title level={4} style={{	color: theme.textColorOrange, fontWeight: 700 }}>
															Quy tắc cấp số
														</Title>
														<div style={{ marginTop: 20 }}>
															<div style={{ display: 'flex', marginBottom: 30 }} className="space-align-container">
																<div className="space-align-block">		
																	<Space align="center">
																		<Checkbox name="Increase" onChange={onChangeCheckBoxIncrease} style={{ fontSize: 20 }} >
																			<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																				Tăng tự động từ:
																			</Title>
																		</Checkbox>
																		<div style={{ display: 'flex' }}>
																			<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
																				<div className="space-align-block" style={{ marginTop: '6px' }}>
																					<Space align='center'>
																						<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
																							0001
																						</Text>	
																					</Space>
																				</div>
																			</div>
																			<Title level={5} style={{ margin: '9px', color: theme.textColorBlack, fontWeight: 600 }}>
																				đến
																			</Title>
																			<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
																				<div className="space-align-block" style={{ marginTop: '6px' }}>
																					<Space align='center'>
																						<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
																							9999
																						</Text>	
																					</Space>
																				</div>
																			</div>
																		</div>	
																	</Space>
																</div>	
															</div>
															<div style={{ display: 'flex', marginBottom: 30 }} className="space-align-container">
																<div className="space-align-block">		
																	<Space align="center">
																		<Checkbox name="prefix" onChange={onChangeCheckBoxPrefix} style={{ fontSize: 20 }} >
																			<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																				Prefix:
																			</Title>
																		</Checkbox>
																		<div style={{ display: 'flex', marginLeft: 76 }}>
																			<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
																				<div className="space-align-block" style={{ marginTop: '6px' }}>
																					<Space align='center'>
																						<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
																							0001
																						</Text>	
																					</Space>
																				</div>
																			</div>
																		</div>	
																	</Space>
																</div>	
															</div>
															<div style={{ display: 'flex', marginBottom: 30 }} className="space-align-container">
																<div className="space-align-block">		
																	<Space align="center">
																		<Checkbox name="surfix" onChange={onChangeCheckBoxSurfix} style={{ fontSize: 20 }} >
																			<Title level={5} style={{ color: theme.textColorBlack, fontWeight: 600 }}>
																				Surfix:
																			</Title>
																		</Checkbox>
																		<div style={{ display: 'flex', marginLeft: 76 }}>
																			<div className="space-align-container" style={{ width: 62, height: 45, border: '1.5px solid #D4D4D7', borderRadius: 8, textAlign: 'center' }}>
																				<div className="space-align-block" style={{ marginTop: '6px' }}>
																					<Space align='center'>
																						<Text style={{ fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
																							0001
																						</Text>	
																					</Space>
																				</div>
																			</div>
																		</div>	
																	</Space>
																</div>	
															</div>
															<div style={{ display: 'flex', marginBottom: 30 }} className="space-align-container">
																<div className="space-align-block">		
																	<Space align="center">
																		<Checkbox onChange={onChangeCheckBoxResetDay} style={{ fontSize: 20 }} >
																			<Title level={5}>
																				Reset mỗi ngày
																			</Title>
																		</Checkbox>
																	</Space>
																</div>	
															</div>	
														</div>
														<div className="space-align-container">
															<div className="space-align-block">
																<Space align='center'>
																	<CgAsterisk style={{ marginTop: 5, color: '#FF4747' }} />
																	<Text style={{ fontSize: 14, fontWeight: 400, color: '#7E7D88' }}>
																		Là trường thông tin bắt buộc
																	</Text>	
																</Space>
															</div>	
														</div>
													</div>
												</div>
											</div>	
											<div>
												<ButtonFuncAddAndCancelService
													addSuccess={addSuccess}	
													onChangeClickFailedFunc={onChangeAddData}
													onChangeClickSuccessFunc={onChangeClickSuccessChange}	
												/>
											</div>	
										</>	
									)
								}	
							</div>
							
						</>
						
					): (
						<>
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
									onClick={handleAdd}
								>
										<div style={{ cursor: 'pointer', lineHeight: 2 }}>
											<BsFillPlusSquareFill style={{ fontSize: 28, marginTop: '16px', color: '#FF9138' }} />
											<Title style={{ fontSize: 16, color: '#FF7506', fontWeight: 600 }}>
												Thêm thiết bị
											</Title>
										</div>
								</div>
							</div>
						</>
						
					)
				}
			</ThemeProvider>
		</div>
	)
}

export default Service;