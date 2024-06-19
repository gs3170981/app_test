import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";

interface IProps {
  visible: boolean;
}

const Welcome: React.FC<IProps> = (props) => {
  return <View>
    <Text>Hello World!</Text>
  </View>
}

export default Welcome;