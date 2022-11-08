import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

export interface FormInputData {
  name: string;
  type: string;
}

export interface FormInputProps {
  data: FormInputData;
  value: string;
  handleFormChange: (value: string, inputName: string) => void;
}

const FormInput = (props: FormInputProps) => {
  const {data, handleFormChange, value} = props;
  const {name: inputName, type} = data;
  const keyboardType = type === 'number' ? 'numeric' : 'default';

  const handleValueChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const newValue = event.nativeEvent.text;
    const isValid = type === 'number' ? /^[0-9]*$/.test(newValue) : true;
    if (isValid) handleFormChange(newValue, inputName);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{inputName}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChange={handleValueChange}
          keyboardType={keyboardType}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default FormInput;
