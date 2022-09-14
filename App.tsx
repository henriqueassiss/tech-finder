import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './src/screens';

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
		<SafeAreaProvider>
			<Home onLayout={onLayoutRootView} />
		</SafeAreaProvider>
	);
}
