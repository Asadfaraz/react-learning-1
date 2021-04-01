// Book component
import React from "react";
import classes from "./app.module.css";

const Book = (props) => {
  // destructuring props
  const { img, title, author } = props;

  // Button Handling without parameter
  const simpleButton = () => {
    alert("Button Clicked");
  };
  // Complex button
  const complexButton = (title) => {
    alert(title);
  };

  return (
    <article className={classes.book}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={simpleButton}>
        Alert Button
      </button>
      <button type="button" onClick={() => complexButton(title)}>
        Parameters Title
      </button>
    </article>
  );
};

export default Book;
