db = db.getSiblingDB('library');
db.authors.drop();
db.books.drop();

db.authors.save({
  id: 'test-author',
  name: 'test author',
});
db.books.save([
  {
    id: 'book-1',
    authorId: 'test-author',
    name: 'book-1',
  },
  {
    id: 'book-2',
    authorId: 'test-author',
    name: 'book-2',
  },
]);

db.createUser({
  user: 'node',
  pwd: 'nodepassword',
  roles: [
    {
      role: 'readWrite',
      db: 'library',
    },
  ],
});
