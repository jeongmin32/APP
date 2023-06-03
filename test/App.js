import { useState } from 'react';
import { Text, View, Button, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabat, setAlphabat] = useState([]);

  const onChangeInput = (text) => {
    setMyTextInput(text);
  };

  const onAddTextInput = () => {
    setAlphabat([...alphabat, myTextInput]);
    setMyTextInput('');
  };

  const onDeleteTextInput = (index) => {
    const updatedAlphabat = alphabat.filter((item, idx) => idx !== index);
    setAlphabat(updatedAlphabat);
  };
const onCorrectionInput = (index) => {
  const updatedAlphabat = alphabat.map((item, idx) => {
    if (idx === index) {
      
      const correctedText = prompt('Enter the corrected text', item);
      return correctedText || item; // If the user cancels, return the original text
    }

    return item;
  });

  setAlphabat(updatedAlphabat);
};


 return (
    <View>
   <TextInput
        style={{ color: 'red', backgroundColor: '#cece' }}
        value={myTextInput}
        onChangeText={onChangeInput}
        onSubmitEditing={onAddTextInput}
      />
      <Text>{myTextInput}</Text>
      <Button title="오늘할일추가" onPress={onAddTextInput} />
      
      <ScrollView>

        {alphabat.map((item, idx) => (
          <View key={idx} style={styles.itemContainer}>
            <Text style={styles.itemText}>
              {idx}-{item}
            </Text>
                <Button title="수정" onPress={() => onCorrectionInput(idx)} />

            <Button title="삭제" onPress={() => onDeleteTextInput(idx)} />
          </View>
        ))}
      
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginRight: 10,
  },

});
