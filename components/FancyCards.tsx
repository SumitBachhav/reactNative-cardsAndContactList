import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

export default function FancyCards(){
    return (
        <View>
            <Text style = {styles.headingText}>Tending places</Text>
            <View style = {[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardtitle}>Image title</Text>
                    <Text style={styles.cardLabel}>Image Label</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor quidem maxime deleniti aperiam quisquam possimus veniam, eveniet repellat consequatur.</Text>
                    <Text style={styles.cardFooter}>card footer</Text>
                </View>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({ 
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 10
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardtitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000',
    },
  })


//   <Image
//    source={{
//      uri: 'https://reactjs.org/logo-og.png'
//    }}
//    style={styles.cardImage}
//   />