import '../Stack.css';

import React, { useState } from 'react';

import { Col, Row, Typography, Select, Input, Button } from 'antd'; 

import { RiArrowGoBackFill } from 'react-icons/ri';
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

const ButtonCancelPrintNumber = ({
	onChangeCancelPrint
}) => {
	return (
		<>
			<Button
				value="large"
				style={{
					width: 150,
					height: 50
				}}
				className="cancel_button"
				onClick={onChangeCancelPrint}
			>
				<Text className='cancel_button-text'>
					Hủy bỏ
				</Text>
			</Button>
		</>
	)
}

const ButtonPrintNumber = ({
	onChangePrintNumber
}) => {
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
				onClick={onChangePrintNumber}
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

const ButtonFuncPrintNumber = ({
	onClickCancelPrint,
	onClickPrintNumber
}) => {
	return (
		<>
			<div>
				<ButtonCancelPrintNumber
					onChangeCancelPrint={onClickCancelPrint}
				/>
			</div>
			<div>
				<ButtonPrintNumber
					onChangePrintNumber={onClickPrintNumber}
				/>
			</div>
		</>
	);
}

type ButtonTypeCancelProps = {
	infoValue: boolean;
	clickCancelBackToNumber: () => void;
}

const ButtonCancels = ({ infoValue, clickCancelBackToNumber } : ButtonTypeCancelProps) => {
	return (
		<>
			<div 
				style={{
					marginLeft: 10,
					padding: 12,
					height: 80,
					backgroundColor: '#FFF2E7', 
					textAlign: 'center',
					cursor: 'pointer',
					display: `${infoValue ? 'block' : 'none'}`
				}}
				onClick={clickCancelBackToNumber}
			>
				<div style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center'
				}}>
					<div style={{
						backgroundColor: '#FF9138',
						width: 32,
						padding: 4,
						textAlign: 'center',
						borderRadius: 3
					}}>
						<Text>
							<RiArrowGoBackFill
								style={{
									color: '#FFF2E7',
									marginTop: 6
								}}
							/>
						</Text>
					</div>
				</div>
				<Text
					style={{
						color: '#FF7506',
					}}
				>
					Quay lại
				</Text>
			</div>
		</>
	)
}

export { ButtonFuncAddAndCancelService, ButtonFuncPrintNumber, ButtonCancels };