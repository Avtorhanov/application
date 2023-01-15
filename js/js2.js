/* todo.js */

/**
 * @param {object} data
 *   let values = {
    todoTitle: title.value,
    completed: completed.checked,
    chosenCategory: category.value,
    user: author
  };
 */


export const createTodo =({ todoTitle, completed, chosenCategory, user }) => {

	const isCompletedSign = "✅";
	const workSign = "⌛";
	
	// const todoUlElement = document.getElementById("todo-list");

	// const todo = document.createElement("li");
	// todo.classList.add("card");
	
	
	// todo.innerHTML = `${ completed ? isCompletedSign : workSign} <b>${todoTitle}</b> - by ${user.first} ${user.last} in ${chosenCategory}`;
	// todoUlElement.appendChild(todo);

	return {
		icon: completed ? isCompletedSign : workSign,
		title: todoTitle,
		author: {
			firstName: user.first,
			lastName: user.last
		},
		category: chosenCategory
	}

}

export default createTodo;

//dd