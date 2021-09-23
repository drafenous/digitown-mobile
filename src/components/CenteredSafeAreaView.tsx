import styled from 'styled-components/native';

interface CenterdSafeAreaViewProps {
    disablePadding?: boolean;
}

export const CenterdSafeAreaView = styled.SafeAreaView<CenterdSafeAreaViewProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: ${(props) => props.disablePadding ? '0px' : '13px'};
    background-color: #222831;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const CustomView = styled.View`
    width: 100%;
    position: relative;
`