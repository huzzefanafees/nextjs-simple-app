import Deleteuser from "@/components/deleteuser";
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
                    <div  style={{margin:"30px"}} key={index}>
                    <span style={{marginRight:"30px"}}><Link href={`createdapidisplay/${user.id}`}>{user.name}</Link></span>
                    <span style={{marginRight:"30px"}}><Link href={`createdapidisplay/${user.id}/update`}>Update User Details</Link></span>
                    <Deleteuser id={user.id} />
                    </div>
                ))
            }
        </ul>
    </div>
  )
}
