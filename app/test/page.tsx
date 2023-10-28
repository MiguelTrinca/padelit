import React from 'react'

import dotenv from "dotenv";

//Local Enviroment
if (process.env.NODE_ENV){
    dotenv.config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`,
    })
} else {
    dotenv.config();
}


console.log(process.env.NODE_ENV);
console.log(process.env.KV_URL);



const page = () => {
  return (
    <div>page</div>
  )
}

export default page