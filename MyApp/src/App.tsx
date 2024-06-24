import React, { useEffect, useState } from 'react';
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
import styles from './App.less';
import { testForInitialState, useTest } from './redux';
import Welcome from './pages/Welcome';
import { PAGE_MAIN_TAB_CURRENT_ENUM, PAGE_STATUS_ENUM } from './constants';
import { Tab, TabView, Header, Icon } from '@rneui/base';
import HeaderBar from './components/HeaderBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-redux';
import { defalutNavigatorOptions } from './constants';
import Home from './pages/Home';
import { ROUTER_ENUM } from './router';


// export const Stack = createNativeStackNavigator<IRouter['root']>();
export const Stack = createNativeStackNavigator();

const Main: React.FC<PropsWithChildren<{}>> = () => {
  // const test: any = useTest();

  // const onButtonClick = () => {
  //   test.setCountAddforTest();
  // }

  // const [pageStatus, setPageStatus] = useState(PAGE_STATUS_ENUM.LOADING);
  // const [tabCurrent, setTabCurrent] = useState(PAGE_MAIN_TAB_CURRENT_ENUM.HOME);
  // const isPageVisible = pageStatus === PAGE_STATUS_ENUM.LOADING;


  // /**
  //  * 假设3s后主页加载成功，隐藏欢迎页
  //  */
  // const hidePageVisible = () => {
  //   setTimeout(() => {
  //     setPageStatus(PAGE_STATUS_ENUM.COMPLETE);
  //   }, 3000);
  // }

  // const init = () => {
  //   hidePageVisible();
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  return (
    <Provider
      initialState={{
        ...testForInitialState,
        // test: {
        //   count: 0,
        // }
      }}
      loading={false}
      // loading={}/* your loading UI*/
      >
      <NavigationContainer>

        {/* <Welcome></Welcome> */}
        <Stack.Navigator initialRouteName={ROUTER_ENUM.Welcome}>
          {/* 定义你的启动页以及其他页面 */}
          {/* 示例启动页 */}
          <Stack.Screen name={ROUTER_ENUM.Welcome} component={Welcome} options={{
            ...defalutNavigatorOptions,
            // title: '',
            // headerTitle: (props) => <HeaderBar {...props}></HeaderBar>,
            // headerTransparent: true, // 透明头
            // headerTitleStyle: {
            //   color: 'white', // 设置标题颜色
            // },
          }} />
          {/* 示例首页 */}
          <Stack.Screen name={ROUTER_ENUM.Home} component={Home} options={{
            ...defalutNavigatorOptions,
          }} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  )
    
  
  
    

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