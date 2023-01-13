import React from 'react';

import { Link } from 'react-router-dom';
import './index.css';

import { Typography } from 'antd'

const { Text } = Typography;

const LinkDevice = () => {
	return (
		<div>
			<Link to='/device' className='hover_title'>
				Thiết bị
			</Link>
		</div>
	)
}

export default LinkDevice
