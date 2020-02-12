
import styled, { css } from "styled-components"

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const PaginationItem = styled.li`
    text-align: center;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
   

  ${({ current }) =>
    current &&
    css`
      background: #216db6;
      color: #fff;
    `}
`