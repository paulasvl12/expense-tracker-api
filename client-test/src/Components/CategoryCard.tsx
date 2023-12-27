import { Card } from "antd";
import React, { useState } from "react";
import {fetchCategories} from "../api/fetchCategories.js";
import Category from "../models/Category.js";


const CategoryCard = (props) => {
    const {title, description, id, token, updateCategoriesData} = props;
    const [categoriesData, setCategoriesData] = useState<Category[]>([]);

    return (
        <Card title={title} extra={<button id="delete" onClick={deleteCategory}>Delete</button>} style={{ width: 300 }}>
        <p style={{ color: "#c1121f" }}>{description}</p>
      </Card>
    );

    async function deleteCategory(){
        try {
            console.log();
            const response = await fetch("http://localhost:8080/api/categories/" + id, {
              method: "DELETE",
              headers: { "Authorization": `Bearer ${token}` }
            });
    
            if (response.status === 200) {
              const data = await response.json();
              setCategoriesData(data);
              updateCategoriesData((categoriesData) =>
                    categoriesData.filter((category) => category.categoryId !== id)
                );
            } else {
              // Handle other status codes or errors here
            }
          } catch (err) {
            console.error(err);
          }
    }

};

export default CategoryCard;