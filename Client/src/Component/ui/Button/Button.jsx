import React from 'react'
import styled from 'styled-components'



const Button = ({className}) => {
  return (
    <StyledWrapper>
    <button className= {"button" + className} style={{ verticalAlign: 'middle' }}>
        <span>Connect</span>
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .button {
    display: inline-block;
    border-radius: 7px;
    border: none;
    background: #1875ff;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 13px;
    box-shadow: 0px 14px 56px -11px #1875ff;
    width: 10em;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }

  .button span:after {
    content: ' Wallet';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.7s;
  }

  .button:hover span {
    padding-right: 3.55em;
  }

  .button:hover span:after {
    opacity: 4;
    right: 0;
  }
`

export default Button
