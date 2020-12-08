
exports.up = function(knex) {
  // the change we want to make to our schemas
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.text('VIN', 128).unique().notNullable();
      table.text('make', 128)
      table.text('model', 128)
      table.integer('mileage')
  })
};

exports.down = function(knex) {
  // undoing that change
  return knex.schema.dropTableIfExists('cars')
};
