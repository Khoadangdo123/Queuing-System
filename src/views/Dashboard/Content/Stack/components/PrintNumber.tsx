import React, { CSSProperties } from 'react';
import { Card, Typography } from 'antd';

const { Meta } = Card;
const { Title, Text } = Typography;

const ContentTitle = () => {

	return (
		<>
			<div
				style={{
					width: 350,
				}}
			>
				<Title 
					level={2}
					style={{
						color: '#535261'
					}}
				>
					Số thứ tự được cấp
				</Title>
				<Title
					level={1}
					style={{
						fontWeight: 800,
						color: '#FF7506'
					}}
				>
					2001201
				</Title>
				<Title 
					level={5}
				>
					<Text style={{ fontWeight: 400, color: '#282739' }}>
						DV: Khám răng hàm mặt { " " }
					</Text>
					<Text style={{ fontWeight: 800, color: '#282739' }}>
						(tại quầy số 1)
					</Text>
				</Title>
			</div>
		</>
	)
};

const ComponentText = () => {

	const styleText : CSSProperties = {
		fontSize: 22,
		fontWeight: 700,
		lineHeight: 2,
		color: '#FFFFFF'
	}

	return (
		<>
			<div style={{
				width: '100%',
				textAlign: 'center',
				marginTop: 20,
				backgroundColor: '#FF9138',
				borderRadius: 10
			}}>
				<div>
					<Text style={styleText}>
						Thời gian cấp :
					</Text>
					<Text style={styleText}>
						{" "} 09:30 11/10/2021
					</Text>
				</div>
				<div>
					<Text style={styleText}>
						Hạn sử dụng :
					</Text>
					<Text style={styleText}>
						{" "} 09:30 11/10/2021
					</Text>
				</div>
			</div>
		</>
	)
}

const PrintNumber = () => {

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Card
				hoverable
				style={{ 
					width: 480,
					height: 350,
					padding: 20,
					textAlign: 'center'
				}}
				cover={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							textAlign: 'center',
						}}
					>
						<ContentTitle />
					</div>
				}
			>
				<div>
					<>
						<ComponentText />
					</>
				</div>
			</Card>
		</div>
	)
}
export { PrintNumber }