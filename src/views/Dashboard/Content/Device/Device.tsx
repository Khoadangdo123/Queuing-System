import './Device.css';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';

import { useState, createContext, useContext, useEffect, ChangeEvent, useId } from 'react';

import { Typography } from 'antd'; 

import InformationAdd from './Components/InformationAdd';
import SelectInformation from './Components/Information/InformationDevice';
import { ButtonFuncAddAndCancel } from './Components/ButtonFunc';
import { InputComponent } from './Components/InputComponent';
import { InputInfo } from './Components/InputInfo';
import { db } from '../../../../config/firebase/firebase.config';
import { 
	collection,
	addDoc,
	getDocs
} from 'firebase/firestore';

const { Title } = Typography;

type ThemeNames = keyof typeof themes;

const TitleDeviceControl = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	return (
		<ThemeProvider value={themeName}>
			<Title
				style={{
					marginLeft: 68,
					fontWeight: 700,
					fontSize: 24,
					color: theme.textColorOrange
				}}	
			>
				Quản lý thiết bị
			</Title>
		</ThemeProvider>
	)
}

const TitleDeviceInformation = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const theme = useTheme(themeName);

	return (
		<ThemeProvider value={themeName}>
			<Title
				style={{
					paddingTop: 30,
					marginLeft: 110,
					fontWeight: 700,
					fontSize: 22,
					color: theme.textColorOrange
				}}
			>
				Thông tin thiết bị
			</Title>
		</ThemeProvider>
	)
}

type InputData = {
	DeviceCode: string;
	DeviceName: string;
	IpAddress: string;
	UserName: string;
	Password: string;
}

const InputContext = createContext<any>(
	{
		DeviceCode: '',
		DeviceName: '',
		IpAddress: '',
		UserName: '',
		Password: '',
		handleChangeInput: () => {},
	}
);

const Device = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	// [ ]: Use data in reactjs
	const [dataInputGlobal, setDataInputGlobal] = useState<InputData>({
		DeviceCode: '',
		DeviceName: '',
		IpAddress: '',
		UserName: '',
		Password: '',
	});
	const [selectDevice, setSelectDevice] = useState('Kiosk');
	const [valueSelectProps, setValueSelectProps] = useState<any>([]);
	
	const [add, setAdd] = useState(true);
	const [addSuccess, setAddSuccess] = useState(true);

	//[ ]: Handle Change Add Information still code more than in the future

	const onChangeClickHandleChange = () => {
		setAdd(!add);
	}

	const onChangeAddData = () => {
		setAdd(!add);
	}

	const handleChangeSelect = (value: string) => {
		setSelectDevice(value);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = e.target
		setDataInputGlobal({
			...dataInputGlobal,
			[name]: value,

		});
	};

	const handleChangeValueSelect = (value: string) => {
		setValueSelectProps(value);
	}

	const idDevice = useId();


	// NOTE: This is use Firebase in reactjs
	const deviceDataRef = collection(db, "device_data");

	const onChangeSuccessChangeAndUpdated = () => {
		setAddSuccess(!addSuccess);
	}

	const onChangeClickSuccessChange = async () => {

		await addDoc(deviceDataRef, {
			id: idDevice,
			DeviceCode: dataInputGlobal.DeviceCode,
			DeviceName: dataInputGlobal.DeviceName,
			IpAddress: dataInputGlobal.IpAddress,
			SelectDevice: selectDevice,
			UserName: dataInputGlobal.UserName,
			Password: dataInputGlobal.Password,
			ValueSelectProps: valueSelectProps,
		})

		await window.location.reload();
	};

	

	return (
		<>
			{
				add ? (
					<>
						<SelectInformation handleAddData={onChangeAddData} />
					</>
				) : (
					<ThemeProvider value={themeName}>
						<div>
							<TitleDeviceControl />
							{	
								addSuccess ? (
									<>
										<div>
											<TitleDeviceInformation />
											<div style={{ marginTop: 40 }}>
												<InputContext.Provider value={{ 
													dataInputGlobal, 
													handleInputChange,
													selectDevice,
													handleChangeSelect,
												}}
												>
													<InputComponent/>
												</InputContext.Provider>
											</div>
											<InputInfo
												valueSelect={valueSelectProps}
												handleChangeValueSelectProps={handleChangeValueSelect}
											/>
										</div>
										<ButtonFuncAddAndCancel
											addSuccess={addSuccess}
											onChangeClickSuccessFunc={onChangeSuccessChangeAndUpdated}
											onChangeClickFailedFunc={onChangeClickHandleChange}
											/>
									</>
								) : (
									<>
										<InputContext.Provider value={{ 
												dataInputGlobal, 
												selectDevice,
												handleChangeValueSelect,
												valueSelectProps,
												onChangeClickSuccessChange
											}}
										>
											<InformationAdd
												typeInput={dataInputGlobal}
												TypeValueSelect={selectDevice}
												ValueTypeSelect={valueSelectProps}
												handleChangeValueSelectProps={handleChangeValueSelect}
												onChangeClickSuccessChangeProps={onChangeClickSuccessChange}
											/>
										</InputContext.Provider>
									</>
								)
							}
						</div>
					</ThemeProvider>
				)
			}
			
		</>
	)
}

export { 
	Device, InputContext, TitleDeviceControl, TitleDeviceInformation,  
};
