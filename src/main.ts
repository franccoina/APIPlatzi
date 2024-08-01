import { StoreController } from "./controller/store.controller";

const urlDomain = ' https://api.escuelajs.co/api/v1/'

async function showData(url: string) {
    const storeController = new StoreController(url)

    const data = await storeController.getData('products')
    console.log(data)
}

showData(urlDomain)