import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isWhiteSpace } from './utils';

function TodoInput({ addTodoList }) {
	const [todoText, setTodoText] = useState('');

	const onChange = (e) => {
		setTodoText(e.target.value);
	};

	const inputHandler = () => {
		if (todoText.length === 0 || isWhiteSpace(todoText)) {
			alert('내용을 입력해주세요.');
		} else {
			// addTodo
			addTodoList(todoText);
		}
		setTodoText('');
	};

	const onClick = (e) => {
		inputHandler();
		e.target.previousSibling.value = '';
	};

	const onKeyUp = (e) => {
		if (window.event.keyCode === 13) {
			inputHandler();
			e.target.value = '';
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="할 일을 입력하세요."
				onChange={onChange}
				onKeyUp={onKeyUp}
			/>
			<input type="submit" value="추가" onClick={onClick} />
		</div>
	);
}

TodoInput.propTypes = {
	addTodoList: PropTypes.func.isRequired,
};

export default TodoInput;
