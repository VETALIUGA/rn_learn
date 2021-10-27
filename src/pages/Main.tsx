import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import IconPizza from '../assets/icons/IconPizza';
import CardItem from '../components/CardItem/Carditem';
import {products} from '../const/mockedProducts';

const Main = ({navigation}) => {
  const [product, setProduct] = useState('');
  const [text, setText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pizza shop</Text>
      <Text style={styles.textDesc}>
        Best pizza delivery service ever! {'\n'}Preorder delivery for holidays
        today.
      </Text>
      <ScrollView>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={event => setProduct(event)}
            value={product}
          />
          <TouchableOpacity
            style={styles.inputBtn}
            onPress={() => setText(product)}>
            <IconPizza width="30px" height="30px" />
          </TouchableOpacity>
        </View>
        {text ? <Text>Search by {text}</Text> : null}
        <View style={styles.imageContainer}>
          {products.map(({image, text, price, id}) => (
            <CardItem key={id} image={image} text={text} price={price} />
          ))}
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.orderBtn}>
          <Text style={styles.orderBtnText}>Create order</Text>
        </TouchableOpacity> */}
      {/* <Button title="About" onPress={() => navigation.navigate('About')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: '50%',
    height: 180,
    borderRadius: 4,
    marginTop: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  textDesc: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 8,
    color: 'gray',
  },
  view1: {
    // width: '30%',
    flexGrow: 1,
    height: 150,
    borderRadius: 0,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  orderBtn: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16,
  },
  orderBtnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },
  inputBtn: {
    marginLeft: 8,
  },
  inputWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default Main;
