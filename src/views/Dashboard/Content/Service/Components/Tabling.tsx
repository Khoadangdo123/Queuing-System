import '../Service.css';

import React, { useState } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

const { Text, Title } = Typography;

interface DataType {
	key: string,
	codeDevice: string,
	nameDevice: string,
	ipAddress: string,
	statusActions: string[],
	statusConnects: string[],
	serviceUse: string
};

const columns: ColumnsType<DataType> = [
	{
		title: (
			<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
				Mã thiết bị
			</Text>
		),
		width: '8%',
		dataIndex: 'codeDevice',
		key: 'codeDevice',
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
		title: 'Tên thiết bị',
		dataIndex: 'nameDevice',
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
		title: 'Địa chỉ IP',
		dataIndex: 'nameDevice',
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
			<Text style={{ fontSize: 16, fontWeight: 700 }}>
				Trạng thái hoạt động
			</Text>
		),
		dataIndex: 'statusActions',
		key: 'statusActions',
		width: '13%',
		render: (_, { statusActions }) => {
			return (
				<>
					{statusActions.map((statusAction, index) => {
						let color = statusAction == 'Ngưng hoạt động' ? '#EC3740' : '#34CD26';
						return (
							<div key={index} style={{ display: 'flex' }}>
								<div style={{ marginTop: '1px', paddingRight: '2px' }}>
									<GoPrimitiveDot style={{ color: color }} />
								</div>
								<div>
									<Text key={statusAction}>
										{statusAction}
									</Text>
								</div>
							</div>
						);
					})}
				</>
			)
		},
	},
	{
		title: 'Trạng thái kết nối',
		dataIndex: 'statusConnects',
		key: 'statusConnects',
		width: '11%',
		render: (_, { statusConnects }) => {
			return (
				<>
					{
						statusConnects.map((statusConnect, index) => {
							let color = statusConnect == 'Mất kết nối' ? '#EC3740' : '#34CD26';
							return (
								<div key={index} style={{ display: 'flex' }}>
									<div style={{ marginTop: '1px', paddingRight: '2px' }}>
										<GoPrimitiveDot style={{ color: color }} />
									</div>
									<div>
										<Text key={statusConnect}>
											{statusConnect}
										</Text>
									</div>
								</div>
							)
						})
					}
				</>
			)
		},
	},
	{
		title: 'Dịch vụ sử dụng',
		dataIndex: 'serviceUse',
		key: 'serviceUse',
		width: "18%",
		render: (text) => {
			return (
				<Text>
					{text}
					<br />
					<a>Xem thêm</a>
				</Text>
			)
		},
	},
	{
		title: '',
		dataIndex: 'details',
		key: 'details',
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
		},
	},
	{
		title: '',
		dataIndex: 'updated',
		key: 'updated',
		width: '6%',
		render: (_, text) => {
			return (
				<div>
					<a
						style={{
							textDecoration: 'underline'
						}}
						href=""
					>Cập nhật</a>
				</div>
			)
		}
	}
];

const data: DataType[] = [
	{
		key: '1',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Ngưng hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '2',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Kết nối']
	},
	{
		key: '3',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '4',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '5',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '6',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '7',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '8',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '9',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
	},
	{
		key: '10',
		codeDevice: 'KIO_01',
		nameDevice: 'Kiosk',
		ipAddress: '192.168.1.10',
		serviceUse: 'Khám tim mạch, Khám mắt...',
		statusActions: ['Hoạt động'],
		statusConnects: ['Mất kết nối']
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

	// const handleTableChange: TableProps<any>["onChange"] = (pagination) => {
	// 	setPagination
	// }

	return (
		<div>
			<Table
				columns={columns}
				dataSource={data}
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
