function register(){
const[name,setName] = useState('');

  return(
    <>
    <h1>Create Your Account</h1>
    <input type="text" placeholder="Type Your Name" value={name} onChange={(e) => SetName(e.target.value)}/>
    </>
  )
}