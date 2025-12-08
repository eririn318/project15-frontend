import axios from "axios";

export const apiClient = axios.create({

    baseURL:  import.meta.env.VITE_BACKEND_URL,
    // baseURL: 'http://localhost:4000',
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBiOTU1OWY4OTM5MTRhZTVlNTYxYyIsInVzZXJuYW1lIjoiZXJpa28iLCJlbWFpbCI6ImVyaWtvQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NTE1OTU0MCwiZXhwIjoxNzY1MjQ1OTQwfQ.3hpU2meQSHLkP-7-_ARx08W_1b3Xij04RFIy1Rm0Pak"
    }
})