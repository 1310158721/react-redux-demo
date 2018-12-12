import { filterType } from '../actions/filter'

// store 中 filter 的默认值
const DEFAULT = filterType.all

const filter = (state = DEFAULT, action) => {
	switch (action.type) {
		case 'CHANGEFILTERTYPE':
		    return action.filter
		default:
		    return state
	}
}

export default filter