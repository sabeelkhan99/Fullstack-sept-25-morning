import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export const fetchMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movies`);
    return res.data;
}

export const registerUser = async (newUser) => {
    const res = await axios.post(`${BASE_URL}/register`, newUser);
    return res.data;
}

export const loginUser = async (userCreds) => {
    const res = await axios.post(`${BASE_URL}/login`, userCreds);
    return res.data;
}

export const fetchProfile = async () => {
    const res = await axios.get(`${BASE_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return res.data;
}

export const fetchMovieById = async (id) => {
    const res = await axios.get(`${BASE_URL}/movies/${id}`);
    return res.data;
}

export const createTheatre = async (newTheatre) => {
    const res = await axios.post(`${BASE_URL}/theatres`, newTheatre, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return res.data;
}

export const fetchTheatres = async () => {
    const res = await axios.get(`${BASE_URL}/theatres`);
    return res.data;
}