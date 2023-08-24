import Link from "next/link";

async function gettingUsers(){
    let data = await fetch("http://localhost:3000/api/firstapi")
    data = await data.json()
    return data
}

export default async function page() {
    let usersData = await gettingUsers();
  return (
    <div>
        <h1>Created API Users List : </h1>
        <ul>
            {
                usersData.map((user,index)=>(
                    <li key={index}><Link href={`createdapidisplay/${user.id}`}>{user.name}</Link></li>
                ))
            }
        </ul>
    </div>
  )
}
