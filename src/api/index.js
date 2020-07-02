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
    },
    async getclassList(params) {
        return service.get('mail_list', {
            params: params
        });
    },
    async getuser(params) {
        return service.get('user', {
            params: params
        });
    },
    async postdata(data) {
        return service.post('modify_user',data);
    },
    async changeclassfee(data) {
        return service.post('change_class_expense', data);
    },
    async addclassfee(data) {
        return service.put('add_class_expense', data);
    },

}