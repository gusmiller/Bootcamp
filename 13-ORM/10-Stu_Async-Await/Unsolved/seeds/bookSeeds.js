const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => {
    try {

        await sequelize.sync({ force: true });
        await Book.bulkCreate(bookSeedData);
        await Library.bulkCreate(librarySeedData);
        process.exit(0);

    } catch {
        console.log(err);
    }
};

seedDatabase();
