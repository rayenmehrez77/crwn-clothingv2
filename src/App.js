function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((title) => (
        <div className="category-container" key={title.id}>
          <div className="background-image" />
          <div className="category-body-container">
            {/* Img */}
            <h2>{title.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;