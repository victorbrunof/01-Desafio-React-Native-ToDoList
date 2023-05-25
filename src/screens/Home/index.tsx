import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Task } from '../../components/Tasks'

export default function Home() {
  const tasks = [
    {
      id: 1,
      name: 'Victor',
    },
    {
      id: 2,
      name: 'Victor',
    },
  ]

  function handleRemove() {
    console.log('Removendo tarefa')
  }

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

        <View style={styles.headerList}>
          <View style={styles.headerCount}>
            <Text style={styles.headerListText}>Criadas</Text>
            <View style={styles.headerListCountCircle}>
              <Text style={styles.headerListCount}>0</Text>
            </View>
          </View>
          <View style={styles.headerCount}>
            <Text style={styles.headerListTextDone}>Concluidos</Text>
            <View style={styles.headerListCountCircle}>
              <Text style={styles.headerListCount}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task name="Victor" onRemove={handleRemove} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Image
                style={styles.emptyImage}
                source={require('../../../assets/Clipboard.png')}
                alt="logo"
              />
              <Text style={styles.emptyText1}>
                Você ainda não tem tarefas cadastadas
              </Text>
              <Text style={styles.emptyText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
