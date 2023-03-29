import styled from "styled-components";

export const HomeMainCardInfo = styled.div`
  .actions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  h1 {
    color: ${props => props.theme["base-title"]};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }

  a, a:visited, a:hover, a:active {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${props => props.theme["brand-blue"]};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.875rem;
  }

  .info-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        color: ${props => props.theme["base-span"]};
        font-size: 1rem;
      }
    }
  }


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .info-container, .name-container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`