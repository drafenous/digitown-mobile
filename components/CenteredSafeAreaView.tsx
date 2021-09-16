import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const CenterdSafeAreaView = styled.SafeAreaView`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 13px;
    background-color: #222831;
`