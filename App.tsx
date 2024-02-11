import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from './src/screens/Login';
import AdminDashboard from './src/screens/AdminDashboard';
import Sections from './src/screens/Sections';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddSection from './src/screens/AddSection';
import SectionDetails from './src/screens/SectionDetails';
import EditSection from './src/screens/EditSection';
import Supervisors from './src/screens/Supervisors';
import AddSupervisor from './src/screens/AddSupervisor';
import Production from './src/screens/Production';
import AddBatch from './src/screens/AddBatch';
import BatchDetails from './src/screens/BatchDetails';
import BatchSummary from './src/screens/BatchSummary';
import Defects from './src/screens/Defects';
import EmployeeProductivity from './src/screens/EmployeeProductivity';
import ProductivityRules from './src/screens/ProductivityRules';
import AddEmployee from './src/screens/AddEmployee';
import EmployeeRecord from './src/screens/EmployeeRecord';
import EmployeeDetail from './src/screens/EmployeeDetail';
import EmployeeAttendance from './src/screens/EmployeeAttendance';
import EmployeeViolation from './src/screens/EmployeeViolation';
import ViolationDetails from './src/screens/ViolationDetails';
import EmployeeRanking from './src/screens/EmployeeRanking';
import EmployeeSummary from './src/screens/EmployeeSummary';
// adb tcpip 5555
// adb connect 192.168.1.2
// adb disconnect
// gradlew bundleRelease // for AAB
// gradlew.bat assembleRelease // for APK
// android/app/build/outputs/apk/release/app-release.apk

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: '#2E81FE',
          },
          headerTitleStyle: {fontSize: 19},
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Admin Dashboard"
          component={AdminDashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="Add Section" component={AddSection} />
        <Stack.Screen name="Section Detail" component={SectionDetails} />
        <Stack.Screen name="Edit Section" component={EditSection} />
        <Stack.Screen name="Supervisors" component={Supervisors} />
        <Stack.Screen name="Add Supervisor" component={AddSupervisor} />
        <Stack.Screen name="Production" component={Production} />
        <Stack.Screen name="Create Batch" component={AddBatch} />
        <Stack.Screen name="Batch Detail" component={BatchDetails} />
        <Stack.Screen name="Batch Summary" component={BatchSummary} />
        <Stack.Screen name="Defects" component={Defects} />
        <Stack.Screen name="Productivity Rules" component={ProductivityRules} />
        <Stack.Screen name="Add Employee" component={AddEmployee} />
        <Stack.Screen name="Employee Record" component={EmployeeRecord} />
        <Stack.Screen name="Employee Detail" component={EmployeeDetail} />
        <Stack.Screen name="Employee Violation" component={EmployeeViolation} />
        <Stack.Screen name="Violation Details" component={ViolationDetails} />
        <Stack.Screen name="Employee Summary" component={EmployeeSummary} />
        <Stack.Screen
          name="Employee Attendance"
          component={EmployeeAttendance}
        />
        <Stack.Screen
          name="Employee Productivity"
          component={EmployeeProductivity}
        />
        <Stack.Screen name="Employees Ranking" component={EmployeeRanking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
