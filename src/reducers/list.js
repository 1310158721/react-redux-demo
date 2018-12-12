import { filterType } from '../actions/filter'

// store 中 list 的默认值
const DEFAULT = [
    { info: 'this is the line ....', id: 1, type: filterType.chosen },
    { info: 'this is the line ....', id: 2, type: filterType.unChoose }
]

// store 中 list 派发的 dispatch 对应的操作
const list = (state = DEFAULT, action) => {
	switch (action.type) {
		case 'ADDLISTLENGTH':
		    return [...state, { info: action.info, id: state.length + 1, type: filterType.unChoose }]
		case 'CHANGETYPE':
		    return state.map(item => {
		    	if (item.id === action.id) {
		    		item.type === filterType.chosen ? item.type = filterType.unChoose : item.type = filterType.chosen
		    	}
		    	return item
		    })
		default:
		    return state
	}
}

export default list