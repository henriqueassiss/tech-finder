import React from 'react';

import { Divider, Input, Logo } from '../../../../components';

export const Header = () => {
	return (
		<>
			<Logo />

			<Divider isHeight size={0.025} />

			<Input />
		</>
	);
};
