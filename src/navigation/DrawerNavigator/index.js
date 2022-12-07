import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
// import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { DrawerItemList, } from "@react-navigation/drawer";
import { COLORS, icons } from '../../constants'
import styles from "./styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../BottomTabNavigator";
import ContactUs from '../../screens/Contact';
import AboutUs from '../../screens/About';
import Help from '../../screens/Help';
import SingleProduct from "../../screens/SingleProduct";
const { width, height } = Dimensions.get('window')

const DrawerData = [
  {
      id:1,
      name: 'Home',
      icon: icons.home,
      component: TabNavigator,
  },
  {
      id:2,
      name: 'Profile',
      icon: icons.Profile,
      component: TabNavigator,
  },
  {
      id:3,
      name: 'Product',
      icon: icons.Category,
      component: SingleProduct,
  },
  {
      id:4,
      name: 'Services',
      icon: icons.Category,
      component: TabNavigator,
  },

  {
      id:5,
      name: 'About Us',
      icon: icons.Info,
      component: AboutUs,
  },
  {
      id:6,
      name: 'Help FAQ',
      icon: icons.Info,
      component: Help,
  },
  {
      id:7,
      name: 'Contact Us',
      icon: icons.Info,
      component: ContactUs,
  },
];


const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const { navigation } = props

  return (
    <View>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
          <Image style={styles.menu} source={icons.menu} resizeMode="cover" />
        </TouchableOpacity>
        <Text style={styles.headTitle}>More Options</Text>
      </View>

      <DrawerItemList {...props} />

    </View>

  )
}


const DrawerNavigator = () => {

  return (
    <Drawer.Navigator 
      initialRouteName="BottomTab"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.labels,
        drawerItemStyle: styles.items,
        drawerStyle: styles.drawerContainer,
      }}
    >
      {DrawerData.map((item) =>
        <Drawer.Screen name={item.name} component={item.component}
          options={() => ({
            headerShown: false,
            drawerStyle: styles.tabs,
            drawerIcon: () => (
              <View style={{ width: width * .06, }}>
                <Image style={[styles.icons, item.name == 'Profile' && { width: width * .05, height: height * .035 },
                item.name == 'Home' && { width: width * .055, height: height * .035 }]} source={item.icon} />
              </View>
            ),
            // swipeEnabled: HideDrawer(route, route.name) 
          })}
        />
      )}

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

