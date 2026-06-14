"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SetupPage() {
  const[formData,setFormData] = useState({
     websiteName: "",
      websiteUrl: "",
      industry: "",
      targetCountry:"",
      targetAudience: "",
      primaryKeywords: "",
  })
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const payload = {
      websiteName: formData.websiteName.trim(),
      websiteUrl: formData.websiteUrl.trim(),
      industry: formData.industry.trim(),
      targetCountry: formData.targetCountry.trim(),
      targetAudience: formData.targetAudience.trim(),
      primaryKeywords: formData.primaryKeywords.trim(),
    };

    const res = await fetch("http://localhost:5000/api/setup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to save data");
    }

    console.log("Server response:", data);

    alert("Setup saved successfully!");
    
    router.push("/dashboard");

  } catch (err) {
    console.error(err);
    alert(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-2">
          Setup Your Website
        </h1>

        <p className="text-gray-500 mb-8">
          Tell us about your website so we can generate better SEO assets.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="websiteName"
            placeholder="Website Name"
            value={formData.websiteName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="websiteUrl"
            placeholder="Website URL"
            value={formData.websiteUrl}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="industry"
            placeholder="Industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="targetCountry"
            placeholder="Target Country"
            value={formData.targetCountry}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="targetAudience"
            placeholder="Target Audience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="primaryKeywords"
            placeholder="Primary Keywords"
            value={formData.primaryKeywords}
            onChange={handleChange}
            rows={4}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}