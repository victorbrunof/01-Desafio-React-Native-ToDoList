import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: 30,
    backgroundColor: '#262626',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#FFF',
    margin: 16,
  },
  name: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
