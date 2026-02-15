const db = require("../../db");

class Product {
  static async getAll() {
    const [rows] = await db.query(`
      SELECT 
        id, 
        title, 
        slug, 
        price, 
        old_price, 
        image, 
        rating, 
        reviews, 
        is_sale
      FROM products
      ORDER BY created_at DESC
    `);

    return rows;
  }
}

module.exports = Product;
