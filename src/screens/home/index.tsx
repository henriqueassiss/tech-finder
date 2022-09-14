import React from 'react';

import JS from '../../assets/techs/programmingLanguages/Javascript.png';
import { Divider, Layout } from '../../components';
import { Card } from '../../components/card';
import { Header } from './components';
import { styles } from './Style';

interface IHome {
	onLayout: () => Promise<void>;
}

export const Home = ({ onLayout }: IHome) => {
	return (
		<Layout onLayout={onLayout}>
			<Header />

			<Divider isHeight size={0.025} />

			<Card
				image={JS}
				title='Javascript'
				date='October 10, 2011'
				desc="It's a programming language used for creating websites."
				tag='Programming Language'
			/>
		</Layout>
	);
};
