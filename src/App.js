import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Task from "./components/Task";
import Input from "./components/Input";
import ClearButtonComponent from "./components/ClearButton";
import ClearButton from "./components/ClearButton";

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
    width: ${(props) => props.width}px;
`;

const App = () => {
    const _addTask = () => {
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: { id: ID, text: newTask, completed: false },
        };
        setNewTask("");
        _saveTasks({ ...tasks, ...newTaskObject });
        setTasks({ ...tasks, ...newTaskObject });
    };
    const _handleTextChange = (text) => {
        setNewTask(text);
    };
    const _deleteTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
        _saveTasks(currentTasks);
    };

    const _toggleTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]["completed"] = !currentTasks[id]["completed"];
        setTasks(currentTasks);
        _saveTasks(currentTasks);
    };

    const _updateTask = (item) => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
        _saveTasks(currentTasks);
    };
    const _onBlur = () => {
        setNewTask("");
    };
    const _saveTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
            setTasks(tasks);
        } catch (e) {
            console.error(e);
        }
    };
    const _deleteCompletedTasks = () => {
        const currentTasks = Object.assign({}, tasks);
        Object.values(currentTasks)
            .filter((task) => task.completed)
            .forEach((completedTask) => {
                delete currentTasks[completedTask.id];
            });
        setTasks(currentTasks);
    };
    const width = Dimensions.get("window").width;
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState({});

    return (
        <Container>
            <Title>
                <TitleText>𝕓𝕦𝕔𝕜𝕖𝕥 𝕝𝕚𝕤𝕥</TitleText>
            </Title>
            <Input
                placeholder="+항목추가"
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask}
                onBlur={_onBlur}
            />
            <List width={width}>
                {Object.values(tasks)
                    .reverse()
                    .map((item) => (
                        <Task
                            key={item.id}
                            item={item}
                            deleteTask={_deleteTask}
                            toggleTask={_toggleTask}
                            updateTask={_updateTask}
                        ></Task>
                    ))}
                <ClearButton onPress={_deleteCompletedTasks} />
            </List>
        </Container>
    );
};

export default App;
