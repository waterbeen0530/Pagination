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
  gap: 4px;
  margin: 16px;

  button {
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: black;
    color: white;
    font-size: 1rem;

    &:hover {
      background: tomato;
      cursor: pointer;
      transform: translateY(-2px);
    }

    &[disabled] {
      background: grey;
      cursor: revert;
      transform: revert;
    }

    &[aria-current] {
      background: deeppink;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;
