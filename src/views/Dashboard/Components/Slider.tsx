import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


import { Alta_Media } from '../../Authentication/Img/Image';
import { ThemeProvider, useTheme, themes } from '../../../config/theme/theme';

import { RiDashboardLine } from 'react-icons/ri';
import { TbDeviceDesktop } from 'react-icons/tb';
import { TiMessages } from 'react-icons/ti';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiStackLine, RiFilePaper2Line, RiSettingsLine } from 'react-icons/ri';

import { Layout, Menu, Typography } from 'antd';
import { getAuth, signOut } from 'firebase/auth';
import type { MenuProps } from 'antd';
import LinkDashBoard from './NavLinkSlider/LinkDashBoard';
import LinkDevice from './NavLinkSlider/LinkDevice';
import LinkService from './NavLinkSlider/LinkService';
import LinkStack from './NavLinkSlider/LinkStack';
import LinkReport from './NavLinkSlider/LinkReport';
import { LinkSettingSystem, LinkSettingAccount, NoteUser } from './NavLinkSlider/LinkSetting';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];
type ThemeNames = keyof typeof themes;

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
) : MenuItem
{
	return {
		key,
		icon,
		children,
		label
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem(<LinkDashBoard />, '1', <RiDashboardLine />),
	getItem(<LinkDevice />, '2', <TbDeviceDesktop />),
	getItem(<LinkService />, '3', <TiMessages />),
	getItem(<LinkStack />, '4', <RiStackLine />),
	getItem(<LinkReport />, '5', <RiFilePaper2Line />),
	getItem('Cài đặt hệ thống', '6', <RiSettingsLine />, [
		getItem(<LinkSettingSystem />, '7'),
		getItem(<LinkSettingAccount />, '8'),
		getItem(<NoteUser />, '9')
	])
]

const Slider = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const navigate = useNavigate();

	const theme = useTheme(themeName);

	const [collapsed, setCollapsed] = useState(false);

	const handleChangeInfo = () => {
		navigate('/')
	}

	const handleLogOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("oke")
      })
      .catch((error) => {
        console.log(error)
      })
  }

	return (
		<div>
			<Sider theme='light'>
				<div style={{
					textAlign: 'center',
					padding: '30px 0 30px 0'
				}}>
					<img style={{ width: 100, height: 80 }} src={Alta_Media} onClick={handleChangeInfo} />
				</div>
				<Menu
					theme='light'
					mode="inline"
					items={items}
				/>
				<ThemeProvider value={themeName}>
					<div onClick={handleLogOut} style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', marginTop: 400 }}>
						<div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
							<div style={{ lineHeight: '33px' }}>
								<FaSignOutAlt style={{ fontSize: 16, color: theme.textColorOrange }} />
							</div>
							<Text style={{ fontSize: 16, color: theme.textColorOrange, fontWeight: 600 }}>
								Đăng xuất
							</Text>
						</div>
					</div>
				</ThemeProvider>
			</Sider>
		</div>
	)
}

export default Slider;
