const schema = {
  Product: {
    _id: "ObjectId",
    name: "string",
    category_id: "ObjectId",
    sku: "string",
    description: "string",
    price: "decimal",
    inventory_id: "ObjectId",
    discount_id: "ObjectId",
  },
  Product_Category: {
    _id: "ObjectId",
    name: "string",
    description: "string",
  },
  Product_Inventory: {
    _id: "ObjectId",
    quantity: "integer",
  },
  Discount: {
    _id: "ObjectId",
    name: "string",
    description: "string",
    discount_percent: "decimal",
    active: "boolean",
  },
};

module.exports = schema;
