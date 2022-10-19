import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainScreen } from '../screen/MainScreen';
import { PostScreen } from '../screen/PostScreen';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { BookedScreen } from '../screen/BookedScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AboutScreen } from '../screen/AboutScreen';
import { useNavigation } from '@react-navigation/native';
import { CreateScreen } from '../screen/CreateScreen';


const Stack = createNativeStackNavigator();
const Booked = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {


  const navigation = useNavigation();

    function PostNavigator() { 
     return (
        <Stack.Navigator>
        <Stack.Screen name="Портал Новин" component={MainScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerRight: () => (
        <HeaderButtons  HeaderButtonComponent={AppHeaderIcon}>
          <Item title='take photo' iconName='ios-camera' onPress={() => navigation.navigate('Створити статтю')} />
        </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons  HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Toggle Drawer' iconName='ios-information-circle' onPress={() => navigation.navigate('Про застосунок')} />
          </HeaderButtons>
          ),
        headerTintColor: '#fff' }} />
        <Stack.Screen name="Post" component={PostScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
        <Stack.Screen name='Про застосунок' component={AboutScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
        <Stack.Screen name='Створити статтю' component={CreateScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
        </Stack.Navigator>
     )
    } 

    function BookedNavigator() {
    return (
      <Booked.Navigator>
        <Booked.Screen name="Збережене" component={BookedScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerRight: () => (
        <HeaderButtons  HeaderButtonComponent={AppHeaderIcon}>
          <Item title='take photo' iconName='ios-camera' onPress={() => navigation.navigate('Створити статтю')} />
        </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons  HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Toggle Drawer' iconName='ios-information-circle' onPress={() => navigation.navigate('Про застосунок')} />
          </HeaderButtons>
          ),
        headerTintColor: '#fff' }} />
        <Booked.Screen name="Post" component={PostScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
        <Booked.Screen name='Про застосунок' component={AboutScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
        <Booked.Screen name='Створити статтю' component={CreateScreen} options={{
        headerStyle: {backgroundColor: THEME.MAIN_COLOR},
        headerTintColor: '#fff' }}/>
      </Booked.Navigator>
    )
    }

    const BottomNavigatorAll = () => {
      return (
          <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#b7b3c4',
          tabBarStyle: { backgroundColor: '#8451f0' },
          }}>
          <Tab.Screen name="Все" component={PostNavigator} options={{
            headerShown: false,
            tabBarIcon: info => (
              <Ionicons name='ios-albums' size={25} color={info.color}/>
            )
          }}/>
          <Tab.Screen name="Збережене" component={BookedNavigator} options={{
            headerShown: false,
            tabBarIcon: info => (
              <Ionicons name='ios-star' size={25} color={info.color}/>
            )
          }}/>
         </Tab.Navigator>
      )
    }

    return (   
        <BottomNavigatorAll />     
    )
  }
