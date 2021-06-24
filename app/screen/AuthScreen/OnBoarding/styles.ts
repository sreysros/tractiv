import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 500,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    viewImage: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    imageStyle: {
        marginLeft: 22,
    },
    textLogo: {
        fontSize: 40, color: 'white', fontWeight: 'bold',
    },
    backgroundView: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        height: '40%',
        backgroundColor: '#334856'
    },
    wrapTextBoarding: {
        width: '80%', marginHorizontal: 50, marginVertical: 50
    },
    textBoardingTitle: {
        color: 'white', fontSize: 30, paddingVertical: 10, fontWeight: 'bold'
    },
    horizontalLine: {
        borderBottomColor: 'white', borderBottomWidth: 1, width: 33
    },
    subTitleBoarding: {
        color: 'white', paddingVertical: 10, fontSize: 16
    },
    btnStartView: {
        flexDirection: 'row', justifyContent: 'space-between', height: 100
    },
    btnStartLeft: {
        backgroundColor: '#D97D54', width: '80%'
    },
    gettingStartText: {
        fontSize: 20, fontWeight: 'bold', color: 'white', alignSelf: 'center', marginVertical: 25, textTransform: 'uppercase'
    },
    btnStartRight: {
        backgroundColor: '#C4714B', width: '20%'
    },
    iconStart: {
        alignSelf: 'center', marginVertical: 30,
    },
    // safeAreaContainer: (screen) => {
       
    //         flex: 1, backgroundColor: '#334856'
    // },
    viewContainer: {
        backgroundColor: '#334856', marginTop: 40
    },
    logoStyle: { alignItems: 'center' },
    textHeader: { color: 'white', fontWeight: 'bold', fontSize: 30 },
    signUpContainer: { marginHorizontal: 30, marginVertical: 40 },
    subTitle: { color: 'white', fontSize: 12, paddingVertical: 5 },
    socialLogoContainer: { flexDirection: 'row', marginVertical: 20, marginHorizontal: -5 },
    fieldStyle: { color: 'white', fontSize: 16 },
    inputStyle: { borderColor: '#D97D54', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginHorizontal: -10, marginVertical: 10 },
    createBtnStyle: { borderRadius: 15, marginVertical: 30, padding: 15, backgroundColor: '#D97D54' },
    loginContainerStyle: {
        position: 'absolute', bottom: 50, left: 0, right: 0, marginHorizontal: 30
    },
    loginBtnStyle: {
        backgroundColor: '#D97D54', borderRadius: 10, padding: 12
    }

});