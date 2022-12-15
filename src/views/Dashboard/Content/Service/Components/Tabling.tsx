import '../Service.css';

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
	status: string;
};

const columns: ColumnsType<DataType> = [
	{
		title: 'Số thứ tự',
		dataIndex: 'number',
		key: 'number',
		render: (text) => {
			return (
				<Text style={{ fontSize: 14, fontWeight: 400, color: '#535261' }}>
					{text}
				</Text>
			);
		}
	},
	{
		title: 'Trạng thái',
		dataIndex: 'status',
		key: 'status',
		render: (text) => {
			if (text == 'Đã hoàn thành') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align="center">
								<GoPrimitiveDot style={{ color: '#34CD26', marginTop: 6 }} />
								<Text style={{ fontSize: 14, color: '#535261', fontWeight: 400 }}>
									Đã hoàn thành
								</Text>
							</Space>
						</div>
					</div>
				)
			} else if (text == 'Đang thực hiện') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align="center">
								<GoPrimitiveDot style={{ color: '#5490EB', marginTop: 6 }} />
								<Text style={{ fontSize: 14, color: '#535261', fontWeight: 400 }}>
									Đã hoàn thành
								</Text>
							</Space>
						</div>
					</div>
				)
			} else if (text == 'Vắng') {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align="center">
								<GoPrimitiveDot style={{ color: '#6C7585', marginTop: 6 }} />
								<Text style={{ fontSize: 14, color: '#535261', fontWeight: 400 }}>
									Vắng
								</Text>
							</Space>
						</div>
					</div>
				)
			} else {
				return (
					<div className="space-align-container">
						<div className="space-align-block">
							<Space align="center">
								<Text style={{ fontSize: 14, color: '#535261', fontWeight: 400 }}>
									Không có dữ liệu
								</Text>
							</Space>
						</div>
					</div>
				)
			}
		}
	}
];

const data: DataType[] = [
	{
		key: '1',
		number: '2010001',
		status: 'Đã hoàn thành'
	},
	{
		key: '2',
		number: '2010002',
		status: 'Đã hoàn thành'
	},
	{
		key: '3',
		number: '2010003',
		status: 'Đang thực hiện'
	},
	{
		key: '4',
		number: '2010004',
		status: 'Vắng'
	},
	{
		key: '5',
		number: '2010005',
		status: 'Đã hoàn thành'
	},
	{
		key: '6',
		number: '2010006',
		status: 'Đang thực hiện'
	},
	{
		key: '7',
		number: '2010007',
		status: 'Vắng'
	},
	{
		key: '8',
		number: '2010008',
		status: 'Đã hoàn thành'
	},
	{
		key: '9',
		number: '2010009',
		status: 'Vắng'
	},
	{
		key: '10',
		number: '2010000',
		status: 'Đã hoàn thành'
	},
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
					pageSize: 8,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

export default Tabling;
