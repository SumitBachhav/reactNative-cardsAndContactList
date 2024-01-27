import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function ContactList(){
    const contact = [
        {
            uid: 1,
            name: 'name 1',
            status: 'status 1',
            imageUrl: 'https://reactjs.org/logo-og.png'
        },
        {
            uid: 2,
            name: 'name 2',
            status: 'status 2',
            imageUrl: 'https://reactjs.org/logo-og.png'
        },
        {
            uid: 3,
            name: 'name 3',
            status: 'status 3',
            imageUrl: 'https://reactjs.org/logo-og.png'
        },
        {
            uid: 4,
            name: 'name 4',
            status: 'status 4',
            imageUrl: 'https://reactjs.org/logo-og.png'
        },
        {
            uid: 5,
            name: 'name 5',
            status: 'status 5',
            imageUrl: 'https://reactjs.org/logo-og.png'
        },
    ]
    return(
        <View>
            <Text style = {styles.headingText}>hello</Text>
            <ScrollView
            style = {styles.container}
            scrollEnabled = {false}
            >
                {contact.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style = {styles.userCard}>
                        <Image
                        source={{
                            uri: imageUrl
                        }}
                        style = {styles.userImage}
                        />
                        <View>
                            <Text style = {styles.userName}>{name}</Text>
                            <Text style = {styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus:{
        fontSize: 12,
        color: '#FFF'
     },
})


//list.map((item)=> {return()}) -> curly brackets needs to have return
//list.map(()=> ()) -> parenthesis doesn't need return
//list.map((elements of item destructured)=> ())
//key is important for mapping, it should be unique

//scrollEnabled = {false}