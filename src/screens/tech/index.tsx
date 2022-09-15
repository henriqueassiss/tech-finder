import React from 'react';
import {
	Dimensions,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Divider, Layout } from '../../components';
import { useInsets } from '../../hooks';
import { Hero } from './components';
import { Header } from './components/header';

export interface ITech {
	image: ImageSourcePropType;
	title: string;
	date: string;
	desc: string;
	tag: string;
	createdBy: string;
}

export const Tech = (props: { data: ITech }) => {
	const insets = useInsets();

	return (
		<Layout>
			<Header insets={insets} />

			<Divider isHeight size={0.075} />

			<Hero insets={insets} data={props.data} />
		</Layout>
	);
};
