
import React, { useState } from 'react';

import { Typography } from 'antd';

import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { ListAccount } from './components/List';
import { InputSearch, SelectText } from './components/Input';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AddDataAccount } from './components/AddData';

type ThemeNames = keyof typeof themes;

const { Text, Title } = Typography;


const Account = () => {

	const [add, setAdd] = useState(true);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);


	const handleAddRules = () => {
		setAdd(!add);
	}

	return (
		<div>
			{
				add ? (
					<>
						<Title 
							level={3} 
							style={{ marginLeft: 62, marginTop: 30, color: '#FF7506', fontWeight: 900, fontStyle: 'normal' }}
						>
							Quản lý tài khoản
						</Title>
						<AddDataAccount />
					</>
				) : (
					<>
						<Title
							level={4}
							style={{
								fontSize: 26,
								color: '#FF7506',
								fontStyle: 'normal',
								fontWeight: 700,
								marginLeft: 64,
								marginTop: 10
							}}
						>
							Danh sách tài khoản
						</Title>
						<ThemeProvider value={themeName}>
							<div style={{ display: 'flex', marginLeft: 38, justifyContent: 'space-between', width: '91%', marginTop: 30 }}>
								<div>
									<SelectText />
								</div>
								<div>
									<InputSearch />
								</div>
							</div>
						</ThemeProvider>
						<div style={{ marginLeft: 0, marginTop: 30 }}>
							<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
								<ListAccount />
								<div
									onClick={handleAddRules}
									style={{ textAlign: 'center', width: '6%', cursor: 'pointer' }}
								>
									<div
										onClick={handleAddRules}
										style={{ height: 120, backgroundColor: '#FFF2E7', padding: '20px 0 20px 0px' }}
									>
										<BsFillPlusSquareFill style={{ fontSize: 22, color: '#FF9138' }} />
										<br />
										<div style={{ width: '100%' }}>
											<Text style={{ color: '#FF9138', fontWeight: 600, fontSize: 16 }}>
												<Text style={{ color: '#FF9138' }}>
													Thêm
												</Text>
												<br />
												<Text style={{ color: '#FF9138' }}>
													vai trò
												</Text>
											</Text>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)
			}
			
		</div>
	)
}

export default Account
