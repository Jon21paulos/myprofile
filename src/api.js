export const getSkills = () => fetch("https://myportfolio-b.herokuapp.com/api/skills").then(res => res.json())
export const getProjects = () => fetch("https://myportfolio-b.herokuapp.com/api/projects").then(res => res.json())
export const getTesi = () => fetch("https://myportfolio-b.herokuapp.com/api/testi").then(res => res.json())


export const sendMess = (message) => fetch("https://myportfolio-b.herokuapp.com/api/message", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(message)
})  
