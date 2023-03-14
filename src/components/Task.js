import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../images';

const Container = styled.View`
  width: 400px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const Contents = styled.Text`
  flex: 0.7;
  font-size: 24px;
  color: #000;
`;

const CheckButton = styled(IconButton)`
  margin-right: 5px;
`;

const Task = ({ text }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <Container>
      <CheckButton
        type={completed ? images.completed : images.uncompleted}
        onPress={handleToggle}
      />
      <Contents>{text}</Contents>
      <IconButton type={images.update} />
      <IconButton type={images.delete} />
    </Container>
  );
};

Task.propTypes = { text: PropTypes.string.isRequired };

export default Task;
