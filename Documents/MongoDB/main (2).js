db.students.insertMany([
  { id: 11, name: 'Prem', gender: 'M', dept:"Sales" },
  { id: 21, name: 'Manmeet', gender: 'M', dept:"Marketing" },
  { id: 31, name: 'Anusri', gender: 'F', dept:"IT" },
  { id: 41, name: 'Prem', gender: 'M', dept:"Development" },
  { id: 51, name: 'Natasha', gender: 'F', dept:"Sales" },
  { id: 61, name: 'Saniya', gender: 'F', dept:"Stats" },
  { id: 01, name: 'Jason', gender: 'M', dept:"DBMS" },




]);
db.students.findOne({ gender: 'M',name : "Manmeet" });
db.students.findOne({_id:10})
})