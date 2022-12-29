import React, { useState } from 'react';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

import { Space, Table, Typography } from 'antd';
import type { PaginationProps } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { GoPrimitiveDot } from 'react-icons/go';

const { Text } = Typography;

type DataArray = {
  dataBase: any;
}

interface DataType {
  key: React.Key;
	number: number;
  serviceName: string;
  timeProvide: string;
  status: string;
  supplyPower: string;
}

const styleTextColor = {
  color: '#535261'
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Số thứ tự',
    dataIndex: 'number',
    width: '18%',
    sorter: (a, b) => a.number - b.number,
    render: (text: string) => {
      return (
        <div className="space-align-container">
					<div className="space-align-block">
						<Space align='center'>
							<Text style={styleTextColor}>
								{text}
							</Text>
						</Space>
					</div>
				</div>
      )
    }
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'serviceName',
    width: '18%',
    sorter: (a, b) => {
			if (a.serviceName < b.serviceName) {
				return -1;
			} else if (a.serviceName > b.serviceName) {
				return 1;
			}
			return 0;
		},
    render: (text: string) => {
      return (
        <div className="space-align-container">
					<div className="space-align-block">
						<Space align='center'>
							<Text style={styleTextColor}>
								{text}
							</Text>
						</Space>
					</div>
				</div>
      )
    }
  },
  {
    title: 'Thời gian cấp',
    dataIndex: 'timeProvide',
    width: '18%',
    // FIXME: not sort because not detched
    // sorter: (a, b) => a.timeProvide - b.timeProvide,
    render: (text: string) => {
      return (
        <div className="space-align-container">
          <div className="space-align-block">
            <Space align='center'>
              <Text style={styleTextColor}>
                {text}
              </Text>
            </Space>
          </div>
        </div>
      )
    }
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
    width: '18%',
    filters: [
      {
        text: 'Đang chờ',
        value: 'Đang chờ'
      },
      {
        text: 'Đã sử dụng',
        value: 'Đã sử dụng',
      },
      {
        text: 'Bỏ qua',
        value: 'Bỏ qua',
      }
    ],
    onFilter: (value: any, record) => {
      return (
        record.status.includes(value)
      );
    },
    render: (text: string) => {
      if (text == 'Đang chờ') {
        return (
          <div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#4277FF' }} />
								<Text style={styleTextColor}>
									Đang chờ
								</Text>
							</Space>
						</div>
					</div>
        );
      } else if (text == 'Đã sử dụng') {
        return (
          <div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#7E7D88' }} />
								<Text style={styleTextColor}>
                  Đã sử dụng
								</Text>
							</Space>
						</div>
					</div>
        );
      } else if (text == 'Bỏ qua') {
        return (
          <div className="space-align-container">
						<div className="space-align-block">
							<Space align='center'>
								<GoPrimitiveDot style={{ marginTop: 6, color: '#E73F3F' }} />
								<Text style={styleTextColor}>
                  Bỏ qua
								</Text>
							</Space>
						</div>
					</div>
        );
      } else {
        return null;
      }
    }
  },
  {
    title: 'Nguồn cấp',
    dataIndex: 'supplyPower',
    width: '18%',
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => {
			if (a.supplyPower < b.supplyPower) {
				return -1;
			} else if (a.supplyPower > b.supplyPower) {
				return 1;
			}
			return 0;
		},
    render: (text: string) => {
      return (
        <div className="space-align-container">
					<div className="space-align-block">
						<Space align='center'>
							<Text style={styleTextColor}>
								{text}
							</Text>
						</Space>
					</div>
				</div>
      )
    }
  },
];

const Tabling = ({ dataBase } : DataArray) => {
	const [pagination, setPagination] = useState({});
	const [totalPages, setTotalPages] = useState(50);

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

  return (
    <Table
      style={{ width: '91.2%' }}
      columns={columns}
      dataSource={dataBase}
      pagination={{ 
        pageSize: 9,
        total: totalPages,
        itemRender: itemRender
      }}
    />
  );
} 

export default Tabling;