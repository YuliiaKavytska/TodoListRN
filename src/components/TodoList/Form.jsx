import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Form = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onCreate = () => {
    if (!text) return
    onAdd({ task: text, id: new Date().getTime() })
    setText('')
  }

  return (
    <TextInput
      label='New task'
      value={text}
      onChangeText={(text) => setText(text)}
      onEndEditing={onCreate}
    />
  )
}

export default Form
