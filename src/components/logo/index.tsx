import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { styles } from './Style';

const { height } = Dimensions.get('window');

export const Logo = (props: any) => {
	return (
		<Svg
			style={styles.container}
			width={height * 0.0825}
			height={height * 0.0825}
			viewBox={`0 0 ${height * 0.0825} ${height * 0.0825}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<Path
				d='M28 2.31a8 8 0 018 0l19.713 11.38a8 8 0 014 6.929V43.38a8 8 0 01-4 6.928L36 61.691a8 8 0 01-8 0L8.287 50.309a8 8 0 01-4-6.928V20.62a8 8 0 014-6.928L28 2.309z'
				fill='#3F67DC'
			/>
			<Path
				d='M13.273 24.261v-3.534H31.84v3.534h-7.193V44h-4.182V24.261h-7.193zM35.42 44V20.727h14.91v3.534H39.636v6.319h9.67v3.534h-9.67V44H35.42z'
				fill='#fff'
			/>
		</Svg>
	);
};
