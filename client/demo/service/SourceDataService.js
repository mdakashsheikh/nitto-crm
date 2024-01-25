import axios from 'axios';

// Office Computer IP - 103.151.61.45
// localhost

export const URL = '//192.168.0.104:6300';

export const DataSourceService = {
    async postDataSource(name, details) {
        const data = {
            name,
            details
        }
        await axios.post(`${URL}/post-data-source`, data)
    },

    async editDataSource(name, details, _id) {
        const data = {
            name,
            details,
        }
        await axios.post(`${URL}/edit-data-source/` + _id, data);
    },

    async getSourceData() {
        const response = await axios.get(`${URL}/get-data-source`);
        return response;
    },

    async deleteSourceData(_id) {
        await axios.delete(`${URL}/delete-data-source/` + _id);
    },

    async toggleSourceData(is_active, _id) {
        const data = {
            is_active,
        }
        await axios.post(`${URL}/toggle-source-data/` + _id, data)
    }
}