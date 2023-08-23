"use client"
import { useEffect, useState } from 'react'

const Productfromapiclient = () => {
    const [data, setData] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchdata() {
            const data = await fetch("https://dummyjson.com/products")
            const parsedData = await data.json()
            setData(parsedData.products)
        }
        fetchdata()
    }, [])
    return (
        <>
            <h1>Product List client side Api call:</h1>
            <table border={2} style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>DiscountPercentage</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.discountpercentage}</td>
                                <td>{item.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Productfromapiclient