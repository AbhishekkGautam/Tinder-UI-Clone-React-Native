import React from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
    TouchableOpacity,
    
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Data from "../assets/data/Data";


const Profile = () => {
	const {
		age,
		image,
		info1,
		info2,
		info3,
		info4,
		location,
        likes,
        firstName,
        lastName
	} = Data[7];

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={image} style={styles.photo}>
					<View style={styles.top}>
						<TouchableOpacity>
							<View style={styles.topIconLeft}>
								<Icon name="chevron-left" size={35} color="#fff" />
							</View>
						</TouchableOpacity>

						<TouchableOpacity>
							<View style={styles.topIconRight}>
								<Icon name="more-vert" size={30} color="#fff"/>
							</View>
						</TouchableOpacity>
					</View>
				</ImageBackground>

				<ProfileItem
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    likes={likes}
					location={location}
					info1={info1}
					info2={info2}
					info3={info3}
					info4={info4}
				/>

				<View style={styles.actionsProfile}>
					<TouchableOpacity style={styles.circledButton}>
						<View style={styles.iconButton}>
							<Icon name="more-horiz" size={20} color="#fff"/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}>
						<View style={styles.iconButton}>
							<Icon name="create" size={20} color="#fff"/>
						</View>
						<Text style={styles.textButton}>Edit profile</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default Profile;