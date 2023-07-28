import axios from "axios";
import { API_URL } from "../constans/apiUrl";

export const sendDataToServer = async (data, profile) => {
    try {
        const formData = new FormData();
        formData.append('front', {
            uri: data.front,
            type: 'image/jpeg',
            name: 'front.jpg',
        });

        formData.append('profile', {
            uri: profile,
            type: 'image/jpeg',
            name: 'profile.jpg',
        });

        const apiUrl = `${API_URL}${data.height}`;
        const response = await axios.post(apiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('API responded with an error:', error.response.status, error.response.data);
            return error.message;
        } else if (error.request) {
            console.error('No response received from API:', error.message);
            return error.message;
        } else {
            console.error('Error setting up the request:', error.message);
            return error.message;
        }
    }
};



