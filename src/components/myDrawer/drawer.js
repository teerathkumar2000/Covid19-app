import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import DrawerMenu from './sidemenu';

export default class MyDrawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <TouchableOpacity>
            <View style={styles.userContainer}>
              <Image style={styles.userImagen} source={require('../../assets/9056_covid19updatebanner1500x1000_02_909832.png')} />
            </View>
            <View style={styles.userNombre}>
              {/* <Text style={styles.userTitulo}>COVID-19</Text> */}
              {/* <Text style={styles.userSubTitulo}></Text> */}
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu
          iconName="home"
          titleName="Home"
          navigation={() => this.props.navigation.navigate('Home')}
        />

        <DrawerMenu
          iconName="globe"
          titleName="Country"
          navigation={() => this.props.navigation.navigate('Country')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#005D66',
  },

  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  userImagen: {
    width: 200,
    height: 130,
    borderRadius: 35,
  },

  camaraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  camaraIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    bottom: 3,
  },

  userNombre: {
    marginVertical: 10,
  },

  userTitulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  userSubTitulo: {
    textAlign: 'center',
    fontSize: 11,
    color: '#a537fd',
    paddingVertical: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center',
  },

  tituloTxt: {
    fontSize: 13,
  },
  difuminado: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fondoImagen: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
