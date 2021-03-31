import classes from "./app.module.css";

function App() {
  return (
    <div className="App">
      <section className={classes.booklist}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

//Book component but here in the file
const Book = () => {
  return (
    <article className={classes.book}>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

// Image component
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

// Title Component
const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};

// Author Component
const Author = () => {
  return <h4>Amelia Hepworth</h4>;
};

export default App;
