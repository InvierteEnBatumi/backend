'use strict';

/**
 * promotion controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::promotion.promotion', ({
  strapi
}) => ({
  async findOne(ctx) {
    const {
      id
    } = ctx.request.params;
    const promotion = await strapi.db.query('api::promotion.promotion').findOne({
      where: {
        id: id
      },
      populate: true
    });
    var data = {}
    switch (promotion.type) {
      case 'Renta':
        data = (await strapi.entityService.findMany('api::rent.rent', {
          filters: {
            promotion_id: id
          },
          populate: "deep"
        }))[0];
        break;
      case 'Inversion':
        data = await strapi.db.query('api::investment.investment').findOne({
          where: {
            promotion_id: id
          },
          populate: true
        });
        break;
    }
    promotion.data = data
    if (!promotion.main_picture || !promotion.main_picture.url) {
      promotion.main_picture = {
        url: ''
      }
    }
    if (!promotion.file || !promotion.file.url) {
      promotion.file = {
        url: ''
      }
    }

    return {
      data: promotion
    };
  },
  async find(ctx) {
    const query = ctx.request.query
    var entities = await strapi.entityService.findMany('api::promotion.promotion', query)
    entities = await Promise.all(entities.map(async (et) => {
      et.data = await strapi.db.query('api::investment.investment').findOne({
        where: {
          promotion_id: et.id
        },
        populate: true
      });
      return et
    }))
    return {
      data:entities
    }

  }
}));
