import React from 'react';
import { View } from 'react-native';

import { Divider, Input, Logo } from '../../../../components';

export const Header = (props: { insets: IInsets }) => {
	return (
		<View
			style={{
				marginTop: props.insets.top,
				marginLeft: props.insets.left,
				marginRight: props.insets.right,
			}}>
			<Logo />

			<Divider isHeight size={0.025} />

			<Input />
		</View>
	);
};
