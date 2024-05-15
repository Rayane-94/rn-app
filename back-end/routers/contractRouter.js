const express = require('express');
const { test_api, getContract, sendContract, deleteContract } = require('../controller/contractController');

const router = express.Router();

router.get('/api/test', test_api);
router.get('/api/get-contract', getContract);
router.post('/api/send-contract', sendContract);
router.delete('/api/delete-contract/:id', deleteContract);

module.exports = router;