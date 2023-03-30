import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// CREATE APPLICATI
export const createApplication = async (application) => {
    try {
        const res = await api.post("/application", application);
        return res.data;
    } catch (error) {
        console.error(error);   
    }
}