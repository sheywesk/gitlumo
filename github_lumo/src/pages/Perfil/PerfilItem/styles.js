import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PerfilList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 10,
  },
})``;
export const PerfilClick = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #fff0fb;
`;
export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #000;
  margin-right: 7px;
`;
export const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: #757575;
  font-size: 16px;
  margin-top: 3px;
`;
export const Info = styled.View`
  margin-top: 3px;
`;
