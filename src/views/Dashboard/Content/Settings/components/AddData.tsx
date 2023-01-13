import React, { useState } from 'react';

import { Typography, Row, Col, Space, Checkbox } from 'antd';

import { FaAsterisk } from 'react-icons/fa';

import styles from './AddData.module.css';

import { InputText, InputTextArea, InputTextSystem, SelectTextRowOne, SelectTextRowTwo } from './Input';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ButtonClickCancelAndAdd } from './ButtonFunc';

const styleIconAsterisk = {
	fontSize: 8,
	color: '#FF4747',
	marginLeft: 6,
	marginTop: 2
};

const styleText = {
	fontSize: 16,
	fontWeight: 600,
	fontStyle: 'normal',
	color: '#535261'
};

const horizontalCheckBox = {
	marginBottom: 10,
	marginTop: 10
}

const boxFunctionChild = {
	padding: '5px 10px 20px 10px',
	marginTop: 22,
	marginBottom: 22
}

// NOTE: Style Text  of Fucntion Group A,B
const textStyle = {
	marginBottom: 20,
	fontWeight: 700,
	color: '#FF7506'
}

const { Title, Text } = Typography;

const AddDataSystem = () => {

	const [addSuccess, setAddSuccess] = useState(false);

	const groupFunction = [
		{
			value: '1',
			text: 'Tất cả',
		},
		{
			value: '2',
			text: 'Chức năng x',
		},
		{
			value: '3',
			text: 'Chức năng y',
		},
		{
			value: '4',
			text: 'Chức năng z',
		}
	];

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div className={`${styles.layout_add}`}>
				<Title level={4}>
					Thông tin vai trò
				</Title>
				<div>
					{
						addSuccess ? (
							<>
								Update
							</>
						) : (
							<>
								<Row style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Col span={11}>
										<div>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Title level={4}>
															Tên vai trò
															<Text style={styleIconAsterisk}>
																<FaAsterisk />
															</Text>
														</Title>
													</Space>
												</div>
											</div>
											<InputTextSystem />
										</div>
										<div style={{ marginTop: 30 }}>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Title level={4}>
															Mô tả:
														</Title>
													</Space>
												</div>
											</div>
											<InputTextArea />
										</div>
										<div style={{ marginTop: 20 }}>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Text>
															<Text>
																<FaAsterisk style={
																	{
																		fontSize: 8,
																		color: '#FF4747',
																		marginRight: 10
																	}
																}
																/>
															</Text>
															<Text style={{ lineHeight: 2, fontSize: 16, fontWeight: 500, fontStyle: 'normal', color: '#7E7D88' }}>
																Là trường thông tin bắt buộc
															</Text>
														</Text>
													</Space>
												</div>
											</div>
										</div>
									</Col>
									<Col span={11}>
										<div className="space-align-container">
											<div className="space-align-block">
												<Space align="center">
													<Title level={4}>
														Phân quyền chức năng
														<Text style={styleIconAsterisk}>
															<FaAsterisk />
														</Text>
													</Title>
												</Space>
											</div>
										</div>
										<div className={`${styles.box_function}`}>
											<div style={boxFunctionChild}>
												<Title
													style={textStyle}
													level={3}
												>
													Nhóm chức năng A
												</Title>
												{
													groupFunction.map((index) => {
														return (
															<div 
																key={index.value}
																style={horizontalCheckBox}>
																<Checkbox
																	onChange={onChange}
																>
																	<Text
																		style={styleText}
																	>
																		{index.text}
																	</Text>
																</Checkbox>
															</div>
														)
													})
												}
											</div>
											<div style={boxFunctionChild}>
												<Title
													style={textStyle}
													level={3}
												>
													Nhóm chức năng B
												</Title>
												{
													groupFunction.map((index) => {
														return (
															<div 
																key={index.value}
																style={horizontalCheckBox}>
																<Checkbox
																	onChange={onChange}
																>
																	<Text
																		style={styleText}
																	>
																		{index.text}
																	</Text>
																</Checkbox>
															</div>
														)
													})
												}
											</div>
										</div>
									</Col>
								</Row>
								<ButtonClickCancelAndAdd />
							</>
						)
					}
					
				</div>
			</div>
		</div>
	)
}

const AddDataAccount = () => {

	const [addSuccess, setAddSuccess] = useState(false);


	const InputRowOne = [
		{
			key: 1,
			name: 'Họ tên',
			placeholderName: 'Nhập họ tên',
			type: 'text'
		},
		{
			key: 2,
			name: 'Số điện thoại',
			placeholderName: 'Nhập số điện thoại',
			type: 'text'
		},
		{
			key: 3,
			name: 'Email',
			placeholderName: 'Nhập email',
			type: 'text'
		}
	];

	const InputRowTwo = [
		{
			key: 1,
			name: 'Tên đăng nhập:',
			placeholderName: 'Nhập họ tên',
			type: 'text'
		},
		{
			key: 2,
			name: 'Mật khẩu:',
			placeholderName: 'Nhập mật khẩu',
			type: 'password'
		},
		{
			key: 3,
			name: 'Nhập lại mật khẩu',
			placeholderName: 'Nhập lại mật khẩu',
			type: 'password'
		}
	]

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div className={`${styles.layout_add}`}>
				<Title level={4}>
					Thông tin tài khoản
				</Title>
				<div>
					{
						addSuccess ? (
							<>
								Update
							</>
						) : (
							<>
								<Row style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Col span={11}>
										{
											InputRowOne.map((index) => {
												return (
													<div key={index.key} style={{ marginTop: 34 }}>
														<div className="space-align-container">
															<div className="space-align-block">
																<Space align="center">
																	<Title level={4} style={{ color: '#282739' }}>
																		{index.name}
																		<Text style={styleIconAsterisk}>
																			<FaAsterisk />
																		</Text>
																	</Title>
																</Space>
															</div>
														</div>
														<InputText
															type={index.type}
															placehoderType={index.placeholderName}	
														/>
													</div>
												)
											})
										}
										<div style={{ marginTop: 34 }}>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Title level={4} style={{ color: '#282739' }}>
															Email
															<Text style={styleIconAsterisk}>
																<FaAsterisk />
															</Text>
														</Title>
													</Space>
												</div>
											</div>
											<SelectTextRowOne />
										</div>
										<div style={{ marginTop: 20 }}>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Text>
															<Text>
																<FaAsterisk style={
																	{
																		fontSize: 8,
																		color: '#FF4747',
																		marginRight: 10
																	}
																}
																/>
															</Text>
															<Text style={{ lineHeight: 2, fontSize: 16, fontWeight: 500, fontStyle: 'normal', color: '#7E7D88' }}>
																Là trường thông tin bắt buộc
															</Text>
														</Text>
													</Space>
												</div>
											</div>
										</div>
									</Col>
									<Col span={11}>
										{
											InputRowTwo.map((index) => {
												return (
													<div key={index.key} style={{ marginTop: 34 }}>
														<div className="space-align-container">
															<div className="space-align-block">
																<Space align="center">
																	<Title level={4}>
																		{index.name}
																		<Text style={styleIconAsterisk}>
																			<FaAsterisk />
																		</Text>
																	</Title>
																</Space>
															</div>
														</div>
														<InputText
															type={index.type}
															placehoderType={index.placeholderName}	
														/>
													</div>
												)
											})
										}
										<div style={{ marginTop: 34 }}>
											<div className="space-align-container">
												<div className="space-align-block">
													<Space align="center">
														<Title level={4}>
															Tình trạng
															<Text style={styleIconAsterisk}>
																<FaAsterisk />
															</Text>
														</Title>
													</Space>
												</div>
											</div>
											<SelectTextRowTwo />
										</div>
									</Col>
								</Row>
								<ButtonClickCancelAndAdd />
							</>
						)
					}
					
				</div>
			</div>
		</div>
	)
}

export { AddDataSystem, AddDataAccount }
