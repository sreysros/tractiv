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

const HeaderLeft = () => {
    return (
        <View style={{marginHorizontal: 20}}>
            <TouchableOpacity>
                <Image source={Images.drawer} style={{width: 21, height: 17}} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderLeft;