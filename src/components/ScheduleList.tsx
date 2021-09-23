import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ScheduleListComponentProps } from 'types';
import { AuthorizeAccessButton, ButtonTextDark } from '~components/FormControls/Buttons';
import { NfcModal } from '~components/NfcModal';

const Wrapper = styled.View`
    background-color: #222831;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 19px;
    display: flex;
    align-items: center;
    height: 45%;
`

const CustomFontAwesome = styled(FontAwesome)`
    margin: 29px 0px 29px 0px;
`

const ButtonFontAwesome = styled(FontAwesome)`
    position: absolute;
    right: 10px;
    top: 10px;
`

const EmptyText = styled.Text`
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
`

const ScrollViewWrapper = styled.View`
    border-radius: 10px;
    overflow: hidden;
    margin-top: 13px;
    margin-bottom: 13px;
    width: 100%;
    height: 75%;
`

const ScheduleListScrollWrapper = styled.ScrollView.attrs({
    scrollEnabled: true
})`
    width: 100%;
    height: 100%;

`

const ScheduleItem = styled.View`
    height: 48px;
    background-color: #ffffff;
    border-bottom-color: #222831;
    border-bottom-width: 1px;
    justify-content: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 13px;
`

export const ScheduleList = ({ listSchedules }: ScheduleListComponentProps) => {
    const [showModal, setShowModal] = useState(false);

    const handleOnCloseModal = () => {
        setShowModal(false);
    }

    return (<>
        <Wrapper>
            <AuthorizeAccessButton onPress={() => setShowModal(true)}>
                <ButtonTextDark>
                    Autorizar Acesso
                </ButtonTextDark>
                <ButtonFontAwesome
                    name="check"
                    size={45}
                    color={'#222831'}
                />
            </AuthorizeAccessButton>

            {listSchedules ? (
                <ScrollViewWrapper>
                    <ScheduleListScrollWrapper>
                        {listSchedules.map((schedule, index) => <ScheduleItem key={index}><Text style={{ fontSize: 16 }}>{schedule.companyName}</Text><Text>{moment(schedule.datetime).format('DD/MM/YYYY - HH:mm')}</Text></ScheduleItem>)}
                    </ScheduleListScrollWrapper>
                </ScrollViewWrapper>
            ) : (
                <>
                    <CustomFontAwesome
                        name="calendar"
                        size={124}
                        color={'#ffffff'}
                    />

                    <EmptyText>
                        Você não tem atividades{"\n"}
                        em sua agenda para hoje.
                    </EmptyText>
                </>)}
        </Wrapper>
        <NfcModal showModal={showModal} onCloseModal={() => handleOnCloseModal()}></NfcModal>
    </>
    )
}