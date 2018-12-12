export const filterType = {
	all: 'all',
	chosen: 'chosen',
	unChoose: 'unChoose'
}

export const changeFilterType = filter => ({
	type: 'CHANGEFILTERTYPE',
	filter
})