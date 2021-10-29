import Axios from "axios";
//Initialize Axios
const axios = Axios.create({
    baseURL: 'http://localhost:5000',

})

export default class API {
    // Получает сообщение по id
    static async getToDo(id) {
        const resp = await axios.get(`/get/${id}`)
        return resp.data
    }

    // Отправка сообщения
    static async sendToDo(name, priority) {
        await axios.post(`/set`, {
            name, // text: text
            priority,
        })
    }
}