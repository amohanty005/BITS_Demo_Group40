// Initialize express router
const router = require('express').Router();
const teamController = require('../controller/team-controller');
// Set default API response

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub dfdf with love!'
    });
});
router.post('/team', teamController.createTeam);

router.get('/teams', teamController.getTeams);


router.patch('/pairteam', teamController.pairTeam);

// Export API routes
module.exports = router;