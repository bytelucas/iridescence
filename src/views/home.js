import React from 'react';
import * as R from 'rebass';
import styled from 'styled-components';
import style from '../styles/home.css';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles
// Components
const Link = styled(R.NavLink)`
  &:hover {
    background: #424242;
  }
`;

// Rainbow
const rainbowDiv = styled.div`
  position: block;
  height: 1em;
`;
const Red = styled(rainbowDiv)`
  background-color: #e74c3c;
`;
const Orange = styled(rainbowDiv)`
  background-color: #e67e22;
`;
const Yellow = styled(rainbowDiv)`
  background-color: #e0ba20;
`;
const Green = styled(rainbowDiv)`
  background-color: #33ac66;
`;
const Blue = styled(rainbowDiv)`
  background-color: #3498db;
`;
const Purple = styled(rainbowDiv)`
  background-color: #9b59b6;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Modules
export const Logo = (props) => {
  return (
    <R.NavLink>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.one : style.title}>I</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.two : style.title}>R</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.three : style.title}>I</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.four : style.title}>D</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.five : style.title}>E</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.six : style.title}>S</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.seven : style.title}>C</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.eight : style.title}>E</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.nine : style.title}>N</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.ten : style.title}>C</span>
      <span onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.focused ? style.eleven : style.title}>E</span>
    </R.NavLink>
  );
};

export const Banner = () => {
  return(
    <R.Banner
      color='white'
      bg='darken'
      minHeight='54em'
      backgroundImage='http://bytelucas.com/pride.png'>
      <R.Heading>
        Six young, queer people.<br />
        One café.<br />
        Can they change a nation's mind?
      </R.Heading>
      <br />
      <div>
        <R.ButtonCircle children='Book now' />
        <R.ButtonCircle children='Learn more' style={{backgroundColor: '#33ac66', marginLeft: '20px'}}/>
      </div>
    </R.Banner>
  )
};

export const Rainbow = () => {
  return(
    <div>
      <Red/>
      <Orange/>
      <Yellow/>
      <Green/>
      <Blue/>
      <Purple/>
    </div>
  )
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {focused: false};
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({focused: !this.state.focused});
  }

  render() {
    return (
      <R.Provider>
        <R.Toolbar>
          <Logo onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} focused={this.state.focused} />
          <Link ml={'auto'}>
            About
          </Link>
          <Link>
            News
          </Link>
          <Link>
            Cast
          </Link>
          <Link>
            Team
          </Link>
          <Link>
            Contact
          </Link>
        </R.Toolbar>
        <Rainbow/>
        <Banner/>
      </R.Provider>
    );
  }
}

export default Home;