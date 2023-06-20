import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`https://example-data.draftbit.com/cars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <img src={car.image} alt={car.name} />
      <h1>{car.make_id}</h1>
      <h2>{car.model}</h2>
      
      <p>{car.description}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
}

export default ProductPage;
