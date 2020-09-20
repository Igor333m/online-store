const { forwardTo } = require('prisma-binding');

const Query = {
  // Forward query from joga to prisma (joga query is exactly the same)
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  
  // async items(parent, args, ctx, info) {
  //   console.log("getting items: ");
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;