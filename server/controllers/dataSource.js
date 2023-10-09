const dataSourceSc = require("../model/dataSourceSc");

const postDataSourc = async(req, res) => {

    const name = req.body.name;
    const details = req.body.details;

    try {
        await dataSourceSc.create({
            "name": name,
            "details": details,
        })

        res.send(req.body);

    } catch (err) {
        res.status(400).send(err);
    }
}

const editDataSource = async(req, res) => {
    const id = req.params.id;

    const name = req.body.name;
    const details = req.body.details;

    try {
        const oneData = await dataSourceSc.findByIdAndUpdate(id, {
            "name": name,
            "details": details,
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}


const getDataSource = async(req, res) => {
    try {
        const AllData = await dataSourceSc.find({}).sort('-date')
        res.send({AllData})

    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    postDataSourc,
    editDataSource,
    getDataSource,
}