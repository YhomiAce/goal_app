import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
    const { title, onDelete, id } = props
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={onDelete.bind(this, id)}
        >
            <View style={styles.listItem} on>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "#000",
        borderWidth: 1,
        marginVertical: 10,
    }
})

export default GoalItem