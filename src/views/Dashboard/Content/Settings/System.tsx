import React, { useState } from 'react';

import { Col, Input, Typography } from 'antd';

import { BsFillPlusSquareFill } from 'react-icons/bs';

import { AddDataSystem } from './components/AddData';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { ListSystem } from './components/List';
import { InputSearch } from './components/Input';


const { Text, Title } = Typography;

type ThemeNames = keyof typeof themes;


const System = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const [add, setAdd] = useState(false);

	const theme = useTheme(themeName);

	const handleAddRules = () => {
		setAdd(!add);
	}

	return (
		<div>
			<Title level={2} style={{ color: theme.textColorOrange, fontWeight: 700, marginLeft: 60, marginTop: 10 }}>
				Danh sách vai trò				
			</Title>
			{
				add ? (
					<>
						<AddDataSystem />
					</>
				) : (
					<>
					 <ThemeProvider value={themeName}>
							<div style={{ display: 'flex', marginLeft: 38, justifyContent: 'space-between', width: '91%' }}>
								<div>
									<div></div>
								</div>
								<div>
									<InputSearch />
								</div>
							</div>
						</ThemeProvider>
						<div style={{ marginLeft: 0, marginTop: 30 }}>
							<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
								<ListSystem />
								<div style={{ textAlign: 'center', width: '6%', cursor: 'pointer' }}>
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

export default System
