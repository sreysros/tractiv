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

const headerRight = () => {
    return (
        <View style={{marginHorizontal: 20}}>
            <TouchableOpacity>
                <Image source={Images.message} style={{ alignSelf: 'flex-end', width: 20, height: 18}}/>
            </TouchableOpacity>
        </View>
    )
}

export default headerRight;