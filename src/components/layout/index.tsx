import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../utils/Constants';
import { styles } from './Style';

export const Layout = (props?: any) => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated
				barStyle='dark-content'
				backgroundColor={colors.bright}
			/>
			{props.fixed ? (
				<View>{props.children}</View>
			) : (
				<ScrollView>{props.children}</ScrollView>
			)}
		</SafeAreaView>
	);
};
