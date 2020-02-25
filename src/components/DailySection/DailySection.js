import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DailyButton from './DailyButton';
import DaillyForecast from './DailyForecast';
import LightPlatform from './LightPlatform';


const DailySection = () => {
  const [onId, setOnId] = useState(1);
  return (
    <View>
      <View style={{
        flexDirection: 'row', justifyContent: 'center', width: '100%', height: 60, alignItems: 'center',
      }}
      >
        <Text style={{ color: '#B9DFF0' }}>Daily</Text>
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'center', width: '100%', height: 110, alignItems: 'center',
      }}
      >
        <DailyButton id={1} onId={onId} setOnId={setOnId} day="Today" date={16} temp="32°" icon="clear-day" />
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'center', width: '100%', height: 110, alignItems: 'center',
      }}
      >
        <DailyButton id={2} onId={onId} setOnId={setOnId} day="Thu" date={17} temp="33°" icon="clear-night" />
        <DailyButton id={3} onId={onId} setOnId={setOnId} day="Fri" date={18} temp="34°" icon="rain" />
        <DailyButton id={4} onId={onId} setOnId={setOnId} day="Sat" date={19} temp="35°" icon="snow" />
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'center', width: '100%', height: 110, alignItems: 'center',
      }}
      >
        <DailyButton id={5} onId={onId} setOnId={setOnId} day="Sun" date={20} temp="36°" icon="partly-cloudy-nigh" />
        <DailyButton id={6} onId={onId} setOnId={setOnId} day="Mon" date={21} temp="37°" icon="partly-cloudy-day" />
        <DailyButton id={7} onId={onId} setOnId={setOnId} day="Tue" date={22} temp="38°" icon="cloudy" />
      </View>
      <DaillyForecast>
        <LightPlatform />
      </DaillyForecast>
    </View>
  );
};

export default DailySection;
