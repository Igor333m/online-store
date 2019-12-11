const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if the user is logged in

    // createItem returns a promise
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info); // info contains query

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // Take a copy of the updates
    const updates = {...args};
    // Remove the ID form the updates
    delete updates.id;
    // Run the update method
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  }
};

module.exports = Mutations;