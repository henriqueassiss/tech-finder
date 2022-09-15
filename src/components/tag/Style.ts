import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils/Constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	text: {
		color: colors.black,
		borderRadius: height * 0.0075,
		backgroundColor: colors.bright,
	},

	small: {
		fontSize: RFValue(12),
		fontFamily: 'Poppins-Regular',
		paddingVertical: height * 0.0075,
		paddingHorizontal: height * 0.015,
	},

	big: {
		fontSize: RFValue(14),
		fontFamily: 'Poppins-Medium',
		paddingVertical: height * 0.01,
		paddingHorizontal: height * 0.02,
	},
});
