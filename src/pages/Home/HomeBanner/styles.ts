import styled from "styled-components";

export const HomeMainCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin-left: 0.5rem;
  }

  .name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
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
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        color: ${props => props.theme["base-subtitle"]};
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