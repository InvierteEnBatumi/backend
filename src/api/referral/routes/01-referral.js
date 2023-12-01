module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/referrals/findReferrals/:userId', 
        handler: 'referral.findReferrals',
      }
    ]
  }
  
  
  