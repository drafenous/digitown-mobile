/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Text } from '~components';
import { HomeScreen, LoginScreen, NotFoundScreen } from '~screens';
import { RegisterScreen } from '~screens/RegisterScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false, animation: 'fade', gestureEnabled: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const Tab = createNativeStackNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const [userMenuStatus, setUserMenuStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    async function getUserData() {
      const user = await AsyncStorage.getItem('auth')
      if (user) {
        setUserData(JSON.parse(user));
      }
    }
    getUserData();
  }, [])

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }: RootTabScreenProps<'Home'>) => ({
            title: 'Inicial',
            headerBackVisible: false,
            gestureEnabled: false,
            headerStyle: {
              backgroundColor: '#222831',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              color: '#ffffff',
            },
            headerRight: () => (
              <Pressable
                onPress={() => setUserMenuStatus(true)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff' }}>
                  {userData?.fullName.split(' ')[0]}
                </Text>
                <FontAwesome
                  name="user-circle"
                  size={32}
                  color={'#ffffff'}
                  style={{ marginLeft: 15 }}
                />
              </Pressable>
            ),
          })}
        />
      </Tab.Navigator>
    </>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
