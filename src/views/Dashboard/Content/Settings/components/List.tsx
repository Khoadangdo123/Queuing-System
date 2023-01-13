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
			width: '5%',
			dataIndex: 'nameRole',
			key: 'nameRole',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
			width: '5%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
			width: '10%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
			width: '2%',
			dataIndex: 'edit',
			key: 'edit',
			render: (text) => {
				return (
					<>
						<div>
							<a style={{ fontSize: 16 }}>
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
		},
		{
			key: '2',
			nameRole: 'Bác sĩ',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		},
		{
			key: '3',
			nameRole: 'Lễ tân',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		},
		{
			key: '4',
			nameRole: 'Quản lý',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		},
		{
			key: '5',
			nameRole: 'Admin',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		},
		{
			key: '6',
			nameRole: 'Admin',
			numberUser: 6,
			describe: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
			edit: 'Cập nhật'
		},
	];

	const [totalPages, setTotalPages] = useState(dataListSystem.length);

	return (
		<div style={{ width: '92%', marginLeft: 64 }}>
			<Table
				style={{ width: '99%' }}
				columns={columnsSystem}
				dataSource={dataListSystem}
				pagination={{ 
					pageSize: 8,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

const ListAccount = () => {
	interface DataType {
		key: string,
		nameUser: string,
		name: string,
		numberPhone: string,
		email: string,
		rule: string,
		status: string,
	};
	
	const columnsSystem: ColumnsType<DataType> = [
		{
			title: (
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
					Tên đăng nhập
				</Text>
			),
			width: '5%',
			dataIndex: 'nameUser',
			key: 'nameUser',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Họ tên
				</Text>
			),
			width: '5%',
			dataIndex: 'name',
			key: 'name',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Số điện thoại
				</Text>
			),
			dataIndex: 'numberPhone',
			key: 'numberPhone',
			width: '4%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Email
				</Text>
			),
			dataIndex: 'email',
			key: 'email',
			width: '10%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Vai trò
				</Text>
			),
			dataIndex: 'rule',
			key: 'rule',
			width: '4%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Trạng thái hoạt động
				</Text>
			),
			dataIndex: 'status',
			key: 'status',
			width: '6%',
			render: (text) => {
				if (text == 'Hoạt động') {
					return (
						<>
							<div>
								<div className="space-align-container">
    							<div className="space-align-block">
										<Text style={{ fontSize: 16, color: '#535261', fontStyle: 'normal', fontWeight: 400 }}>
											<div style={{ display: 'flex' }}>
												<div style={{ marginTop: 2, marginRight: 4 }}>
													<GoPrimitiveDot style={{ color: '#34CD26' }} />
												</div>
												<div>
													{text}
												</div>
											</div>
										</Text>
									</div>
								</div>
							</div>
						</>
					)
				} else if (text == 'Ngưng hoạt động') {
					return (
						<>
							<div>
								<div className="space-align-container">
    							<div className="space-align-block">
										<Text style={{ fontSize: 16, color: '#535261', fontStyle: 'normal', fontWeight: 400 }}>
											<div style={{ display: 'flex' }}>
												<div style={{ marginTop: 2, marginRight: 4 }}>
													<GoPrimitiveDot style={{ color: '#EC3740' }} />
												</div>
												<div>
													{text}
												</div>
											</div>
										</Text>
									</div>
								</div>
							</div>
						</>
					)
				}
			}
		},
		{
			title: (
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>

				</Text>
			),
			width: '3%',
			dataIndex: 'edit',
			key: 'edit',
			render: (text) => {
				return (
					<>
						<div>
							<a style={{ fontSize: 16 }}>
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
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Hoạt động'
		},
		{
			key: '2',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '3',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '4',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '5',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '6',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '7',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '8',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '9',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '10',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},
		{
			key: '11',
			nameUser: 'tuyetnguyen@12',
			name: 'Nguyen Văn A',
			numberPhone: '0919256712',
			email: 'tuyetnguyen123@gmail.com',
			rule: 'Kế toán',
			status: 'Ngưng hoạt động'
		},

	];

	const [totalPages, setTotalPages] = useState(dataListSystem.length);

	return (
		<div style={{ width: '92%', marginLeft: 64 }}>
			<Table
				style={{ width: '99%' }}
				columns={columnsSystem}
				dataSource={dataListSystem}
				pagination={{ 
					pageSize: 8,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}

const ListNotes = () => {
	interface DataType {
		key: string,
		nameLogin: string,
		time: string,
		ip: string,
		manipulation: string
	};
	
	const columnsSystem: ColumnsType<DataType> = [
		{
			title: (
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>
					Tên đăng nhập
				</Text>
			),
			width: '6%',
			dataIndex: 'nameLogin',
			key: 'nameLogin',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Thời gian tác động
				</Text>
			),
			width: '6%',
			dataIndex: 'time',
			key: 'time',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					IP thực hiện
				</Text>
			),
			dataIndex: 'ip',
			key: 'ip',
			width: '6%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
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
					Thao tác thực hiện
				</Text>
			),
			dataIndex: 'manipulation',
			key: 'manipulation',
			width: '8%',
			render: (text) => {
				return (
					<>
						<div>
							<Text style={{ fontSize: 16 }}>
								{text}
							</Text>
						</div>
					</>
				)
			}
		}
	];

	const dataListSystem : DataType[] = [
		{
			key: '1',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '2',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '3',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},

		{
			key: '4',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '5',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '6',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '7',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '8',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '9',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '10',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '11',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
		{
			key: '12',
			nameLogin: 'tuyetnguyen@12',
			time: '01/12/2021 15:12:17',
			ip: '192.168.3.1',
			manipulation: 'Cập nhật thông tin dịch vụ DV_01',
		},
	];

	const [totalPages, setTotalPages] = useState(dataListSystem.length);

	return (
		<div style={{ width: '93.4%', marginLeft: 70, marginTop: 20 }}>
			<Table
				style={{ width: '99%' }}
				columns={columnsSystem}
				dataSource={dataListSystem}
				pagination={{ 
					pageSize: 11,
					total: totalPages,
					itemRender: itemRender
				}}
			/>
		</div>
	)
}


export { ListSystem, ListAccount, ListNotes }
