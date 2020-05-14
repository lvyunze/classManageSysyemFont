import service from "../utils/request"
export default {
    async getclassfee(params) {
        return service.get('class_expense', {
            params: params
        });
    }

}