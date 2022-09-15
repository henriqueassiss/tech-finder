import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ReactJS from './src/assets/techs/libraries/React.png';
import { Tech } from './src/screens';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
		'Poppins-Medium': require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
		'Poppins-SemiBold': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
		'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
		'Poppins-ExtraBold': require('./src/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Tech
				data={{
					image: ReactJS,
					title: 'ReactJS',
					date: '2013',
					desc: 'asdasdasdasdasdasdasdasdas',
					tag: 'Library',
					createdBy: 'Facebook',
				}}
			/>
		</SafeAreaProvider>
	);
}
