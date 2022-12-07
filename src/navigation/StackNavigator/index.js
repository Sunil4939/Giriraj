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


const HomeStackData = [
    {
        id: 1,
        name: 'HomeScreen',
        component: HomeScreen,
    },

    {
        id: 2,
        name: 'SingleProductScreen',
        component: SingleProduct,
    },
    {
        id: 3,
        name: 'SearchScreen',
        component: SearchPage,
    },
    {
        id: 4,
        name: 'OrderPlaced',
        component: OrderPlaced,
    },
    {
        id: 5,
        name: 'PaymentScreen',
        component: PaymentGateway,
    },
    {
        id: 6,
        name: 'SetAccount',
        component: SetAccountDetails,
    },
]

const HistoryStackData = [
    {
        id: 1,
        name: 'HistoryScreen',
        component: OrderHistory,
    },
    {
        id: 2,
        name: 'ProductReturn',
        component: ProductReturn,
    },
    {
        id: 3,
        name: 'ReasonReturnProduct',
        component: ReasonOfReturn,
    },

]

const NotificationStackData = [
    {
        id: 1,
        name: 'NotificationScreen',
        component: Notification,
    },
    {
        id: 2,
        name: 'CouponScreen',
        component: Coupons,
    },
    {
        id: 3,
        name: 'AccountDetails',
        component: MyAccount,
    },
   
    // {
    //     id: 6,
    //     name: 'SetAccount',
    //     component: SetAccountDetails,
    // },
]

const AddedCartStackData = [
    {
        id: 1,
        name: 'CartScreen',
        component: AddedCarts,
    },
    {
        id: 2,
        name: 'AddressScreen',
        component: AddAddress,
    },
    {
        id: 3,
        name: 'CategoryScreen',
        component: CategoryPage,
    },
    {
        id: 4,
        name: 'FilterScreen',
        component: FilterPage,
    },
    {
        id: 5,
        name: 'PlaceOrderScreen',
        component: PlaceOrder,
    },
    {
        id: 6,
        name: 'NewAddressScreen',
        component: NewAddress,
    },
 
]

const Stack = createStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            {HomeStackData.map((item) =>
                <Stack.Screen name={item.name} component={item.component}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            )}

        </Stack.Navigator>
    );
}


const HistoryStack = () => {
    return (
        <Stack.Navigator initialRouteName='HistoryScreen'>
            {HistoryStackData.map((item) =>
                <Stack.Screen name={item.name} component={item.component}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            )}

        </Stack.Navigator>
    );
}

const NotificationStack = () => {
    return (
        <Stack.Navigator initialRouteName='NotificationScreen'>
            {NotificationStackData.map((item) =>
                <Stack.Screen name={item.name} component={item.component}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            )}

        </Stack.Navigator>
    );
}

const AddedCartStack = () => {
    return (
        <Stack.Navigator initialRouteName='CartScreen'>
            {AddedCartStackData.map((item) =>
                <Stack.Screen name={item.name} component={item.component}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            )}
         
        </Stack.Navigator>
    );
}


export {
    HomeStack,
    NotificationStack,
    AddedCartStack,
    HistoryStack
}