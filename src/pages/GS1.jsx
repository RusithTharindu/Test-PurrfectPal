import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native'

const GS1 = () => {
    return(
        <SafeAreaView style = {styles.SafeAreaStyle}>
            <View style = {styles.SkipBtnView}>
                
            </View>

            <View style = {styles.Details}>
                <View style= {styles.ImageContainer}>
                    <Image source={require('../images/GSDog.png')}  style = {styles.ImageStyle}/>
                </View>
                <View style ={styles.textView}>
                    <Text style = {styles.Heading}>Need a Pet ?</Text>
                    <Text style = {styles.cont}>Want to have a new pet for your home? {"\n"}PurrfectPal is the best place {"\n"}for that</Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaStyle : {
        backgroundColor: '#fff',
        height: '100%',
    },

    SkipBtnView: {
        borderWidth: 2,
        borderColor: 'black',
        height: 70,
        width: '100%',
        color: 'black'
    },

    Details: {
        marginTop: 75,
        // borderWidth: 2,
        // borderColor: 'black',
        height: 400,
        width: '100%',
        color: 'black',
        flexDirection: 'column',
        alignItems: 'center',
    },

    ImageContainer: {
        backgroundColor: '#D0DEEE',
        width: 320,
        height: 320,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },

    ImageStyle: {
        width: 250,
        height: 250,
    },

    textView: {
        alignItems: 'center'
    },
    Heading: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Poppins-Medium'
    },
    cont: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    }

})

export default GS1;