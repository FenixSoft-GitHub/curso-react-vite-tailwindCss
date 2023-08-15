/**
 * This function calculates Total Price of a new order
 * @param {Array} products cartProduct: Array of Objet
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}