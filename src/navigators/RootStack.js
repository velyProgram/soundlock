import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import PracticeRoomListScreen from '../screens/PracticeRoomListScreen';
import RecordingRoomListScreen from '../screens/RecordingRoomListScreen';
import BandRoomListScreen from '../screens/BandRoomListScreen';
import PracticeRoomSearchScreen from '../screens/PracticeRoomSearchScreen';
import RecordingRoomSearchScreen from '../screens/RecordingRoomSearchScreen';
import BandRoomSearchScreen from '../screens/BandRoomSearchScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    PracticeRoomList: PracticeRoomListScreen,
    RecordingRoomList: RecordingRoomListScreen,
    BandRoomList: BandRoomListScreen,
    PracticeRoomSearch: PracticeRoomSearchScreen,
    RecordingRoomSearch: RecordingRoomSearchScreen,
    BandRoomSearch: BandRoomSearchScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;