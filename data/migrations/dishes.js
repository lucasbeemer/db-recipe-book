exports.up = function(knex, Promise) {
    return knex.schema.createTable("dishes", table => {
      table.increments().primary();
      table.string("name").notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dishes");
  };