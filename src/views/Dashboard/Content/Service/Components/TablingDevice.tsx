import '../Service.css';
import React, { useContext, useEffect, useState } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

import { UpdatedContext } from '../Service';

const { Text, Title } = Typography;


interface DataType {
	key: string;
	CodeService: string;
	NameService: string;
	Description: string;
	Status: string;
};

const columns: ColumnsType<DataType> = [
	{
		title: 'Mã dịch vụ',
		dataIndex: 'CodeService',
		key: 'CodeService',
		render: (text) => {
			return (
				<Text style={{ fontSize: 14, fontWeight: 400, color: '#535261' }}>
					{text}
				</Text>
			);
		}
	},
	{
		title: 'Tên dịch vụ',
		dataIndex: 'NameService',
		key: 'NameService',
		render: (text) => {
			return (
				<>
					{text}
				</>
			)
		}
	},
	{
		title: 'Mô tả',
		dataIndex: 'Description',
		key: 'Description',
		render: (text) => {
			return (
				<>
					{text}
				</>
			)
		}
	},
	{
		title: 'Trạng thái hoạt động',
		dataIndex: 'Status',
		key: 'Status',
		render: () => {
			return (
				<>
					<div style={{ display: 'flex' }}>
						<div style={{ marginTop: '1px', paddingRight: '2px' }}>
							<GoPrimitiveDot style={{ color: '#EC3740' }} />
						</div>
						<div>
							<Text>
								{"Ngưng Hoạt Động"}
							</Text>
						</div>
					</div>
				</>
			)
		},
	},
	{
		title: '',
		dataIndex: '',
		key: '',
		render: (_, text) => {
			return (
				<div>
					<a
						style={{
							textDecoration: 'underline'
						}}
						href=""
					>
						Cập nhật
					</a>
				</div>
			)
		}
	},
	{
		title: '',
		dataIndex: '',
		key: '',
		render: (_, text) => {
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
	},
];

const data: DataType[] = [
	{
		key: '1',
		CodeService: 'KIO_01',
		NameService: 'Kiosk',
		Description: 'Mô tả dịch vụ 1',
		Status: 'Hoạt động'
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


const TablingDevice = () => {
	const [pagination, setPagination] = useState({});
	const [totalPages, setTotalPages] = useState(10);

	const { handleAddData, dataService } = useContext(UpdatedContext);

	// const handleTableChange: TableProps<any>["onChange"] = (pagination) => {
	// 	setPagination
	// }

	return (
		<div>
			<Table
				columns={columns}
				dataSource={dataService}
				pagination={{ 
					pageSize: 8,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

export default TablingDevice;
