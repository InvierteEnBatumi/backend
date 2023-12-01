'use strict';

/**
 * referral controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::referral.referral', ({
  strapi
}) => ({
  async findReferrals(ctx) {
    const {userId} = ctx.request.params
    const userWithReferrals = await strapi.entityService.findOne('plugin::users-permissions.user',userId,{
        populate: 'deep'
    })
    console.log(userWithReferrals)
    let level2Referrals = [];
    let level3Referrals = [];
    
    const level1Referrals = userWithReferrals.referrals || [];

    for (let referral of level1Referrals) {
      level2Referrals = level2Referrals.concat(referral.referrals || []);
    }

    for (let referral of level2Referrals) {
      level3Referrals = level3Referrals.concat(referral.referrals || []);
    }

    // Despues de crear las listas, borra de cada objeto los items referrals, role y referred
    level1Referrals.forEach(referral => {
      delete referral.referrals;
      delete referral.role;
      delete referral.referred;
      delete referral.updatedBy;
      delete referral.createdBy;
    });

    level2Referrals.forEach(referral => {
      delete referral.referrals;
      delete referral.role;
      delete referral.referred;
      delete referral.updatedBy;
      delete referral.createdBy;
      
    });

    level3Referrals.forEach(referral => {
      delete referral.referrals;
      delete referral.role;
      delete referral.referred;
      delete referral.updatedBy;
      delete referral.createdBy;
    });
    return {
        level1:{
            data:level1Referrals,cant:level1Referrals.length
        },
        level2:{
            data:level2Referrals,cant:level2Referrals.length
        },
        level3:{
            data:level3Referrals,cant:level3Referrals.length
        }

    };
  },
  async create(ctx) {

  }
}));
