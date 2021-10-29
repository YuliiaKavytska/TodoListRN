import React from 'react'

import { StyleSheet, View } from 'react-native'
import Form from './Form'
import TasksList from './TasksList'

const TodoList = ({ actions, list }) => {
  return (
    <View style={s.container}>
      <Form onAdd={actions.onAdd} />
      <TasksList list={list} onStatusChange={actions.onStatusChange} />
    </View>
  )
}

export default TodoList

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15
  }
})
