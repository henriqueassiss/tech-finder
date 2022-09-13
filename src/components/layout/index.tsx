import React from 'react';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { colors } from '../../utils/Constants';
import { styles } from './Style';

const { width, height } = Dimensions.get('window');

export const Layout = (props: any) => {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					paddingBottom: insets.bottom,
					paddingTop: insets.top || height * 0.025,
					paddingLeft: insets.left || width * 0.04,
					paddingRight: insets.right || width * 0.04,
				},
			]}
			onLayout={props.onLayout}>
			<StatusBar
				animated
				barStyle='light-content'
				backgroundColor={colors.black}
			/>
			<ScrollView>{props.children}</ScrollView>
		</SafeAreaView>
	);
};
