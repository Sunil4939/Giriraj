import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/login';
import OtpPage from '../screens/otp';
import DrawerNavigator from '../navigation/DrawerNavigator';
import TabNavigator from '../navigation/BottomTabNavigator';


const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
               
                <Stack.Screen name="Login" component={LoginPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="OTPScreen" component={OtpPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            
                 <Stack.Screen name="Drawer" component={DrawerNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                
                <Stack.Screen name="BottomTab" component={TabNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Root;