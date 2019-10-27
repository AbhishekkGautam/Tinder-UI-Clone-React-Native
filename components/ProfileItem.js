import React from "react";
import styles from "../assets/styles";

import { View, Text, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileItem = ({
	age,
	info1,
	info2,
	info3,
	info4,
	location,
	matches,
    firstName,
    lastName,
    likes
}) => {
	return (
		<View style={styles.containerProfileItem}>
			<View style={styles.matchesProfileItem}>
                    <Icon name="favorite" size={17} color="#fff"/> 
                    <Text style={styles.matchesTextProfileItem}>{likes} Likes</Text>
				</View>
			
                <View style={styles.nameContainer}>
			<Text style={styles.name}>{firstName},</Text>
            <Text style={styles.age}> {age}</Text>
            </View>

			<View style={styles.info}>
				<View style={styles.iconProfile}>
					<Icon name="school" size={15} color="#616C6F"/>
				</View>
				<Text style={styles.infoContent}>{info2}</Text>
			</View>

			<View style={styles.info}>
				<View style={styles.iconProfile}>
					<Icon name="home" size={15} color="#616C6F"/>
				</View>
				<Text style={styles.infoContent}>Lives in {location}</Text>
			</View>

			<View style={styles.info}>
				<View style={styles.iconProfile}>
					<Icon name="person" size={15} color="#616C6F"/>
				</View>
				<Text style={styles.infoContent}>{info1}</Text>
			</View>

			<View style={styles.info}>
				<View style={styles.iconProfile}>
					<Icon name="favorite" size={14} color="#616C6F"/>
				</View>
				<Text style={styles.infoContent}>{info3}</Text>
			</View>
		</View>
	);
};

export default ProfileItem;