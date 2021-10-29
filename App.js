import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import Main from './src/components/pages/Main'

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  )
}
