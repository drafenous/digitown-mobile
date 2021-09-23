import styled from 'styled-components/native';

export const ButtonText = styled.Text`
    color: #DDDDDD;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    font-family: RobotoRegular;
    `

export const ButtonTextDark = styled.Text`
    color: #222831;
    text-align: left;
    font-size: 18px;
    line-height: 28px;
    font-family: RobotoRegular;
    width: 100%;
    padding: 19px;
    position: relative;
`

export const PrimaryButton = styled.TouchableOpacity`
    left: 0;
    right: 0;
    height: 64px;
    margin: 11.5px 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #30475E;
`

export const DangerButton = styled.TouchableOpacity`
    left: 0;
    right: 0;
    height: 64px;
    margin: 11.5px 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F05454;
`

export const AuthorizeAccessButton = styled.TouchableOpacity`
    width: 100%;
    height: 64px;
    border-radius: 10px;
    background-color: #DDDDDD;
    display: flex;
    align-items: center;
    justify-content: space-between;
`