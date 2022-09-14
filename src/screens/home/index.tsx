import React from 'react';

import { Divider, Input, Layout } from '../../components';
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
		</Layout>
	);
};
