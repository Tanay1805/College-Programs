db.employee_process.insertMany([
  { 
    Ename: "Ashwin",
    Ecode: 2210,
    Gender: 'M',
    Desk_Status: true,
    Address: {
      Street: "22nd south street",
      city: "Delhi"
    },
    Programming_Efficiency: "Asp.Net, Linq, Angular"
  },
  { 
    Ename: "Stuart",
    Ecode: 24189,
    Gender: 'M',
    Desk_Status: true,
    Address: {
      Street: "11th Core Premise",
      city: "Noida"
    },
    Programming_Efficiency: "NetCore, C++, Bootstrap"
  },
  { 
    Ename: "Joyce",
    Ecode: 25112,
    Gender: 'F',
    Desk_Status: true,
    Address: {
      Street: "35th matrix Street",
      city: "Mysore"
    },
    Programming_Efficiency: "Javascript, C#, HTML"
  }
]);

// _id: ObjectId('6736e39448e7ff1efd42f807'),
// _id: ObjectId('6736e39448e7ff1efd42f808'),
// _id: ObjectId('6736e39448e7ff1efd42f809')

db.employee_process.find({ "Address.city": "Noida" });
use dbs;
show dbs;
show collections;
db.help;
db.test.help;
db;
db.version;
db.createCollection("Tanay");
db.stats();
db.createCollection("Trax");
