const customerInfoSc = require("../model/customerInfoSc");

const postFollow = async(req, res) => {
    const zone = req.body.zone;
    const dataSource = req.body.dataSource;
    const category = req.body.category;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const whatsapp = req.body.whatsapp;
    const details = req.body.details;
    const followCheck = 'lead follow up'

    try {
        await customerInfoSc.create({
            "zone": zone,
            "dataSource": dataSource,
            "category": category,
            "name": name,
            "address": address,
            "phone": phone,
            "email": email,
            "whatsapp": whatsapp,
            "details": details,
            "followCheck": followCheck
        })
        res.status(201).send(req.body);

    } catch (err) {
        res.status(400).send(err);
    }
}

const editFollow = async(req, res) => {
    const id = req.params.id;
    const zone = req.body.zone;
    const dataSource = req.body.dataSource;
    const category = req.body.category;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const whatsapp = req.body.whatsapp;
    const details = req.body.details;

    try {
        const oneData = await customerInfoSc.findByIdAndUpdate(id,  {
            zone, dataSource, category, name, address, phone, email, whatsapp, details
        })

        res.status(200).send(oneData);

    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = {
    postFollow,
    editFollow,
}