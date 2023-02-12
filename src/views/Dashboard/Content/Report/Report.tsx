import React, { useState } from 'react';


import { Col, Row, Typography } from 'antd';

import Tabling from './components/Tabling';
import ExportExcel from './components/ExportExcel';
import SelectDate from './components/SelectDate';

const data = [
  {
    key: '1',
    number: 2010001,
    serviceName: 'Khám tim mạch',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Kiosk'
  },
  {
    key: '2',
    number: 2010002,
    serviceName: 'Răng hàm mặt',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đã sử dụng',
    supplyPower: 'Hệ thống'
  },
  {
    key: '3',
    number: 2010003,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Bỏ qua',
    supplyPower: 'Kiosk'
  },
	{
		key: '4',
    number: 2010004,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Hệ thống'
	},
	{
		key: '5',
    number: 2010005,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Hệ thống'
	},
	{
		key: '6',
    number: 2010006,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Bỏ qua',
    supplyPower: 'Kiosk'
	},
	{
		key: '7',
    number: 2010007,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Kiosk'
	},
	{
		key: '8',
    number: 2010008,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Hệ thống'
	},
	{
		key: '9',
    number: 2010009,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đã sử dụng',
    supplyPower: 'Kiosk'
	},
	{
		key: '10',
    number: 2010010,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Bỏ qua',
    supplyPower: 'Kiosk'
	},
	{
		key: '11',
    number: 2010011,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Bỏ qua',
    supplyPower: 'Hệ thống'
	},
	{
		key: '12',
    number: 2010012,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đang chờ',
    supplyPower: 'Kiosk'
	},
	{
		key: '13',
    number: 2010013,
    serviceName: 'Khám sản - phụ khoa',
    timeProvide: "07:20 - 07/10/2021",
    status: 'Đã sử dụng',
    supplyPower: 'Kiosk'
	},
];

const Report = () => {

  const [dataReport, setDataReport] = useState();

  // NOTE: Using firebase from dataBase

	return (
		<div style={{ marginTop: 20 }}>
			<div>
				<div style={{ height: 90, marginLeft: 64 }}>
					<SelectDate />
				</div>
			</div>
			<div style={{ width: '100%' }}>
				<Row>
					<Col xl={23}>
						<div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
							<Tabling
								dataBase={data}
							/>
						</div>
					</Col>
					<Col xl={1}>
						<ExportExcel
							excelData={data}
							fileName={'file_123098128'}
						/>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Report
