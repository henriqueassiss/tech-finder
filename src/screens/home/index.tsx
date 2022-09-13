import React from 'react';
import { View } from 'react-native';

import { Input } from '../../components';
import { styles } from './Style';

export const Home = () => {
	return (
		<View style={styles.container}>
			<Input />
		</View>
	);
};
