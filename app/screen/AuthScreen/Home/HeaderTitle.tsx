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

const headerTitle = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 26, fontWeight: '500', paddingRight: 10, }}>Tractiv</Text>
            <Image source={Images.ic_logo_color} style={{ width: 30, height: 30, marginTop: 2}} />
        </View>
        
    )
}

export default headerTitle;