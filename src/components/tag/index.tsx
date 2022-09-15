import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Style';

export const Tag = (props: { text: string }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	);
};
