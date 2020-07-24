import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, Button } from "react-native";
import { SocialIcon, Card } from "react-native-elements";
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyText, MyButton } from "../../Components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { Auth } from "aws-amplify";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function CreateAccountScreen2({ navigation, route }) {
  const { email } = route.params;
  const { password } = route.params;
  //#region State variables
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("Select Date of Birth");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //#endregion

  //#region methods
  const showDatePicker = () => { setDatePickerVisibility(true); };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    hideDatePicker(); //must be first
    setdateOfBirth(date.toDateString());
  };
  //#endregion

  //#region const variables
  const placeholder = {
    label: "Select gender",
    value: null,
    color: colors.MediumGray(),
  };
  //#endregion

  async function signUp() {
    try {
      const date = new Date(dateOfBirth);
      const day = date.getDate().toString().length > 1 ? date.getDate() : `0${date.getDate()}`;
      const m = date.getMonth() + 1;
      const month = m.toString().length > 1 ? m : `0${m}`;
      const year = date.getFullYear();
      const dob = `${year}-${month}-${day}`;
      const signUpParams = {
        username: email,
        password: password,
        attributes: {
          email: email,
          birthdate: dob,
          gender: gender,
          family_name: lastName,
          given_name: firstName,
        },
      }
      console.log(signUpParams)
      navigation.navigate('CreateAccountScreen3', { email: email })
      const user = await Auth.signUp(signUpParams);
      console.log({ user, });

    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <BackgroundFrame>

      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {/* Create account Forms */}
        <MyCard title={"Create Account"} space={1} containerStyle={{
          minHeight: 300,
          maxHeight: 400,
        }} >
          <TextInput value={firstName} onChangeText={(text) => setfirstName(text)} placeholder="First Name" style={globalStyles.MyText} />
          <TextInput value={lastName} onChangeText={(text) => setlastName(text)} placeholder="Last Name" style={globalStyles.MyText} />
          {/* Gender RN picker */}
          <RNPickerSelect
            onValueChange={(value) => setgender(value)}
            items={[
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              }
            ]}
            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: colors.MediumGray(0.6),
                fontFamily: font.regular,
              },
            }}
            placeholder={placeholder}
            useNativeAndroidPickerStyle={false}
          />
          {/* Date picker */}
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              elevation: 1,
            }}
          >
            <Text
              style={{
                padding: 10,
                paddingLeft: 20,
                elevation: 1,
                color: dateOfBirth === "Select Date of Birth" ? colors.MediumGray(0.6) : colors.DarkGray(),
              }}
            >
              {dateOfBirth.toString()}
            </Text>
          </TouchableOpacity>
        </MyCard>

        {/* Submit button */}
        <HStack>
          <Spacer />
          <MyButton
            onPress={() => {
              signUp();
              navigation.navigate("CreateAccountScreen3");
            }}
            text="Done"
          />
        </HStack>

        {/* Spacer */}
        <Spacer />

        {/* Datetime picker model not displayed */}
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} value={dateOfBirth} />
      </KeyboardAwareScrollView>
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

export { CreateAccountScreen2 };
