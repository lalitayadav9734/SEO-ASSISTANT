import { useState } from "react"

function register(){
const [formData,setFormData] = useState({
  name:'',
  email:'',
  password:''
})

const handleChange = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit = async(e) => {
  e.preventDefault()
  
  try{
    const response = await fetch( "http://localhost:5000/api/register",
      {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
    )
    const data = await response.json()
    alert(data.message);
  }catch(error){
    console.log(error)
  }
}

  return(
      <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Register
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-black text-white p-2"
        >
          Register
        </button>
      </form>
    </div>
  )
}