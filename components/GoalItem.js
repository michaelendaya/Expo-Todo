import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    }
})
export default GoalItem;