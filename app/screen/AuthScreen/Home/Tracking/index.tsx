import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import {
    SafeAreaView,
    SectionList,
    View, Text, ImageBackground, Image, StatusBar, ActivityIndicator
} from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Card, Icon, Input, Image as ImageElement } from 'react-native-elements';
import { CalendarList } from 'react-native-calendars';
import NavigationProvider from '../../../../navigation/NavigationProvider';
import ScreenName from '../../../../navigation/ScreenName';
import { Images } from '../../../../themes';
import styles from './styles';
import moment from 'moment';

const TrackingScreen = (props: any) => {

    const renderCalendar = () => {
        return (
            <>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                />
            </>
        );
    };
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#334856'}}>
            <ScrollView>
                    <View style={{ backgroundColor: '#334856', shadowColor: '#000', shadowOpacity: 0.16, height: 70, shadowOffset: {width: 0, height: 5}}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25, paddingHorizontal: 20}}>
                            <Text style={{color: 'white', fontSize: 16, alignItems: 'center'}}>{moment().format('MMMM YYYY')}</Text>
                        <TouchableOpacity>
                            <Image source={Images.plus} style={{justifyContent: 'flex-end'}} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems:'center', marginVertical: 35}}>
                        <View style={{backgroundColor: 'white', width: 70, height: 70, borderRadius: 35, marginTop: 30}}>
                            <Image source={Images.bigImageIcon} style={{alignSelf: 'center', marginVertical: 15}} />
                        </View>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Surfing</Text>
                        <View style={styles.horizontalLine} />
                        <Text style={{textTransform: 'uppercase', color: 'white'}}>Most Tracked Activity</Text>
                    </View>
                <View style={{ backgroundColor: 'white', height: 50, borderWidth: 1, borderColor: '#F0F3F4'}}>
                    <View style={{flexDirection: 'row', margin: 15}}>
                        <Image source={Images.week} style={{marginHorizontal: 5}} />
                        <Text style={{ marginHorizontal: 5 }}>Week</Text>
                        <Image source={Images.month} style={{ marginHorizontal: 5 }} />
                        <Text style={{ marginHorizontal: 5 }}>Month</Text>
                    </View>
                </View>
           <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
               <CalendarList 
                horizontal={true}
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                pagingEnabled={true}
                pastScrollRange={0}
                futureScrollRange={0}
                showScrollIndicator={true} />
           </View>
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default TrackingScreen;