const initialData = { recipes:
	[
{title:"Spanish Rice",ingredients:"Rice, tomato sauce, butter, onion, oregano", instructions:"Cook rice, then add other ingredients and simmer."},
{title:"Greek Salad",ingredients:"Cucumber, feta, tomatoes, olives, onion",instructions:"Chop up all ingredients and serve cold."}
]
}

const cardReducer = (state = initialData, action) => {
	switch(action.type) {
        case 'ADD_RECIPE_CARD':
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			}
			case 'DELETE_RECIPE_CARD':
				return {
					...state,
					recipes: [
						...state.recipes.slice(0, action.payload),
						...state.recipes.slice(action.payload + 1)
					],
				}
		default:
			return state;
	}
};

export default cardReducer;