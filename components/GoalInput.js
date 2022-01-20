import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (entedText) => {
        setEnteredGoal(entedText);
    };
    const addGoalHandler = () => {
        setEnteredGoal('');
        props.onAddGoal(enteredGoal)
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>

                        <Button title="cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>

                        <Button title="add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    inputContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    input: {
        borderBottomColor: 'black',
        width: '80%',
        marginBottom: 10,
        borderWidth: 1, padding: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button : {
        width: '40%'
    }

})
export default GoalInput