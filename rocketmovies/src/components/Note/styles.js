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
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`