import { Header, Icon, Text } from "@rneui/base";
import React from "react";
import { Pressable, View } from "react-native";
import styles from './index.less';

interface IProps {
}

/**
 * 导航头
 * @param props 
 * @returns 
 */
const HeaderBar: React.FC<IProps> = (props) => {

  const renderLeftComponent = () => {
    return {
      icon: 'menu',
      color: '#fff',
      style: styles.leftComponent,
    }
  }

  const renderCenterComponent = () => {
    return { text: 'Header', style: styles.centerComponent }
  }

  const renderRightComponent = () => {
    return <View style={styles.rightComponent}>
      <Pressable
        style={{ marginLeft: 10 }}
        onPress={() => {}}
      >
        <Icon type="antdesign" name="rocket1" color="white" />
      </Pressable>
    </View>
  }

  return <Header
    leftComponent={renderLeftComponent()}
    rightComponent={renderRightComponent()}
    centerComponent={renderCenterComponent()}
  />
}

export default HeaderBar;