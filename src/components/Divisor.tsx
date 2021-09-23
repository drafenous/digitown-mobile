import styled from 'styled-components/native';
import React from 'react';
import { View, Text } from 'react-native';

interface DivisorProps {
    text: string
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 13px;
`;

const Bar = styled.View`
    flex: 1;
    height: 1px;
    background-color: #DDDDDD;
    margin-top: 3px;
`

const TextDivisor = styled.Text`
    width: 100%;
    text-align: center;
    color: #DDDDDD;
    padding: 0 13px;
    font-size: 18px;
`

export const Divisor = ({text}: DivisorProps) => {
    return (
        <Wrapper>
            <Bar />
            <View>
                <TextDivisor>{text}</TextDivisor>
            </View>
            <Bar />
        </Wrapper>
    );
}
