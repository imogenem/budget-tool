const initialState = {
	amount: '',
	loanType: '',
	location: '',
	interestRate: ''
}

const inputReducer = (state = initialState, action) => {
	switch(action.type) {
        case 'DISPLAY_LOAN_INPUTS':
			return action.payload
		default:
			return state;
	}
};

export default inputReducer;