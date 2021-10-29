import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Task from './Task'

const TasksList = ({ list, onStatusChange }) => {
  return (
    <ScrollView style={s.container}>
      {list.map((task) => (
        <Task key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </ScrollView>
  )
}

export default TasksList

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
})
