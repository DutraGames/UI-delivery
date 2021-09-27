import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        paddingHorizontal: 15,
        paddingTop: 10,
        fontSize: 25,
        fontWeight: '700',
        borderBottomWidth: 1,
        textAlign: 'center',
        color: '#aa0000',
    },
    btn:{
      flex: 1,
      width: 200,
      height: 200,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '30%',
      marginTop: 30,
      marginBottom: 30
    },
    btnimg:{
      width: '100%',
      height: '100%',
      resizeMode: 'stretch'
    }
  });

  export default styles