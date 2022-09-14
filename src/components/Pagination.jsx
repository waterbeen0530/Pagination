import React from "react";
import styled from "styled-components";

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 32px;
    height: 32px;
    margin: 1px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #dddddd 1px solid;
    outline: none;
    font-size: 14px;
    color: #1d1d1d;
    background: #fff;
    transition: all 0.3s;

    &:hover {
      background: deeppink;
      color: #fff;
      cursor: pointer;
      transform: translateY(-2px);
    }

    &[disabled] {
      background: #bababa;
      color: #fff;
      cursor: revert;
      transform: revert;
    }

    &[aria-current] {
      background: deeppink;
      color: #fff;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;
