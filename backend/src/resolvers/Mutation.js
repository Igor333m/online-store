const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if the user is logged in

    // createItem returns a promise
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info); // info contains query

    console.log("createItem / item: ", item);

    return item;
  }
};

module.exports = Mutations;