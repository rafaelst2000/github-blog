import styled from "styled-components";

export const HomeCardContainer = styled.li`
  border-radius: 10px;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;

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
    min-width: 4.5rem;
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