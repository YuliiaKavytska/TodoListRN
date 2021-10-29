import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

const Task = ({ task, onStatusChange }) => {
  return (
    <View style={s.container}>
      <Checkbox
        status={task.status ? 'checked' : 'unchecked'}
        onPress={() => {
          onStatusChange(task.id)
        }}
      />
      <Text style={s.taskText}>{task.task}</Text>
    </View>
  )
}

export default Task

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  taskText: {
    paddingRight: 10
  }
})
