import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
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
