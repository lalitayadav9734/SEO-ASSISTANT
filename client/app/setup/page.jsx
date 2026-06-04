function setup(){
//   Website Name
// Website URL
// Industry
// Target Country
// Target Audience
// Primary Keywords
  return(
    <>
        <h1>Setup</h1>
   <input type="text" placeholder="Type Your Website Name" value={name} onChange={(e) => setName(e.target.value)}/>
   <input type="text" placeholder="Type Your Website URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
   <input type="text" placeholder="Type Your Industry" value={industry} onChange={(e) => setIndustry(e.target.value)}/> 
    <input type="text" placeholder="Type Your Target Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
    <input type="text" placeholder="Type Your Target Audience" value={audience} onChange={(e) => setAudience(e.target.value)}/>
    <input type="text" placeholder="Type Your Primary Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
    <button onClick={}>Submit</button>
    </>
  )
}