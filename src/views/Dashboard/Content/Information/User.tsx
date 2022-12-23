import React from 'react';

import '../index.css';
import './User.css';
import { UserImgPicture, PhotoIcon } from '../../Img/Image'

import { Layout, Col, Row, Image, Typography, Input } from 'antd';
import { MdPhotoCamera } from 'react-icons/md';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

const titleUser = [
	{
		titleTextOne: 'Tên người dùng',
		titleInputOne: 'Lê Quỳnh Ái Vân',
		titleTextTwo: 'Tên đăng nhập',
		titleInputTwo: 'lequynhaivan01'
	},
	{
		titleTextOne: 'Số điện thoại ',
		titleInputOne: '0767375921',
		titleTextTwo: 'Mật khẩu',
		titleInputTwo: '311940211'
	},
	{
		titleTextOne: 'Email:',
		titleInputOne: 'adminSSO1@domain.com',
		titleTextTwo: 'Vai trò:',
		titleInputTwo: 'Kế toán'
	},
]

const User: React.FC = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '94%' }}>
				<Content
					className="site-layout-background box_shadow_background"
					style={{
						margin: '120px 0 25px 0',
						padding: 24,
						minHeight: 280,
						height: 500,
						borderRadius: 20
					}}
				>
					<Row>
						<Col style={{ height: '60vh', display: 'flex', justifyContent: 'center' }} flex={1}>
							<div style={{ marginTop: 20, textAlign: 'center', position: 'relative' }}>
								<Image src={UserImgPicture}  />
								<div style={{ position: 'absolute', left: 200, top: 200 }}>
									<div style={{ position: 'relative' }}>
										<img src={PhotoIcon} />
										<MdPhotoCamera style={{ color: '#FFFFFF', fontSize: 28, position: 'absolute', right: 8, top: 9 }} />
									</div>
								</div>
								<br />
								<div style={{ marginTop: 19 }}>
									<Text style={{ fontSize: 24, fontWeight: 700, fontStyle: 'normal', color: '#282739' }}>
										Lê Quỳnh Ái Vân
									</Text>
								</div>
							</div>
						</Col>
						<Col style={{ height: '60vh', display: 'flex', justifyContent: 'center' }} flex={4}>
							<div style={{ width: '100%' }}>
								{
									titleUser.map((title, index) => {
										return (
											<div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: 20 }}>
												<div style={{ width: '38%' }}>
													<Text style={{ fontSize: 18, fontWeight: 600, color: '#282739' }}>
														{
															title.titleTextOne
														}
													</Text>
													<Input 
														bordered={false}
														style={{ marginTop: 12, height: 55, background: '#EAEAEC', color: '#535261', fontSize: 18 }} 
														placeholder={title.titleInputOne} 
													/>
												</div>
												<div style={{ width: '38%' }}>
													<Text style={{ fontSize: 18, fontWeight: 600, color: '#282739' }}>
														{
															title.titleTextTwo
														}
													</Text>
													<Input
														bordered={false}
														style={{ marginTop: 12, height: 55, background: '#EAEAEC', color: '#535261', fontSize: 18 }} 
														placeholder={title.titleInputTwo} 
													/>
												</div>
											</div>
										)
									})
								}
								
							</div>
						</Col>
					</Row>
				</Content>
			</div>
		</div>
	)
}

export default User;
