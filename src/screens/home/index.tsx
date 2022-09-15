import React from 'react';

import { Divider, Layout } from '../../components';
import { ListSection } from '../../components/listSection';
import { libraries, programmingLanguages } from '../../data';
import { IHomeNavigation } from '../../routes';
import { Header } from './components';

export const Home = ({ navigation, route }: IHomeNavigation) => {
	return (
		<Layout>
			<Header insets={route.params} />

			<Divider isHeight size={0.025} />

			<ListSection
				insets={route.params}
				cards={programmingLanguages}
				navigation={navigation}
			/>

			<Divider isHeight size={0.025} />

			<ListSection
				insets={route.params}
				cards={libraries}
				navigation={navigation}
			/>

			<Divider isHeight size={0.025} />
		</Layout>
	);
};
