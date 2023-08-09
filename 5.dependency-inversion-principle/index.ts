// Bad example
class UserService {
    private database: Database;
    
    constructor() {
      this.database = new Database();
    }
    
    getUsers() {
      return this.database.query('SELECT * FROM users');
    }
  }
  
  class Database {
    query(sql: string) {
      // Code for executing a database query
    }
  }
  
  // Good example
  interface Database {
    query(sql: string);
  }
  
  class UserService1 {
    private database: Database;
    
    constructor(database: Database) {
      this.database = database;
    }
    
    getUsers() {
      return this.database.query('SELECT * FROM users');
    }
  }
  
  class MySQLDatabase implements Database {
    query(sql: string) {
      // Code for executing a MySQL query
    }
  }
  
  class PostgreSQLDatabase implements Database {
    query(sql: string) {
      // Code for executing a PostgreSQL query
    }
  }