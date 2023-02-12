import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import moment from 'moment';

import { ReactComponent as ArrowLeft } from './svg/arrowLeft.svg';
import { Col, Row, Typography, Select, Input, DatePicker, Checkbox, Button, Space } from 'antd';

import type { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { ThemeProvider, themes, useTheme } from '../../../../../config/theme/theme';
import { formatDateCurrent } from '../../../../../config/theme/time';
import { ButtonFuncAddAndCancelService, ButtonFuncUpdatedAndCancel } from '.././Components/ButtonFuncService';
import Information from '../Components/InformationService/Information';

import { VscCalendar } from 'react-icons/vsc';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { CgAsterisk } from 'react-icons/cg';
import { MdNoteAlt } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';

import Tabling from './Tabling';
import { UpdatedContext } from '../Service';

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;
const { Option, OptGroup } = Select;
const { TextArea } = Input;

type ThemeNames = keyof typeof themes;

const UpdatedInformation = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	let {
		increase,
		prefix,
		surfix,
		reset,
		valueDevice,
		nameService,
		descriptionValue,
		handleChangeInputDeviceCode,
		handleChangeInputNameService,
		handleChangeAreaDescription,
		onChangeCheckBoxIncrease,
		onChangeCheckBoxPrefix,
		onChangeCheckBoxSurfix,
		onChangeCheckBoxResetDay,
		onClickUpdatedList,
		handleAddData
	} = useContext<any>(UpdatedContext);
	const theme = useTheme(themeName);
	


	return (
		<>
			<ThemeProvider value={themeName}>
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
											value={valueDevice}
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
											value={nameService}
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
											<Checkbox 
												name="Increase" 
												onChange={onChangeCheckBoxIncrease}
												style={{ fontSize: 20 }}
											>
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
											<Checkbox 
												name="prefix" 
												onChange={onChangeCheckBoxPrefix}
												style={{ fontSize: 20 }}
											>
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
											<Checkbox 
												name="surfix" 
												onChange={onChangeCheckBoxSurfix}
												style={{ fontSize: 20 }}
											>
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
											<Checkbox 
												onChange={onChangeCheckBoxResetDay}
												style={{ fontSize: 20 }}
											>
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
					<ButtonFuncUpdatedAndCancel
						addSuccess={false}	
						onChangeClickFailedFunc={onClickUpdatedList}
						onChangeClickUpdatedFunc={handleAddData}	
					/>
				</div>
			</ThemeProvider>
		</>
	)
}

export { UpdatedInformation }