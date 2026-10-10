const loanModel = require('../models/loanmodel');

const createLoan = async (req, res) => {
    const { data, error } = await loanModel.createLoan(req.body);
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: "Berhasil ditambah", data });
};

const getLoans = async (req, res) => {
    const { status } = req.query; // Menangkap filter query /loans?status=Terlambat
    const { data, error } = await loanModel.getLoans(status);
    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(data);
};

const updateLoanStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await loanModel.updateLoanStatus(id, status);
    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: "Status diperbarui", data });
};

const deleteLoan = async (req, res) => {
    const { id } = req.params;
    const { error } = await loanModel.deleteLoan(id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: "Data dihapus" });
};

module.exports = { createLoan, getLoans, updateLoanStatus, deleteLoan };