import React from 'react';
import { FlatList, Text } from 'react-native';

import { INavigation } from '../../routes';
import { ITech } from '../../screens';
import { Card } from '../card';
import { Divider } from '../divider';
import { styles } from './Style';

interface IListSection {
	insets: IInsets;
	cards: ITechData[];
	navigation: INavigation;
}

export const ListSection = ({ insets, cards, navigation }: IListSection) => {
	return (
		<>
			<Text style={[styles.title, { marginLeft: insets.left }]}>
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
					const data: ITech = { data: item, insets };

					if (index === 0) {
						return (
							<>
								<Divider size={0.04} />
								<Card
									data={item}
									onPress={() =>
										navigation.navigate('Tech', data)
									}
								/>
							</>
						);
					} else if (index === cards.length - 1) {
						return (
							<>
								<Card
									data={item}
									onPress={() =>
										navigation.navigate('Tech', data)
									}
								/>
								<Divider size={0.04} />
							</>
						);
					}

					return (
						<Card
							data={item}
							onPress={() => navigation.navigate('Tech', data)}
						/>
					);
				}}
			/>
		</>
	);
};
