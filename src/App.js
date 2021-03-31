import classes from "./app.module.css";

// Setting vars
// Title and Author
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91KSzxuamCL._AC_UL200_SR200,200_.jpg",
    title: "Llama Llama Easter Egg",
    author: "Anna Dewdney",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/717Ligg2fOL._AC_UL200_SR200,200_.jpg",
    title: "The Song of Achilles: A Novel",
    author: "Madeline Miller",
  },
];

// Main Component
function App() {
  return (
    <div className="App">
      <section className={classes.booklist}>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

//Book component but here in the file
const Book = (props) => {
  // destructuring props
  const { img, title, author } = props;

  return (
    <article className={classes.book}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default App;
