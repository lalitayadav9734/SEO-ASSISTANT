"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
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
    const response = await fetch( "https://seo-backend-9783.onrender.com/api/register",
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
  <div className="min-h-screen flex items-center justify-center bg-[#fafafa] text-gray-900 antialiased selection:bg-black selection:text-white px-4 relative overflow-hidden">
      
      {/* Dynamic Background Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Primary Register Workspace Card Container */}
      <div className="w-full max-w-md bg-white border border-gray-200/80 shadow-2xl shadow-gray-100/50 rounded-2xl p-8 relative z-10 space-y-6">
        
        {/* Decorative Brand Header Emblem */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="h-9 w-9 bg-black rounded-xl flex items-center justify-center shadow-md">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-black mt-2">
            Create Account
          </h1>
          <p className="text-xs text-gray-500 max-w-[260px]">
            Join AI SEO Assistant and connect directly to active optimization loops.
          </p>
        </div>

        {/* Structured Form Element Block */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Input Block: Full Identity Name */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Identity Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Input Block: Electronic Mail Node */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Input Block: Security Signature Access */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Secure Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="••••••••••••"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Core Action Submission Control Trigger */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white text-xs font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group mt-6"
          >
            Initialize Workspace Profile
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* System Onboarding Redirect Footer links */}
        <div className="border-t border-gray-100 pt-4 text-center space-y-2">
          <p className="text-xs text-gray-500">
            Already registered?{" "}
            <a href="/login" className="text-black font-semibold hover:underline underline-offset-2">
              Sign inside system
            </a>
          </p>
          <p className="text-[10px] text-gray-400 max-w-[280px] mx-auto leading-normal">
            By signing up, you agree to our structural terms of platform utility and automated synchronization privacy rules.
          </p>
        </div>

      </div>
    </div>
);
}