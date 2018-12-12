import React from 'react'
import '../common/additem.css'
import { connect } from 'react-redux'
import { addListLength } from '../actions/list'

class Additem extends React.Component {
	constructor (props) {
		super(props)
		this.input = React.createRef()
	}
	addListItem () {
		const value = this.input.current.value
		if (value === '') {
			console.log('文本框不能为空...')
			return false
		}
		this.props.addListLength(value)
		this.input.current.value = ''
	}
	render () {
		return (
			<div className="additem">
			    <input ref={this.input} type="text" maxLength='10' placeholder="请输入文本..." />
			    <button onClick={() => {this.addListItem()}}>add</button>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addListLength: info => dispatch(addListLength(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Additem)