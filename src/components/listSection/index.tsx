import React from 'react';
import { FlatList, Text } from 'react-native';

import { useInsets } from '../../hooks';
import { ITech } from '../../screens';
import { Card } from '../card';
import { Divider } from '../divider';
import { styles } from './Style';

export const ListSection = (props: { cards: ITech[] }) => {
	const { left } = useInsets();

	return (
		<>
			<Text style={[styles.title, { marginLeft: left }]}>
				{props.cards[0].tag}
			</Text>

			<Divider isHeight size={0.025} />

			<FlatList
				data={props.cards}
				horizontal
				keyExtractor={(_, i) => i.toString()}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <Divider size={0.04} />}
				renderItem={({ item, index }) => {
					if (index === 0) {
						return (
							<>
								<Divider size={0.04} />
								<Card data={item} />
							</>
						);
					} else if (index === props.cards.length - 1) {
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
