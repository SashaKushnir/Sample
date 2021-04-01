import axios from "axios";

// Accept  text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// Accept-Encoding  gzip, deflate
// Accept-Language  en-US,en;q=0.5
// Connection  keep-alive
// Host  194.213.104.146:222
// Upgrade-Insecure-Requests  1
// User-Agent  Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0

export const BaseURL = "http://194.213.104.146:222"
//http://imperia-api.com

export const myGetInstance = axios.create({
    baseURL: BaseURL
})
export const myPostInstance = axios.create({
    baseURL: BaseURL,
    headers: {

    }
})

export type ApiMenusResultType<D> = {
    response_error: string | null,
    menus: D,
    response_status: boolean
    response_status_code: number,
}
export type ApiServicesResultType<D> = {
    response_error: string | null
    services: D
    response_status: boolean
    response_status_code: number
}
export type ApiTicketsResultType<D> = {
    response_error: string | null
    tickets: D
    response_status: boolean
    response_status_code: number
}
// Accept-Encoding: gzip, deflate
// Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6
// Cache-Control: max-age=0
// Connection: keep-alive
// Host: imperia-api.com:222
// Upgrade-Insecure-Requests: 1

// }
// 'Access-Control-Allow-Origin': '*',
//     'User-Agent' : "PostmanRuntime/7.26.10",
//     'Accept': '*/*',
//     'Accept-Encoding': 'gzip, deflate, br',
//     'Connection': ' keep-alive'