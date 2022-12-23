import '../Stack.css';

import React, { useState } from 'react';

import { Col, Row, Typography, Select, Input, Button } from 'antd'; 

const { Title, Text } = Typography;

type PropsAddFunction = {
	addSuccess?: boolean;
	onChangeClickSuccess?: () => void;
	onChangeClickFailed?: () => void;
	onChangeClickUpdated?: () => void;
}

const ButtonCancel = ({ onChangeClickFailed }: PropsAddFunction) => {
	return (
		<Button
			style={{
				width: 150,
				height: 50,
				border: '1.5px solid #FF9138',
				background: '#FFF2E7',
				borderRadius: '8px'
			}}
			type="primary"
			ghost
			onClick={onChangeClickFailed}
		>
			<Text style={{ fontSize: 16, color: '#FF9138', fontWeight: 700 }}>
				Hủy bỏ	
			</Text>
		</Button>
	)
}

const ButtonAdd = ({ onChangeClickSuccess } : PropsAddFunction) => {
	return (
		<Button
			style={{ width: 150, height: 50 }}
			className="button_primary" 
			type="primary"
			onClick={onChangeClickSuccess}
		>
			<Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}>
				Thêm thiết bị
			</Text>
		</Button>
	)
}

const ButtonUpdate = ({ onChangeClickUpdated }: PropsAddFunction) => {
	return (
		<Button
			style={{ width: 150, height: 50 }}
			className="button_primary"
			type="primary"
			onClick={onChangeClickUpdated}
		>
			<Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 700 }}>
				Thêm thiết bị
			</Text>
		</Button>
	)
}

const ButtonCancelPrintNumber = () => {
	return (
		<>
			<Button
				value="large"
				style={{
					width: 150,
					height: 50
				}}
				className="cancel_button"
			>
				<Text className='cancel_button-text'>
					Hủy bỏ
				</Text>
			</Button>
		</>
	)
}

const ButtonPrintNumber = () => {
	return (
		<>
			<Button
				value="large"
				type='primary'
				style={{
					width: 150,
					height: 50
				}}
				className="button_print"
			>
				<Text className='button-text'>
					In số
				</Text>
			</Button>
		</>
	);
}

const ButtonFuncAddAndCancelService = ({ addSuccess, onChangeClickFailedFunc, onChangeClickSuccessFunc }) => {

	return (
		<>
			<div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', paddingLeft: 60 }}>
				<div style={{ display: 'flex', justifyContent: 'space-around', width: '30%' }}>
					<div>
						<ButtonCancel
							onChangeClickFailed={onChangeClickFailedFunc}
						/>
					</div>
					<div>
						<ButtonAdd
							onChangeClickSuccess={onChangeClickSuccessFunc}
						/>
					</div>
				</div>
			</div>	
		</>
	)
}

const ButtonFuncUpdatedAndCancel = ({ addSuccess, onChangeClickFailedFunc, onChangeClickUpdatedFunc }) => {
	
	return (
		<>
			<div style={{ marginTop: 180, display: 'flex', justifyContent: 'center', paddingLeft: 60 }}>
				<div style={{ display: 'flex', justifyContent: 'space-around', width: '30%' }}>
					<div>
						<ButtonCancel
							onChangeClickFailed={onChangeClickUpdatedFunc}
						/>
					</div>
					<div>
						<ButtonUpdate
							onChangeClickUpdated={onChangeClickFailedFunc}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

const ButtonFuncPrintNumber = () => {
	return (
		<>
			<div>
				<ButtonCancelPrintNumber />
			</div>
			<div>
				<ButtonPrintNumber />
			</div>
		</>
	);
}

export { ButtonFuncAddAndCancelService, ButtonFuncPrintNumber };