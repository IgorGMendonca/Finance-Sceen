import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/header/Header'
import Balance from '../../components/balance/Balance';
import Moviments from '../../components/Moviments/Moviments';
import Actions from '../../components/actions/Actions';

const list = [{
  id: 1,
  label: 'Boleto conta luz',
  value: '300,90',
  date: '17/01/2023',
  type: 0
},
{
  id: 2,
  label: 'Pix cliente Z',
  value: '2.500,00',
  date: '17/01/2023',
  type: 1
},
{
  id: 3,
  label: 'Salario',
  value: '7.300,00',
  date: '17/01/2023',
  type: 1
}]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Igor Gabriel' />

      <Balance saldo='15.000,00' gastos='3.200,00' />
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list} data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    alignSelf: 'center'
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
