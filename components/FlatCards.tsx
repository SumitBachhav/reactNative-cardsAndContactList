import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function FlatCards(){
    return (
      <View>
        <Text style = {styles.headingText}> Flat Cards </Text>
          <View style = {styles.container}>
            <View style = {[styles.card, styles.cardOne]}>
              <Text>Red</Text>
            </View>
            <View style = {[styles.card, styles.cardTwo]}>
              <Text>Blue</Text>
            </View>
            <View style = {[styles.card, styles.cardThree]}>
              <Text>Green</Text>
            </View>
          </View>
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
      flex: 1,
      flexDirection: 'row',
      padding: 8
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 4,
      margin: 8
    },
    cardOne:{
      backgroundColor: '#EF5354'
    },
    cardTwo:{
      backgroundColor: '#50DBB4'
    },
    cardThree:{
      backgroundColor: '#5DA3FA'
    },
  })

  //more than 1 styles can be applied using array eg-[style1, style2]