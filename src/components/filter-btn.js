import React from 'react'
import '../common/filter-btn.css'
import { connect } from 'react-redux'
import { changeFilterType } from '../actions/filter'

class FilterBtn extends React.Component {
	handleClick () {
		this.props.changeFilterType(this.props.filter)
	}
	render () {
		return (
			<button className='filter-btn' onClick={this.handleClick.bind(this)} style={{ color: this.props.filter === this.props.StoreFilter ? 'blue' : 'black' }}>{ this.props.filter }</button>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	StoreFilter: state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFilterType: filter => dispatch(changeFilterType(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBtn)