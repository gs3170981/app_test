import React from 'react';
import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import styles from './index.less';
import { useTest } from './redux';
// import { useStateX } from "react-native-redux";
// import { setStateForKey } from "react-native-redux"
// import { STORAGE_KEYS } from './constants';


const Main: React.FC<PropsWithChildren<{}>> = () => {
  // const testRedux = useTestStore();
  const test: any = useTest();
  // const test: any = useStateX(STORAGE_KEYS.TEST);

  // console.log(test);

  const onButtonClick = () => {
    // testRedux.setCountAddforTest();
    test.setCountAddforTest();
    // setStateForKey(STORAGE_KEYS.TEST, {
    //   count: test.count + 1,
    // });
  }

  return <SafeAreaView>
    <View>
      {/* <Text style={styles.Main}>Hello World！{ testRedux.test.count }</Text> */}
      <Text style={styles.Main}>Hello World！{ test?.test.count }</Text>
      <Button
        title="点击累加"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={onButtonClick}
      />
      {/* <Button
        onPress={onButtonClick}
        title="点击累加"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  </SafeAreaView>
}

export default Main;