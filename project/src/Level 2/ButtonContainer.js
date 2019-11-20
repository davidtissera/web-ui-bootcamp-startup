import React, { Component } from 'react'
import Button from '../Level 3/Button'
import SearchBar from './SearchBar'

export default class ButtonContainer extends Component {
  render() {
    const { className, display, inputChange, valueChange } = this.props

  return (
    <div className={`${className} header-buttoncontainer`}>
      <Button title='Home'/>
      <Button title='Chars'/>
      <Button title='Spells'/>
      <Button title='Stories'/>
      <SearchBar
        inputChange = {inputChange}
        valueChange = {valueChange}
        display = {display}
      />
    </div>
  );
  }
}
