import React, { useState } from 'react'
import { Appbar, Searchbar } from 'react-native-paper'

const MyComponent = ({ onSearch }) => {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')

  const onSearchItem = () => {
    onSearch(search)
  }

  const _handleMore = () => console.log('Shown more')

  const onChangeSearch = (text) => {
    if (!text) {
      onSearch(text)
      setShow(false)
    }
    setSearch(text)
  }

  return (
    <Appbar.Header>
      <Appbar.Content title='Todo list' subtitle='application' />
      {show ? (
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={search}
          onBlur={onSearchItem}
          style={{ width: '50%' }}
        />
      ) : (
        <Appbar.Action icon='magnify' onPress={() => setShow(true)} />
      )}
      <Appbar.Action icon='dots-vertical' onPress={_handleMore} />
    </Appbar.Header>
  )
}

export default MyComponent
