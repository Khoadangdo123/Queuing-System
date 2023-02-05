import React, { useState, useEffect } from 'react';
import { ReactComponent as EditSquare } from '../Img/editSquare.svg';
import { Typography, Col, Divider, Row } from 'antd';
import { ThemeProvider, themes, useTheme } from '../../../../../config/theme/theme';
import SelectInformation from '../Components/Information/InformationDevice';
import { ButtonFuncUpdatedAndCancel } from '../Components/ButtonFunc';
import { InputComponentUpdated } from '../Components/InputComponent';
import { TitleDeviceInformation } from '../Device';
import { InputInfoUpdated } from './InputInfo';

const { Text, Title } = Typography;

type ThemeNames = keyof typeof themes;

type InformationType = {
	typeInput: {
		DeviceCode: string;
		DeviceName: string;
		IpAddress: string;
		UserName: string;
		Password: string;
	}
	TypeValueSelect: string;
	ValueTypeSelect: string[];
	handleChangeValueSelectProps: (value: string) => void;
	onChangeClickSuccessChangeProps: () => Promise<void>; 
}

const InformationAdd = ({ typeInput, TypeValueSelect, ValueTypeSelect, handleChangeValueSelectProps, onChangeClickSuccessChangeProps } : InformationType) => {

	useEffect(() => {
		console.log(typeInput, TypeValueSelect , ValueTypeSelect)
	}, [])

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const TitleInfoOne = [
		{
			title: 'Mã thiết bị',
			codeDevice: typeInput.DeviceCode,
		},
		{
			title: 'Tên thiết bị',
			codeDevice: typeInput.DeviceName,
		},
		{
			title: 'Địa chỉ IP',
			codeDevice: typeInput.IpAddress,
		}
	];

	const TitleInfoTwo = [
		{
			title: 'Loại thiết bị',
			codeDevice: TypeValueSelect,
		},
		{
			title: 'Tên đăng nhập',
			codeDevice: typeInput.UserName,
		},
		{
			title: 'Mật khẩu',
			codeDevice: typeInput.Password
		}
	] 
	
	const [updated, setUpdated] = useState(false);
	const [updatedSuccess, setUpdatedSuccess] = useState(false);

	let handleChangeUpdated = () => {
		setUpdated(!updated)
	}
	
	return (
		<ThemeProvider value={themeName}>

			{
				updated ? (
					<>
						<div style={{ marginTop: 25 }}>
							<TitleDeviceInformation />
							<div style={{ marginTop: 40 }}>
								<InputComponentUpdated  />
							</div>
							<InputInfoUpdated
								valueSelect={ValueTypeSelect}
								handleChangeValueSelectProps={handleChangeValueSelectProps}
							/>
						</div>
						<ButtonFuncUpdatedAndCancel
							addSuccess={updated}
							onChangeClickFailedFunc={handleChangeUpdated}
							onChangeClickUpdatedFunc={onChangeClickSuccessChangeProps}
						/>
					</>
				) : (
					<Row wrap={false}>
						<Col flex="auto">
							<div style={{ marginTop: 50, marginLeft: 50 }}>
								<Title level={5} style={{ color: theme.textColorOrange, fontWeight: 700, fontSize: 20 }}>
									Thông tin thiết bị
								</Title>
								<div style={{ display: 'flex', justifyContent: 'space-around' }}>
									<div>
										{
											TitleInfoOne.map((titleInfo, index) => {
												return (
													<div key={index} style={{ marginTop: 40, marginLeft: -258, width: 390 }}>
														<Row>
															<Col xs={2} sm={4} md={6} lg={8} xl={10}>
																<Text style={{ color: '#282739', fontSize: 16, fontWeight: 600 }}>
																	{titleInfo.title}
																</Text><>:</>
															</Col>
															<Col xs={20} sm={16} md={12} lg={8} xl={4}>
															</Col>
															<Col xs={2} sm={4} md={6} lg={8} xl={10}>
																<Text style={{ marginLeft: 60, fontSize: 14, fontWeight: 400 }}>
																	{titleInfo.codeDevice}
																</Text>
															</Col>
														</Row>
													</div>
												);
											})
										}
									</div>
									<div>
										{
											TitleInfoTwo.map((titleInfo, index) => {
												return (
													<div key={index} style={{ marginTop: 40, marginLeft: 2, width: 400 }}>
														<Row>
															<Col xs={2} sm={4} md={6} lg={8} xl={10}>
																<Text style={{ color: '#282739', fontSize: 16, fontWeight: 600 }}>
																	{titleInfo.title}
																</Text><>:</>
															</Col>
															<Col xs={20} sm={16} md={12} lg={8} xl={4}>
															</Col>
															<Col xs={2} sm={4} md={6} lg={8} xl={10}>
																<Text style={{ marginLeft: 60, fontSize: 14, fontWeight: 400 }}>
																	{titleInfo.codeDevice}
																</Text>
															</Col>
														</Row>
													</div>
												)
											})
										}
									</div>
								</div>
								<div style={{ marginTop: 30 }}>
									<Title style={{ fontSize: 16, fontWeight: 600 }}>
										Dịch vụ sử dụng<>:</>
									</Title>
									<div style={{ marginTop: 22, fontSize: 16, fontWeight: 400, color: theme.textColorGray }}>
										<Text>
											{ValueTypeSelect.join(',')}
										</Text>
									</div>
								</div>
							</div>
						</Col>
						<Col flex="100px">
							<div>
								<div
									style={{
										marginTop: 50,
										paddingTop: 30,
										width: 80,
										height: 130,
										backgroundColor: '#FFF2E7',
										textAlign: 'center',
										borderRadius: '8px 0 8px 0',
										cursor: 'pointer'
									}}
									onClick={handleChangeUpdated}
								>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<EditSquare />
									</div>
									<div style={{ marginTop: 7 }}>
										<Text style={{ fontSize: 14, fontWeight: 600, color: '#FF7506' }}>
											Cập nhật thiết bị
										</Text>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				)
			}

			
		</ThemeProvider>
	)
}


export default InformationAdd;
