import styled from 'styled-components'

export const Container = styled.button`

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800_ROSE};
  border:none;
  border-radius: 1.6rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;
  margin-top: 1.6rem;
  > h1 {
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.8rem;
  }
  
  > ul {
    font-size: 1.2rem;
  }
  > p {
    height: 3.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`