import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Loginpage = () => {
  const navigate=useNavigate()
  const [data, setData] = useState(
    {
      username:'',
      password:'',
    }
  )
  async function Verify()
  {
    
    try {
      const response = await axios.post('http://localhost:8000/login/', data);
      console.log(response.data);
      if(response.status===200){
        navigate("/")
      }
    } catch (error) {
      console.error(error);
      // Handle login error
    }

  }
  function handleChange(event)
  {
    const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
  }
  return (
    <div className="justify-center items-center">
      <div className="bg-red-400">
      <p> LOGIN to Trade share </p> 
      </div>
      <br/>
      <label>
        Enter your name:
        <input name="username" value={data.username} onChange={handleChange} className="border border-gray-300" type="text"/>
      </label>
      
      <label>
        Enter your Password
        <input name="password" type="password" value={data.password} onChange={handleChange} className="border border-gray-300" />
      </label>
      <br/>
      <button  onClick={Verify} className="border border-gray-300"type="submit"> Verify </button>

    </div>
  )
}

export default Loginpage