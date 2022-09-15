import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ITech } from '../../screens/tech';
import { Divider } from '../divider';
import { styles } from './Style';

export const Card = (props: { data: ITech }) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7}>
			<View style={styles.header}>
				<Image style={styles.image} source={props.data.image} />

				<Divider size={0.04} />

				<View style={styles.text}>
					<Text style={styles.title}>{props.data.title}</Text>

					<Text style={styles.date}>{props.data.date}</Text>
				</View>
			</View>

			<Divider isHeight size={0.0215} />

			<Text style={styles.desc} numberOfLines={3}>
				{props.data.desc}
			</Text>

			<Divider isHeight size={0.0215} />

			<View style={styles.tags}>
				<Text style={styles.tag}>{props.data.tag}</Text>
			</View>
		</TouchableOpacity>
	);
};
