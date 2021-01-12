import React from 'react';
import PropTypes from 'prop-types';

function Todo({ id, text }) {
	return (
		<div>
			<input type="checkbox" id={`task#${id}`} />
			<span>{text}</span>
		</div>
	);
}

function TodoList({ todoList }) {
	return (
		<div>
			{todoList.map((todo) => (
				<Todo key={todo.id} id={todo.id} text={todo.text} />
			))}
		</div>
	);
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

TodoList.propTypes = {
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
