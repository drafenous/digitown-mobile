import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { RootTabScreenProps } from '../../types';
import HttpClient from '~constants/HttpClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonText, CenterdSafeAreaView, CustomView, DangerButton, Divisor, MainLogo, PrimaryButton, TextField } from '~components';

export const LoginScreen = ({ navigation }: RootTabScreenProps<'Login'>) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = () => {
        if (!email || !password) {
            return
        }
        HttpClient.get('/user/login', { params: { email, password } }).then(async (res) => {
            const { data } = res;
            if (data) {
                try {
                    await AsyncStorage.setItem('auth', JSON.stringify(data))
                    navigation.navigate('Root', {screen: 'Home'});
                } catch (e) {
                    Alert.alert("Falha ao se autenticar")
                }
            } else {
                Alert.alert("Email ou senha inválidos.")
            }
        });
    }

    return (
        <CenterdSafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#222831" />
            <MainLogo source={require('../../assets/images/logo-giant.png')} />
            <CustomView>
                <TextField placeholder="Email" onChangeText={setEmail} autoCompleteType="email" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" />
                <TextField placeholder="Senha" onChangeText={setPassword} autoCompleteType="password" textContentType="password" secureTextEntry={true} />
                <PrimaryButton accessibilityLabel="Botão de Entrar" onPress={handleLogin}><ButtonText>Entrar</ButtonText></PrimaryButton>
                <Divisor text="ou" />
                <DangerButton accessibilityLabel="Botão de Entrar" onPress={() => navigation.navigate('Register')}><ButtonText>Cadastrar-se</ButtonText></DangerButton>
            </CustomView>
        </CenterdSafeAreaView>
    );
};