import React from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	FlatList
} from "react-native";
import CardItem from "../components/CardItem";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Data from "../assets/data/Data";

const Matches = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerMatches}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.matchtop}>
						<Text style={styles.toptitle}>Top Picks</Text>
						<TouchableOpacity>
							<View style={styles.icon}>
								<Icon name="more-vert" size={25}/>
							</View>
						</TouchableOpacity>
					</View>

					<FlatList
                        numColumns={2}
						data={Data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<CardItem
									image={item.image}
									firstName={item.firstName}
                                    lastName={item.lastName}
									status={item.status}
									variant
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Matches;