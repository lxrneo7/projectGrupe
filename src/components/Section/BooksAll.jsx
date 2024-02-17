import React, { useEffect } from "react";
import "./Section.css";
import { useProduct } from "../context/ProductContext";

const BooksAll = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section id="books">
      <div className="container">
        <div className="booksAll">
          <div className="booksAll-main">
            <h3>Books</h3>
            <h6>View all</h6>
          </div>

          <div
            style={{ overflow: "scroll", gap: "20px" }}
            className="booksAll-blocks"
          >
            {data.map((el) => (
              <div className="booksAll-block">
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
    </section>
  );
};

export default BooksAll;
