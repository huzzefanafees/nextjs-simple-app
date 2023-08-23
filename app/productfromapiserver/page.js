async function productlist(){
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

export default async function Productfromapiserver(){
    let products = await productlist();
    return (
        <>
            <h1>Product List server side Api call:</h1>
            <table border={1} style={{width: "100%"}}>
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
                        products.map((item, index) => (
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

