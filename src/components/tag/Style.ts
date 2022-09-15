import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils/Constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		borderRadius: height * 0.0075,
		paddingVertical: height * 0.01,
		backgroundColor: colors.bright,
		paddingHorizontal: height * 0.0175,
	},

	text: {
		color: colors.black,
		fontSize: RFValue(12),
		fontFamily: 'Poppins-Regular',
	},
});
