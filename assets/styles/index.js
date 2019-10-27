import { StyleSheet, Dimensions ,Platform} from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "normal";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		...Platform.select({
                        ios: {
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: BLACK,
                            shadowOffset: { height: 0, width: 0 }
                        },
                        android: {
                          elevation:3
                        },
                      }),
	},
	matchesCardItem: {
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
		marginTop: -35,
		backgroundColor:"#FF2152",
		width:130,
        borderRadius: 20,
        padding:10
	},
	matchesTextCardItem: {
		fontFamily: ICON_FONT,
        color: WHITE,
        fontSize:15
	},
	descriptionCardItem: {
		color: GRAY,
        textAlign: "center",
        fontSize:12,
        paddingHorizontal:20
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		...Platform.select({
                        ios: {
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: BLACK,
                            shadowOffset: { height: 0, width: 0 }
                        },
                        android: {
                          elevation:5
                        },
                      }),
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		...Platform.select({
                        ios: {
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: BLACK,
                            shadowOffset: { height: 0, width: 0 }
                        },
                        android: {
                          elevation:5
                        },
                      }),
	},
	star: {
		fontFamily: ICON_FONT,
		color: STAR_ACTIONS
	},
	like: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: LIKE_ACTIONS
	},
	dislike: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: DISLIKE_ACTIONS
	},
	flash: {
		fontFamily: ICON_FONT,
		color: FLASH_ACTIONS
	},

	// COMPONENT - CITY
	city: {
         justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 20,
		width: 100,
		...Platform.select({
                        ios: {
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: BLACK,
                            shadowOffset: { height: 0, width: 0 }
                        },
                        android: {
                          elevation:1
                        },
                      }),
	},
	cityText: {

		fontFamily: ICON_FONT,
		color: "#000",
		fontSize: 13
	},

	// COMPONENT - FILTERS
	 filters: {
                backgroundColor: WHITE,
                padding: 10,
                justifyContent:"space-evenly",
                alignItems:"center",
                flexDirection:"row",
                borderRadius: 20,
                width: 80,
                ...Platform.select({
                    ios: {
                        shadowOpacity: 0.05,
                        shadowRadius: 10,
                        shadowColor: BLACK,
                        shadowOffset: { height: 0, width: 0 }
                    },
                    android: {
                      elevation:1
                    },
                  }),
            },
            filtersText: {
                fontFamily: ICON_FONT,
                color: DARK_GRAY,
                fontSize: 13,
               
            },
        

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
        width: DIMENSION_WIDTH - 100,
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: GRAY,
		fontSize: 12,
		paddingTop: 5
	},

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		backgroundColor: WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		...Platform.select({
                        ios: {
                            shadowOpacity: 0.05,
                            shadowRadius: 10,
                            shadowColor: BLACK,
                            shadowOffset: { height: 0, width: 0 }
                        },
                        android: {
                          elevation:1
                        },
                      }),
	},
	matchesProfileItem: {
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
		width: 120,
		marginTop: -15,
		backgroundColor: "#FF2152",
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		fontFamily: ICON_FONT,
        color: WHITE,
        fontWeight:"300"
	},
	name: {
		paddingTop: 15,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 30,
        textAlign: "center",
        fontWeight:"400"
    },
    age:{
        paddingTop: 15,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 24,
        textAlign: "center",
        
    },
    nameContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 6,
		flexDirection: "row",
        alignItems: "center",
        
	},
	iconProfile: {
		fontFamily: ICON_FONT,
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	top: {
		paddingTop: 30,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
    },
    matchtop:{
        paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
    },
    toptitle:{
        paddingBottom: 10, fontSize: 22, color: DARK_GRAY 
    },
	title: { paddingBottom: 10, fontSize: 15, color:"#FC597D", fontWeight:"400" ,paddingLeft:10,elevation:2},
	icon: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: -2
	},

	// CONTAINER - HOME
	containerHome: { marginHorizontal: 10 },

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		width: DIMENSION_WIDTH,
		height: 450
	},
	topIconLeft: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingLeft: 20,
		marginTop: -5,
		
	},
	topIconRight: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: WHITE },
	textButton: {
		fontFamily: ICON_FONT,
		fontSize: 15,
		color: WHITE,
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#FA325E",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#ED2E58",
		paddingHorizontal: 20
	},

	// MENU
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	tabButtonText: {
		textTransform: "uppercase"
	},
	iconMenu: {
		fontFamily: ICON_FONT,
		height: 20,
		paddingBottom: 7
	}
});