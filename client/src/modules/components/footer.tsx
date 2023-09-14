import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: any;
}

function Footer({navigation}): JSX.Element {
  return (
    <View style={styles.footerContainer}>
      <Pressable
        style={styles.equipamentosButton}
        onPress={() => {
          console.log('Clicaste');
        }}>
        <Text style={styles.equipamentosButtonText}>Equipamentos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    height: 40,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: 'grey',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  equipamentosButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'grey',
    width: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  equipamentosButtonText: {
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default Footer;
