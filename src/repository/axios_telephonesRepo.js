import axios from './axios_config'
import qs from 'qs'

const telephonesService = {             // todo: Ova sega za sega nigde ne go koristis, trebase vo userDetails ama tamu
                                        // todo: koristam hooks

    loadMobilePhones: (username) => {
        return axios.get("/telephones/mobile/"+username);
    },

    loadHomePhones: (username) => {
        return axios.get("/telephones/home/"+username);
    }
};

export default telephonesService;