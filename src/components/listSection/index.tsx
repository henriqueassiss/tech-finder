import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Text } from 'react-native';

import { useInsets } from '../../hooks';
import { INavigation } from '../../routes';
import { ITech } from '../../screens';
import { Card } from '../card';
import { Divider } from '../divider';
import { styles } from './Style';

interface IListSection {
	cards: ITech[];
	navigation: INavigation;
}

export const ListSection = ({ cards, navigation }: IListSection) => {
	const { left } = useInsets();

	return (
		<>
			<Text style={[styles.title, { marginLeft: left }]}>
				{cards[0].tag}
			</Text>

			<Divider isHeight size={0.025} />

			<FlatList
				data={cards}
				horizontal
				keyExtractor={(_, i) => i.toString()}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <Divider size={0.04} />}
				renderItem={({ item, index }) => {
					if (index === 0) {
						return (
							<>
								<Divider size={0.04} />
								<Card
									data={item}
									onPress={() =>
										navigation.navigate('Tech', item)
									}
								/>
							</>
						);
					} else if (index === cards.length - 1) {
						return (
							<>
								<Card data={item} />
								<Divider size={0.04} />
							</>
						);
					}

					return <Card data={item} />;
				}}
			/>
		</>
	);
};
