import React, { useEffect, useState } from 'react';
import { isWhiteSpace } from './utils';

function TodoInput() {
	const [todoText, setTodoText] = useState('');

	useEffect(() => {
		console.log(todoText);
	}, [todoText]);

	const onChange = (e) => {
		setTodoText(e.target.value);
	};

	const onClick = () => {
		if (todoText.length === 0 || isWhiteSpace(todoText)) {
			alert('내용을 입력해주세요.');
			return;
		}
		// addTodo
		console.log(todoText);
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
