import { StyleSheet } from 'react-native';
import { Colors } from '../../globalStyles/globalStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.orange,
    borderRadius: 50,
    paddingVertical: 8,
    width: '68%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});