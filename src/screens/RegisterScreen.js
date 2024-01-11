import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";

const RegisterScreen = () => {
  const theme = useTheme();
  //   const styles = useMemo(
  //     () =>
  //       StyleSheet.create({
  //         container: {
  //           backgroundColor: theme.colors.primary,
  //           flex: 1,
  //           alignItems: "center",
  //           justifyContent: "center",
  //         },
  //       }),
  //     [theme]
  //   );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleRegister() {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <View>
      <TextInput label="Email" value={email} />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button onPress={handleRegister}></Button>
    </View>
  );
};

export default RegisterScreen;
