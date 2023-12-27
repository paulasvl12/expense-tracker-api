import React, { useEffect, useState } from "react";
import Category from "../models/Category";
import CategoryCard from "./CategoryCard.tsx";
import { fetchCategories } from "../api/fetchCategories.js";
import styles from '/Users/paulaviloria/Documents/expense-tracker-api/client-test/src/styles/login.module.css';

const Categories = ({ token, email }) => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoriesId] = useState("");
  const [error, setError] = useState("");

  const updateCategoriesData = (newData) => {
    setCategoriesData(newData);
  };
  
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/categories", {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` }
        });

        if (response.status === 200) {
          const data = await response.json();
          setCategoriesData(data);
        } else {
          // Handle other status codes or errors here
        }
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchData();
  }, [token]);

  return (
    <div>
      <h2> Welcome, {email} </h2>
      <h2>My Categories</h2>
      <ul>
        {Array.isArray(categoriesData) && categoriesData.map((category) => (
          <CategoryCard title={category.title} description={category.description} id={category.categoryId} token={token} updateCategoriesData={updateCategoriesData}>
              
          </CategoryCard>
          
        ))}
      </ul>

      <h3>Add a Category</h3>
      <div className={styles.login}>
        <div className="addCategories">
          <input
            id="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            id="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button onClick={addCategory}>Add Category</button>

          {error && <p>{error}</p>}
        </div>
      </div>
      
    </div>
  );

          async function addCategory(){
            if (title.trim() === '') {
                setError("Title/Description of category cannot be empty")
          }

            let res = await fetch('http://localhost:8080/api/categories', {
              method: "POST",
              headers: { "content-type": "application/json",
                "Authorization": `Bearer ${token}` 
              },
              body: JSON.stringify({
                "title": title,
                "description": description,
              }),
            })
            
            if (res.status === 201) {
              setTitle(''); // Clear the title input
              setDescription(''); // Clear the description input
              fetchCategories(token)
                .then((data) => {
                    if (data) {
                        setCategoriesData(data); // Update the list with the new category
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            } else {
              setError("You already have a category with that name");
            } 
          }

          
          
};

export default Categories;
