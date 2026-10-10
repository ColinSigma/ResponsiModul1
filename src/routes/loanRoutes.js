const express = require('express');
const { createLoan, getLoans, updateLoanStatus, deleteLoan } = require('../controllers/loanController');

const router = express.Router();

router.post('/', createLoan);
router.get('/', getLoans);
router.put('/:id', updateLoanStatus);
router.delete('/:id', deleteLoan);

module.exports = router;