const convertCustomerSc = require("../model/convertCustomerSc");
const customerInfoSc = require("../model/customerInfoSc");

const postCustomerInfo = async(req, res) => {
    const zone = req.body.zone;
    const category = req.body.category;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const whatsapp = req.body.whatsapp;
    const details = req.body.details;

    try {
        await customerInfoSc.create({
            "zone": zone,
            "category": category,
            "name": name,
            "address": address,
            "phone": phone,
            "email": email,
            "whatsapp": whatsapp,
            "details": details,
        })
        res.send(req.body);

    } catch (err) {
        res.status(400).send(err);
    }
}

const editCustomerInfo = async(req, res) => {
    const id = req.params.id;
    const zone = req.body.zone;
    const category = req.body.category;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const whatsapp = req.body.whatsapp;
    const details = req.body.details;

    try {
        const oneData = await customerInfoSc.findByIdAndUpdate(id, {
            "zone": zone,
            "category": category,
            "name": name,
            "address": address,
            "phone": phone,
            "email": email,
            "whatsapp": whatsapp,
            "details": details,
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}

const getCustomerInfo = async(req, res) => {
    try {
        const AllData = await customerInfoSc.find({}).sort('-date');
        res.send({ AllData });

    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteCustomerInfo = async(req, res) => {
    const id = req.params.id;

    try {
        await customerInfoSc.findByIdAndRemove(id);
        res.send("Deleted");

    } catch (err) {
        res.status(400).send(err);
    }
}

const toggleCustomerInfo = async(req, res) => {
    const id = req.params.id;
    const is_active = req.body.is_active;

    try {
        const oneData = await customerInfoSc.findByIdAndUpdate(id, {
            "is_active": is_active,
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}

const editManagerPanel = async(req, res) => {
    const id = req.params.id;
    const follows = req.body.follows;

    try {
        const oneData = await customerInfoSc.findByIdAndUpdate(id, {
            "follows": follows,
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}

//POST Conver to Customer
const postfCustomer = async(req, res) => {
    const { name, address, service, slot, team_member, team_lead, customerId } = req.body;
    try {
        await convertCustomerSc.create({
            name, address, service, slot, team_member, team_lead, customerId
        });
        res.status(201).send(req.body)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const editfCustomer = async(req, res) => {
    const id = req.params.id;
    const { address, service, slot, team_member, team_lead } = req.body;

    try {
        const oneData = await convertCustomerSc.findByIdAndUpdate(id, {
            address, service, slot, team_member, team_lead
        })
        res.status(200).send(oneData);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getfCustomer = async(req, res) => {

    try {
        const AllData = await convertCustomerSc.find({});
        res.status(200).send({ AllData });
        
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        })
    }    
}


module.exports = {
    postCustomerInfo,
    editCustomerInfo,
    getCustomerInfo,
    deleteCustomerInfo,
    toggleCustomerInfo,
    editManagerPanel,
    
    postfCustomer,
    editfCustomer,
    getfCustomer,
}