import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
    const { addGoalHandler, visible, cancelGoal } = props;
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addNewGoal = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('');
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goals'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color="red" onPress={cancelGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addNewGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '60%'
    },
    button: {
        width: "40%"
    }
})

export default GoalInput