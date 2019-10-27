import React from "react";
import styles from "../assets/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,Text, TouchableOpacity } from "react-native";

const Filters = () => {
	return (
		<TouchableOpacity >
			<View style={styles.filters}>
				<Icon name="filter" size={15}/> 
                <Text style={styles.filtersText}>Filters</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Filters;