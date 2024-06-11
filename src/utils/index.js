import axios from "axios";
import { API_URL } from "../constans/apiUrl";
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

export const sendDataToServer = async (data, profile) => {
    try {
        const ft = 30.48;
        const folderName = uuid.v4();
        const frontReference = storage().ref(`${folderName}/front.jpg`);
        const sideReference = storage().ref(`${folderName}/side.jpg`);
        await frontReference.putFile(data?.front);
        await sideReference.putFile(profile);
        const height = data?.isCentimeter ? data?.height : (Number(data?.height) * ft);
        console.log(data?.isCentimeter);
        console.log(height);

        const apiUrl = `${API_URL}?folder_name=${folderName}&height=${Math.round(height)}`;
        console.log(apiUrl);
        const response = await axios.post(apiUrl, {});
        if (data?.isCentimeter) {
            return response.data;
        }
        const res = response.data;
        return {
            "bust": res.bust * ft,
            "hip": res.hip * ft,
            "shoulder": res.shoulder * ft,
            "waist": res.waist * ft
        }
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



