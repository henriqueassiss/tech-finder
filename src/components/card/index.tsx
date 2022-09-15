import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';

import { Divider } from '../divider';
import { styles } from './Style';

interface ICard extends TouchableOpacityProps {
	data: ITechData;
}

export const Card = ({ data, ...rest }: ICard) => {
	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.7}
			{...rest}>
			<View style={styles.header}>
				<Image style={styles.image} source={data.image} />

				<Divider size={0.04} />

				<View style={styles.text}>
					<Text style={styles.title}>{data.title}</Text>

					<Text style={styles.date}>{data.date}</Text>
				</View>
			</View>

			<Divider isHeight size={0.0215} />

			<Text style={styles.desc} numberOfLines={3}>
				{data.desc[0]}
			</Text>

			<Divider isHeight size={0.0215} />

			<View style={styles.tags}>
				<Text style={styles.tag}>{data.tag}</Text>
			</View>
		</TouchableOpacity>
	);
};
