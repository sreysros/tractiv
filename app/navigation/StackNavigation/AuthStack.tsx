import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenName from '../ScreenName';
import ScreenPath from '../ScreenPath';
import { screenHeaderOption, screenHeaderTransparentOption, screenHeaderWhiteOption } from './StackOption';
import { Images } from '../../themes';
import { StyleSheet } from 'react-native';
import HeaderLeft from '../../screen/AuthScreen/Home/HeaderLeft';
import headerTitle from '../../screen/AuthScreen/Home/HeaderTitle';
import HeaderTitle from '../../screen/AuthScreen/Home/HeaderTitle';
import headerRight from '../../screen/AuthScreen/Home/HeaderRight';
import HeaderRight from '../../screen/AuthScreen/Home/HeaderRight';

const style = StyleSheet.create({
    whiteCircle: {
        width: 82, height: 82, backgroundColor: '#FFFFFF', borderRadius: 41, marginVertical: -40
    },
    imageCircle: {
        alignSelf: 'center', marginVertical: 10, shadowColor: '#FC9667', shadowOffset: { height: 15, width: 0 , bottom: 30}, shadowOpacity: 0.15, shadowRadius: 2, backgroundColor: '#D97D54', width: 60, height: 60, borderRadius: 30
    },
    imageStyle :{
        width: 30, height: 30, alignSelf: 'center', marginVertical: 15
    }
})

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={ScreenName.HomeScreen}
            screenOptions={screenHeaderOption()}>
            <Stack.Screen
                name={ScreenName.HomeScreen}
                component={ScreenPath.HomeScreen}
                options={{
                    headerLeft: () => (<HeaderLeft />),
                    headerTitle: () => (<HeaderTitle />),
                    headerRight: () => (<HeaderRight />),
                    title: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 0,
                    },
                    headerStyle: {
                        backgroundColor: 'rgb(249,249,249)',
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0,
                        height: 110
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const TrackingStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={ScreenName.HomeScreen}
            screenOptions={screenHeaderOption()}>
            <Stack.Screen
                name={ScreenName.TrackingScreen}
                component={ScreenPath.TrackingScreen}
                options={{
                    headerLeft: () => (<HeaderLeft />),
                    headerTitle: () => (<HeaderTitle />),
                    headerRight: () => (<HeaderRight />),
                    title: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 0,
                    },
                    headerStyle: {
                        backgroundColor: 'rgb(249,249,249)',
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0,
                        height: 110
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthorizedStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarLabel: 'Name', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Settings" component={TrackingStack}  options={{tabBarLabel: 'Tracking', tabBarBadgeStyle: {width: 20},
                 tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="chart-timeline-variant" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Upload" component={SettingsScreen} options={{
                tabBarButton: (props) => <View style={{
                     alignItems: 'center'}}>
                    {/* <Image source={Images.newIcon} style={style.whiteCircle} /> */}
                    <View {...props} style={style.whiteCircle}>
                    <TouchableOpacity style={style.imageCircle}>
                    <Image source={Images.ic_logo} style={style.imageStyle} />
                </TouchableOpacity>
                </View>
                </View>
               
            }} />

            <Tab.Screen name="Explore" component={SettingsScreen} options={{
                tabBarLabel: 'Explore', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Profile" component={SettingsScreen} options={{
                tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default AuthorizedStack;
