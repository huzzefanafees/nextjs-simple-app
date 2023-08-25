"use client"
import styles from "@/app/page.module.css"
import { useState } from "react"
export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = useState("");
    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/firstapi", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, age })
        })
        response = await response.json();
        if (response.success) {
            alert("User Added")
        } else {
            alert("Something is wrong please try again")
        }
    }

    return (
        <div className={styles.user}>
            <h1>Adding a new User in the API with the POST Method:</h1>
            <input type="text" value={name} placeholder="Add Name" onChange={(e) => setName(e.target.value)} className={styles.input} />
            <input type="text" value={age} placeholder="Add Age" onChange={(e) => setAge(e.target.value)} className={styles.input} />
            <input type="text" value={email} placeholder="Add Email" onChange={(e) => setEmail(e.target.value)} className={styles.input} />
            <button onClick={addUser} className={styles.btn}>Add User</button>
        </div>
    )
}
