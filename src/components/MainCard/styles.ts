import styled from "styled-components";

export const MainCardContainer = styled.div`
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-top: -5rem;

  & h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme["base-title"]};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  & p {
    margin: 0.5rem 0 1.25rem;
    font-size: 1rem;
    line-height: 160%;
    color: ${props => props.theme["base-text"]};
  }
`