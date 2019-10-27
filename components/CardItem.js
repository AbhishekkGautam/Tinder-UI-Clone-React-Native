import React from "react";
import styles from "../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const CardItem = ({
	actions,
	description,
	image,
	matches,
    firstName,
    lastName,
    distance,
    age,
	onPressLeft,
	onPressRight,
	status,
	variant
}) => {
	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 120 : 310,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            paddingLeft: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.containerCardItem}>
			{/* IMAGE */}
			<Image source={image} style={imageStyle} />

			{/* MATCHES */}
			{matches && (
				
					<View style={styles.matchesCardItem}>
                        <Icon name="favorite" size={17} color="#fff"/> 
                        <Text style={styles.matchesTextCardItem}>{matches}% Match!</Text>
					</View>
				
			)}

			
			<Text style={nameStyle}>{firstName} {lastName}</Text>
           
			
			{description && (
				<Text style={styles.descriptionCardItem}>{description}</Text>
			)}

			
			{status && (
				<View style={styles.status}>
					<View style={status === "Online" ? styles.online : styles.offline} />
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}
                        
			
			{actions && (
				<View style={styles.actionsCardItem}>
					<TouchableOpacity style={styles.miniButton}>
						<View style={styles.star}>
							<Icon name="replay" size={15} color="#5028D7"/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<View style={styles.dislike}>
							<Icon name="close" size={20} color="#363636"/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<View style={styles.like}>
							<Icon name="favorite" size={20} color="#e84118"/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.miniButton}>
						<View style={styles.flash}>
							<Icon name="star" size={15} color="#FFA200"/>
						</View>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default CardItem;