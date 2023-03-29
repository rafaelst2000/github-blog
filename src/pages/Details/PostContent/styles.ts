import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  li {
    list-style: unset;
    padding-left: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme["brand-blue"]}
  }

  pre {
    background: ${props => props.theme["base-post"]};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: monospace !important;
        line-height: 1.6 !important;
      }    
    }
  }
` 