import { useState } from "react";
import Header from "./components/Header";

export default function App() {
const [Employers,setEmployers]=useState([])
const [curenteEmployers,setcurenteEmployers]=useState({
  name:"",
  email:"",
  phone:"",
  jop:"",
  sexe:"",
  exp_year:0
})
const handelchangeEmployers = (event) =>{
  setcurenteEmployers({...curenteEmployers,[event.target.name]: event.target.value})
}
  return (
    <div className="container">
      <Header></Header>      
      <div className="row">
        <div className="col-md-7">
          <h2 className="text text-primary">Add Employers</h2>
          <form action="">
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input 
              type="text" 
              className="form-control" 
              name="name" 
              id="name"
              value={curenteEmployers.name}
              onChange={handelchangeEmployers}></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input 
              type="email" 
              className="form-control" 
              name="email" 
              id="email"
              value={curenteEmployers.email}
              onChange={handelchangeEmployers}></input>
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input 
              type="numbernpmnpn" 
              className="form-control" 
              name="phone" 
              id="phone"
              value={curenteEmployers.phone}
              onChange={handelchangeEmployers}></input>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="jop">jop</label>
              <select 
              name="jop" 
              id="jop" 
              className="form-control"
              value={curenteEmployers.jop}
              onChange={handelchangeEmployers}>
                <option value={""} selected>Select jop</option>
                <option value={"Soft ware"}>Soft ware</option>
                <option value={"data"}>data </option>
                <option value={"ui/ux disigner"}>ui/ux disigner</option>
                <option value={"AI"}>AI</option>
              </select>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="sexe">sexe</label>
                <br></br>
                <input type="radio" name="sexe" id="male" value="male"/><span className="me-2">male</span>
                <input type="radio" name="sexe" id="female" value="female"/>female
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exp_year">Experience years</label>
              <input 
              type="number" 
              className="form-control" 
              max={20} min={1} 
              name="exp_year" 
              id="exp_year"
              value={curenteEmployers.exp_year}
              onChange={handelchangeEmployers}></input>
            </div>
            <div className="mt-2">
              <button className="btn btn-primary">Add Employers</button>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          zzaaz
        </div>
      </div>
      <div className="mt-4">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text text-primary">Employers List</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>jop</th>
                      <th>Sexe</th>
                      <th>num_exp</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{curenteEmployers.name}</td>
                      <td>{curenteEmployers.email}</td>
                      <td>{curenteEmployers.phone}</td>
                      <td>{curenteEmployers.jop}</td>
                      <td>{curenteEmployers.sexe}</td>
                      <td>{curenteEmployers.exp_year}</td>
                      <td>
                        <button className="btn btn-danger">dadaad</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  );
}