import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Modal, TextInput} from 'react-native';

const ListApiData = () => {
  const [data, setData] = useState([]);
  const [showmodal, setShowmodal] = useState(false);
  const [selectedUser, setselectedUser] = useState(undefined);

  const getApiData = async () => {
    //api call
    const url = 'http://192.168.29.185:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  const DeleteUser = async id => {
    const url = 'http://192.168.29.185:3000/users';
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('user Deleted');
      getApiData();
    }
  };
  const UpdateUser = data => {
    setShowmodal(true);
    setselectedUser(data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerwrapper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Email</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>

      {data.length
        ? data.map(item => (
            <View style={styles.datawraper} key={item.id}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.email}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => DeleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" onPress={() => UpdateUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showmodal} transparent={true}>
        <UserModal
          setShowmodal={setShowmodal}
          selectedUser={selectedUser}
          getApiData={getApiData}
        />
      </Modal>
    </View>
  );
};

const UserModal = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setEmail(props.selectedUser.email);
      setAge(props.selectedUser.age.toString());
    }
  }, [props.selectedUser]);

  const SaveUser = async () => {
    console.warn(name, email, age, props.selectedUser.id);
    const url = 'http://192.168.29.185:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      props.getApiData();
      props.setShowmodal(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Enter Your Age"
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <View style={styles.BtnContainer}>
          <Button title="Save" onPress={SaveUser} />
          <Button title="close" onPress={() => props.setShowmodal(false)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datawraper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1abc9c',
    margin: 5,
    padding: 8,
  },
  headerwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8e44ad',
    margin: 5,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    fontSize: 20,
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 60,
  },
});

export default ListApiData;
