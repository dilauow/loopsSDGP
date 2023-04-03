import axios from "axios";

const api = axios.create({
  baseURL: "https://fastapi-production-8423.up.railway.app/api",
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