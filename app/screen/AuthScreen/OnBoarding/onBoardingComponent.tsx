import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import {
    SafeAreaView,
    SectionList,
    View, Text, ImageBackground, Image, StatusBar, TouchableOpacity
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import NavigationProvider from '../../../navigation/NavigationProvider';
import ScreenName from '../../../navigation/ScreenName';
import { Images } from '../../../themes';
import styles from './styles';

const OnBoardingComponent = (props: any) => {
    const [activityScreen, setActivityScreen] = useState(false);
    const [trackScreen, setTrackScreen] = useState(false);
    const [WeeklyScreen, setWeeklyScreen] = useState(false);
    const [boardScreen, setBoardScreen] = useState('');
    
    function conditionBackground(boardScreen: any) {
        return boardScreen === 'activityScreen' ? '#B9B0A2'
            : boardScreen === 'trackScreen' ? '#D97D54'
                : boardScreen === 'WeeklyScreen' ? '#87BCBF';
    } 
    
    const safeAreaContainer = function(boardScreen: any) {
        return {
            flex: 1,
            backgroundColor: conditionBackground(boardScreen)
        }
    }

    return (
        <>
            <SafeAreaView style={safeAreaContainer(props.boardScreen)}>
                <StatusBar barStyle="light-content" />
                <View style={styles.viewContainer}>
                    <View style={styles.logoStyle}>
                        <Image source={Images.ic_logo_color} />
                        <Text style={styles.textHeader}>Tractiv</Text>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.textHeader}>Hey, </Text>
                        <Text style={styles.textHeader}>Login Now.</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={{ color: 'white' }}>If you are new / </Text>
                            <TouchableOpacity onPress={() => NavigationProvider.navigate(ScreenName.CreateAccountScreen)}>
                                <Text style={{ color: '#D97D54', fontWeight: 'bold' }}>Create New</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <Text style={styles.fieldStyle}>Email</Text>
                            <Input
                                inputContainerStyle={styles.inputStyle}
                                inputStyle={{ color: 'white' }}
                                placeholder='example@gmail.com' />
                            <Text style={styles.fieldStyle}>Password</Text>
                            <Input
                                inputContainerStyle={styles.inputStyle}
                                inputStyle={{ color: 'white' }}
                                placeholder='6+ Characters with number' />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: -20 }}>
                            <Text style={{ color: 'white' }}>Forget Password?  </Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#D97D54' }}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <Button
                    containerStyle={styles.loginContainerStyle}
                    buttonStyle={styles.loginBtnStyle}
                    title="Login"
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </SafeAreaView>
        </>
    )
}

export default OnBoardingComponent;