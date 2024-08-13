import * as Font from 'expo-font';

export const fonts = {
    ExtraBold: 'Poppins-ExtraBold',
    SemiBold: 'Poppins-SemiBold',
    Light: 'Poppins-Light',
    Medium: 'Poppins-Medium',
    Regular: 'Poppins-Regular',
}

export const loadFonts = async () => {
    await Font.loadAsync({
        [fonts.ExtraBold]: require('../assets/fonts/Poppins-ExtraBold.ttf'),
        [fonts.SemiBold]: require('../assets/fonts/Poppins-SemiBold.ttf'),
        [fonts.Light]: require('../assets/fonts/Poppins-Light.ttf'),
        [fonts.Medium]: require('../assets/fonts/Poppins-Medium.ttf'),
        [fonts.Regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    });
}
