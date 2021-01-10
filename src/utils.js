export const isWhiteSpace = (str) => {
	if (/\s/.test(str)) return true;
	return false;
};

export const readTodo = () => localStorage.getItem('todo_list');

export const saveTodo = (text) => {
	const todos = readTodo();
	todos.push({
		id: todos.length + 1,
		text,
		isCompleted: false,
	});
	localStorage.setItem('todo_list', todos);
};
