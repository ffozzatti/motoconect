import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles';

import { ActionButton } from '../../components/ActionButton';


export function Welcome() {
    
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('SignIn')
  };

  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation={'flipInY'}
            source={require('../../assets/Logo.png')}
            style={{width: '100%'}}
            resizeMode='contain'
          />
        </View>
        <Animatable.View delay={600} animation={'fadeInUp'} style={styles.containerForm}>
          <Text style={styles.title}>Seu socorro perto de você!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>
          <View style={{marginTop: '15%'}} >
            <ActionButton 
              onPress={handleNavigation}
              text= "Acessar"                    
            />          
          </View>
            
          
          {/*<TouchableOpacity
            onPress={handleNavigation}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Acessar</Text>
  </TouchableOpacity>*/}
        </Animatable.View>
    </View>
  );
}