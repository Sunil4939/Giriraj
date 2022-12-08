import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home';
import SearchPage from '../../screens/Search';
import SingleProduct from '../../screens/SingleProduct';
import AddedCarts from '../../screens/Cart';
import AddAddress from '../../screens/AddAddress';
import CategoryPage from '../../screens/Category';
import FilterPage from '../../screens/Filter';
import PlaceOrder from '../../screens/PlaceOrder';
import NewAddress from '../../screens/NewAddress';
import OrderHistory from '../../screens/History';
import ProductReturn from '../../screens/ReturnProduct';
import PaymentGateway from '../../screens/Payment';
import OrderPlaced from '../../screens/OrderPlaced';
import ReasonOfReturn from '../../screens/ReasonReturn';
import SetAccountDetails from '../../screens/SetAccount';
import Notification from '../../screens/Notification';
import Coupons from '../../screens/Coupon';
import MyAccount from '../../screens/MyAccount';


const Stack = createStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="SingleProductScreen" component={SingleProduct}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="SearchScreen" component={SearchPage}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="OrderPlaced" component={OrderPlaced}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="PaymentScreen" component={PaymentGateway}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="SetAccount" component={SetAccountDetails}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="CouponScreen" component={Coupons}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}


const HistoryStack = () => {
    return (
        <Stack.Navigator initialRouteName='HistoryScreen'>
            <Stack.Screen name="HistoryScreen" component={OrderHistory}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="ProductReturn" component={ProductReturn}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="ReasonReturnProduct" component={ReasonOfReturn}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}

const NotificationStack = () => {
    return (
        <Stack.Navigator initialRouteName='NotificationScreen'>
            <Stack.Screen name="NotificationScreen" component={Notification}
                options={() => ({
                    headerShown: false,
                })}
            />

        </Stack.Navigator>
    );
}

const AddedCartStack = () => {
    return (
        <Stack.Navigator initialRouteName='CartScreen'>
            <Stack.Screen name="CartScreen" component={AddedCarts}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="AddressScreen" component={AddAddress}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="CategoryScreen" component={CategoryPage}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="FilterScreen" component={FilterPage}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrder}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen name="NewAddressScreen" component={NewAddress}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}


export {
    HomeStack,
    NotificationStack,
    AddedCartStack,
    HistoryStack
}