import React, { useMemo, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Header from '../Navigation/Header'
import TodoList from '../TodoList/TodoList'

const Main = () => {
  const [list, setList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const onAdd = (task) => {
    setList((state) => [...state, task])
  }

  const onSearch = (text) => {
    setSearchQuery(text)
  }

  const onStatusChange = (id) => {
    setList((state) =>
      state.map((task) => (task.id === id ? { ...task, status: !task.status } : task))
    )
  }

  const filteredList = useMemo(
    () => list.filter((item) => item.task.toLowerCase().includes(searchQuery.toLowerCase())),
    [list, searchQuery]
  )

  return (
    <SafeAreaView style={s.container}>
      <Header onSearch={onSearch} />
      <TodoList list={filteredList} actions={{ onAdd, onStatusChange }} />
    </SafeAreaView>
  )
}

export default Main

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  }
})
