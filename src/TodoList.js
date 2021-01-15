import React from 'react';
import PropTypes from 'prop-types';

function Todo({ todo, toggleCompleted }) {
	return (
		<div>
			<input
				type="checkbox"
				id={todo.id}
				onClick={toggleCompleted}
				defaultChecked={todo.isCompleted}
			/>
			<span
				style={{
					textDecoration: todo.isCompleted ? 'line-through' : '',
				}}
			>
				{todo.text}
			</span>
		</div>
	);
}

function TodoList({ todoList, toggleCompleted }) {
	return (
		<div>
			{todoList.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleCompleted={toggleCompleted}
				/>
			))}
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		isCompleted: PropTypes.bool,
	}).isRequired,
	toggleCompleted: PropTypes.func.isRequired,
};

TodoList.propTypes = {
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleCompleted: PropTypes.func.isRequired,
};

export default TodoList;
