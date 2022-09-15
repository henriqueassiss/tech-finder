import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import { Divider, Layout } from '../../components';
import { styles } from './Style';
export interface ITech {
	image: ImageSourcePropType;
	title: string;
	date: string;
	desc: string;
	tag: string;
	createdBy: string;
}

export const Tech = (props: { data: ITech }) => {
	return (
		<Layout>
			<View style={styles.hero}>
				<Image style={styles.image} source={props.data.image} />

				<Divider isHeight size={0.0175} />

				<Text style={styles.title}>{props.data.title}</Text>

				<View style={styles.foundation}>
					<Text style={styles.foundationText}>{props.data.date}</Text>

					<Divider size={0.05} />

					<Text style={styles.foundationText}>•</Text>

					<Divider size={0.05} />

					<Text style={styles.foundationText}>
						{props.data.createdBy}
					</Text>
				</View>

				<Divider isHeight size={0.025} />

				<Text>{props.data.tag}</Text>

				<Divider isHeight size={0.025} />

				<Text style={styles.desc}>{props.data.desc}</Text>
			</View>
		</Layout>
	);
};
