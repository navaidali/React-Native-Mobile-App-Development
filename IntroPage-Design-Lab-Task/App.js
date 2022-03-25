import React from "react";
import { StyleSheet, View, Image, Text, Button } from 'react-native';

const intro = () => {
    return (

        <View style={styles.container}>
            <Image
                style={styles.myPic}
                source={require('F:/img1.png')}
            />

            <View style={styles.title1}>
                <Text style={{ fontWeight: 'bold' }}>Discover Your {'\n'} Own Dream House</Text >
            </View>

            <View style={styles.para}>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, repudiandae harum? Nam labore recusandae cumque architecto iusto? Excepturi, sequi eaque nemo, iure assumenda at, id blanditiis error cupiditate numquam molestiae?</Text>
            </View>


            <View style={[styles.btns, {
                flexDirection: "row"
            }]}>
                <View style={styles.btn1}>
                    <Button
                        flex='1'
                        title="Sign in"
                        color="pink"
                    />
                </View>

                <View style={styles.btn2}>
                    <Button
                        flex='1'
                        title="Register"
                        color="grey"
                    />
                </View>


            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center'

    },
    myPic: {
        width: 150,
        height: 200,
        backgroundColor: 'pink',
        borderRadius: 10,
    },

    title1: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '900',
    },

    para: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },

    btns: {
        marginTop: 20,
    },
    btn1: {
        borderRadius: 50,

    },
    btn2: {
        borderRadius: 50,
    }
});

export default intro;