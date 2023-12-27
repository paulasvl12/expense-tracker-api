import React from "react";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { Typography } from "antd";
import Categories from "./Categories.tsx";
import styles from '/Users/paulaviloria/Documents/expense-tracker-api/client-test/src/styles/homepage.module.css';
import Login from "./Login.tsx";
const { Title } = Typography;

const Form = () => {
    return (
      <div className={styles.homepage}>
        <nav className="flex align-center">
          <p id="title">Expense Tracker</p>
            <ul>
              <li className="big-screens">
                <button className="register">Register</button>
                <button className="login">Login</button>
              </li>
              <li className="small-screens">
                <i className="fa-solid fa-bars"></i>
              </li>
            </ul>
        </nav>
        <Login></Login>
        </div>
    )

}

export default Form;