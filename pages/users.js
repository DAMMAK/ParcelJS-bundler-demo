export const users = () => fetch("https://randomuser.me/api/?results=10").then(res => res.json())

