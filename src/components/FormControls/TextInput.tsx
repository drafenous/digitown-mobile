import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Label = styled.Text`
    margin: 10px 0px;
    line-height: 21px;
    font-size: 18px;
    color: #ffffff;
    margin: 10px 13px;
`

export const TextField = styled.TextInput.attrs({
    placeholderTextColor: "#DDDDDD"
})`
    background-color: #30475E;
    border-radius: 10px;
    font-family: Roboto;
    color: #DDDDDD;
    height: 64px;
    padding: 19px;
    font-size: 24px;
    line-height: 28px;
    margin: 11.5px 13px;
    left: 0;
    right: 0;
`;

export const ButtonDateTimePicker = styled.TouchableOpacity`
    background-color: #30475E;
    border-radius: 10px;
    font-family: Roboto;
    color: #DDDDDD;
    height: 64px;
    padding: 19px;
    font-size: 24px;
    line-height: 28px;
    margin: 11.5px 13px;
    left: 0;
    right: 0;
`