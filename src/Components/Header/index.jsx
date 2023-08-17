import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components"
import { colorPrimario, colorHover } from "../UI/variables";

const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${ (props) => props.primary ? "white" :colorPrimario };
  background: ${ (props) => props.primary ? "transparent" : "white" };

  &:hover {
    background-color: ${colorHover};
  }
`

const Header = () => {
  return (
    <StyleHeader>
      <LogoImage src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader href="https://google.com">
          Ayuda
        </BtnHeader>
        <BtnHeader primary href="https://google.com">
          Salir
        </BtnHeader>
      </div>
    </StyleHeader>
  );
};

export default Header;
