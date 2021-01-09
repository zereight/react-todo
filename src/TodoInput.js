import React, { useState } from 'react';
import { isWhiteSpace } from './utils';

function TodoInput() {
	const [todoText, setTodoText] = useState('');

	const onChange = (e) => {
		setTodoText(e.target.value);
		console.log(todoText);
	};

	const onClick = (e) => {
		// addTodo
	};

	return (
		<div>
			<input
				type="text"
				placeholder="할 일을 입력하세요."
				onChange={onChange}
			/>
			<input type="submit" value="추가" onClick={onClick} />
		</div>
	);
}

export default TodoInput;
