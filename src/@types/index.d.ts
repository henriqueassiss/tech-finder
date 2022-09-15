declare module '*.png' {
	import { ImageSourcePropType } from 'react-native';
	const value: ImageSourcePropType;
	export default value;
}
declare module '*.jpg' {
	import { ImageSourcePropType } from 'react-native';
	const value: ImageSourcePropType;
	export default value;
}

interface IInsets {
	top: number;
	left: number;
	right: number;
	bottom: number;
}

interface ITechData {
	image: ImageSourcePropType;
	title: string;
	date: string;
	desc: string[];
	tag: string;
	createdBy: string;
}
