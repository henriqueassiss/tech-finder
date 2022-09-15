import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import { useInsets } from '../hooks';
import { Home, ITech, Tech } from '../screens';

type IStack = {
	Home: IInsets;
	Tech: ITech;
};

export type INavigation = NativeStackNavigationProp<IStack>;
export type IHomeNavigation = NativeStackScreenProps<IStack, 'Home'>;
export type ITechNavigation = NativeStackScreenProps<IStack, 'Tech'>;

const Stack = createNativeStackNavigator<IStack>();

export const Router = () => {
	const insets = useInsets();

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='Home'
					component={Home}
					initialParams={insets}
				/>
				<Stack.Screen
					name='Tech'
					component={Tech}
					initialParams={{ insets }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
