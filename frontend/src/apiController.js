import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

const headers = {
    'Content-Type': 'application/json',
  }
  

// const config = {
//     headers:{
//       header1: value1,
//       header2: value2
//     }
//   };
// CREATE APPLICATI
export const createApplication = async (application) => {
    try {
        const res = await api.post("/application", application,headers);
        return res.data;
    } catch (error) {
        console.error(error);   
    }
}

export const getJobs = async () =>{
  try{
    const res = await api.get("/jobs");
    return res.data

  }catch(error){
    console.error(error);
  }
}