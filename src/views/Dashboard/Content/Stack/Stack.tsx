
import SelectionStack from './components/InformationStack/InformationStack';
import { ButtonCancels, ButtonFuncPrintNumber } from './components/ButtonFuncStack';

import React, { useContext, useEffect, useState, createContext } from 'react';
import { Select, Typography } from 'antd';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Option } from 'antd/lib/mentions';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';
import { PrintNumber } from './components/PrintNumber';
import InformationAdd from '../Device/Components/InformationAdd';
import { InputContext } from '../Device/Device'
import { InformationUse } from './components/InformationStack/InformationUse';

import { db } from '../../../../config/firebase/firebase.config'; 
import { addDoc, collection, getDocs } from 'firebase/firestore'; 

const { Title, Text } = Typography;

type ThemeNames = keyof typeof themes;

export const StackContext = createContext<any>(null)

const Stack = () => {

	const { 
		dataInputGlobal, 
		selectDevice,
		handleChangeValueSelect,
		valueSelectProps,
		onChangeClickSuccessChange
	} = useContext(InputContext);

	const [add, setAdd] = useState(false);
	const [select1, setSelect1] = useState(false);
	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	const handleChangeUpAndDown1 = () => {
			setSelect1(!select1);
		}
	const handleChange = (value: string) => {
			console.log(`selected ${value}`);
		};

	const supplyNumber = () => {
		setAdd(!add);
	}
	
	const [printNumber, setPrintNumber] = useState(false);
	const [info, setInfo] = useState(false);

	const onClickCancelButton = () => {
		setAdd(!add);
	}

	// NOTE: Using firebase firestore

	const [stackData, setStackData] = useState<any>([
		{
			STT: 0,
			NameCustomer: '',
			NameService: '',
			TimeProvider: '',
			TimeOut: '',
			Status: '',
			Provide: '',
		}
	]);
	const statckCollectionRef = collection(db, "stack_data");

	const onClickPrintButton = async () => {
		await addDoc(statckCollectionRef, {
			STT: '2010003',
			NameCustomer: 'Lê Ái Vân',
			NameService: 'Khám răng hàm mặt',
			TimeProvider: '14:35 - 07/11/2021',
			TimeOut: '14:35 - 12/11/2021',
			Status: 'Đang chờ',
			Provide: 'Hệ thống',
		})

		await setPrintNumber(!printNumber);
	};

	const ClickBackToPrintNumber = async () => {

		await setPrintNumber(!printNumber);
	};

	useEffect(() => {
		const getStack = async () => {
			const data = await getDocs(statckCollectionRef);
			setStackData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		}

		getStack();
	}, []);

	// useEffect(() => {
	// 	console.log(stackData);
	// }, [stackData])


	useEffect(() => {
		setTimeout(() => {
			setInfo(!info);
		}, 5000);
	}, [info]);

	return (
		
		<>
			<StackContext.Provider value={{
				stackData,
				setStackData
			}}>
		{
			add ? (
				<ThemeProvider value={themeName}>
					<Title level={4} style={{ marginLeft: 36, marginTop: 10, marginBottom: 30, color: theme.textColorOrange, fontWeight: 700 }}>
						Quản lý cấp số
					</Title>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div style={{ width: 1600, height: '85vh',backgroundColor: 'white', padding: 50, borderRadius: 20, textAlign: 'center' }}>

							{
								printNumber ? (
									<>
										{
											info ? (
												<>
													<div>
														<InformationUse />
													</div>
												</>
											) : (	
												<div>
													<PrintNumber />
												</div>
											)
										}
									</>
								) : (
									<div>
										<Title level={2} style={{ color: theme.textColorOrange, fontWeight: 700, fontSize: 32 }}>
											CẤP SỐ MỚI
										</Title>
										<Title level={4} style={{ marginBottom: 30, fontWeight: 700, lineHeight: 2, color: theme.textColorGray }}>
											Dịch vụ khách hàng lựa chọn
										</Title>
										<div>
											<Select
												showArrow={true}
												suffixIcon={
													select1 ? (
														<MdArrowDropUp style={{ fontSize: 30, color: theme.textColorOrange }} />
													) : (
														<MdArrowDropDown style={{ fontSize: 30, color: theme.textColorOrange }} />
													)
												}
												defaultValue="Tất cả"
												style={{ width: 500, textAlign: 'left' }}
												onChange={handleChange}
												onClick={handleChangeUpAndDown1}
											>
												<Option value="Tất cả">Khám tim mạch</Option>
												<Option value="Đang chờ">Khám sản - Phụ khoa</Option>
												<Option value="Đã sử dụng">Khám răng hàm mặt</Option>
												<Option value="Bỏ qua">Khám tai mũi họng</Option>
											</Select>
										</div>
										<div style={{ marginTop: 100, width: "100%", display: 'flex', justifyContent: 'center' }}>
											<div style={{ width: 350, display: 'flex', justifyContent: 'space-between' }}>
												<ButtonFuncPrintNumber
													onClickPrintNumber={onClickPrintButton}
													onClickCancelPrint={onClickCancelButton}
												/>
											</div>
										</div>
									</div>
								)
							}

							
						</div>
						<>
							<ButtonCancels
								infoValue={info}
								clickCancelBackToNumber={ClickBackToPrintNumber}
							/>
						</>
					</div>
				</ThemeProvider>
			) : (
				<div>
						<SelectionStack
							handleAddData={supplyNumber}
						/>
				</div>
			)
		}
			</StackContext.Provider>
		</>
	)
}

export default Stack
