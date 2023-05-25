import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    width: '85%',
    flexDirection: 'row',
    marginTop: -28,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  plus: {
    fontSize: 18,
    lineHeight: 18,
    color: 'white',
  },
})
