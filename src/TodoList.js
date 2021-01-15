import React from 'react';
import PropTypes from 'prop-types';

function Todo({ id, text, toggleCompleted }) {
	return (
		<div>
			<input
				type="checkbox"
				id={`task#${id}`}
				onClick={toggleCompleted}
			/>
			<span>{text}</span>
		</div>
	);
}

function TodoList({ todoList, toggleCompleted }) {
	return (
		<div>
			{todoList.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					text={todo.text}
					toggleCompleted={toggleCompleted}
				/>
			))}
		</div>
	);
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	toggleCompleted: PropTypes.func.isRequired,
};

TodoList.propTypes = {
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleCompleted: PropTypes.func.isRequired,
};

export default TodoList;
