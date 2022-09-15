import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '../../utils/Constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		padding: height * 0.0275,
		width: width - width * 0.08,
		borderRadius: height * 0.015,
		backgroundColor: colors.white,
	},

	title: {
		color: colors.black,
		fontSize: RFValue(20),
		fontFamily: 'Poppins-SemiBold',
	},
});
