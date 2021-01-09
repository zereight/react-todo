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

function TodoList() {
	return (
		<div>
			<Todo id={1} text={'test'} />
		</div>
	);
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default TodoList;
