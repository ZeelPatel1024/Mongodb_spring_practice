import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Student = () => {

    const [studentid, setId] = useState('');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_number, setMobile] = useState("");
  const [students, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/student/getAll");
         setUsers(result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/v1/student/save",
        {
        name: name,
        address: address,
        mobile_number: mobile_number
        });
          alert("Student Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

 
   async function editStudent(students)
   {
    setName(students.name);
    setAddress(students.address);
    setMobile(students.mobile_number); 
    setId(students.id);
   }
 
   async function DeleteStudent(studentid)
   {
        await axios.delete("http://localhost:8080/api/v1/student/delete/" + studentid); 
        alert("Student deleted Successfully");
        Load();
   }
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("http://localhost:8080/api/v1/student/edit/" + studentid ,
       {

        name: name,
        address: address,
        mobile_number: mobile_number
       
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Student Update Failed");
       }
  }

  return (
    <div>
       <h1>Student Details</h1>
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Student Name</label>
                <input  type="text" class="form-control" id="studentname"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Student Address</label>
                <input  type="text" class="form-control" id="studentaddress" 
                 value={address}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile_number}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                <br/>
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student Address</th>
      <th scope="col">Student Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.mobile_number}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
  )
}

export default Student