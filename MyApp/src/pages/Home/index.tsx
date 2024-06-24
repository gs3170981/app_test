import {Button, Icon, Text} from '@rneui/base';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgUri} from 'react-native-svg';
import styles from './index.less';

const Home: React.FC = () => {
  
  return (
    <SafeAreaView style={styles.layout}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
};

export default Home;
