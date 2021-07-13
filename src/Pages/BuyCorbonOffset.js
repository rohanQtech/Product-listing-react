import { useState } from "react";

const BuyCorbonOffset = () => {
    const [count, setCount] = useState(0)
  const Sdata = [
    {
      id: 1,
      projectName: "Jim Awesome tree Team ",
      Aquality: "12000",
      Quelity: "0",
      priceUnit: "$10",
      total: "$10"
    },
    {
      id: 2,
      projectName: "Ninja Awesome tree Team ",
      Aquality: "12000",
      Quelity: "0",
      priceUnit: "$20",
      total: "$10"
    },
    {
      id: 3,
      projectName: "ronak Awesome tree Team ",
      Aquality: "12000",
      Quelity: "0",
      priceUnit: "$20",
      total: "$10"
    },
  ];

  const InputEvent=(e)=>{
      e.prevantDefault();
      const {name, value,id}=e.target;
      setCount(
          
       )
    
  }
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>BuyCorbonOffset</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Available Quentity</th>
                  <th scope="col">Order Quentity</th>
                  <th scope="col">Price Per Unit</th>
                  <th scope="col">Total  Price </th>
                </tr>
              </thead>
              <tbody>
                {Sdata.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.projectName}</td>
                        <td>{item.Aquality}</td>
                        
                        <td> 
            
                            <input type="text" name="Quelity" value={count} onChange={InputEvent}/>
                        
                        </td>
                          
                        <td>{item.priceUnit}</td>
                        <td>{item.total}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCorbonOffset;
