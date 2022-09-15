import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Divider, Layout } from '../../components';
import { ITechNavigation } from '../../routes';
import { Hero } from './components';
import { Header } from './components/header';

export interface ITech {
	insets: IInsets;
	image: ImageSourcePropType;
	title: string;
	date: string;
	desc: string;
	tag: string;
	createdBy: string;
}

export const Tech = ({ navigation, route }: ITechNavigation) => {
	return (
		<Layout>
			<Header insets={route.params.insets} goBack={navigation.pop} />

			<Divider isHeight size={0.075} />

			<Hero data={route.params} />

			<Divider isHeight size={0.025} />
		</Layout>
	);
};
