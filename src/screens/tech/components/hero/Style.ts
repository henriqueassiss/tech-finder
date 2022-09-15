import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../../../utils/Constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: height * 0.0275,
		borderRadius: height * 0.015,
		backgroundColor: colors.white,
	},

	image: {
		top: -32,
		width: height * 0.125,
		height: height * 0.125,
		position: 'absolute',
		resizeMode: 'contain',
		borderRadius: height * 0.01,
		backgroundColor: colors.black,
	},

	title: {
		color: colors.black,
		fontSize: RFValue(28),
		fontFamily: 'Poppins-SemiBold',
	},

	foundation: {
		flexDirection: 'row',
	},

	foundationText: {
		color: colors.dark,
		fontSize: RFValue(16),
		fontFamily: 'Poppins-Medium',
	},

	desc: {
		color: colors.black,
		fontSize: RFValue(14),
		lineHeight: RFValue(23.5),
		fontFamily: 'Poppins-Regular',
	},
});
