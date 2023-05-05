import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';

const DialogBox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontSize:20}}>Hello World! Hello World!</Text>
            
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <Button title="Open Modal" onPress={handleOpenModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    shadowColor:"black",
    elevation:10
  },
});

export default DialogBox;
