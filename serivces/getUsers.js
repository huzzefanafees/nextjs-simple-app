export default async function getUsers() {
    let results = await fetch("https://dummyjson.com/users")
    results = await results.json();
    return results.users
}
