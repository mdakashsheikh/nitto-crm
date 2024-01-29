const teamInfoSc = require('../model/teamInfoSc');

const postTeamInfo = async(req, res) => {
    const {
        name, father_name, mother_name, phone, nid, photo,
    } = req.body;
    let empId = Math.floor(Math.random() * 10000)

    try {
        const data = await teamInfoSc.create({
            'empId': empId,
            name, father_name, mother_name, phone, nid, photo,
        })

        res.status(201).json({
            data
        })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const editTeamInfo = async(req, res) => {
    const id = req.params.id;
    const {
        name, father_name, mother_name, phone, nid, photo,
    } = req.body;

    try {
        const oneData = await teamInfoSc.findByIdAndUpdate(id, {
            name, father_name, mother_name, phone, nid, photo,
        })
        res.status(200).json({ oneData });

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getTeamInfo = async(req, res) => {

    try {
        const AllData = await teamInfoSc.find({}).sort('-date');
        res.status(400).json({AllData});

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteTeamInfo = async(req, res) => {
    const id = req.params.id;

    try {
        await teamInfoSc.findByIdAndRemove(id);
        res.status(200).json({ message: 'Successfully Deleted'})

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    postTeamInfo,
    editTeamInfo,
    getTeamInfo,
    deleteTeamInfo,
}