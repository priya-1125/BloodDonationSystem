import axios from 'axios';

const apiUrl = 'https://localhost:5259/api/Donors';

export const getDonors = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
};

export const getDonorById = async (id: number) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
};

export const createDonor = async (donor: any) => {
    const response = await axios.post(apiUrl, donor);
    return response.data;
};

export const updateDonor = async (id: number, updatedDonor: any) => {
    const response = await axios.put(`update`, updatedDonor);
    return response.data;
};

export const deleteDonor = async (id: number) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
};
