import service from "../utils/request"
export default {
    async getclassfee(params) {
        return service.get('class_expense', {
            params: params
        });
    },
    async getphoto(params) {
        return service.get('photo', {
            params: params
        });
    }

}