import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default function ElevatedCards(){
    return (
      <View>
        <Text style = {styles.headingText}> Elevated Cards </Text>
        <ScrollView horizontal = {true} style = {styles.container}>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>scroll</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>more...</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text>😊</Text>
            </View>
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
    //   flex: 1,
    //   flexDirection: 'row',
      padding: 8
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 4,
      margin: 8,
    },
    cardElevated: {
        backgroundColor:'#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2

    }
    
  })

  //more than 1 styles can be applied using array eg-[style1, style2]
  //for horizontal scroll <ScrollView horizontal = {true} >
  //scrollview renders all its react child components at once, but it has performance downside
  //flatlist does scroll with lazy load