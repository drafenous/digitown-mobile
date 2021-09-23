import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styled from 'styled-components/native';
import { ButtonText, DangerButton } from '~components/FormControls/Buttons';

interface ModalProps {
    showModal: boolean;
    onCloseModal: () => void;
}

const ModalWrapper = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000B3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    padding: 28px;
`

const ModalContainer = styled.View`
    padding: 36px 13px 0px 13px;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const HeaderText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #30475E;
    margin-bottom: 22px;
`

const Text = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    margin-bottom: 13px;
`

const CustomDangerButton = styled(DangerButton)`
    width: 100%;
`

export const NfcModal = ({ showModal, onCloseModal}: ModalProps) => {
    return (
        showModal ? <ModalWrapper>
            <ModalContainer>
                <FontAwesome name="lock" size={131} color={'#30475E'} />
                <HeaderText>Autorizar Acesso</HeaderText>
                <Text>Aproxime o seu celular{'\n'}
                    do sensor NFC para{'\n'}
                    ter o seu acesso autorizado</Text>
                <CustomDangerButton onPress={() => onCloseModal && onCloseModal()}><ButtonText>Cancelar</ButtonText></CustomDangerButton>
            </ModalContainer>
        </ModalWrapper> : <></>
    )
}