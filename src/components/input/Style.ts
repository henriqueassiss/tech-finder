import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: height * 0.015,
		borderRadius: height * 0.01,
		backgroundColor: colors.white,
	},

	input: {
		fontSize: RFValue(15),
	},
});
