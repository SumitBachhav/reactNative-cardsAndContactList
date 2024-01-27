import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native'

export default function ActionCards(){
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style = {styles.headingContainer}>
                    <Text style = {styles.headerText}>
                        What's new in js
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                    style={styles.cardImage}
                />
                <View style = {styles.bodyContainer}>
                    <Text numberOfLines={3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores id quibusdam non accusantium sed, nisi facilis expedita odio iste quam corporis dolorem, architecto soluta, eum excepturi cum ad provident nihil voluptates quasi earum quisquam doloremque. Quod voluptas non distinctio ad.</Text>
                </View>
                <View style = {styles.footerContainer}>
                    <TouchableOpacity
                    onPress={()=> openWebsite('https://www.tutorialspoint.com/python/python_quick_guide.htm')}>
                        <Text style = {styles.linkText}> Read more </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> openWebsite('https://github.com/')}>
                        <Text style = {styles.linkText}> follow me </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height:190,
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    linkText: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    },
    
  })

/*

numberOfLines={3}

<TouchableOpacity
 onPress={()=> openWebsite('https://www.tutorialspoint.com/python/python_quick_guide.htm')}>
      <Text style = {styles.linkText}> Read more </Text>
</TouchableOpacity>

function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }






*/