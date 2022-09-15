import React from 'react';
import { Text } from 'react-native';

import { styles } from './Style';

interface ITag {
	text: string;
	type?: 'big' | 'small';
}

export const Tag = ({ text, type = 'small' }: ITag) => {
	return (
		<Text
			style={[styles.text, type === 'small' ? styles.small : styles.big]}>
			{text}
		</Text>
	);
};
