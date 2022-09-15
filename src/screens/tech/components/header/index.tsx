import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

import { colors } from '../../../../utils';
import { styles } from './Style';

const { height } = Dimensions.get('window');

interface IHeader {
	insets: IInsets;
	goBack: (count?: number | undefined) => void;
}

export const Header = ({ insets, goBack }: IHeader) => {
	return (
		<View
			style={{
				marginTop: insets.top,
				marginLeft: insets.left,
				marginRight: insets.right,
			}}>
			<TouchableOpacity
				style={styles.pop}
				activeOpacity={0.7}
				onPress={() => goBack()}>
				<Ionicons
					name='chevron-back-outline'
					size={height * 0.045}
					color={colors.black}
				/>
			</TouchableOpacity>
		</View>
	);
};
