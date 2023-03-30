import styled from "styled-components";

export const HomePageContainer = styled.main`
  padding-bottom: 2rem;
  .posts-info {
    margin-top: 4.5rem;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${props => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  input[type="text"] {
    width: 100%;
    margin: 1.5rem 0 3rem;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`