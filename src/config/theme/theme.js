import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
		background: '#FF9138',
		backgroundWhite: '#FFFFFF',
		textColorPrimary: '#FFFFFF',
		textColorOrange: '#FF7506',
		textColorGray: '#535261',
		textColorBlack: '#282739',
		textColorOrangeTwo: '#BF5805'
  },
	{
		buttonColorSubmit: {
			primary: '#FF9138',
		}
	}
);