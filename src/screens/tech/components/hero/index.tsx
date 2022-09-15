import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

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
			<Image style={styles.image} source={props.data.data.image} />

			<Divider isHeight size={0.075} />

			<Text style={styles.title}>{props.data.data.title}</Text>

			<Divider isHeight size={0.005} />

			<View style={styles.foundation}>
				<Text style={styles.foundationText}>
					{props.data.data.createdBy}
				</Text>

				<Divider size={0.025} />

				<Text style={styles.foundationText}>•</Text>

				<Divider size={0.025} />

				<Text style={styles.foundationText}>
					{props.data.data.date}
				</Text>
			</View>

			<Divider isHeight size={0.025} />

			<Tag text={props.data.data.tag} type='big' />

			<Divider isHeight size={0.025} />

			<FlatList
				scrollEnabled={false}
				data={props.data.data.desc}
				renderItem={({ item }) => {
					return (
						<>
							<Text style={styles.desc}>{item}</Text>
							<Divider isHeight size={0.015} />
						</>
					);
				}}
			/>
		</View>
	);
};
