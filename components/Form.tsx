import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FormInput from './FormInput';
import dummy_data from '../utils/dummy_data';
import {FormInputData} from './FormInput';

const Form = () => {
  const [inputsValue, setInputsValue] = useState({
    value: dummy_data[0].value,
    value2: dummy_data[1].value,
    value3: dummy_data[2].value,
  });

  const [showValues, setShowValues] = useState(false);

  const handleFormChange = (newValue: string, inputName: string) => {
    setInputsValue(prevState => ({
      ...prevState,
      [inputName]: newValue,
    }));
  };

  const handleSubmit = () => {
    if (
      inputsValue.value.length > 0 &&
      inputsValue.value2.length > 0 &&
      inputsValue.value3.length > 0
    ) {
      setShowValues(true);
    }
  };

  return (
    <View style={styles.container}>
      {showValues && (
        <View>
          <Text>{inputsValue.value}</Text>
          <Text>{inputsValue.value2}</Text>
          <Text>{inputsValue.value3}</Text>
        </View>
      )}
      <View>
        {dummy_data.map((data: FormInputData) => (
          <FormInput
            key={data.name}
            data={data}
            value={inputsValue[data.name].value}
            handleFormChange={handleFormChange}
          />
        ))}
      </View>
      <Button title={'Submit'} onPress={handleSubmit}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Form;
