import getUsers from "@/serivces/getUsers"

export default async function Userinfo(props) {
    const userdata = await getUsers();
    const currentId = props.params.userid;
    const data = userdata[currentId - 1];
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center", lineHeight:"50px"}}>
        <h1>User Information :</h1>
        <h2><strong>Name :</strong> {data.firstName} {data.lastName} {data.maidenName}</h2>
        <p><strong>Age :</strong> {data.age}</p>
        <p><strong>Gender :</strong> {data.gender}</p>
        <p><strong>Email :</strong> {data.email}</p>
        <p><strong>Phone :</strong> {data.phone}</p>
        <p><strong>Username :</strong> {data.username}</p>
    </div>
  )
}

// export async function generateStaticParams(){
//     const userdata = await getUsers();
//     return userdata.map((user)=>({
//         userid: user.id.toString()
//     }))
// }