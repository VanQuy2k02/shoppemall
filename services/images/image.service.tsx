import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export const handleImages = {
  postImages: async (formData: FormData) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.post(`${API_URL}/uploads/file`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${accessToken}` },
    });
  },
};
