"use client"
import styles from "@/app/page.module.css"
import { useEffect, useState } from "react"
export default function page({params}) {
    let id = params.usersid;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = useState("");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUserData = async ()=>{
        let userData = await fetch(`http://localhost:3000/api/firstapi/${id}`);
        userData = await userData.json();
        setName(userData.user[0].name);
        setEmail(userData.user[0].email);
        setAge(userData.user[0].age);
    }
    const updateUser = async () => {
        let response = await fetch(`http://localhost:3000/api/firstapi/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, age })
        })
        response = await response.json();
        if (response.success) {
            alert("User Detail Updated")
        } else {
            alert("Something is wrong please try again")
        }
    }

    return (
        <div className={styles.user}>
            <h1>Updating User in the API with the PUT Method:</h1>
            <input type="text" value={name} placeholder="Add Name" onChange={(e) => setName(e.target.value)} className={styles.input} />
            <input type="text" value={age} placeholder="Add Age" onChange={(e) => setAge(e.target.value)} className={styles.input} />
            <input type="text" value={email} placeholder="Add Email" onChange={(e) => setEmail(e.target.value)} className={styles.input} />
            <button onClick={updateUser} className={styles.btn}>Update User</button>
        </div>
    )
}
