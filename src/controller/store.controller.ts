import { IProduct } from '../model/store.model';

export class StoreController {
    public urlDomain: string

    constructor(urlDomain: string) {
        this.urlDomain = urlDomain
    }

    async getData(endpoint: string): Promise<IProduct>{
        const response: Response = await fetch (`${this.urlDomain}${endpoint}`)
        console.log(response)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = response.json()
        console.log(data)

        return data
    }
}