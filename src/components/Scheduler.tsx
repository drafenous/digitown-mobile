import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import styled from 'styled-components/native';
import { SchedulerComponentProps } from 'types';
import { ButtonDateTimePicker, ButtonText, Label, PrimaryButton, TextField } from '~components/FormControls';
import HttpClient from '~constants/HttpClient';

const Wrapper = styled.View`
    position: absolute;
    z-index: 2;
    border-radius: 10px;
    background-color: #222831;
    top: 5%;
    padding: 5.5px 0px 5.5px 0px;
`;

export const Scheduler = ({refreshData}: SchedulerComponentProps) => {
    const [date, setDate] = useState<Date>(new Date());
    const [hasDate, setHasDate] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const [companyName, setCompanyName] = useState<string>();

    const onChange = (_event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setHasDate(true);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const handleSubmit = async () => {
        const storedUser = await AsyncStorage.getItem('auth')
        const user = storedUser && JSON.parse(storedUser)
        
        if(user.userid && companyName && date) {
            const formatedDate = moment(date).format('YYYY/MM/DD HH:mm')
            const params = {companyName, userId: user.userid, datetime: formatedDate}
            HttpClient.post('/schedule/create', { params }).then(async (res) => {
                Alert.alert('Agendamento realizado com sucesso')
                refreshData()
            },
            error => {
                Alert.alert('Falha ao cadastrar na agenda', error.message)
            })
        }
    }

    return (
        <Wrapper>
            <Label>
                Para onde?
            </Label>
            <TextField placeholder="Digite o nome da empresa, ender..." onChangeText={setCompanyName} keyboardType="ascii-capable" autoCapitalize="words"></TextField>
            <Label>
                Quando?
            </Label>
            <ButtonDateTimePicker onPress={showDatepicker}><ButtonText>{hasDate ? moment(date).format('DD/MM/YYYY - HH:mm') : 'Informe uma Data e Hora'}</ButtonText></ButtonDateTimePicker>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    minimumDate={new Date()}
                    mode={Platform.OS === "ios" ? 'datetime' : 'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    themeVariant="dark"
                />
            )}

            <PrimaryButton onPress={handleSubmit}><ButtonText>Agendar Visita</ButtonText></PrimaryButton>
        </Wrapper>
    );
}
