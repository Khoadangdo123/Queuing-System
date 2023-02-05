import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { IoClose } from 'react-icons/io5';

import { Typography, Input, Select, Tag, Space, Button, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import type { InputRef } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import { CgAsterisk } from 'react-icons/cg';

const { Title, Text } = Typography;

// NOTE: You are cutomize close icon in project
// const CloseIcon : React.FC = () => {
// 	return (
// 		<>
// 			<IoClose style={{ color: '#FFFFFF', fontSize: 16}} />
// 		</>
// 	)
// }

let index = 0;

const TitleServiceUse = () => {
	return (
		<>
			<Title
				level={4}
				style={{
					fontSize: 16,
					fontWeight: 600
				}}
			>
				<div style={{ display: 'flex' }}>
						{'Dịch vụ sử dụng:'}
					<div>
						<CgAsterisk style={{ marginLeft: '3px', marginTop: '3px', fontSize: 16, color: '#FF4747' }} />
					</div>
				</div>	
			</Title>
		</>
	)
}

type SelectType = {
	valueSelect: any;
	handleChangeValueSelectProps: (value: string) => void;
}

const InputInfo = ({ valueSelect, handleChangeValueSelectProps } : SelectType) => {

	let ArraysMedical = [
		'Khám tim mạch',
		'Khám sản phụ khoa',
		'Khám răng hàm mặt',
		'Khám tai mũi họng',
		'Khám hô hấp',
		'Khám tổng quát'
	];

	const [items, setItems] = useState(ArraysMedical);
	const [name, setName] = useState<string>('');
	const inputRef = useRef<InputRef>(null);

	const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const addItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
		// event.preventDefault();
		setItems([...items, name || `New items ${index++}`]);
		setName('');
		setTimeout(() => {
			inputRef.current?.focus();
		}, 0)
	}

	const options = items.map((item) => {
		return (
			{
				label: item,
				value: item
			}
		)
	})

	// NOTE: TagRender use to Select tag
	// ~ Parameter of the function TagRender have props use assignable attribute in antd
	const TagRender = (props: CustomTagProps) => {
		const { label, value, closable, onClose } = props;
	
		const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
			event.preventDefault();
			event.stopPropagation();
		}
	
		return (
			<Tag
				// closeIcon={<CloseIcon />}
				color={'#FFAC6A'}
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
				style={{ marginRight: 15, fontSize: 14, fontWeight: 700 }}
			>
				{label}
			</Tag>
		)
	};

	// NOTE: Dropdown use to Select Tags
	const DropdownRender = (menu) => {
		return (
			<>
				{menu}
				<Divider style={{ margin: '8px 0' }}>
					<Space style={{ padding: '0 8px 4px' }}>
						<Input
							placeholder={'Please enter items'}
							ref={inputRef}
							value={name}
							onChange={onNameChange}
						/>
						<Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
					</Space>
				</Divider>
			</>
		)
	};

	// ~ Not Parameter
	const SelectComponent = () => {
		return (
			<>
				<Select
					placeholder={
						'Nhập dịch vụ sử dụng'
					}
					mode="tags"
					dropdownRender={DropdownRender}
					tagRender={TagRender}
					options={options}
					style={{
						width: '95.6%',
						height: 50,
						fontSize: 16,
						marginBottom: 30
					}}
					value={valueSelect}
					onChange={handleChangeValueSelectProps}
				/>
			</>
		)
	}

	// ~ Not Parameter
	const TitleInfomation = () => {
		return (
			<>	
				<div style={{ display: 'flex' }}>		
					<div style={{ marginTop: '2.4px' }}>
						<CgAsterisk style={{ fontSize: 16, color: '#FF4747' }} />	
					</div>
					<div>
						<Text style={{ color: '#7E7D88' }}>
							Là trường thông tin bắt buộc
						</Text>	
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div
				style={{
					marginLeft: 110
				}}
			>
				<div>
					<TitleServiceUse />
					<SelectComponent />
				</div>
				<TitleInfomation />
			</div>	
		</>
	)
};

const InputInfoUpdated = ({ valueSelect, handleChangeValueSelectProps } : SelectType) => {

	let ArraysMedical = [
		'Khám tim mạch',
		'Khám sản phụ khoa',
		'Khám răng hàm mặt',
		'Khám tai mũi họng',
		'Khám hô hấp',
		'Khám tổng quát'
	];

	const [items, setItems] = useState(ArraysMedical);
	const [name, setName] = useState<string>('');
	const inputRef = useRef<InputRef>(null);

	const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const addItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
		// event.preventDefault();
		setItems([...items, name || `New items ${index++}`]);
		setName('');
		setTimeout(() => {
			inputRef.current?.focus();
		}, 0)
	}

	const options = items.map((item) => {
		return (
			{
				label: item,
				value: item
			}
		)
	})

	// NOTE: TagRender use to Select tag
	// ~ Parameter of the function TagRender have props use assignable attribute in antd
	const TagRender = (props: CustomTagProps) => {
		const { label, value, closable, onClose } = props;
	
		const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
			event.preventDefault();
			event.stopPropagation();
		}
	
		return (
			<Tag
				// closeIcon={<CloseIcon />}
				color={'#FFAC6A'}
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
				style={{ marginRight: 15, fontSize: 14, fontWeight: 700 }}
			>
				{label}
			</Tag>
		)
	};

	// NOTE: Dropdown use to Select Tags
	const DropdownRender = (menu) => {
		return (
			<>
				{menu}
				<Divider style={{ margin: '8px 0' }}>
					<Space style={{ padding: '0 8px 4px' }}>
						<Input
							placeholder={'Please enter items'}
							ref={inputRef}
							value={name}
							onChange={onNameChange}
						/>
						<Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
					</Space>
				</Divider>
			</>
		)
	};

	// ~ Not Parameter
	const SelectComponent = () => {
		return (
			<>
				<Select
					placeholder={
						'Nhập dịch vụ sử dụng'
					}
					mode="tags"
					dropdownRender={DropdownRender}
					tagRender={TagRender}
					options={options}
					style={{
						width: '95.6%',
						height: 50,
						fontSize: 16,
						marginBottom: 30
					}}
					value={valueSelect}
					onChange={handleChangeValueSelectProps}
				/>
			</>
		)
	}

	// ~ Not Parameter
	const TitleInfomation = () => {
		return (
			<>	
				<div style={{ display: 'flex' }}>		
					<div style={{ marginTop: '2.4px' }}>
						<CgAsterisk style={{ fontSize: 16, color: '#FF4747' }} />	
					</div>
					<div>
						<Text style={{ color: '#7E7D88' }}>
							Là trường thông tin bắt buộc
						</Text>	
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div
				style={{
					marginLeft: 110
				}}
			>
				<div>
					<TitleServiceUse />
					<SelectComponent />
				</div>
				<TitleInfomation />
			</div>	
		</>
	)
}

export { InputInfo, InputInfoUpdated };