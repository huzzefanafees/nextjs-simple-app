async function gettingUsers(id){
    let data = await fetch(`http://localhost:3000/api/firstapi/${id}`)
    data = await data.json()
    return data
}

export default async function page({params}) {
    let userData = await gettingUsers(params.usersid);
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <h1>Created API Users Details : </h1>
        <h3>Name : {Array.isArray(userData.user) ? userData.user[0].name : userData.user.name}</h3>
        <p>Email : {Array.isArray(userData.user) ? userData.user[0].email : userData.user.email}</p>
        <p>Working : {Array.isArray(userData.user) ? userData.user[0].working : userData.user.working}</p>
        <p>Age : {Array.isArray(userData.user) ? userData.user[0].age : userData.user.age}</p>

    </div>
  )
}
