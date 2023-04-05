import axios from "axios";

const api = axios.create({
  baseURL: "https://fastapi-production-33be.up.railway.app/api",
});

const headers = {
    'Content-Type': 'application/json',
  }


export const getJobs = async () =>{
    try{
      const res = await api.get("/admin");
      return res.data
  
    }catch(error){
      console.error(error);
    }
  }


  // post job
  export const createJob = async (job) => {
    try {
        const res = await api.post("/jobs", job);
        return res.data;
    } catch (error) {
        console.error(error);   
    }
}