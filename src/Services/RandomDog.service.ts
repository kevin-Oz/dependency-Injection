import { FetchAdapter } from "../Api/FetchAdapter.http";
import { DogResponse } from "../Interfaces/DogResponse.interface";
import { HttpAdapter } from "../Interfaces/HttpAdapter.interface";


export class RandomDogService {
    private  baseUrl: string;
    constructor(private readonly http:HttpAdapter){
        this.baseUrl = "https://dog.ceo/api/breeds/image/random";
        
    }
    
    /**
     * 
     * @returns 
     */
    async giveMeRandomDog(): Promise<DogResponse>{
        const dog: DogResponse = await this.http.getRequest(`${this.baseUrl}`);
        return dog;
    }
}

const fetchAdapter = new FetchAdapter();

const randomDogService = new RandomDogService(fetchAdapter);
export const randomDog = await randomDogService.giveMeRandomDog();
console.log(randomDog);
