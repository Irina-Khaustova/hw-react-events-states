import React, { useState} from "react";
import ProjectList from "../ProjectList/index.js";
import Toolbar from '../Toolbar/index.js';
import { data } from '../Data/Data.js';

export default function Portfolio() {

  const  [image, imageState] = useState(data);
  //console.log(data)
  const [select, selectState] = useState('All');

  const filterSelect = filter => {
     imageState(filter.target.textContent === 'All' ? data : data.filter(el => el.category === filter.target.textContent));
     selectState(filter === 'All' ? 'All' : filter.target.textContent) 
     console.log(filter.target.textContent, select)
     //selectState()
     }
     //console.log(selected)

    return (
        <div className="container">
        <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={select}
        onSelectFilter={filterSelect}/>
        <ProjectList projects={image}/>
        </div>
    )
}
