import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 10,
        backgroundColor: '#f00',
        borderRadius: 10,
        width: 200,
        height: 200,
    },
    img:{
        width: '100%',
        height: '80%',
        resizeMode: 'center'
    },
    name:{
        fontSize: 20,
        fontWeight: '700',
        color: '#ff0',
        textAlign: 'center'
    },
    preco:{
        fontSize: 25,
        color: '#ff0',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 5,
        left: 40
    }
  });

  export default styles