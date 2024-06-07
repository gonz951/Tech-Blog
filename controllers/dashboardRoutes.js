const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        
    }
})
// ! ADD CONTENT