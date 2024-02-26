const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    authorName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Book;
