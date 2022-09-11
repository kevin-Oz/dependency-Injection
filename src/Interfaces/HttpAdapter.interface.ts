export interface HttpAdapter{
    /**
     * http get: obtain records of url api.
     * @param url direction to send get request
     * @param headers additional options headers
     */
    getRequest<T>(url: string, headers?: any): Promise<T>;
    postRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    patchRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    putRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    deleteRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
}