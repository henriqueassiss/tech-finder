import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils/Constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		padding: height * 0.0275,
		width: width - width * 0.15,
		borderRadius: height * 0.015,
		backgroundColor: colors.white,
	},

	header: {
		alignItems: 'center',
		flexDirection: 'row',
	},

	image: {
		flex: 1,
		width: width * 0.15,
		height: width * 0.15,
		resizeMode: 'contain',
		borderRadius: height * 0.01,
	},

	text: {
		flex: 3,
	},

	title: {
		color: colors.black,
		fontSize: RFValue(22),
		lineHeight: RFValue(28),
		fontFamily: 'Poppins-SemiBold',
	},

	date: {
		color: colors.dark,
		fontSize: RFValue(14),
		fontFamily: 'Poppins-Regular',
	},

	desc: {
		color: colors.gray,
		fontSize: RFValue(14),
		lineHeight: RFValue(23.5),
		fontFamily: 'Poppins-Regular',
	},

	tags: {
		alignItems: 'flex-start',
	},

	tag: {
		color: colors.black,
		fontSize: RFValue(12),
		fontFamily: 'Poppins-Regular',
		borderRadius: height * 0.0075,
		backgroundColor: colors.bright,
		paddingVertical: height * 0.01,
		paddingHorizontal: height * 0.0175,
	},
});
