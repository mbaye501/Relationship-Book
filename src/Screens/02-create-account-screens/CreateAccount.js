import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import { colors, font } from "../../Styles";
import {
  BackgroundFrame,
  MyCard,
  HStack,
  Spacer,
  MyTextInput,
  MyButton,
} from "../../Components";
import { Auth } from "aws-amplify";

function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  async function signUp() {
    const username = email;
    const password = password;
    console.log(email);
    try {
      const user = await Auth.signUp({
        username: username,
        password: password,
      });
      console.log({ user });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <BackgroundFrame>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={30}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            {/* Top text view */}
            <View style={styles.topContainer}>
              <Text style={styles.signUpText}>Sign up with</Text>
              {/*Social Icons View*/}
              <View style={styles.icons}>
                <SocialIcon raised={true} type="facebook" />
                <SocialIcon raised={true} type="instagram" />
                <SocialIcon raised={true} type="linkedin" />
                <SocialIcon raised={true} type="twitter" />
                <SocialIcon raised={true} type="google" />
              </View>
              {/* Texts  */}
              <Text style={{ ...styles.regularText, marginBottom: 10 }}>
                {" "}
                Or
              </Text>
              {/* email & password card */}
            </View>
            <MyCard
              title={"Create Account"}
              space={1}
              containerStyle={{ minHeight: 300, maxHeight: 300 }}
            >
              <MyTextInput
                value={email}
                onChangeText={(text) => {}}
                placeholder="Please Enter Email"
                autoCompleteType={"email"}
                autoCapitalize={"none"}
              />
              <MyTextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Please Enter Password"
                autoCompleteType={"password"}
                secureTextEntry={true}
              />
              <MyTextInput
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder="Confirm Password"
                autoCompleteType={"password"}
                secureTextEntry={true}
              />
            </MyCard>
            <HStack>
              <MyButton onPress={signUp} text="Signup" />
              <Spacer />
              <MyButton
                onPress={() => navigation.navigate("CreateAccountScreen2")}
                text="Next"
              />
            </HStack>
            <Spacer space={20} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </BackgroundFrame>
  );
}

styles = StyleSheet.create({
  signUpText: {
    color: colors.DarkGray(),
    fontFamily: font.subTitle,
    fontSize: 20,
    textAlign: "center",
  },

  icons: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  regularText: {
    color: colors.DarkGray(),
    fontFamily: font.subTitle,
    fontSize: 16,
    textAlign: "center",
  },

  topContainer: {
    paddingTop: 20,
  },
});

export { CreateAccountScreen };
