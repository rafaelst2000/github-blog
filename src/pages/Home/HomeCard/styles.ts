import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeCardContainer = styled(Link)`
  border-radius: 10px;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  
  &:visited, &:hover, &:active {
    text-decoration: none;
  }

  &:hover {
    transition: all 0.2s;
    border-color: ${props => props.theme["base-label"]};
  }

  .title-container {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.25rem;
  }

  span {
    min-width: 6rem;
    text-align: right;
    color: ${props => props.theme["base-span"]};
    font-size: 0.875rem;
  }

  p {
    color: ${props => props.theme["base-span"]};
    font-size: 1rem;
    line-height: 160%;
    margin-top: 1.25rem;
  }
`