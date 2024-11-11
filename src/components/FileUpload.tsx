import * as DocumentPicker from 'expo-document-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { Alert, Button, Image, Text, View } from 'react-native';
import { storage } from '../firebase';

export const FileUpload = () => {
    const [image, setImage] = useState(null);
    const [uploadedImageURL, setUploadedImageURL] = useState(null);

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
        });
        
        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0]);
            await uploadFile();
        } else {
            Alert.alert('Nenhum arquivo selecionado!');
        }
    };

    const uploadFile = async () => {
        if (!image) {
            Alert.alert('Please select a file first!');
            return;
        }

        const imageRef = ref(storage, `images/${image.name}`);

        // Upload the file
        try {
            const response = await fetch(image.uri);
            const blob = await response.blob();
            await uploadBytes(imageRef, blob);

            // Get the download URL
            const downloadURL = await getDownloadURL(imageRef);
            setUploadedImageURL(downloadURL);
            console.log("uploaded: ", uploadedImageURL);
        } catch (error) {
            Alert.alert('Error uploading image', error.message);
        }
    };

    return (
        <View>
            {uploadedImageURL && (
                <View>
                    <Text>Uploaded Image:</Text>
                    <Image source={{ uri: uploadedImageURL }} />
                </View>
            )}

            <Button title="Pick a Document" onPress={pickDocument} />
        </View>
    );
};

export default FileUpload;
