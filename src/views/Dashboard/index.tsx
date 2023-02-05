import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"; 

import './index.css';

import { RiDashboardLine } from 'react-icons/ri';
import { TbDeviceDesktop } from 'react-icons/tb';
import { TiMessages } from 'react-icons/ti';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiStackLine, RiFilePaper2Line, RiSettingsLine } from 'react-icons/ri';

import { Image, Typography, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { ThemeProvider, useTheme, themes } from '../../config/theme/theme';
import Slider from './Components/Slider';
import Heading from './Components/Heading/Heading';
import User from './Content/Information/User';
// Routes all of contents
import DashBoard from './Content/DashBoard/DashBoard';
import { Device } from './Content/Device/Device';
import Report from './Content/Report/Report';
import Stack from './Content/Stack/Stack';
import Service from './Content/Service/Service';
import System from './Content/Settings/System';
import Account from './Content/Settings/Account';
import Notes from './Content/Settings/Notes';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography ;

type ThemeNames = keyof typeof themes;

const MainContent: React.FC = () => {
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');

	const theme = useTheme(themeName);

	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<ThemeProvider value={themeName}>
				<Layout
					style={{
						height: '100vh'
					}}
				>
					<Slider />
					<Layout className="site-layout">
						<Heading />
						<Routes>
							<Route path='/' element={<User />} />
							<Route path='/dashboard' element={<DashBoard />} />
							<Route path='/device' element={<Device />} />
							<Route path='/report' element={<Report />} />
							<Route path='/stack' element={<Stack />} />
							<Route path='/service' element={<Service />} />
							<Route path='/settingsystem' element={<System />} />
							<Route path='/settingaccount' element={<Account />} />
							<Route path='/noteuser' element={<Notes />} />
						</Routes>
					</Layout>
				</Layout>
			</ThemeProvider>
		</div>
	)
}

export default MainContent;