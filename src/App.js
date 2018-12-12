import React from 'react'
import './common/app.css'
import Additem from './components/additem'
import List from './components/list'
import FilterBtn from './components/filter-btn'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Additem />
          <List />
          <div>
             <FilterBtn filter='all' />
             <FilterBtn filter='chosen' />
             <FilterBtn filter='unChoose' />
          </div>
      </React.Fragment>
    )
  }
}

export default App
