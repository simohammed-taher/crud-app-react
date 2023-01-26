import React from 'react'
import { Link } from "react-router-dom";

function Sidebar ()  {
  return (
    <>
      <ul>
        <li>
            <Link to={"/products"}>get all products</Link>
        </li>
        <li>
            <Link>get all categorie</Link>
        </li>
      </ul>
    </>
  )
}

export default Sidebar
