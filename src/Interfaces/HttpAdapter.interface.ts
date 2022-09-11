export interface HttpAdapter{
    getRequest<T>(url: string, headers?: any): Promise<T>;
    postRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    patchRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    putRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
    deleteRequest<T>(url: string, payload: any, headers?: any): Promise<T>;
}