import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export function FeedScreen() {
    // const openCameraLib = async () => {
    //     const [imgUrl, setImgUrl] = useState (
    // );
    // const openCameraLib = async () => {
    //     console.log('PRESS=====>>>');
    //     const result = await launchCamera(
    //     );
    //     setImgUrl(result?.assets[0]?.uri);
    // }
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Permission Denied')
                }
            }
        })
    }, []);

    const clickHandler = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            const imageUri = result.assets[0].uri
            console.log(imageUri);
            // result.assets && navigation.navigate("imagepreview", {
            //     imageFile: result.assets[0]
            // })
        }
    }

    return (
        <ScrollView>
            <View style={styles.containerF}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                    <Ionicons
                        name={"arrow-back-outline"}
                        color={colors.white}
                        onPress={handleGoBack}
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>
                    GymTech
                </Text>
            </View>
            <View style={styles.container}>

                <View style={styles.containerFoto}>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity
                            style={styles.bottomGalery}
                        >
                            <Ionicons name="add" size={40}
                                color={colors.white}
                                onPress={clickHandler} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image13.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image1.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image2.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image3.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image4.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image5.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image6.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image7.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image8.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image9.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image10.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.containerFoto}>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image11.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                    <View style={styles.fotoStyle}>
                        <ImageBackground
                            imageStyle={styles.coverImage}
                            source={require('../utils/images/image12.jpeg')}
                            resizeMode="cover"
                            style={styles.cardCover}>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View style={styles.containerFim}>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonWrapper: {
        height: 50,
        width: 50,
        marginTop: 40,
        marginLeft: 20,
    },
    containerF: {
        alignItems: 'center',
        backgroundColor: colors.roxo4,
        height: 62,
        flexDirection: 'row',
    },
    titleHeader: {
        color: colors.white,
        fontSize: 21,
        fontFamily: fonts.SemiBold,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 90,
    },
    image: {
        width: "90%",
        height: 50,
        alignSelf: 'center',
    },
    containerFoto: {
        flex: 1,
        height: 200,
        width: "100%",
        flexDirection: 'row',
        marginBottom: 50,
        marginTop: 20,
    },
    coverImage: {
        borderRadius: 5,
        height: 218,
        padding: 10,
        margin: 6,
    },
    cardCover: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    fotoStyle: {
        borderRadius: 5,
        height: 248,
        width: "46%",
        margin: 8,
        borderWidth: 1,
        backgroundColor: colors.fundo,
        borderColor: colors.fundo2,
    },
    containerFim: {
        height: 40,
        backgroundColor: colors.roxo4,
        marginTop: 10,
    },
    bottomGalery: {
        position: "absolute",
        width: 65,
        height: 65,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 30,
        backgroundColor: colors.roxo2,
        elevation: 5,

    },
    containerBottom: {
        marginTop: "55%",
        width: "9%",
        marginLeft: 170,
    },
    containerFotoBtn: {
        flex: 1,
        height: 200,
        width: "100%",
        flexDirection: 'row',
        marginBottom: 50,
        marginTop: 20,
        backgroundColor: colors.fundo
    },
}
)