import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";

const StyledInput = styled.TextInput`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    font-size: 18px;
`;
const Input = ({
    placeholder,
    value,
    onChangeText,
    onSubmitEditing,
    onBlur,
}) => {
    const width = Dimensions.get("window").width;
    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            keyboardAppearance="dark"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
};
Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
};

export default Input;
