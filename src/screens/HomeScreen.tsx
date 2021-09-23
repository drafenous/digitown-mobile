import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { CenterdSafeAreaView, MapComponent, ScheduleList, Scheduler } from '~components';
import HttpClient from '~constants/HttpClient';
import { RootTabScreenProps, ScheduleModel } from '../../types';


export const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  const [mapState, setMapState] = useState({
    latitude: -23.533509,
    longitude: -46.582140,
    latitudeDelta: 0.01,
    longitudeDelta: 0
  });

  const [scheduleList, setScheduleList] = useState<ScheduleModel[]>();

  const handleFetch = () => {
    HttpClient.get('/schedule/list', { params: { userId: 1 } }).then(async (res) => {
      const schedules: ScheduleModel[] = Object.keys(res.data).map((key) => res.data[key])
      setScheduleList(schedules);
    })
  }

  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <CenterdSafeAreaView disablePadding>
      <MapComponent
        initialRegion={mapState}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
      ></MapComponent>
      <Scheduler refreshData={handleFetch} />
      <ScheduleList listSchedules={scheduleList} />
    </CenterdSafeAreaView>
  );
}