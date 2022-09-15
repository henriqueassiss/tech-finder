import React from 'react';
import { Image, Text, View } from 'react-native';

import { Divider, Tag } from '../../../../components';
import { ITech } from '../..';
import { styles } from './Style';

export const Hero = (props: { data: ITech }) => {
	return (
		<View
			style={[
				{
					marginLeft: props.data.insets.left,
					marginRight: props.data.insets.right,
				},
				styles.container,
			]}>
			<Image style={styles.image} source={props.data.image} />

			<Divider isHeight size={0.075} />

			<Text style={styles.title}>{props.data.title}</Text>

			<Divider isHeight size={0.005} />

			<View style={styles.foundation}>
				<Text style={styles.foundationText}>
					{props.data.createdBy}
				</Text>

				<Divider size={0.025} />

				<Text style={styles.foundationText}>•</Text>

				<Divider size={0.025} />

				<Text style={styles.foundationText}>{props.data.date}</Text>
			</View>

			<Divider isHeight size={0.025} />

			<Tag text={props.data.tag} type='big' />

			<Divider isHeight size={0.025} />

			<Text style={styles.desc}>{props.data.desc}</Text>
		</View>
	);
};
