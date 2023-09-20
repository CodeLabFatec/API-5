import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import { Equipment } from '../../helpers/models';
import Carousel from '../components/carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';

function EquipmentInfo({ navigation, route }) {
  const equipment: Equipment = route.params;
  const [equipamento, setEquipamento] = React.useState(equipment);

  const handleActivateButton = () => 
    Alert.alert('Ativar', 'Deseja ativar este equipamento?', [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Sim', onPress: () => setEquipamento({...equipamento,state:true}) },
    ]);

    const handleDisableButton = () => 
    Alert.alert('Desativar', 'Deseja desativar este equipamento?', [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Sim', onPress: () => setEquipamento({...equipamento,state:false}) },
    ]);

  if (!equipment) {
    navigation.navigate('Home');
    return;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.activeButton}
          onPress={handleActivateButton}
        >
          <Text style={styles.activeText}>Ativar</Text>
        </Pressable>
        <Pressable
          style={styles.disableButton}
        onPress={handleDisableButton}
        >
          <Text style={styles.disableText}>Desativar</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.equipment}>
          {equipment.files && equipment.files.length > 0 ? (
            <Carousel files={equipment.files ?? []} />
          ) : (
            <View>
              <Icon style={styles.fileIcon} name="file-image" />
            </View>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Icon style={styles.addIcon} name="plus-circle" />
          </Pressable>
          <Pressable>
            <Icon style={styles.removeIcon} name="minus-circle" />
          </Pressable>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Nome do equipamento"
            placeholderTextColor={'#E2D7C1'}
            maxLength={40}
            onChangeText={text => setEquipamento({...equipamento,name:text})}
            value={equipamento.name}
            style={styles.tipeEquipmentInput}
          />
          <TextInput
            placeholder="ID"
            placeholderTextColor={'#E2D7C1'}
            maxLength={40}
            onChangeText={text => setEquipamento({...equipamento,_id:text})}
            value={equipamento._id}
            style={styles.idEquipmentInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Serial"
            placeholderTextColor={'#E2D7C1'}
            maxLength={40}
            onChangeText={text => setEquipamento({...equipamento,serial:text})}
            value={equipamento.serial}
            style={styles.serialEquipmentInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Latitude"
            keyboardType='numeric'
            placeholderTextColor={'#E2D7C1'}
            maxLength={40}
            onChangeText={text => setEquipamento({...equipamento,latitude:Number(text)})}
            value={equipamento.latitude + ''}
            style={styles.latitudeEquipmentInput}
            />
          <TextInput
            placeholder="Longitude"
            keyboardType='numeric'
            placeholderTextColor={'#E2D7C1'}
            maxLength={40}
            onChangeText={text => setEquipamento({...equipamento,longitude:Number(text)})}
            value={equipamento.longitude + ''}
            style={styles.longitudeEquipmentInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Observação"
            scrollEnabled={true}
            placeholderTextColor={'#E2D7C1'}
            multiline={true}
            numberOfLines={10}
            onChangeText={text => setEquipamento({...equipamento,notes:text})}
            value={equipamento.notes}
            style={styles.observationEquipmentInput}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.confirmButton}
          onPress={() => console.log(equipamento)}
        >
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 55,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
  },
  equipment: {
    width: '80%',
    height: 220,
    zIndex: 1,
    borderColor: '#E2D7C1',
    borderWidth: 1,
    borderRadius: 2,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  equipmentName: {
    color: '#fff',
  },
  fileIcon: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
  },
  addIcon: {
    fontSize: 38,
    color: '#77A490',
  },
  removeIcon: {
    fontSize: 38,
    color: 'gray',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 5,
    marginTop: 5
  },
  tipeEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '60%',
  },
  idEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '32%',
    marginLeft: '4%',
  },
  serialEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '96%',
  },
  observationEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '96%',
    textAlignVertical: 'top',
  },
  longitudeEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '46%',
    marginLeft: '4%',
  },
  latitudeEquipmentInput: {
    backgroundColor: '#363636',
    borderColor: '#E2D7C1',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 16,
    color: '#E2D7C1',
    padding: 6,
    width: '46%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    marginTop: 5,
  },
  activeButton: {
    backgroundColor: '#77A490',
    width: '46%',
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center'
  },
  disableButton: {
    backgroundColor: 'gray',
    width: '46%',
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    marginLeft: '4%',
    justifyContent: 'center'
  },
  activeText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  disableText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  confirmButton: {
    backgroundColor: '#77A490',
    width: '96%',
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center'
  },
  confirmText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EEEEEE',
  }
});

export default EquipmentInfo;
