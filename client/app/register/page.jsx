"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function register(){
  const router = useRouter();

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
    if (data.success) {
  router.push("/login");
}
  }catch(error){
    console.log(error)
  }
}

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4">

    <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mb-8 text-sm">
        Join AI SEO Assistant and start optimizing your website
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-black to-gray-800 text-white p-3 rounded-lg font-medium hover:scale-[1.02] transition"
        >
          Create Account
        </button>

      </form>

      {/* Footer hint */}
      <p className="text-center text-xs text-gray-400 mt-6">
        By signing up, you agree to our terms and privacy policy
      </p>

    </div>
  </div>
);
}