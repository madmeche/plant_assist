import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PlantDataContext } from '../../PlantDataContext';
import { BasicCard } from './BasicPlant';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


function PlantList () {

  const [plant, setPlant] = useState([]);
  const [searchPlant, setSearchPlant] = useState("");

useEffect(() => {
  fetchPlant();
}, []);

  const fetchPlant = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/plant/");
      const data = await response.json();
      setPlant(data.data);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  const handleSearchPlant = (e) => {
    setSearchPlant(e.target.value);
  };
  const filteredData= plant?.filter((item)=>{return item.name=== searchPlant})


  // const filteredData= plant?.filter((item)=>{return item['name'].toLowerCase().includes(`${searchPlant}`.toLowerCase())})


// const plants = useContext(PlantDataContext)
// const filteredCharacters = characters.filter((character) =>
//     character.hero_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );




  return (
    <>
    <Box 
    sx={{
      margin: 10
    }}
    >
      <input type="text" placeholder='Search' onChange={handleSearchPlant} />
      </Box>
      <div className="container">
        <h2 style={{textAlign:"center"}}>Plants</h2><br/>
        <table class="table table-striped mt-5 text-center ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
             
              

            </tr>
          </thead>
        </table>
      </div>
    Plants: {plants.length}
      <BasicCard 
      key={plant.id} 
      plant={plant.description} />
  
    {/* </Box> */}
    </>
  );
}

export default PlantList;