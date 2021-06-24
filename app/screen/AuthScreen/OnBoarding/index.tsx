import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import {
    SafeAreaView,
    SectionList,
    View, Text, ImageBackground, Image, StatusBar
} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import NavigationProvider from '../../../navigation/NavigationProvider';
import ScreenName from '../../../navigation/ScreenName';
import { Images } from '../../../themes';
import styles from './styles';

const OnBoardingScreen = (props: any) => {
    // const [activityScreen, setActivityScreen] = useState(false);
    // const [trackScreen, setTrackScreen] = useState(false);
    // const [WeeklyScreen, setWeeklyScreen] = useState(false);
    // const [boardScreen, setBoardScreen] = useState('');

    // function conditionBackground(boardScreen: any) {
    //     return boardScreen === 'activityScreen' ? '#B9B0A2'
    //         : boardScreen === 'trackScreen' ? '#D97D54'
    //             : boardScreen === 'WeeklyScreen' ? '#87BCBF' : ''
    // }

    // const safeAreaContainer = function (boardScreen: any) {
    //     return {
    //         flex: 1,
    //         backgroundColor: conditionBackground(boardScreen)
    //     }
    // }

    // useLayoutEffect(() => {
    //     props.navigation.setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity
    //                 hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
    //                 onPress={() => null}>
    //                 <Text>Skip</Text>
    //             </TouchableOpacity>
    //         )
    //     });
    // }, [props.navigation]);

    return (
        <SafeAreaView style={{backgroundColor: 'red'}}>
            <Text>Hello</Text>
        </SafeAreaView>
    )
}

export default OnBoardingScreen;