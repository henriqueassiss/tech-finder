import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import { Layout } from '../../components';

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
			<View>
				<Image source={props.data.image} />
			</View>
		</Layout>
	);
};
