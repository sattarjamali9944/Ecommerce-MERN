const db = require("../../db");

const query = (sql) => {
	return new Promise((resolve, reject) => {
		db.query(sql, (err, result) => {
			if (err) reject(err);
			else resolve(result);
		});
	});
};

exports.getCurrencies = () => {
	return query("SELECT * FROM currency");
};

exports.getLanguages = () => {
	return query("SELECT * FROM languages");
};

exports.getCategories = () => {
	return query("SELECT * FROM categories ORDER BY parent_id, id");
};
exports.getAllProducts = async () => {
	return await query(`
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
      
      ORDER BY created_at ASC limit 0,5
    `);
};
exports.getAllProductsElectronic = async () => {
	return await query(`SELECT id, title, 
    slug, price, old_price, image, rating, reviews, is_sale FROM
     products where category_id=6 ORDER BY created_at DESC;`);
};
exports.getAllProductsKids = async () => {
	return await query(`SELECT id, title, 
    slug, price, old_price, image, rating, reviews, is_sale FROM
     products where category_id=5 ORDER BY created_at DESC;`);
};
exports.getBestSeller = async () =>{
  return await query(`SELECT * FROM products order by reviews DESC limit 0,5;`)
}
