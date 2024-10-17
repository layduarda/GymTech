// import React from "react";
// import { Appbar } from 'react-native-paper';

// const AppBar=()=>{
//     return(
//         <AppBar.Header>
//             <AppBar.Content title='Title'/>
//         </AppBar.Header>
//     )
// };
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Ionicons from "react-native-vector-icons/Ionicons";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const AppBar = ({ title }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>GymTech</Text>
        <TouchableOpacity>
          <Ionicons
            name={"person-outline"}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 62,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.roxo4,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  button: {
    color: 'white',
  },
});
