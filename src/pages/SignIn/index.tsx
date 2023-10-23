import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';import * as Animatable from 'react-native-animatable';

import { styles } from './styles';
import { ActionButton } from '../../components/ActionButton';

export function SignIn() {

  function handleSignIn (){
    return
  }
  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite um email...' style={styles.input}/>
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Sua senha' style={styles.input}/>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActionButton 
              onPress={handleSignIn}
              text='Acessar'      
          />
        </View >
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se </Text>
        </TouchableOpacity>


      </Animatable.View>
      
      

    </View>
  );
}