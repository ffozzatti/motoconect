import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051D40',

  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#051D40',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%'
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#051D40'
  },
  text: {
    color: '#a1a1a1'
  },
  buttonPosition: {
    position: 'absolute',
    marginTop: '500%'
  }
});