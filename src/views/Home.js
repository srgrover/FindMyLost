import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight} from 'react-native';
import ElementListItem from '../components/elements/ElementListItem';

const ELEMENT_LIST = [
  {
    id: 1,
    desc: 'Auriculares galaxy buds',
    photo: 'https://picsum.photos/200/100',
  },
  {
    id: 2,
    desc: 'Funda Galaxy S7',
    photo: 'https://picsum.photos/200/75',
  },
  {
    id: 3,
    desc: 'Liquidos vaper',
    photo: 'https://picsum.photos/200/120',
  },
  {
    id: 4,
    desc: 'Gamuza de gafas antiguas',
    photo: 'https://picsum.photos/200/150',
  },
];

export default function HomeScreen({navigation}) {
  const [elements, setElement] = useState(ELEMENT_LIST);
  function handleOnPress() {
    navigation.navigate('Locations');
  }

  useEffect(function() {
    //Se ejecuta después del render
    //const response
  })

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={elements}
        renderItem={({item}) => (
          <ElementListItem element={item} onPress={handleOnPress} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View>
            <Text
              style={{
                paddingVertical: 7,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Lista de objetos
            </Text>
          </View>
        }
      />
    </View>
  );
}
