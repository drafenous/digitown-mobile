import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { MapStyle } from './MapStyle';

export const MapComponent = styled(MapView).attrs({
    customMapStyle: MapStyle,
})`
    width: 100%;
    height: 100%;
`