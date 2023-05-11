import React, { useEffect, useState } from "react";

function Home() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    get();
  }, []);

  let get = async () => {
    let req = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=1000&page=1`
    );
    let res = await req.json();
    setdata(res.data);
    console.log(res)
  };
  return (
    <div className="row">z
      {data.map((v, i) => {
        return (
          <div key={i}>
            <div className="p box">
              <img src={v.image} />
              <h2>name : {v.name}</h2>
              <h3>rating : {v.rating}</h3>
              <h3>type : {v.type}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
