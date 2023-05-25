import { View, Text, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { styles } from './styles'

interface TaskProps {
  name: string
  onRemove: () => void
}

export function Task({ name, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <CheckBox style={styles.checkbox} />

      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
