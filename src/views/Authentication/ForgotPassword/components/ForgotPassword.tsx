import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import { Col, Row, Input, Button, Typography, Image } from 'antd';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { ThemeProvider, useTheme, themes } from '../../../../config/theme/theme.js';
import { app } from '../../../../config/firebase/firebase.config';
import { Alta_Media, ForgotPasswordPage } from '../../Img/Image';

const { Title, Text } = Typography;

type ThemeNames = keyof typeof themes;

const ForgotPassword: React.FC = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const navigate = useNavigate();

	const theme = useTheme(themeName);

	const handleCancel = () => {
		navigate('/');
	}

	const [email, setEmail] = useState("");

	const handleChangeEmail = (event : ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		console.log(email);
	}

	const handleResetPassword = () => {
		const auth = getAuth(app);
		
		sendPasswordResetEmail(auth, email)
			.then((response) => {
				console.log("Data:", response);
			})
			.catch((error) => {
				console.log(error);
			})
		// console.log(result)
		
	}

	return (
		<div>
			<Row>
				<Col flex={2}>
					<div style={{
						marginTop: "130px",
						width: "100%",
						height: "500px",
						display: 'flex',
						justifyContent: 'center'
					}}>
						<div style={{
							textAlign: 'center',
							width: '60%'
						}}>
							<div style={{
								marginBottom: '100px'
							}}>
								<img src={Alta_Media} />
							</div>
							<br />
							<Title level={4} style={{
								fontSize: 22,
								fontWeight: 700,
							}}>Đặt lại mật khẩu</Title>
							<Text style={{
								fontSize: 18,
								fontWeight: 400,
							}}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</Text>
							<div>
								<Input
									placeholder="Basic usage"
									onChange={handleChangeEmail}
									style={{
										marginTop: '10px',
										width: '400px',
										height: '44px',
										borderRadius: '10px'
									}}
								/>
								<div style={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									marginTop: '40px'
								}}>
									<ThemeProvider value={themeName}>
										<div style={{
											width: '80%',
											display: "flex",
											justifyContent: "space-between",
										}}>
											<Button
												onClick={handleCancel}
												style={{
													width: '162px',
													height: '40px',
													borderRadius: '12px',
													border: `1px solid ${theme.textColorOrange}`,
													color: theme.textColorOrange
												}}
											>
												<Text style={{
													color: theme.textColorOrange
												}}>Hủy</Text>
											</Button>
											<Button
												style={{ 
													width: '162px',
													height: '40px',
													borderRadius: '12px',
													backgroundColor: theme.background,
													border: `1px solid ${theme.background}`
												}}
												type="primary"
												onClick={handleResetPassword}
											>
												Tiếp tục
											</Button>
										</div>
									</ThemeProvider>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col flex={3}>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '100px'
					}}>
						<Image
							src={ForgotPasswordPage}
						/>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default ForgotPassword;
