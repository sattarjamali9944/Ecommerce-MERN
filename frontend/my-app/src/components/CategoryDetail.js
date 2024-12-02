import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const { id } = useParams(); // Get the category ID from the URL
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      // Fetch category data based on the ID
      const fetchCategory = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/category/${id}`); // Correct URL
    
          // Ensure the response is OK and handle JSON parsing properly
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
    
          const data = await response.json(); // Parse the JSON response
          setCategory(data);
        
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchCategory();
    }, [id]);
    
    // Re-run the effect if the ID changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  
    return (
        <div>
          <h1>Category Details</h1>
          {category && category.length > 0 ? (
            category.map((item, index) => (
             <>
                <h1 key={index}>{item.title}</h1>
                <p>{item.detail}</p>
              </>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      );
      
};

export default CategoryDetail;
