import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../../../utils/Constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	pop: {
		alignSelf: 'flex-start',
		borderRadius: height * 0.01,
		backgroundColor: colors.white,
	},
});
