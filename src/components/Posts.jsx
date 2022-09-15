import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "./Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getItems = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const data = res.data;
        setPosts(data);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Container>
        <header>
          <h1>게시물 목록</h1>
        </header>

        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>

        <main>
          {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
            <article key={id}>
              <h3>
                {id}. {title}
              </h3>
              <p>{body}</p>
            </article>
          ))}
        </main>

        <footer>
          <Pagination
            total={posts.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
