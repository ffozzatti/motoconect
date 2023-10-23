import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import { styles } from './styles'


type ButtonProps = TouchableOpacityProps & {
  text: string;
  onPress: () => void;
};


export function ActionButton(props: ButtonProps) {
  return (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={styles.button}
    >
      <Text style={styles.buttonText}> {props.text} </Text>
    </TouchableOpacity>
  );
}