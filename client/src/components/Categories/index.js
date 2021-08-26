import "./categories.css";

// categories can either be hard coded in or generated from the database
// obviously generating them from the database would be better for
// posterity, but considering we are loading it multiple times on seperate pages,
// we would have to find a very efficient process of looping through the entire

const Categories = () => {
  const cats = ["Animals", "Business", "Shows", "Movies", "Languages"];
  let result = [];
  cats.forEach((val) => {
    const block = (
      <div className="category" key={val}>
        <h3 onClick={() => (window.location = `/list/${val}`)}>{val}</h3>
      </div>
    );
    result.push(block);
  });
  return <div className="catContainer">{result}</div>;
};

export default Categories;
