db = db.getSiblingDB('library');
db.authors.drop();

db.authors.save({
  name: 'test author',
});

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
