import React, { useEffect } from "react";
import "./ComBlock.css";

import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const BooksFilter = () => {
  const { readProduct, data } = useProduct();

  const nav = useNavigate();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section id="booksFilter">
      <div className="container">
        <div className="booksFilter">
          <h1>All Books</h1>
          <p>Here you can find all the books you need</p>
          <div className="booksFilter-main">
            <h3>
              <h4>Filter</h4>
              <p>Clear filters</p>
            </h3>
            <div className="booksFilter-block">
              <h3>Sort By</h3>
              <select>
                <option>Popular</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <h4 className="booksFilter_h4">Genres</h4>
          <div className="blockFilter-main">
            <div className="booksFilter1">
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Sci-Fi
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                For kids
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                For teenagers
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Finance
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Detective
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Romantic
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Psychology
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Self-Improvement
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Educational
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Literature
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Religion
              </div>
            </div>

            <div className="booksFilter2">
              {data.map((el) => (
                <div
                  onClick={() => nav(`/book/${el.id}`)}
                  style={{ width: "300px" }}
                  className="booksFilter2-block"
                >
                  <img
                    style={{ width: "250px", height: "300px" }}
                    src={el.img}
                    alt=""
                  />
                  <h4>{el.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksFilter;
