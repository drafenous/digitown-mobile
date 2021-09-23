import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import useUserMenuHook from '~hooks/useUserMenuHook';

const UserMenuBackdrop = styled.TouchableWithoutFeedback`
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
`

export const UserMenu = () => {
    const [status, setStatus] = useState(true);
    const userMenuStatus = useUserMenuHook(status);
    return (
        userMenuStatus && <UserMenuBackdrop onPress={() => setStatus(false)}>
            <View><Text>Menu</Text></View>
        </UserMenuBackdrop>
    )
}