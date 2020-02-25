import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import styled, { ThemeProvider } from 'styled-components/native';


const HeaderBtn = ({
  icon = 'M', w = 40, h = 40, m = 0, press, toggleValue, radius = 3, bgColor = '#485C7E',
}) => {
  const ButtonStyle = styled.View`
  position: relative;
  width: ${w}px;
  height: ${h}px;
  
  box-shadow: -1px -3px 5px rgba(225, 229, 254, 0.2);
  border-radius: ${radius}px;
  border: 1px solid #485C7E;
  
  `;

  const ButtonStyleShadow = styled.View`
  
  width: ${w}px;
  height: ${h}px;
  margin: ${m}px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
  border-radius: ${radius}px;
  
  
  `;

  return (


    <TouchableOpacity onPress={() => { press(!toggleValue); }}>


      <ButtonStyleShadow>

        <ButtonStyle>


          <View style={{
            height: h, width: w, alignItems: 'center', justifyContent: 'center', backgroundColor: bgColor, borderRadius: radius,
          }}
          >
            {icon}
          </View>


        </ButtonStyle>
      </ButtonStyleShadow>

    </TouchableOpacity>
  );
};
export default HeaderBtn;
