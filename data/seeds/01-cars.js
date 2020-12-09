
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: "124FHKSDHKF12",
          make: "Hyundai",
          model: "Genesis Coupe",
          mileage: "74220"
        },

        { VIN: "254FDZ4DSFGZ",
          make: "Honda",
          model: "Civic",
          mileage: "100400"
        },

        { VIN: "ABCDEF1245H",
          make: "Mercedes Benz",
          model: "S500",
          mileage: "1500"
        },
        
      ]);
    });
};
