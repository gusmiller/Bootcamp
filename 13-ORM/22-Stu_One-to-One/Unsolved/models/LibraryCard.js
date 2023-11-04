const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LibraryCard extends Model { }

LibraryCard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Use Sequelize's UUID functionality to generate a unique number for the library card instead of making us do it ourselves
        card_number: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
        },
        // Foreign Key
        reader_id: {
            type: DataTypes.INTEGER,
            references: {
                // from the model 
                model: 'reader',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'library_card',
    }
);

module.exports = LibraryCard;
