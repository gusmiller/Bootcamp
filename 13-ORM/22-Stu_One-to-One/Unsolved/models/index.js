const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

// The Reader hasOne Library Card: One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).
Reader.hasOne(LibraryCard, {
	foreignKey: 'reader_id',
	onDelete: 'CASCADE', // Delete all records related
});

// The LibraryCard belongsTo Reader: One-To-One relationship exists between LibraryCard and Reader, with the foreign key being defined in the source model (A).
LibraryCard.belongsTo(Reader, {
	foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
module.exports = { Reader, LibraryCard };
