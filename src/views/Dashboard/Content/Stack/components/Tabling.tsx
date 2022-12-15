import '../Stack.css';

import React, { useState } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

const { Text, Title } = Typography;

interface DataType {
	key: string;
	number: string;
	nameCustomer: string;
	nameService: string;
	deliveryTime: string;
	expiry: string;
	status: string;
	supply: string;
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
		dataIndex: 'number',
		key: 'number',
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
		dataIndex: 'nameCustomer',
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
		dataIndex: 'nameService',
		key: 'nameService',
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
		dataIndex: 'deliveryTime',
		key: 'deliveryTime',
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
		dataIndex: 'expiry',
		key: 'expiry',
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
		dataIndex: 'status',
		key: 'status',
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
		dataIndex: 'supply',
		key: 'supply',
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

const data: DataType[] = [
	{
		key: '1',
		number: '2010001',
		nameCustomer: 'Lê Huỳnh Ái Vân',
		nameService: 'Khám tim mạch',
		deliveryTime: '14:35 - 07/11/2021.',
		expiry: '14:35 - 12/11/2021',
		status: 'Đang chờ',
		supply: 'Ngưng oạt động',
	},
	{
		key: '2',
		number: '2010002',
		nameCustomer: 'Huỳnh Ái Vân',
		nameService: 'Khám sản - Phụ Khoa',
		deliveryTime: '14:35 - 07/11/2021.',
		expiry: '14:35 - 12/11/2021',
		status: 'Đã sử dụng',
		supply: 'Hoạt động',
	},
	{
		key: '3',
		number: '2010003',
		nameCustomer: 'Lê Ái Vân',
		nameService: 'Khám răng hàm mặt',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Đã sử dụng',
		supply: 'Hoạt động',
	},
	{
		key: '4',
		number: '2010004',
		nameCustomer: 'Nguyễn Ái Vân',
		nameService: 'Khám tai mũi họng',
		deliveryTime: '14:35 - 07/11/2021.',
		expiry: '14:35 - 12/11/2021',
		status: 'Đang chờ',
		supply: 'Hoạt động',
	},
	{
		key: '5',
		number: '2010005',
		nameCustomer: 'Trần Thị Ái Vân',
		nameService: 'Khám hô hấp',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Đang chờ',
		supply: 'Hoạt động',
	},
	{
		key: '6',
		number: '2010006',
		nameCustomer: 'Lê Huỳnh Nghĩa',
		nameService: 'Khám tổng quát',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Đang chờ',
		supply: 'Hoạt động',
	},
	{
		key: '7',
		number: '2010007',
		nameCustomer: 'Lê Huỳnh Đức',
		nameService: 'Khám tai mũi họng',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Đã sử dụng',
		supply: 'Hoạt động',
	},
	{
		key: '8',
		number: '2010008',
		nameCustomer: 'Kiosk',
		nameService: 'Khám tổng quát',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Đã sử dụng',
		supply: 'Hoạt động',
	},
	{
		key: '9',
		number: '2010009',
		nameCustomer: 'Phạm Văn Mạnh',
		nameService: 'Khám tai mũi họng',
		deliveryTime: '14:35 - 07/11/2021',
		expiry: '14:35 - 12/11/2021',
		status: 'Bỏ qua',
		supply: 'Hoạt động',
	},
	{
		key: '10',
		number: '2010000',
		nameCustomer: 'Khám tổng quát',
		nameService: '192.168.1.10',
		deliveryTime: '14:35 - 07/11/2021.',
		expiry: '14:35 - 12/11/2021',
		status: 'Đã sử dụng',
		supply: 'Hoạt động',
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
