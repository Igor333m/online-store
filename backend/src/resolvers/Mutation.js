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
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // Find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // Check if they own that item, or have the premissions
    // TODO
    // Delete
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutations;