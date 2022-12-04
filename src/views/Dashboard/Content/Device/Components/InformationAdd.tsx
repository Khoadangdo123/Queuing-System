import React, { useState } from 'react';
import { ReactComponent as EditSquare } from '../Img/editSquare.svg';
import { Typography, Col, Divider, Row } from 'antd';
import { ThemeProvider, themes, useTheme } from '../../../../../config/theme/theme';

const { Text, Title } = Typography;

type ThemeNames = keyof typeof themes;

const TitleInfoOne = [
	{
		title: 'Mã thiết bị',
		codeDevice: 'KIO_01',
	},
	{
		title: 'Tên thiết bị',
		codeDevice: 'Kiosk',
	},
	{
		title: 'Địa chỉ IP',
		codeDevice: '128.172.308',
	}
];

const TitleInfoTwo = [
	{
		title: 'Loại thiết bị',
		codeDevice: 'Kiosk'
	},
	{
		title: 'Tên đăng nhập',
		codeDevice: 'Linhkyo011'
	},
	{
		title: 'Mật khẩu',
		codeDevice: 'CMS'
	}
] 

const InformationAdd = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	let handleChangeUpdated = () => {
		console.log("Updated Success");
	}
	
	return (
		<ThemeProvider value={themeName}>
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
									Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.
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
			
		</ThemeProvider>
	)
}


export default InformationAdd;
