import React from 'react';
import * as S from './blog.css';
import './bloglist.scss';
import { Link } from 'gatsby';

const BlogPagination = ({ numPages, currentPage, contextPage }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <S.Pagination className="pagination">
      {Array.from({ length: numPages }).map((item, i) => {
        const index = i + 1
        const baseLink = `/blog/${contextPage ? `${contextPage}/` : ""}`
        const link = index === 1 ? baseLink : `${baseLink}${index}`
        return (
          <S.PaginationItem current={currentPage === index} key={link}>
            {currentPage === index ? (
              <span>{index}</span>
            ) : (
              //<a href={link}>{index}</a>
              <Link key={link} to={link}>
              {index}
            </Link>    
            )}
          </S.PaginationItem>
        )
      })}
    </S.Pagination>
  )
}

export default BlogPagination