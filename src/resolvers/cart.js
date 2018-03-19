const cart = {
    addProductToCart(parent, { user_id, product_id }, ctx, info) {
        return ctx.db.mutation.updateUser(
          {
            data: {
              cart: { update: {
                  products: { create: {
                      product: { connect: { id: product_id } }
                  } }
                }
              }
            },
            where: { id: user_id },
          }, info, )
      },
      removeProductFromCart(parent, { user_id, product_id }, ctx, info) {
        return ctx.db.mutation.updateUser(
          {
            data: {
              cart: {
                update: {
                  products: { update: {
                      product:{ disconnect: { id: product_id } }
                  }}}}},
            where: { id: user_id }
          }, info, )
      },
      clearCart(parent, { user_id }, ctx, info) {
          return ctx.db.mutation.updateUser(
            {
              where: { id: user_id },
              data: {
                cart:{
                  create:{}
                }
              }
            }, info, )
      },
}

module.exports = { cart }