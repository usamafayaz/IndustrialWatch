import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from './src/screens/Login';
import AdminDashboard from './src/screens/AdminDashboard';
import Sections from './src/screens/Sections';
import AddSection from './src/screens/AddSection';
import SectionDetails from './src/screens/SectionDetails';
import EditSection from './src/screens/EditSection';
import Supervisors from './src/screens/Supervisors';
import AddSupervisor from './src/screens/AddSupervisor';
import Batch from './src/screens/Batch';
import AddProduct from './src/screens/AddProduct.jsx';
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
import EmployeeSummary from './src/screens/EmployeeSummary.jsx';
import SupervisorDashboard from './src/screens/SupervisorDashboard';
import DefectMonitoring from './src/screens/DefectMonitoring';
import EmployeeMonitoring from './src/screens/EmployeeMonitoring';
import ProductScanning from './src/screens/ProductScanning';
import EmployeeLogin from './src/screens/EmployeeLogin';
import EmployeeLoginHome from './src/screens/EmployeeLoginHome';
import EmployeeProfile from './src/screens/EmployeeProfile';
import EditProfile from './src/screens/EditProfile';
import SplashScreen from './src/screens/SplashScreen';
import PrimaryAppBar from './src/components/PrimaryAppBar';
import SecondaryAppBar from './src/components/SecondaryAppBar';
import ProductionDashboard from './src/screens/ProductionDashboard';
import RawMaterials from './src/screens/RawMaterials';
import Inventory from './src/screens/Inventory';
import InventoryDetail from './src/screens/InventoryDetail';
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
            backgroundColor: '#2196F3',
          },
          headerTitleStyle: {fontSize: 19},
        }}>
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="Sections"
          component={Sections}
          options={{header: () => <PrimaryAppBar text="Sections" />}}
        />
        <Stack.Screen
          name="Add Section"
          component={AddSection}
          options={{header: () => <PrimaryAppBar text="Add Section" />}}
        />
        <Stack.Screen
          name="Section Detail"
          component={SectionDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Section"
          component={EditSection}
          options={{header: () => <PrimaryAppBar text="Edit Section" />}}
        />
        <Stack.Screen
          name="Supervisors"
          component={Supervisors}
          options={() => ({
            header: () => <PrimaryAppBar text={'Supervisors'} />,
          })}
        />
        <Stack.Screen
          name="Add Supervisor"
          component={AddSupervisor}
          options={() => ({
            header: () => <PrimaryAppBar text={'Add Supervisor'} />,
          })}
        />
        {/* Newly Added */}
        <Stack.Screen
          name="Production"
          component={ProductionDashboard}
          options={() => ({
            header: () => <PrimaryAppBar text="Production" />,
          })}
        />
        <Stack.Screen
          name="Raw Material"
          component={RawMaterials}
          options={() => ({
            header: () => <PrimaryAppBar text="Raw Materials" />,
          })}
        />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={() => ({
            header: () => <PrimaryAppBar text={'Inventory'} />,
          })}
        />
        <Stack.Screen
          name="Inventory Detail"
          component={InventoryDetail}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Batch"
          component={Batch}
          options={() => ({
            header: () => <PrimaryAppBar text={'Batch'} />,
          })}
        />
        {/* <Stack.Screen
          name="Production"
          component={Production}
          options={() => ({
            header: () => <SecondaryAppBar text="Production" />,
          })}
        /> */}
        <Stack.Screen
          name="Add Product"
          component={AddProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Batch Detail"
          component={BatchDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Batch Summary"
          component={BatchSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Defects"
          component={Defects}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Productivity Rules"
          component={ProductivityRules}
          options={() => ({
            header: () => <PrimaryAppBar text={'Productivity Rules'} />,
          })}
        />
        <Stack.Screen
          name="Add Employee"
          component={AddEmployee}
          options={() => ({
            header: () => <PrimaryAppBar text={'Add Employee'} />,
          })}
        />
        <Stack.Screen
          name="Employee Record"
          component={EmployeeRecord}
          options={() => ({
            header: () => <PrimaryAppBar text={'Employee Record'} />,
          })}
        />
        <Stack.Screen
          name="Employee Detail"
          component={EmployeeDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employee Violation"
          component={EmployeeViolation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Violation Details"
          component={ViolationDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employee Summary"
          component={EmployeeSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Attendance"
          component={EmployeeAttendance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employee Productivity"
          component={EmployeeProductivity}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Employees Ranking"
          component={EmployeeRanking}
          options={() => ({
            header: () => <PrimaryAppBar text={'Employee Ranking'} />,
          })}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Supervisor Dashboard"
          component={SupervisorDashboard}
        />
        <Stack.Screen
          name="Defect Monitoring"
          component={DefectMonitoring}
          options={{header: () => <SecondaryAppBar text="Defect Monitoring" />}}
        />
        <Stack.Screen
          name="Employee Monitoring"
          component={EmployeeMonitoring}
          options={{
            header: () => <SecondaryAppBar text="" />,
          }}
        />
        <Stack.Screen
          name="Product Scanning"
          component={ProductScanning}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employee Login"
          component={EmployeeLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={EmployeeLoginHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employee Profile"
          component={EmployeeProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
