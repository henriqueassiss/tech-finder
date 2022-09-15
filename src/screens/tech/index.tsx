import React from 'react';

import { Divider, Layout } from '../../components';
import { ITechNavigation } from '../../routes';
import { Hero } from './components';
import { Header } from './components/header';

export interface ITech {
	insets: IInsets;
	data: ITechData;
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
