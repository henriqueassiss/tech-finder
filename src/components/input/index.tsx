import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Dimensions, TextInput, View } from 'react-native';

import { colors } from '../../utils';
import { Divider } from '../divider';
import { styles } from './Style';

const { height } = Dimensions.get('window');

export const Input = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name='search-outline'
				size={height * 0.04}
				color={colors.dark}
			/>

			<Divider size={0.025} />

			<TextInput
				style={styles.input}
				placeholder='Search Tech'
				placeholderTextColor={colors.dark}
			/>
		</View>
	);
};
