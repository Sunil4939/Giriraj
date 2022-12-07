import React from "react";
import { Image,  View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { COLORS, icons,  } from "../../constants";
import styles from "./styles";
import { HomeStack, AddedCartStack, NotificationStack, HistoryStack } from "../StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
  
    <Tab.Navigator initialRouteName='HomeTab'
     screenOptions={() => ({
      tabBarActiveTintColor: COLORS.blue,
      tabBarInactiveTintColor: COLORS.black2,
      tabBarStyle:styles.tabBarStyle,
    })} >
      
      <Tab.Screen name="HomeTab" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <Image style={[styles.home,]} source={icons.home} />
        })}
      />
          <Tab.Screen name="My Orders" component={HistoryStack} 
      options={() => ({
        headerShown: false,
        tabBarIcon: () => <Image style={[styles.bag,]} source={icons.bag} />
      })}
       />
    
     <Tab.Screen name="Notification" component={NotificationStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <View>
            <Image style={[styles.well,]} source={icons.notification} />
            <View source={icons.redCircle} style={styles.notifications} >
              <Text style={styles.text}>10</Text>
            </View>
          </View>
         
        })}
      />
  
      <Tab.Screen name="Cart" component={AddedCartStack} 
      options={() => ({
        headerShown: false,
        tabBarIcon: () => <Image style={styles.buy} source={icons.buy} />
       
      })}
      />
    </Tab.Navigator>
  )
}


export default TabNavigator;

