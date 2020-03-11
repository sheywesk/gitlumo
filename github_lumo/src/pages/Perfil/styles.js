import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background-color: #000000;
`;
export const Header = styled.View`
  border-radius: 10px;

  padding: 10px;
  background: #fff0fb;
  justify-content: center;
  align-items: center;
`;
export const InfoPerfil = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  padding: 0 23px 0 23px;
`;

export const SocialPerfil = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: stretch;
  justify-content: center;
`;

export const InfoSocial = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Info = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`;

export const PerfilRender = styled.FlatList``;

export const InfoTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
export const InfoSubtitle = styled.Text`
  color: #757575;
  font-size: 14px;
`;
export const Social = styled.View`
  flex-direction: row;
`;

export const Repository = styled.View`
  background-color: #fff0fb;
  padding: 0 5px;
  margin-top: 3px;
  border-radius: 10px;
`;

export const ActiviView = styled.View`
  justify-content: center;
`;

export const Image = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: #000;
  margin-right: 7px;
`;
