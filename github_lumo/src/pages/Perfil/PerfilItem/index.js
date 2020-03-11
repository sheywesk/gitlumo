import React, {useEffect, useState} from 'react';

import {
  Container,
  PerfilList,
  Image,
  Title,
  SubTitle,
  PerfilClick,
  Info,
} from './styles';

export default function PerfilItem({PerfilItem, navigation}) {
  const [user, setData] = useState(PerfilItem);

  function handleClick(item) {
    navigation.push('Perfil', {item});
  }

  return (
    <Container>
      <PerfilList
        data={PerfilItem}
        renderItem={({item}) => (
          <PerfilClick onPress={() => handleClick(item)}>
            <Image
              source={{
                uri: item.avatar_url,
              }}
            />
            <Info>
              <Title>{item.login}</Title>
              <SubTitle>{item.type}</SubTitle>
            </Info>
          </PerfilClick>
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}
