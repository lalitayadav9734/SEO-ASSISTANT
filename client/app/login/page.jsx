function login() {
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

   function sendingData(){

   }
  return(
    <div>
      <h1>Login Your Account</h1>
      <input type="text" placeholder="Type Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Type Your Password" value={password} onChange={(e) => setEmail(e.target.value)}/> 
      <button onClick={}>Login</button> 
    </div>
  )
}