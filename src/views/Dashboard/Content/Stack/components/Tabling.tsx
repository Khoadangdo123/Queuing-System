import '../Stack.css';

import React, { useContext, useEffect, useState } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';
import { StackContext } from '../Stack';

const { Text, Title } = Typography;

interface DataType {
	key: string;
	STT: string;
	NameCustomer: string;
	NameService: string;
	TimeProvider: string;
	TimeOut: string;
	Status: string;
	Provide: string;
};

const styleTextColumn = {
	color: '#FFFFFF',
	fontSize: 16,
	fontWeight: 700
}

const columns: ColumnsType<DataType> = [
	{
		title: (
			<Text style={styleTextColumn}>
				STT
			</Text>
		),
		width: '4%',
		dataIndex: 'STT',
		key: 'STT',
		render: (text) => {
			return (
				<>
					<div>
						<Text>
							{text}
						</Text>
					</div>
				</>
			)
		}
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Tên khách hàng
			</Text>
		),
		dataIndex: 'NameCustomer',
		key: 'nameDevice',
		width: '8%',
		render: (text) => {
			return (
				<>
					<div>
						<Text>
							{text}
						</Text>
					</div>
				</>
			)
		}
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Tên dịch vụ 
			</Text>
		),
		dataIndex: 'NameService',
		key: 'NameService',
		width: '8%',
		render: (text) => {
			return (
				<>
					<div>
						<Text>
							{text}
						</Text>
					</div>
				</>
			)
		}
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Thời gian cấp
			</Text>
		),
		dataIndex: 'TimeProvider',
		key: 'TimeProvider',
		width: '8%',
		render: (text) => {
			return (
				<>
				<div>
					<Text>
						{text}
					</Text>
				</div>
				</>
			)
		},
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Hạn sử dụng
			</Text>
		),
		dataIndex: 'TimeOut',
		key: 'TimeOut',
		width: '8%',
		render: (text) => {
			return (
				<>
					<div>
						<Text>
							{text}
						</Text>
					</div>
				</>
			)
		},
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Trạng thái
			</Text>
		),
		dataIndex: 'Status',
		key: 'Status',
		width: "6%",
		render: (text) => {
			if (text == 'Đang chờ') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#4277FF' }} />
								<Text>
									Đang chờ
								</Text>
							</Space>
						</div>
					</div>
				)
			} else if (text == 'Đã sử dụng') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#7E7D88' }} />
								<Text>
									Đã sử dụng
								</Text>
							</Space>
						</div>
					</div>
				)
			} else if (text == 'Bỏ qua') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#E73F3F' }} />
								<Text>
									Bỏ qua
								</Text>
							</Space>
						</div>
					</div>
				)
			} else {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<Text>
									Lỗi
								</Text>
							</Space>
						</div>
					</div>
				)
			}
		},
	},
	{
		title: (
			<Text style={styleTextColumn}>
				Nguồn cấp
			</Text>
		),
		dataIndex: 'Provide',
		key: 'Provide',
		width: '6%',
		render: (text) => {
			return (
				<div className="space-align-container">
					<div className="space-align-block">
						<Space align='center'>
							<Text>
								{text}
							</Text>
						</Space>
					</div>
				</div>
			)
		},
	},
	{
		title: '',
		dataIndex: 'updated',
		key: 'updated',
		width: '6%',
		render: (text) => {
			return (
				<div>
					<a
						style={{
							textDecoration: 'underline'
						}}
						href=""
					>
						Chi tiết
					</a>
				</div>
			)
		}
	}
];

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
	if (type === 'prev') {
		return (
			<>
				<RiArrowLeftSFill style={{ fontSize: 22, marginTop: '5px' }} />
			</>
		)
	}
	if (type === 'next') {
		return (
			<>
				<RiArrowRightSFill style={{ fontSize: 22, marginTop: '5px' }} />
			</>
		)
	}
	return originalElement;
}

const Tabling = () => {

	const [pagination, setPagination] = useState({});
	const [totalPages, setTotalPages] = useState(10);

	const { stackData } = useContext(StackContext);

	useEffect(() => {
		console.log(stackData);
	}, [])

	return (
		<div>
			<Table
				columns={columns}
				dataSource={stackData}
				pagination={{ 
					pageSize: 9,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

export default Tabling;
