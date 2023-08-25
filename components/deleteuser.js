"use client"
export default function Deleteuser(props) {
    const userid = props.id;
    const deleteUser = async ()=>{
        let data = await fetch("http://localhost:3000/api/firstapi/" + userid,{
            method: "DELETE"
        });
        data = await data.json();
        if(data.success){
            alert("User deleted")
        }
    }
  return (
    <button onClick={deleteUser}>Delete User</button>
  )
}
