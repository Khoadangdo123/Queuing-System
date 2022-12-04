import './Device.css';
import { ThemeProvider, themes, useTheme } from '../../../../config/theme/theme';

import { useState } from 'react';

import { Typography } from 'antd'; 

import InformationAdd from './Components/InformationAdd';
import SelectInformation from './Components/Information/InformationDevice';
import { ButtonFuncAddAndCancel } from './Components/ButtonFunc';
import InputComponent from './Components/InputComponent';
import InputInfo from './Components/InputInfo';

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

const Device = () => {

	const [themeName, setThemeName] = useState<ThemeNames>('buttonColorSubmit');
	const [add, setAdd] = useState(true);
	const [addSuccess, setAddSuccess] = useState(true);

	const theme = useTheme(themeName);


	//[ ]: Handle Change Add Information still code more than in the future
	const onChangeClickSuccessChange = () => {
		setAddSuccess(!addSuccess);
	}

	const onChangeClickHandleChange = () => {
		setAdd(!add);
	}

	const onChangeAddData = () => {
		setAdd(!add);
	}

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
												<InputComponent />
											</div>
											<InputInfo />
										</div>
										<ButtonFuncAddAndCancel
											addSuccess={addSuccess}
											onChangeClickSuccessFunc={onChangeClickSuccessChange}
											onChangeClickFailedFunc={onChangeClickHandleChange}
										/>
									</>
								) : (
									<>
										<InformationAdd />
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

export default Device;
