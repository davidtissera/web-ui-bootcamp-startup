import React, { Component } from 'react';
import ButtonContainer from '../Level 2/ButtonContainer';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Harry Potter API Project'
    }
  }

  render() {
    const { section } = this.props
    const { title } = this.state
    const {
      onChange,
      onValue,
      displaySearchBar,
      buttonContainerClassName,
      headerTextContentClassName,
    } = this.props

    return (
      <header className={`${section}-header header`}>
        <h1 className={`${headerTextContentClassName}-header-textcontent header-textcontent`}>
          {title}
        </h1>
        <ButtonContainer
          inputChange = {onChange}
          valueChange = {onValue}
          display = {displaySearchBar}
          className = {buttonContainerClassName}
        />
      </header>
    );
  }
}
