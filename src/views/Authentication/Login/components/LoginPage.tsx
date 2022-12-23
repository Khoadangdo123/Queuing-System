import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"; 

import { app } from '../../../../config/firebase/firebase.config.js';
import { ThemeProvider, useTheme, themes } from '../../../../config/theme/theme.js';
import { Alta_Media, QuanLyBanHang } from '../../Img/Image.js';
import '../../styles/input.css';

import { Col, Row, Input, Typography, Button, Image } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

type ThemeName = keyof typeof themes;

const LoginPage: React.FC = () => {

	const [themeName, setThemeName] = useState<ThemeName>('main');

	useEffect(() => {
		let name: ThemeName = 'buttonColorSubmit';
		setThemeName(name);
	}, []);

	const theme = useTheme(themeName);

	const [email, setEmail] = useState("");
	const [inputEmail, setInputEmail] = useState(true);
	const [password, setPassword] = useState("");
	const [inputPassword, setInputPassword] = useState(true);
	const [passwordError, setPasswordError] = useState("");

	const clearError = () => {
    setPasswordError('');
	}
	
	const handleChangeEmail = (event : ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
		console.log(email)
	}

	const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		console.log(password);
	}

	
	const handleLogin = () => {
    clearError();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
						setInputEmail(!inputEmail);
						break;
					case "auth/wrong-password": {
						setInputPassword(!inputPassword);
						setInputEmail(!inputEmail);
						setPasswordError("Sai mật khẩu hoặc tên đăng nhập");
						break;
					}
					case "auth/internal-error": {
						setInputPassword(!inputPassword);
						break;
					}
					default: {
						console.error("Status Error 400")
					}
        }
        console.log(error.code);
        // console.log(error.message);
      })
	}

	return (
		<div style={{
			width: "100%",
			// height: "1009px",
		}}>
			<div className='space-align-block'>
				<Row style={{
					width: "100%",
					// height: "900px",
					marginTop: "136px"
				}}>
					<Col
						flex={3}
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div style={{
							width: "50%",
							height: "100%"
						}}>
							<div style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								marginBottom: "100px"
							}}>
								<Image
									width={300}
									height={200}
									src={Alta_Media}
								/>
							</div>
							<Title level={5} style={{ fontWeight: 400 }}>Tên Đăng Nhập *</Title>
							{
								inputEmail ? (
									<>
										<Input
											className='input_email'
											style={{ width: '100%', height: '44px', borderRadius: "10px", marginBottom: '10px' }}
											placeholder="Email"
											required
											value={email}
											onChange={handleChangeEmail}
											autoFocus
										/>
									</>
								) : (
									<>
										<Input
											className='input_email'
											status="error"
											style={{ width: '100%', height: '44px', borderRadius: "10px", marginBottom: '10px' }}
											placeholder="Email"
											value={email}
											onChange={handleChangeEmail}
											autoFocus
										/>
									</>
								)
							}
							
							<br />
							<Title level={5} style={{ fontWeight: 400 }}>Mật khẩu *</Title>
							{
								inputPassword ? (
									<Input.Password
										className="input_password"
										required
										style={{ width: '100%', height: '44px', borderRadius: "10px", marginBottom: '10px' }}
										value={password}
										onChange={handleChangePassword}
										placeholder="input password"
									/>
								) : (
									<>
										<Input.Password
											status="error"	
											className="input_password"
											style={{ width: '100%', height: '44px', borderRadius: "10px", marginBottom: '10px' }}
											value={password}
											onChange={handleChangePassword}
											placeholder="input password"
										/>
										<Text
											type="danger"
											style={{
												display: "block",
											}}	
										>
											<WarningOutlined style={{ fontSize: "16px" }} /> { passwordError }
										</Text>
									</>
										
								)
							}
							<Link to="/forgotpassword">
								<Text type="danger" style={{ margin: '10px 0 10px 0', display: 'inline-block', fontWeight: 400, fontStyle: 'normal' }}>
									Quên mật khẩu ?
								</Text>
							</Link>
							<br />
							<ThemeProvider value={themeName}>
								<Button
									style={{
										width: "40%",
										height: "40px",
										borderRadius: '5px',
										backgroundColor: theme.background,
										color: theme.textColorPrimary,
									}}
									onClick={handleLogin}
								>
									Đăng nhập
								</Button>
							</ThemeProvider>
						</div>
						
					</Col>
					<Col flex={2}>
						<div style={{
							width: "100%",
							position: 'relative'
						}}>
							<img
								src={QuanLyBanHang}
								style={{
									marginLeft: "80px"
								}}
							/>
							<ThemeProvider value={themeName}>
								<div className='text_tittle'>
									<div className='text_he_thong'>
										<Text
											style={{
												fontSize: 36,
												fontWeight: 400,
												color: theme.textColorOrange
											}}
										>Hệ thống</Text>
									</div>
									<div className='text_quan_ly_xep_hang'>
										<Text
											style={{
												fontSize: 40,
												fontWeight: 900,
												color: theme.textColorOrange
											}}
										>
											QUẢN LÝ XẾP HÀNG
										</Text>
									</div>
								</div>
							</ThemeProvider>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default LoginPage;
