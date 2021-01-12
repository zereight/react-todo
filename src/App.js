import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
	const [todoList, setTodoList] = useState([]);

	return (
		<div className="App">
			<div className="todoArea">
				<TodoInput />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
