export const add_card = (recipe) => {
	return {
		type: 'ADD_RECIPE_CARD',
		payload: recipe,
	};
};

export const delete_card = (recipe) => {
	return {
		type: 'DELETE_RECIPE_CARD',
		payload: recipe,
	};
};