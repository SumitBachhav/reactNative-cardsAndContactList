import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCards from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = () => {
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ActionCards/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

//ScrollView for scroll feature
//importing flatcard page