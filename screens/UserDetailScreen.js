import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handlechangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async () => {
    const dbRef = firebase.db.collection("users").doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UsersList");
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          value={user.name}
          placeholder="Name User"
          onChangeText={(value) => handlechangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          value={user.email}
          placeholder="Email User"
          onChangeText={(value) => handlechangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          value={user.phone}
          placeholder="Phone User"
          onChangeText={(value) => handlechangeText("phone", value)}
        />
      </View>
      <View>
        <Button
          color="#19AC52"
          title="Update User"
          onPress={() => alert("works")}
        />
      </View>
      <View>
        <Button
          color="#E37399"
          title="Delete User"
          onPress={() => deleteUser()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default UserDetailScreen;
