import React from "react";
import styles from "../assets/styles";

import { Text, View, Image } from "react-native";

const Message = ({ image, lastMessage, firstName, lastName }) => {
	return (
		<View style={styles.containerMessage}>
			<Image source={image} style={styles.avatar} />
			<View style={styles.content}>
				<Text>{firstName} {lastName}</Text>
				<Text style={styles.message}>{lastMessage}</Text>
			</View>
		</View>
	);
};

export default Message;