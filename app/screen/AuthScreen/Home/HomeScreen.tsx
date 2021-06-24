import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import {
    SafeAreaView,
    SectionList,
    View, Text, ImageBackground, Image, StatusBar, ActivityIndicator
} from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Card, Icon, Input, Image as ImageElement } from 'react-native-elements'
import NavigationProvider from '../../../navigation/NavigationProvider';
import ScreenName from '../../../navigation/ScreenName';
import { Images } from '../../../themes';
import styles from './styles';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderTitle from './HeaderTitle';

const HomeScreen = (props: any) => {
    // useLayoutEffect(() => {
    //     props.navigation.setOptions({
    //         headerLeft: () => <HeaderLeft />,
    //         headerRight: () => <HeaderRight />,
    //         headerTitle: () => <HeaderTitle />,
    //     });
    // }, [props.navigation]);
    
    return (
        <SafeAreaView>
            <ScrollView>

            
            <View style={{ backgroundColor: '#F0F3F4', marginHorizontal: 20}}>
                {/* <View style={{ backgroundColor: '#87BCBF', height: 200}}>
                    <View style={{marginHorizontal: 30, marginTop: 20}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white' }}>Discover</Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Activities</Text>
                        <View style={styles.horizontalLine} />
                        <Text style={{fontSize: 18, color: 'white'}}>Discover fun new activities below:</Text>
                    </View>
                    <View style={{}}>
                        <Input
                            inputContainerStyle={{backgroundColor: 'white'}}
                            inputStyle={{ color: 'white' }}
                            placeholder='Input your name' />
                    </View>
                </View> */}
                <Text style={{ fontSize: 18, color: '#334856', fontWeight: 'bold', paddingVertical: 20}}>Earlier Today</Text>
                    <View style={{ shadowColor: '#505C62', shadowOffset: {height: 5, width: 3}, shadowOpacity: 0.13, shadowRadius: 2, backgroundColor: 'white', width: '100%' , borderRadius: 15, marginBottom: 20, padding: 10, alignSelf: 'center'}}>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 10}}>
                        <Image source={Images.user1} style={{padding: 10}} />
                        <View style={{paddingHorizontal: 15,paddingVertical: 5, width: '80%'}}>
                            <Text style={{lineHeight: 20}}>Jamine Allender surfed for 1.5 Hours at Sunset Cliffs</Text>
                            <Text style={{ lineHeight: 20 }}>Today at 5:37 PM</Text>
                        </View>
                        <Image source={Images.option} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <ImageElement
                                source={Images.timeline1}
                                style={{ resizeMode: 'contain', width: 120, height: 120, }}
                            />
                            <ImageElement
                                source={Images.timeline2}
                                style={{ resizeMode: 'contain', width: 176, height: 120 }}
                            />
                    </View>
                        <View style={{ borderBottomColor: '#F0F3F4', borderBottomWidth: 1, width: '100%', marginVertical: 10, alignSelf: 'center'}} />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.likeIcon} style={{marginHorizontal: 5}} />
                            <Text>LIKE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.commentIcon} style={{ marginHorizontal: 5 }} />
                            <Text>COMMENT</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.shareIcon} style={{ marginHorizontal: 5 }} />
                            <Text>SHARE</Text>
                            </View>
                            
                            
                            
                        </View>
                </View>

                    <View style={{ shadowColor: '#505C62', shadowOffset: { height: 5, width: 3 }, shadowOpacity: 0.13, shadowRadius: 2, backgroundColor: 'white', width: '100%', borderRadius: 15, marginBottom: 20, padding: 10, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 10 }}>
                            <Image source={Images.user2} style={{ padding: 10 }} />
                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, width: '80%' }}>
                                <Text style={{ lineHeight: 20 }}>Jamine Allender surfed for 1.5 Hours at Sunset Cliffs</Text>
                                <Text style={{ lineHeight: 20 }}>Today at 5:37 PM</Text>
                            </View>
                            <Image source={Images.option} />
                        </View>
                        
                        <View style={{ borderBottomColor: '#F0F3F4', borderBottomWidth: 1, width: '100%', marginVertical: 10, alignSelf: 'center' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.likeIcon} style={{ marginHorizontal: 5 }} />
                                <Text>LIKE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.commentIcon} style={{ marginHorizontal: 5 }} />
                                <Text>COMMENT</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.shareIcon} style={{ marginHorizontal: 5 }} />
                                <Text>SHARE</Text>
                            </View>

                        </View>
                    </View>
                    <Text style={{ fontSize: 18, color: '#334856', fontWeight: 'bold', paddingVertical: 20 }}>Yesterday</Text>
                    <View style={{ shadowColor: '#505C62', shadowOffset: { height: 5, width: 3 }, shadowOpacity: 0.13, shadowRadius: 2, backgroundColor: 'white', width: '100%', borderRadius: 15, marginBottom: 20, padding: 15, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 10 }}>
                            <Image source={Images.user3} style={{ padding: 10 }} />
                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, width: '80%' }}>
                                <Text style={{ lineHeight: 20 }}>Thomas Hidalgo hiked 3.2 miles at Yosemite Ntl. Park</Text>
                                <Text style={{ lineHeight: 20 }}>Yesterday at 10:34 AM</Text>
                            </View>
                            <Image source={Images.option} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <ImageElement
                                source={Images.timeline3}
                                style={{ resizeMode: 'contain', width: 120, height: 120 }}
                            />
                            <ImageElement
                                source={Images.timeline4}
                                style={{ resizeMode: 'contain', width: 176, height: 120 }}
                            />
                        </View>
                        <View style={{ borderBottomColor: '#F0F3F4', borderBottomWidth: 1, width: '100%', marginVertical: 10, alignSelf: 'center' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.likeIcon} style={{ marginHorizontal: 5 }} />
                                <Text>LIKE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.commentIcon} style={{ marginHorizontal: 5 }} />
                                <Text>COMMENT</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.shareIcon} style={{ marginHorizontal: 5 }} />
                                <Text>SHARE</Text>
                            </View>



                        </View>
                    </View>

                    <View style={{ shadowColor: '#505C62', shadowOffset: { height: 5, width: 3 }, shadowOpacity: 0.13, shadowRadius: 2,backgroundColor: 'white', width: '100%', borderRadius: 15, marginBottom: 20, padding: 15, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 10 }}>
                            <Image source={Images.user3} style={{ padding: 10 }} />
                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, width: '80%' }}>
                                <Text style={{ lineHeight: 20 }}>Thomas Hidalgo hiked 3.2 miles at Yosemite Ntl. Park</Text>
                                <Text style={{ lineHeight: 20 }}>Yesterday at 10:34 AM</Text>
                            </View>
                            <Image source={Images.option} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <ImageElement
                                source={Images.timeline3}
                                style={{ resizeMode: 'contain', width: 120, height: 120 }}
                            />
                            <ImageElement
                                source={Images.timeline4}
                                style={{ resizeMode: 'contain', width: 176, height: 120 }}
                            />
                        </View>
                        <View style={{ borderBottomColor: '#F0F3F4', borderBottomWidth: 1, width: '100%', marginVertical: 10, alignSelf: 'center' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.likeIcon} style={{ marginHorizontal: 5 }} />
                                <Text>LIKE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.commentIcon} style={{ marginHorizontal: 5 }} />
                                <Text>COMMENT</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Images.shareIcon} style={{ marginHorizontal: 5 }} />
                                <Text>SHARE</Text>
                            </View>
                        </View>
                    </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;