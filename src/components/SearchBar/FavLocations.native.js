import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback, Modal,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeaderBtn from './HeaderBtn';
import { searchBarIcons } from '../../data/buttons_data';

const FavLocations = ({ press, toggleValue }) => {
  const [editWindow, toggleEditWindow] = React.useState(false);


  return (

    <Modal
      animationType="slide"
      transparent
      isVisible={toggleValue}
      onPress={() => { press(!toggleValue); }}
    >
      <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>
        <View style={{ height: '100%', width: '75%', zIndex: 100 }}>
          <View

            style={{
              height: 90, width: '100%', backgroundColor: '#34435B', flexDirection: 'row', alignItems: 'center',
            }}
          >
            <Text

              style={{
                color: 'white', fontSize: 24, paddingLeft: '5%', paddingTop: 10,
              }}
            >
              My Locations
            </Text>
            <View style={{
              height: 40, width: 40, paddingLeft: '5%', paddingTop: 6,
            }}
            >
              <HeaderBtn w={40} h={40} radius={110} icon={searchBarIcons.pencil} toggleValue={editWindow} press={toggleEditWindow} bgColor="#34435B" />
            </View>

          </View>
          <View style={{ height: '100%', width: '100%', backgroundColor: '#A5ADB8' }} />
        </View>

        { editWindow === false
          ? (
            <View style={{ width: '100%', height: '100%' }}>
              <TouchableWithoutFeedback onPress={() => { press(!toggleValue); }}>
                <View style={{
                  backgroundColor: 'rgba(0,0,2,.4)', width: '100%', height: '100%',
                }}
                />
              </TouchableWithoutFeedback>
            </View>
          )

          : (
            <Animatable.View style={{ width: '100%', height: '100%', zIndex: 100 }} animation="slideInRight" duration={500}>
              <View

                style={{
                  height: 90, width: '25%', backgroundColor: '#34435B', justifyContent: 'center', paddingTop: 5, alignItems: 'center',
                }}
              >
                <HeaderBtn w={55} h={55} radius={5} icon={searchBarIcons.x} toggleValue={toggleValue} press={press} bgColor="#34435B" />
              </View>
              <View style={{ height: '100%', width: '100%', backgroundColor: '#A5ADB8' }} />

            </Animatable.View>
          )}
      </View>
    </Modal>
  );
};

export default FavLocations;
