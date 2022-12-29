import React from 'react';

import { Typography } from 'antd';

import { BsFillPlusSquareFill } from 'react-icons/bs';

import { ListSystem } from './components/List';

const { Text } = Typography;

const System = () => {
	return (
		<div style={{ marginLeft: 70, marginTop: 30 }}>
			<div style={{ width: '94%', display: 'flex', justifyContent: 'space-between' }}>
				<ListSystem />
				<div style={{ textAlign: 'center' }}>
					<BsFillPlusSquareFill />
					<br />
					<div style={{  }}>
						<Text>
							Thêm vai trò
						</Text>
					</div>
				</div>
			</div>
		</div>
	)
}

export default System
