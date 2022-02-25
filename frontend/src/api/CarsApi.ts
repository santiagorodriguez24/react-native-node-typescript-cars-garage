import Api from 'api/Api';

// const API_BASE_ADDRESS = 'http://localhost:3000';
export const API_BASE_ADDRESS: string = 'http://192.168.1.104:3000'; // My PC Ipv4-Address

// regular api service
const apiService = new Api();

export default class ApiCars {

    // GET ALL
    static getAll(): void | Promise<unknown> {
        const endpoint: string = API_BASE_ADDRESS + "/";
        return apiService.get(endpoint);
    }

}