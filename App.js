import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setOpen(false);
  }


  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(where => where.id !== goalId)
    })
  }

  const cancelGoal = () => setOpen(false);
  console.log(courseGoals);

  return (
    <View style={styles.screen}>
      <Button
        title='Add new Goal'
        onPress={() => setOpen(true)}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={open}
        cancelGoal={cancelGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
