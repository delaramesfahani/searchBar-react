import React from 'react'
import Information from '../../sampleJson'
import { TextField } from '@material-ui/core'
import '../searchBar/searchBar.css'

class SearchBar extends React.Component {
  constructor () {
    super()
    this.state = {
      search: null
    }
  }

  onChangeHandler (event) {
    const keyword = event.target.value
    this.setState({ search: keyword })
  }

  render () {
    const items = Information.filter((data) => {
      if (this.state.search == null) { return data } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase() || data.country.toLowerCase().includes(this.state.search.toLowerCase()))) { return data }
    }).map(data => {
      return (
        <div>
          <ul>
            <li className='itemsList'>
              <span style={{ paddingRight: '10px' }}>{data.name}</span>
              <span style={{ paddingRight: '10px' }}>{data.age}</span>
              <span style={{ paddingRight: '10px' }}>{data.country}</span>
            </li>
          </ul>
        </div>
      )
    })
    console.log('search', this.state.search)
    return (
      <div className='container'>
        <TextField
          
          label='Search Here'
          variant='outlined'
          className='searchBar'
          placeholder='search here...'
          onChange={(e) => this.onChangeHandler(e)}
        />
        {items}
      </div>
    )
  }
}

export default SearchBar
