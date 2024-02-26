class FilterAPI {
    constructor(sequelizeModel, queryObject) {
        this.sequelizeModel = sequelizeModel;
        this.queryObject = queryObject;
    }

    async applyFilters() {
        let filters = [];

        if (this.queryObject.select) {
            let selectFields;
            if (this.queryObject.select.includes(',')) {
                selectFields = this.queryObject.select.split(',');
            } else {
                selectFields = [this.queryObject.select];
            }
            filters.push({ attributes: selectFields });
        }

        if (this.queryObject.sort || this.queryObject.sortBy) {
            let sortBy = this.queryObject.sort || this.queryObject.sortBy;
            let orderBy = this.queryObject.order || 'ASC';
            filters.push({ order: [[sortBy, orderBy]] });
        }

        if (this.queryObject.page) {
            let documentsPerPage = process.env.DOCUMENTS_PER_PAGE || 10;
            let pageNumber = parseInt(this.queryObject.page);
            let offset = (pageNumber - 1) * documentsPerPage;
            let limit = documentsPerPage;
            filters.push({ offset, limit });
        }

        let results = await this.sequelizeModel.findAll(Object.assign({}, ...filters));
        return results;
    }
}

module.exports = FilterAPI;