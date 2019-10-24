import { AxiosResponse } from 'axios'
import { http } from '../lib/http'
//import { config } from '../lib/config'

export async function getUserDetails(jwt: string, url: string): Promise<AxiosResponse> {
    const options = {
        headers: { Authorization: `Bearer ${jwt}` },
    }

    return await http.get(`${url}/details`, options)
}


//config.services.idamApi
