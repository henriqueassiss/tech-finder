import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Dimensions } from 'react-native';

import { Divider } from '../divider';
import { styles } from './Style';

const { height, width } = Dimensions.get('window');

interface ICard {
	tag: string;
	date: string;
	desc: string;
	title: string;
	image: ImageSourcePropType;
}

export const Card = ({ tag, date, desc, title, image }: ICard) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.image} source={image} />

				<Divider size={0.04} />

				<View>
					<Text style={styles.title}>{title}</Text>

					<Text style={styles.date}>{date}</Text>
				</View>
			</View>

			<Divider isHeight size={0.0215} />

			<Text style={styles.desc}>{desc}</Text>

			<Divider isHeight size={0.0215} />

			<View style={styles.tags}>
				<Text style={styles.tag}>{tag}</Text>
			</View>
		</TouchableOpacity>
	);
};
