import React from 'react';
import {
    SafeAreaView,
    View, Text, Image, StatusBar
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Input, SocialIcon, Button } from 'react-native-elements';
import { Images } from '../../../../themes';
import styles from './styles';
import NavigationProvider from '../../../../navigation/NavigationProvider';
import ScreenName from '../../../../navigation/ScreenName';
import { TouchableOpacity } from 'react-native';

const CreateAccountScreen = (props: any) => {

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={styles.logoStyle}>
                    <Image source={Images.ic_logo_color} />
                    <Text style={styles.textHeader}>Tractiv</Text>
                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.textHeader}>Sign Up</Text>
                    <Text style={styles.subTitle}>Sign Up with</Text>
                    <View style={styles.socialLogoContainer}>
                        <SocialIcon
                            light
                            type='google'
                        />
                        <SocialIcon
                            light
                            type='facebook'
                        />
                    </View>
                    <View>
                        <Text style={styles.fieldStyle}>Name</Text>
                        <Input
                            inputContainerStyle={styles.inputStyle}
                            inputStyle={{color: 'white'}}
                            placeholder='Input your name' />
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
                        <Text style={{ color: 'white' }}>Creating an account mean you're okay with our Terms of Service and our Privacy Policy.</Text>
                        <Button
                            buttonStyle={styles.createBtnStyle}
                            title="Create an Account"
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white' }}>Already have an account? </Text>
                            <TouchableOpacity onPress={()=> NavigationProvider.navigate(ScreenName.LoginScreen)}>
                                <Text style={{ color: '#D97D54' }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreateAccountScreen;