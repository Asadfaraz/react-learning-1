import classes from "./app.module.css";
import { data } from "./books";
import Book from "./Book";

// Main Component
function App() {
  return (
    <div className="App">
      <section className={classes.booklist}>
        {data.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

export default App;
