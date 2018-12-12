import React from 'react'
import '../common/list.css'
import { connect } from 'react-redux'
import { changeType } from '../actions/list'
import { filterType } from '../actions/filter'

// 自定义一个过滤数组的函数
const passFilter = (list, type) => {
	if (type === filterType.all) {
		return list
	} else {
        return list.filter(item => item.type === type)
	}
}

class List extends React.Component {
	render () {
		return (
			<ul className='list'>
				{
					this.props.list.length
					?
					this.props.list.map((item, index) => <li key={ index } onClick={() => {this.props.changeType(item.id)}} style={{ textDecoration: item.type === filterType.chosen ? 'line-through' : 'none' }}>{ item.info }, status: { item.type }</li>)
					:
					<li>暂无数据</li>
				}
			</ul>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	list: passFilter(state.list, state.filter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeType: id => dispatch(changeType(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
