import React, {useState, useEffect} from 'react';

import {Container, ActiviView} from './styles';
import {Searchbar, ActivityIndicator, Snackbar} from 'react-native-paper';
import PerfilItem from '../Perfil/PerfilItem';
import api from '../../services/Api';
import {SearchStyle} from './styles';

export default function Welcome({navigation}) {
  const [value, setText] = useState('');
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState();
  const [visible, setVisible] = useState(false);

  async function search() {
    setLoading(true);
    setChecked(true);
    try {
      const {data} = await checkUserExist(value);
      const {items} = data;
      if (items.length === 0) {
        setVisible(true);
      } else {
        setData(items);
      }
    } catch (error) {
      setVisible(true);
    }

    setLoading(false);
  }
  async function checkUserExist(username) {
    const user = await api.get(`/search/users?q=${username}`);

    return user;
  }

  function RenderPerfilItem({data, navigation}) {
    if (!checked) {
      return null;
    }
    if (loading) {
      return (
        <ActiviView>
          <ActivityIndicator size="large" color="#ffebee" />
        </ActiviView>
      );
    } else {
      return <PerfilItem PerfilItem={data} navigation={navigation} />;
    }
  }
  return (
    <Container>
      <Searchbar
        style={{borderWidth: 0, backgroundColor: '#fff0fb'}}
        underlineColorAndroid="transparent"
        onIconPress={() => search()}
        placeholder="Pesquisar"
        onChangeText={text => setText(text)}
        value={value}
      />
      <RenderPerfilItem data={data} navigation={navigation} />
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{label: 'OK', onPress: () => setVisible(false)}}>
        Usuário Inexistente
      </Snackbar>
    </Container>
  );
}
