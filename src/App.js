import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Task from './components/Task';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './images';

const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
  align-items: center;
`;

const Title = styled.View`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const TitleText = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${props => props.width}px;
`;

const App = () => {
  const width = Dimensions.get('window').width;
  return (
    <Container>
      <Title>
        <TitleText>𝕓𝕦𝕔𝕜𝕖𝕥 𝕝𝕚𝕤𝕥</TitleText>
      </Title>
      <Input placeholder="+항목추가" />
      <List width={width}>
        <Task text="웁스웁스" />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </List>
    </Container>
  );
};

export default App;
