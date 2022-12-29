import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

import { Col, Row, Typography } from 'antd';

import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

const { Text } = Typography;

type ExportData = {
	excelData: any;
	fileName: any;
}

const ExportExcel = ({ excelData, fileName } : ExportData) => {

	const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';

	const exportToExcel = async (fileName) => {
		const ws = XLSX.utils.json_to_sheet(excelData);
		const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	}

	const exportAndDownloadFile = () => {
		exportToExcel(fileName);
	}

	return (
		<div>
			<div 
				style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}
				onClick={exportAndDownloadFile}	
			>
				<div style={{ width: '90%', height: 80, backgroundColor: '#FFF2E7', textAlign: 'center' }}>
					<FaFileDownload style={{ color: '#FF7506', fontSize: 22, marginTop: 18 }} />
					<br />
					<Text style={{ fontSize: 16, fontWeight: 600, color: '#FF7506' }}>
						Tải về
					</Text>
				</div>
			</div>
		</div>
	)
}

export default ExportExcel;
