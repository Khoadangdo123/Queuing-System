import '../Device.css';

import React, { useState, useEffect } from 'react';

import { Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { PaginationProps } from 'antd';

import { GoPrimitiveDot } from 'react-icons/go';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';
import { db } from '../../../../../config/firebase/firebase.config';

import { collection, getDocs } from 'firebase/firestore';

const { Text, Title } = Typography;

interface DataType {
	key?: string,
	DeviceCode: string,
	DeviceName: string,
	IpAddress: string,
	statusActions: string[],
	statusConnects: string[],
	ValueSelectProps: string
};

const columns: ColumnsType<DataType> = [
	{
		title: (
			<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
				Mã thiết bị
			</Text>
		),
		width: '8%',
		dataIndex: 'DeviceCode',
		key: 'DeviceCode',
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
		dataIndex: 'DeviceName',
		key: 'DeviceName',
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
		dataIndex: 'IpAddress',
		key: 'IpAddress',
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
		title: 'Trạng thái kết nối',
		dataIndex: 'statusConnects',
		key: 'statusConnects',
		width: '11%',
		render: (_, ) => {
			return (
				<>
					<div style={{ display: 'flex' }}>
						<div style={{ marginTop: '1px', paddingRight: '2px' }}>
							<GoPrimitiveDot style={{ color: '#34CD26' }} />
						</div>
						<div>
							<Text>
								kết nối
							</Text>
						</div>
					</div>
				</>
			)
		},
	},
	{
		title: 'Dịch vụ sử dụng',
		dataIndex: 'ValueSelectProps',
		key: 'ValueSelectProps',
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

type TablingData = {
	searchProp: string;
	selectValueOneProp: string;
	selectValueTwoProp: string;
}

const Tabling = ({ searchProp, selectValueOneProp, selectValueTwoProp } : TablingData ) => {

	const initState = [
		{
			DeviceCode: '',
			DeviceName: '',
			IpAddress: '',
		}
	];
	const [pagination, setPagination] = useState({});
	const [totalPages, setTotalPages] = useState(10);
	const [dataTable, setDataTable] = useState<any>(initState);

	const tableColectionRef = collection(db, "device_data");

	const getTableData = async () => {
		const data = await getDocs(tableColectionRef);
		setDataTable(data.docs.map((doc : any) => ({ ...doc.data(), id: doc.id })))
	}
	useEffect(() => {

		getTableData();		

	}, []);

	useEffect(() => {

		const searchFilter = () => {
	
			let filterSearch = dataTable.filter((dataText) => {
				return (
					dataText.DeviceCode.includes(searchProp) ||
					dataText.DeviceName.includes(searchProp) ||
					dataText.IpAddress.includes(searchProp)
				);
			});
			setDataTable(filterSearch);
		}
		searchFilter();

	}, [searchProp, selectValueOneProp, selectValueTwoProp]);

	// const handleTableChange: TableProps<any>["onChange"] = (pagination) => {
	// 	setPagination
	// }

	return (
		<div>
			<Table
				columns={columns}
				dataSource={dataTable}
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
