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
    marginBottom: 24,
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

  headerList: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerListText: {
    fontSize: 18,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  headerListTextDone: {
    fontSize: 18,
    color: '#8284FA',
    fontWeight: 'bold',
  },
  headerListCountCircle: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#333333',
    marginRight: 8,
  },
  headerListCount: {
    fontSize: 15,
    lineHeight: 15,
    color: 'white',
  },

  divider: {
    width: '85%',
    height: 1,
    backgroundColor: 'white',
    marginBottom: 16,
  },

  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    marginBottom: 16,
  },
  emptyText1: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  emptyText2: {
    fontSize: 15,
    color: '#FFF',
  },
})
