import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const useInsets = () => {
	const insets = useSafeAreaInsets();

	return {
		bottom: insets.bottom || 0,
		top: insets.top || height * 0.025,
		left: insets.left || width * 0.04,
		right: insets.right || width * 0.04,
	};
};
