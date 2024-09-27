/* eslint-disable default-case */
import React, { Component } from 'react'
import Header from '../Level 1/Header'
import SubHeader from '../Level 1/SubHeader'
import Content from '../Level 1/Content'
import Footer from '../Level 1/Footer'
import NameOfHouse from '../Level 2/NameOfHouse'
import GryffindorShield from '../Assets/Logos/Gryffindor.png'
import SlytherinShield from '../Assets/Logos/Slytherin.jpg'
import RavenclawShield from '../Assets/Logos/Ravenclaw.jpg'
import HufflepuffShield from '../Assets/Logos/Hufflepuff.jpg'
import './Home.css'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrolled: false,
      active: "none"
    }
  }

  HouseHandler = (houseName) => {
    switch (houseName) {
      case "Gryffindor":
        this.setState({
          displayG: "inline", displayS: "none", displayR: "none", displayH: "none",
        })
      break;
      case "Slytherin":
        this.setState({
          displayG: "none", displayS: "inline", displayR: "none", displayH: "none",
      })
      break;
      case "Ravenclaw":
        this.setState({
          displayG: "none", displayS: "none", displayR: "inline", displayH: "none",
      })
      break;
      case "Hufflepuff":
        this.setState({
          displayG: "none", displayS: "none", displayR: "none", displayH: "inline",
      })
      break;
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY < 400;
        if (isScrolled !== true) {
          this.setState({ scrolled: true});
        } else {
          this.setState ({ scrolled: false});
        }
    });
  }

  render() {
    const { 
      scrolled,
      displayG,
      displayS,
      displayR,
      displayH,
    } = this.state
    const houses = {
      GRYFFINDOR: "Gryffindor",
      SLYTHERIN: "Slytherin",
      RAVENCLAW: "Ravenclaw",
      HUFFLEPUFF: "Hufflepuff"
    }
    const homeClassName = "home"

      return (
        <div className={`section-${homeClassName}`}>
          <Header
            section={homeClassName}
            displaySearchBar = {"none"}
            buttonContainerClassName={`${homeClassName}-buttoncontainer`}
            buttonPosition={"25%"}
            headerTextContentClassName={homeClassName}
          />
          <SubHeader
            content="Welcome to Hogwart's School of Witchcraft and Wizardry!"
            subHeaderClassName={`${homeClassName}-subheader`}
          />
          <div>
            <Content
              content = {
                <div className={`${homeClassName}-sections`}>
                  <NameOfHouse
                    title={houses.GRYFFINDOR}
                    shield={GryffindorShield}
                    displayContent={displayG}
                    scrolled={scrolled ? "not-scrolled" : "scrolled"}
                    onClickShield={this.HouseHandler.bind(this, "Gryffindor")}
                  />
                  <NameOfHouse
                    title={houses.SLYTHERIN}
                    shield={SlytherinShield}
                    displayContent={displayS}
                    scrolled={scrolled ? "not-scrolled" : "scrolled"}
                    onClickShield={this.HouseHandler.bind(this, "Slytherin")}
                  />
                  <NameOfHouse
                    title={houses.RAVENCLAW}
                    shield={RavenclawShield}
                    displayContent={displayR}
                    scrolled={scrolled ? "not-scrolled" : "scrolled"}
                    onClickShield={this.HouseHandler.bind(this, "Ravenclaw")}
                  />
                  <NameOfHouse
                    title={houses.HUFFLEPUFF}
                    shield={HufflepuffShield}
                    displayContent={displayH}
                    scrolled={scrolled ? "not-scrolled" : "scrolled"}
                    onClickShield={this.HouseHandler.bind(this, "Hufflepuff")}
                  />
                </div>
              }
            />
          </div>
          <Footer
            className={`${homeClassName}-footer`} />
        </div>
      );
  }
}
