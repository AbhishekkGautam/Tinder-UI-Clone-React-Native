import React from "react";
import styles from "../assets/styles";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const City = () => {
	return (
		<TouchableOpacity >
			<View style={styles.city}>
				<Icon name="room" size={17}/> 
                <Text style={styles.cityText}>New York</Text>
			</View>
		</TouchableOpacity>
	);
};

export default City;