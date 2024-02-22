"use strict";

/**
 * custom controller
 */
module.exports = {
  async custom(ctx) {
    const { category } = ctx.params;

    const posts = await strapi
      .service("api::post.post")
      .model.find({ category });

    return posts;
  },
};
