import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { CenterdSafeAreaView } from '../components/CenteredSafeAreaView';
import { Divisor } from '../components/Divisor';
import { ButtonText, DangerButton, PrimaryButton } from '../components/FormControls/Buttons';
import { TextField } from '../components/FormControls/TextInput';
import { MainLogo } from '../components/Images';

const LoginScreen = () => {
    return (
        <CenterdSafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#222831" />
            <MainLogo source={require('../assets/images/logo-giant.png')} />
            <TextField placeholder="Email" />
            <TextField placeholder="Senha" />
            <PrimaryButton accessibilityLabel="Botão de Entrar" onPress={() => Alert.alert('Entrar button presses')}><ButtonText>Entrar</ButtonText></PrimaryButton>
            <Divisor text="ou"/>
            <DangerButton accessibilityLabel="Botão de Entrar" onPress={() => Alert.alert('Cadastrar-se button pressed')}><ButtonText>Cadastrar-se</ButtonText></DangerButton>
        </CenterdSafeAreaView>
    );
}

export default LoginScreen;
