import React from "react";
import styled from "styled-components/native";

const Title = styled.View`
    margin-top: 100px;
    margin-bottom: 50px;
    flex-direction: row;
`;

const ClearButton = styled.TouchableOpacity`
    padding: 10px;
    margin: 0px auto;
`;

const ClearButtonText = styled.Text`
    font-size: 25px;
    color: red;
`;

const ClearButtonComponent = ({ onPress }) => {
    return (
        <ClearButton onPress={onPress}>
            <ClearButtonText>𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙚𝙙 𝙙𝙚𝙡𝙚𝙩𝙚 </ClearButtonText>
        </ClearButton>
    );
};

export default ClearButtonComponent;

<Title>
    <ClearButton>
        <ClearButtonText>Delete Completed</ClearButtonText>
    </ClearButton>
</Title>;
