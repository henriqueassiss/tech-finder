import React from 'react';

import JS from '../../assets/techs/programmingLanguages/Javascript.png';
import { Divider, Input, Layout } from '../../components';
import { Card } from '../../components/card';
import { Logo } from '../../components/logo';
import { styles } from './Style';

interface IHome {
	onLayout: () => Promise<void>;
}

export const Home = ({ onLayout }: IHome) => {
	return (
		<Layout onLayout={onLayout}>
			<Logo />

			<Divider isHeight size={0.025} />

			<Input />

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
