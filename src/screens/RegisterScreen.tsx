import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { RootTabScreenProps } from '../../types';
import HttpClient from '~constants/HttpClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonText, CenterdSafeAreaView, CustomView, DangerButton, Divisor, MainLogo, PrimaryButton, TextField } from '~components';

export const RegisterScreen = ({ navigation }: RootTabScreenProps<'Register'>) => {
    const [fullName, setFullName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
    const handleRegister = () => {
        if (!email || !password || !fullName || password !== passwordConfirmation) {
            return
        }
        HttpClient.post('/user/create', { params: { email, password, fullName } }).then(async (res) => {
            const { data } = res;
            if (data) {
                try {
                    navigation.navigate('Login');
                } catch (e) {
                    Alert.alert("Falha ao se registrar")
                }
            } else {
                Alert.alert("Dados inválidos")
            }
        }, error => Alert.alert(`Falha ao se registrar. ${'\n'} ${error.message}`));
    }

    return (
        <CenterdSafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="#222831" />
            <CustomView>
                <TextField placeholder="Nome Completo" onChangeText={setFullName} autoCompleteType="name" textContentType="name" keyboardType="ascii-capable" autoCapitalize="words" />
                <TextField placeholder="Email" onChangeText={setEmail} autoCompleteType="email" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" />
                <TextField placeholder="Senha" onChangeText={setPassword} autoCompleteType="password" textContentType="password" secureTextEntry={true} />
                <TextField placeholder="Confirmação de Senha" onChangeText={setPasswordConfirmation} autoCompleteType="password" textContentType="password" secureTextEntry={true} />
                <PrimaryButton accessibilityLabel="Botão de Entrar" onPress={handleRegister}><ButtonText>Cadastre-se</ButtonText></PrimaryButton>
                <Divisor text="ou" />
                <DangerButton accessibilityLabel="Botão de Voltar" onPress={() => navigation.goBack()}><ButtonText>Voltar</ButtonText></DangerButton>
            </CustomView>
        </CenterdSafeAreaView>
    );
};