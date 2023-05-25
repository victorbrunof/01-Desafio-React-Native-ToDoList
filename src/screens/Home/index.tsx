import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />

          <TouchableOpacity style={styles.button}>
            <View style={styles.circle}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
