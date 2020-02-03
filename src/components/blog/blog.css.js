
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const PaginationItem = styled.li`
  min-width: 50px;
  margin: -1px 0.5em 0;
  padding: 1em 0;
  text-align: center;
  border-top: 1px solid transparent;
  ${({ current }) =>
    current &&
    css`
      border-top: 1px solid #000;
    `}
`
