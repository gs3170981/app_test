import React, { useState } from 'react';
import type { PropsWithChildren } from 'react'
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './index.less';
import { useTest } from './redux';
import Welcome from './components/Welcome';
import { PAGE_MAIN_TAB_CURRENT_ENUM, PAGE_STATUS_ENUM } from './constants';
import { Tab, TabView, Header, Icon } from '@rneui/base';
import HeaderBar from './components/HeaderBar';


const Main: React.FC<PropsWithChildren<{}>> = () => {
  // const test: any = useTest();

  // const onButtonClick = () => {
  //   test.setCountAddforTest();
  // }

  const [pageStatus, setPageStatus] = useState(PAGE_STATUS_ENUM.LOADING);
  const [tabCurrent, setTabCurrent] = useState(PAGE_MAIN_TAB_CURRENT_ENUM.HOME);
  const isPageVisible = pageStatus === PAGE_STATUS_ENUM.LOADING;


  return <SafeAreaView style={styles.layout}>
    <View style={styles.row}>
      <Welcome visible={isPageVisible}></Welcome>

      <HeaderBar></HeaderBar>

      <TabView containerStyle={styles.tabView} value={tabCurrent} onChange={setTabCurrent} animationType="spring">
        <TabView.Item>
          <Text >Recent</Text>
        </TabView.Item>
        <TabView.Item>
          <Text >Favorite</Text>
        </TabView.Item>
        <TabView.Item>
          <Text >Cart</Text>
        </TabView.Item>
      </TabView>
      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 60,
        // width: 60,
        width: '100%',
        // backgroundColor: 'blue',
        elevation: 1, // 可以添加一些阴影效果
      }}>
        
        <Tab
          value={tabCurrent}
          onChange={setTabCurrent}
          iconPosition="bottom"
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Recent"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="favorite"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="cart"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
        
      </View>
    </View>
  </SafeAreaView>

  // return <SafeAreaView>
  //   <View>
  //     <Text style={styles.Main}>Hello World！{ test?.test.count }</Text>
  //     <Button
  //       title="点击累加"
  //       loading={false}
  //       loadingProps={{ size: 'small', color: 'white' }}
  //       buttonStyle={{
  //         backgroundColor: 'rgba(111, 202, 186, 1)',
  //         borderRadius: 5,
  //       }}
  //       titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
  //       containerStyle={{
  //         marginHorizontal: 50,
  //         height: 50,
  //         width: 200,
  //         marginVertical: 10,
  //       }}
  //       onPress={onButtonClick}
  //     />
  //   </View>
  // </SafeAreaView>
}

export default Main;