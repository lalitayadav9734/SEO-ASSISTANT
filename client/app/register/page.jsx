function register(){
const[name,setName] = useState('');

  return(
    <>
    <h1>Create Your Account</h1>
    <input type="text" placeholder="Type Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="Type Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Type Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
    <button onClick={}>Register</button>
    </>
  )
}