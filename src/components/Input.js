import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { theme } from '../theme';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
`;
const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnType="done"
      keyboardAppearnce="dark"
    />
  );
};
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
