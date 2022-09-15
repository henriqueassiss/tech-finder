import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

import { colors } from '../../../../utils';
import { styles } from './Style';

const { height } = Dimensions.get('window');

export const Header = (props: { insets: IInsets }) => {
	return (
		<View
			style={{
				marginTop: props.insets.top,
				marginLeft: props.insets.left,
				marginRight: props.insets.right,
				marginBottom: props.insets.bottom,
			}}>
			<TouchableOpacity style={styles.pop} activeOpacity={0.7}>
				<Ionicons
					name='chevron-back-outline'
					size={height * 0.045}
					color={colors.black}
				/>
			</TouchableOpacity>
		</View>
	);
};
