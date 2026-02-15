const Common = require("../models/commonModels");

module.exports = async (req, res, next) => {
  try {
    const [currencies, languages, categories] = await Promise.all([
      Common.getCurrencies(),
      Common.getLanguages(),
      Common.getCategories(),
    ]);

    // Make available in ALL EJS views
    res.locals.currencies = currencies;
    res.locals.languages = languages;
    res.locals.categories = categories;

    next();
  } catch (error) {
    console.error("Common data error:", error);
    next(error);
  }
};
