import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextBtn, setNextBtn] = useState(true);

  useEffect(() => {
    fetch(`https://example-data.draftbit.com/cars?_page=${currentPage}&_limit=10`)
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setNextBtn(data.length === 10);       });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <h1>Auto Salloni Ardiani</h1>
      <div style={{display:'flex',width:'100%', flexWrap:'wrap'}}>
        {cars.map(x => (
          <div key={x.id} style={{width:'20%', height:'200px'}}>
            <Link to={`/cars/${x.id}`}>
              <img src={x.image_thumb} alt={x.make_id} style={{maxHeight:'100px'}} />
              <p>{x.make_id}</p>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextBtn}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
