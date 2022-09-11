import { HttpAdapter } from "../Interfaces/HttpAdapter.interface";
export class FetchAdapter implements HttpAdapter{

    async getRequest<T>(url: string, headers?: any): Promise<T> {
        const response  = await fetch(url, headers);
        const data: T = await response.json();
        return data;
    }
    postRequest<T>(url: string, payload: any, headers?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    patchRequest<T>(url: string, payload: any, headers?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    putRequest<T>(url: string, payload: any, headers?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    deleteRequest<T>(url: string, payload: any, headers?: any): Promise<T> {
        throw new Error("Method not implemented.");
    }

}
