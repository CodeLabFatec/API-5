import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AuthContext} from '../../contexts';
import Dropdown from './base/dropdown';
import navigate from '../../RootNavigation';

function Header() {
  const {user, logout} = useContext(AuthContext);

  const dropdownItems: any[] = [
    {
      value: null,
      label: (user && user.name) ?? 'Usuário',
      onPress: null,
      textStyle: {textAlign: 'center'},
    },
    {value: null, label: 'Perfil', onPress: () => navigate('Profile')},
    {value: null, label: 'Sair', onPress: () => logout()},
  ];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLogo}>
        <Image
          source={require('../../../assets/logo-equip-control.png')}
          style={{
            marginTop: 10,
            width: 50,
            height: 50,
            alignContent: 'center',
            alignItems: 'center',
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.userBox}>
        <Dropdown items={dropdownItems}>
          <Image
            source={{
              uri:
                user && user.image
                  ? `data:${user.image.type};base64,${user.image.base64}`
                  : '',
            }}
            style={styles.headerUser}
          />
          {/* <View style={styles.teste}>
            <Text style={styles.textUser}>{user ? user.name : 'Usuário'}</Text>
          </View> */}
        </Dropdown>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 65,
    borderBottomWidth: 2,
    borderBottomColor: '#77A490',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  headerTextsBigger: {
    fontSize: 30,
    color: '#EEEEEE',
  },
  headerTextsMedium: {
    fontSize: 20,
    color: '#A7A6A6',
  },
  headerLogo: {
    width: 60,
    height: 60,
    position: 'relative',
    right: -153,
  },
  headerUser: {
    width: 45,
    height: 45,
    alignSelf: 'flex-end',
    borderRadius: 50,
  },
  textUser: {
    color: 'white',
  },
  userBox: {
    position: 'absolute',
    textAlign: 'center',
    right: 5,
    marginRight: 10,
    paddingTop: 12,
  },
  teste: {
    position: 'absolute',
    bottom: -15,
    right: 0,
    width: 45,
    alignItems: 'center',
  },
});

export default Header;
