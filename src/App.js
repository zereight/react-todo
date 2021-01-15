import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
	const [idCount, setIdCount] = useState(0);
	const [todoList, setTodoList] = useState([
		{
			id: idCount,
			text: '할 일',
			isCompleted: false,
		},
	]);

	const addTodoList = (text) => {
		const newTodo = {
			id: idCount + 1,
			text,
			idCompleted: false,
		};
		setTodoList([...todoList, newTodo]);
		setIdCount(idCount + 1);
	};

	const findTodoIndex = (list, id) => {
		return list.findIndex((e) => e.id === id);
	};

	const toggleCompleted = (e) => {
		const id = parseInt(e.target.id.split('#')[1], 10);
		const newTodoList = todoList;
		const targetIndex = findTodoIndex(newTodoList, id);
		newTodoList[targetIndex].isCompleted = !newTodoList[targetIndex]
			.isCompleted;
		setTodoList(newTodoList);
	};

	return (
		<div className="App">
			<div className="todoArea">
				<TodoInput addTodoList={addTodoList} />
				<TodoList
					todoList={todoList}
					toggleCompleted={toggleCompleted}
				/>
			</div>
		</div>
	);
}

export default App;
