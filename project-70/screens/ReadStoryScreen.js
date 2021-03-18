import React from 'React';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default class readStoryScreen extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text> Read Story</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        textAlign: "center",
        backgroundColor: 'dodgerblue',
        justifyContent: container,
    }
})