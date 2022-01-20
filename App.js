

import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoal, setcourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  const addGoalHandler = (goalTitle) => {
    setcourseGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId) => {
    setcourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  };

  return (
    <View style={{ padding: 50 }}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => {
          item.id
        }}
        data={courseGoal} renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}

            title={itemData.item.value} />
        } />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },



});
