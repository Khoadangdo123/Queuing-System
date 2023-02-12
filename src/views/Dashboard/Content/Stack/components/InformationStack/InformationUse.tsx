import React, { CSSProperties } from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography

const InformationUse = () => {

	let dataPrintNumberOne = [
		{
			Title: 'Họ tên:',
			Text: 'Nguyễn Thị Dung',
		},
		{
			Title: 'Tên dịch vụ:',
			Text: 'Khám tim mạch',
		},
		{
			Title: 'Số thứ tự:',
			Text: '2001201',
		},
		{
			Title: 'Thời gian cấp:',
			Text: '14:35 - 07/11/2021',
		},
		{
			Title: 'Hạn sử dụng:',
			Text: '18:00 - 07/11/2021',
		},
	];

	const dataPrintNumberTwo = [
		{
			Title: 'Nguồn cấp:',
			Text: 'Kiosk'
		},
		{
			Title: 'Trạng thái:',
			Text: 'Đang chờ'
		},
		{
			Title: 'Số điện thoại:',
			Text: '0948523623'
		},
		{
			Title: 'Địa chỉ Email:',
			Text: 'nguyendung@gmail.com'
		},
	]

	const TextAlignStyle : CSSProperties = {
		display: 'flex',
		marginTop: 10,
		marginBottom: 10
	}

	const TitleComponentStyle : CSSProperties = {
		width: 100,
		height: 20,
		textAlign: 'left',
		fontWeight: 600
	}

	return (
		<div>
			<Title level={4} style={{ textAlign: 'left', fontWeight: 700, fontSize: 20, color: '#FF7506' }}>
				Thông tin cấp số
			</Title>
			<div style={{
				display: 'flex',
			}}>
				<div>
					{
						dataPrintNumberOne.map((index, key) => {
							return (
								<>
									<div key={key} style={TextAlignStyle}>
										<div style={TitleComponentStyle}>
											<Text>
												{index.Title}
											</Text>
										</div>
										<div
											style={{
												marginLeft: 70
											}}
										>
											<Text>
												{index.Text}
											</Text>
										</div>
									</div>
								</>
							)
						})
					}
				</div>
				<div style={{
					marginLeft: 300
				}}>
					{
						dataPrintNumberTwo.map((index, key) => {
							return (
								<>
									<div key={key} style={TextAlignStyle}>
										<div style={TitleComponentStyle}>
											<Text>
												{index.Title}
											</Text>
										</div>
										<div
											style={{
												marginLeft: 70
											}}
										>
											<Text>
												{index.Text}
											</Text>
										</div>
									</div>
								</>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export { InformationUse }
