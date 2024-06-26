import {Button, Icon, Text} from '@rneui/base';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import styles from './index.less';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgUri} from 'react-native-svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ROUTER_APP_ENUM, ROUTER_ENUM } from '@/router';

// 定义堆栈导航的类型
interface IProps extends NativeStackScreenProps<typeof ROUTER_APP_ENUM> {}

const Welcome: React.FC<IProps> = props => {
  const {navigation} = props;

  /**
   * 动画定义-icon
   */
  const iconAnimated = useRef(new Animated.Value(0)).current;

  /**
   * 动画赋值
   */
  const iconInterpolate = iconAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  /**
   * 动画执行函数
   */
  const spinAnimationIcon = () => {
    iconAnimated.setValue(0);
    Animated.timing(iconAnimated, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spinAnimationIcon());
  };

  const onBtnClick = () => {
    navigation.replace(ROUTER_ENUM.Home)
  }

  useEffect(() => {
    spinAnimationIcon();
  }, [iconAnimated]);

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <Button
          radius={'lg'}
          type="solid"
          color="primary"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
          onPress={onBtnClick}>
          Go Home <Icon name="home" type="antdesign" color="white" />
        </Button>
      </View>

      <Text style={styles.title}>欢迎来到 GS</Text>
      <View style={styles.animatedRow}>
        <Animated.View
          style={[
            styles.animatedIcon,
            {
              transform: [{rotate: iconInterpolate}],
            },
          ]}>
          <SvgUri
            style={styles.logo}
            uri="https://reactnative.cn/img/header_logo.svg"
          />
        </Animated.View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>这是一个启动页，同时也是 React Native 的样板间</Text>
          <Text style={styles.cardDesc}>一次学习，随处编写</Text>
          <Text style={styles.cardDesc}>
            React Native 将原生开发的最佳部分与 React 相结合，
            致力于成为构建用户界面的顶尖 JavaScript 框架
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
