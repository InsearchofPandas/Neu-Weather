import React, { useState } from 'react';
import {
  StyleSheet, View, TextInput, Image, Text, TouchableOpacity,
} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import Svg, { Path } from 'react-native-svg';
import { searchBarIcons } from '../../data/buttons_data';

import FavLocations from './FavLocations';

import HeaderBtn from './HeaderBtn';


export default function SearchBar() {
  const [value, onChangeText] = React.useState('Locations...');
  const [favLocations, toggleFavLocations] = useState(false);
  const styles = StyleSheet.create({
    header: {
      zIndex: 100,
      paddingTop: 30,
      flexDirection: 'row',
      backgroundColor: '#41516C',
      shadowColor: 'rgb(12, 6, 20)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
    },

    TextInput: {
      flex: 1,
      width: '100%',
      height: 40,
      paddingStart: 10,
      fontSize: 18,
      borderColor: '#3B4B66',
      borderWidth: 1,
      borderRadius: 3,
      color: '#CCE7F2',
      backgroundColor: '#42495C',

    },
    InputRow: {
      flexDirection: 'row', alignItems: 'center', backgroundColor: '#42495C', paddingLeft: 15,
    },
  });

  return (
    <View style={styles.header}>
      <HeaderBtn m={10} icon={searchBarIcons.hamburger} toggleValue={favLocations} press={toggleFavLocations} />
      <View style={{ marginVertical: 10, flex: 1, height: 40 }}>
        <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={1} shadowRadius={7} rounded={3}>
          <InsetShadow bottom={false} right={false} shadowOpacity={1} shadowRadius={7} rounded={3}>
            <View style={styles.InputRow}>
              {searchBarIcons.search}
              <TextInput
                style={styles.TextInput}
                onChangeText={(text) => onChangeText(text)}
                value={value}
              />

            </View>
          </InsetShadow>
        </InsetShadow>
      </View>
      <HeaderBtn m={10} icon={searchBarIcons.location} />
      { favLocations && <FavLocations toggleValue press={toggleFavLocations} /> }
    </View>
  );
}
