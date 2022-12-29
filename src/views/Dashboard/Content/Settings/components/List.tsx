import React, { useState } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

const { Text, Title } = Typography;

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


const ListSystem = () => {

	const [totalPages, setTotalPages] = useState(20);

	interface DataType {
		key: string,
		nameRole: string,
		numberUser: number,
		describe: string,
		edit: string,
	};
	
	const columnsSystem: ColumnsType<DataType> = [
		{
			title: (
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
					Tên vai trò
				</Text>
			),
			width: '8%',
			dataIndex: 'nameRole',
			key: 'nameRole',
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
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
					Số người dùng
				</Text>
			),
			dataIndex: 'numberUser',
			key: 'numberUser',
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
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
					Mô tả
				</Text>
			),
			dataIndex: 'describe',
			key: 'describe',
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
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>

				</Text>
			),
			width: '8%',
			dataIndex: 'edit',
			key: 'edit',
			render: (text) => {
				return (
					<>
						<div>
							<a>
								Cập nhật
							</a>
						</div>
					</>
				)
			}
		}
		
	];

	const dataListSystem : DataType[] = [
		{
			key: '1',
			nameRole: 'Kế toán',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		}
	]

	return (
		<div style={{ width: '92%' }}>
			<Table
				style={{ width: '100%' }}
				columns={columnsSystem}
				dataSource={dataListSystem}
				pagination={{ 
					pageSize: 9,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

const ListAccount = () => {
	return (
		<div>
			
		</div>
	)
}

const ListNotes = () => {
	return (
		<div>

		</div>
	)
}


export { ListSystem, ListAccount, ListNotes }
