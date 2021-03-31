import classes from "./app.module.css";

// Setting vars
// Title and Author
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91KSzxuamCL._AC_UL200_SR200,200_.jpg",
  title: "Llama Llama Easter Egg",
  author: "Anna Dewdney",
};

// Main Component
function App() {
  return (
    <div className="App">
      <section className={classes.booklist}>
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Book>

        {/* second book */}
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </div>
  );
}

//Book component but here in the file
const Book = (props) => {
  // destructuring props
  const { img, title, author, children } = props;

  return (
    <article className={classes.book}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

export default App;
