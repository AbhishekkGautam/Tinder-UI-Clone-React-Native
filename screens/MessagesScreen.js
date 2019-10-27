import React from "react";
import styles from "../assets/styles";
import {Thumbnail} from 'native-base';

import {
	ScrollView,
	Text,
	TouchableOpacity,
	ImageBackground,
	View,
    FlatList,
    
} from "react-native";
import Message from "../components/Message";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Data from "../assets/data/Data";

const Messages = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>

			<View style={styles.containerMessages}>
				<ScrollView showsVerticalScrollIndicator={false}>
                    <View style ={{height:180, paddingTop:20}}>
                    <View style={styles.top}>
						<Text style={styles.title}>New Matches</Text>
						<TouchableOpacity>
							<View style={styles.icon}>
								<Icon name="more-vert" size={25}/>
							</View>
						</TouchableOpacity>
					</View>
                        <View style={{flex:3, paddingTop:20}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                                alignItems:'center',
                                paddingStart:5,
                                paddingEnd:5
                            }}>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/08.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/10.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/07.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/02.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/01.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/06.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/04.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/09.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/05.jpg")}/>
                                <Thumbnail style={{ marginHorizontal:5 , borderColor: 'pink', borderWidth: 3 }} large source={require("../assets/images/03.jpg")}/>
                            </ScrollView>
                        </View>
                    </View>
                   
					<View style={styles.top}>
						<Text style={styles.title}>Messages</Text>
					</View>

					<FlatList
						data={Data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Message
									image={item.image}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
									lastMessage={item.message}
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Messages;