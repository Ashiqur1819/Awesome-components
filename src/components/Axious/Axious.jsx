import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Bar } from "recharts";


const Axious = () => {

    const [pet, setPet] = useState([])

    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/peddy/pets")
        .then(data => setPet(data.data.pets))
    }, [])

    return (
      <div>
        <BarChart width={1200} height={300} data={pet}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="breed"></XAxis>
          <YAxis dataKey="price"></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    );
};

export default Axious;