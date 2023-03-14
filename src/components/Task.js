import styled from "styled-components/native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { images } from "../images";
import Input from "./Input";
import { useState } from "react";

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

    text-decoration-line: ${({ completed }) =>
        completed ? "line-through" : "none"};
`;

const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
    const [isEditing, setIsEditng] = useState(false);
    const [text, setText] = useState(item.text);
    const _handleUpdateButtonPress = () => {
        setIsEditng(true);
    };
    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedTask = Object.assign({}, item, { text });
            setIsEditng(false);
            updateTask(editedTask);
        }
    };
    const _onBlur = () => {
        if (isEditing) {
            setIsEditng(false);
            setText(item.text);
        }
    };
    return isEditing ? (
        <Input
            value={text}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}
        />
    ) : (
        <Container>
            <IconButton
                type={item.completed ? images.completed : images.uncompleted}
                id={item.id}
                onPressOut={toggleTask}
                completed={item.completed}
            />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || (
                <IconButton
                    type={images.update}
                    onPressOut={_handleUpdateButtonPress}
                />
            )}

            <IconButton
                type={images.delete}
                id={item.id}
                onPressOut={deleteTask}
                completed={item.completed}
            />
        </Container>
    );
};

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
};

export default Task;
