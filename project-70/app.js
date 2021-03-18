import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'


export Default class App extends React.Component{
    render(){
        return(
            <TextInput
            style={styles.inputBox}
            placeholder="Book Id"
          <TextInput
            placeholder=' Author'
          />
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    WriteStory: {screen: WriteStoryScreen},
    ReadStory: {screen: ReadStoryScreen}
});
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})