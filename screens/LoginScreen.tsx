import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { CenterdSafeAreaView, Divisor, ButtonText, DangerButton, PrimaryButton, TextField, MainLogo } from '../components';
import { RootTabScreenProps } from '../types';

export const LoginScreen = ({ navigation }: RootTabScreenProps<'Login'>) => {
    return (
        <CenterdSafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#222831" />
            <MainLogo source={require('../assets/images/logo-giant.png')} />
            <TextField placeholder="Email" />
            <TextField placeholder="Senha" />
            <PrimaryButton accessibilityLabel="Botão de Entrar" onPress={() => navigation.navigate('Root')}><ButtonText>Entrar</ButtonText></PrimaryButton>
            <Divisor text="ou"/>
            <DangerButton accessibilityLabel="Botão de Entrar" onPress={() => Alert.alert('Cadastrar-se button pressed')}><ButtonText>Cadastrar-se</ButtonText></DangerButton>
        </CenterdSafeAreaView>
    );
};