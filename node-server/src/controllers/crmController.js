import { ContactSchema } from '../models/crmModel';
import mongoose from 'mongoose';
const Contact = mongoose.model('Contact', ContactSchema);
export const addNewContact = async (req, res) => {
    try {
        let newContact = new Contact(req.body);
        let contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
export const getContacts = async (req, res) => {
    try {
        let contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.send(err);
    }
};
export const getContactWithID = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
export const updateContact = async (req, res) => {
    try {
        let contact = await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
export const deleteContact = async (req, res) => {
    try {
        await Contact.remove({ _id: req.params.contactId });
        res.json({ message: 'Successfully deleted contact' });
    } catch (err) {
        res.send(err);
    }
};