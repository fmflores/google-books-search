import axios from "axios";

export const searchBook = q => axios.post('/api/search', {q});