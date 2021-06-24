import React, { useRef, useLayoutEffect, useEffect } from 'react';
import {
    SafeAreaView,
     SectionList,
    View, Text, ImageBackground, Image, StatusBar
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import NavigationProvider from '../../../../navigation/NavigationProvider';
import ScreenName from '../../../../navigation/ScreenName';
import { Images } from '../../../../themes';
import styles from './styles';

const GettingStartScreen = (props: any) => {
    

    return (
        <>
        <SafeAreaView style={styles.container} />
            {/* <View style={styles.container}> */}
                <ImageBackground source={Images.Image4} style={styles.imageBackground}>
                    <View style={styles.viewImage}>
                        <Image source={Images.ic_logo} style={styles.imageStyle} />
                        <Text style={styles.textLogo}>Tractiv</Text>
                    </View>
                </ImageBackground>
                <View style={styles.backgroundView}>
                    <View style={styles.wrapTextBoarding}>
                        <Text style={styles.textBoardingTitle}>Track Your Active Lifestyle</Text>
                        <View style={styles.horizontalLine}/>
                        <Text style={styles.subTitleBoarding}>With goal a driven approach</Text>
                    </View>
                </View>
                <View style={styles.btnStartView}>
                    <View style={styles.btnStartLeft}>
                        <Text style={styles.gettingStartText}>Get Started</Text>
                    </View>
                    
                    <View style={styles.btnStartRight}>
                        <TouchableHighlight onPress={() => NavigationProvider.navigate(ScreenName.CreateAccountScreen)}>
                            <Image source={Images.arrowRight} style={styles.iconStart} />
                        </TouchableHighlight>
                    </View>
                </View>
       </>
    )  
}



export default GettingStartScreen;