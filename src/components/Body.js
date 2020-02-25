import React from 'react';
import {
  View, ScrollView, Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from './SearchBar/SearchBar';
import NowSection from './NowSection/NowSection';
import SectionBreak from './SectionBreak';
import HourlySection from './HourlySection/HourlySection';
import DailySection from './DailySection/DailySection';

const Body = () => (

  <ScrollView>
    <LinearGradient colors={['#42526D', '#3C4B65', '#334057']} style={{ }}>

      <SearchBar />
      <NowSection />
      <SectionBreak />
      <HourlySection />
      <SectionBreak />
      <DailySection />
    </LinearGradient>
  </ScrollView>

);

export default Body;
