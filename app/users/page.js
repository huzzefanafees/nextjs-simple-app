import getUsers from "@/serivces/getUsers"
import Link from "next/link";

export default async function Users() {
    const userdata = await getUsers();
    return (
        <div>
            <h1>Click on the username to see the detail of user</h1>
            <h2>Users List: </h2>
            {userdata.map((user)=>(
                <h3 key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                </h3>
            ))}
        </div>
    )
}
