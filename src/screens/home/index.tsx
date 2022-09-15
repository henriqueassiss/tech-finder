import React from 'react';

import { Divider, Layout } from '../../components';
import { ListSection } from '../../components/listSection';
import { libraries, programmingLanguages } from '../../data';
import { Header } from './components';

export const Home = () => {
	return (
		<Layout>
			<Header />

			<Divider isHeight size={0.025} />

			<ListSection cards={programmingLanguages} />

			<Divider isHeight size={0.025} />

			<ListSection cards={libraries} />

			<Divider isHeight size={0.025} />
		</Layout>
	);
};
