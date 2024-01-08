import styled from 'styled-components'

export const Container = styled.ul`
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
  
  > svg {
    margin-right: 1rem;
    margin-bottom: 2.4rem;
  
  }
`