import React from 'react';
import { View } from 'react-native';

import { Divider, Input, Logo } from '../../../../components';
import { useInsets } from '../../../../hooks';

export const Header = () => {
	const { top, left, right, bottom } = useInsets();

	return (
		<View
			style={{
				paddingTop: top,
				paddingLeft: left,
				paddingRight: right,
				paddingBottom: bottom,
			}}>
			<Logo />

			<Divider isHeight size={0.025} />

			<Input />
		</View>
	);
};
