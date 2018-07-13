import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import RecordingRoomListScreen from '../screens/RecordingRoomListScreen';
import SideMenu from './SideMenu';
import LoginScreen from '../screens/LoginScreen';
import BandRoomListScreen from '../screens/BandRoomListScreen';
import PracticeRoomSearchScreen from '../screens/PracticeRoomSearchScreen';
import RecordingRoomSearchScreen from '../screens/RecordingRoomSearchScreen';
import BandRoomSearchScreen from '../screens/BandRoomSearchScreen';
import MapSearch from '../components/MapSearch';

export default createDrawerNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  MapSearch: MapSearch,
  RecordingRoomList: RecordingRoomListScreen,
  BandRoomList: BandRoomListScreen,
  PracticeRoomSearch: PracticeRoomSearchScreen,
  RecordingRoomSearch: RecordingRoomSearchScreen,
  BandRoomSearch: BandRoomSearchScreen,
}, {
  drawerPosition: 'right',
  contentComponent: SideMenu,
  drawerWidth: 300
});