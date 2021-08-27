import "./categories.css";

// categories can either be hard coded in or generated from the database
// obviously generating them from the database would be better for
// posterity, but considering we are loading it multiple times on seperate pages,
// we would have to find a very efficient process of looping through the entire

const Categories = () => {
  const cats = [
    "Animals",
    "Anime",
    "Art & Design",
    "Authentication",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage & File Sharing",
    "Continuous Integration",
    "Cryptocurrency",
    "Currency Exchange",
    "Data Validation",
    "Development",
    "Dictionaries",
    "Documents & Productivity",
    "Environment",
    "Events",
    "Finance",
    "Food & Drink",
    "Games & Comics",
    "Geocoding",
    "Government",
    "Health",
    "Jobs",
    "Machine Learning",
    "Music",
    "News",
    "Open Data",
    "Open Source Projects",
    "Patent",
    "Personality",
    "Phone",
    "Photography",
    "Science & Math",
    "Security",
    "Shopping",
    "Social",
    "Sports & Fitness",
    "Test Data",
    "Text Analysis",
    "Tracking",
    "Transportation",
    "URL Shorteners",
    "Vehicle",
    "Video",
    "Weather",
  ];
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
