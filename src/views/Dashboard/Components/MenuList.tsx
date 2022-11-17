import React from 'react';

import './MenuList.css';

import { Typography  } from 'antd';
import { RiDashboardLine } from 'react-icons/ri';

const { Text } = Typography;

export const MenuListDashBoard = () => {
	return (
		<div className='menu_list'>
			<div style={{ marginTop: '2px' }}>
				<RiDashboardLine style={{ color: '#7E7D88', fontSize: 16 }} />
			</div>
			<Text style={{ color: '#7E7D88' }}>
				Dashboard
			</Text>
		</div>
	)
}
