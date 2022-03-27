import React from "react";
import { StyleSheet, View, Image, Text, Button, } from 'react-native';

const intro = () => {
    return (

        <View style={styles.container[{
            flexDirection: 'column'
        }]}>

            <View style={styles.logo}>
                <Image
                    style={styles.logo1}
                    source={require('./assets/Fiverr-Logo.png')}
                />
            </View>
            <View style={styles.mainSec}>
                <Text style={styles.heading}>Join Fiverr</Text>
                <Text style={styles.desc}>Join our growing freelance community to offer your professional services, connect with customers, and get pain on fiverr's truster platform.</Text>
            </View>

            <View style={styles.buttons}>

                <View style={styles.btn1}>
                    <Button
                        title="Continue with facebook"
                        color="#5577BA"
                    />
                </View>

                <View style={styles.btn2}>
                    <Button
                        title="Continue with Google"
                        color="#4285F4"
                    />

                </View>

                <View style={styles.btn3}>
                    <Button
                        title="Sign Up with Email"
                        color="#19A463"
                    />
                </View>

                <View>
                    <Text style={styles.terms}>By joining, you afree to Fiverr's <Text style={styles.span}>Terms of Service</Text> </Text>
                </View>

                <View style={[{ flexDirection: 'row' }]}>

                    <View style={{ flex: 1, margin: 8, alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 16, color: "#19A463", fontWeight: 'bold' }}>Sign In</Text>
                    </View>

                    <View style={{ flex: 1, margin: 8, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: "#19A463", fontWeight: 'bold' }}>Skip</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        padding: 50,
        backgroudColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        backgroudColor: 'black'
    },

    logo1: {
        marginTop: '50%',
        margin: 10,
        flex: '1',
        width: 70,
        height: 70,

    },

    mainSec: {
        margin: 10,
    },

    heading: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    desc: {
        fontSize: 19,

    },

    btn1: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },

    btn2: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },

    btn3: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 4,
    },

    terms: {
        fontSize: 16,
        textAlign: 'center',
        margin: 5,
    },

    span: {
        color: "#19A463",
    },




});

export default intro;