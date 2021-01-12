import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isWhiteSpace } from './utils';

function TodoInput({ addTodoList }) {
	const [todoText, setTodoText] = useState('');

	const onChange = (e) => {
		setTodoText(e.target.value);
	};

	const onClick = () => {
		if (todoText.length === 0 || isWhiteSpace(todoText)) {
			alert('내용을 입력해주세요.');
		} else {
			// addTodo
			addTodoList(todoText);
		}
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

TodoInput.propTypes = {
	addTodoList: PropTypes.func.isRequired,
};

export default TodoInput;
