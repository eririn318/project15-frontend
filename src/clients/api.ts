import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBiOTU1OWY4OTM5MTRhZTVlNTYxYyIsInVzZXJuYW1lIjoiZXJpa28iLCJlbWFpbCI6ImVyaWtvQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NDk1NzYwNiwiZXhwIjoxNzY0OTY0ODA2fQ._HjW8NRPrGt34gF9vy5_VQalAg5Zltr6nHdyAe9dBBY"
    }
})