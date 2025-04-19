db.employees.insertMany([
    {
        Emp_Id: 45,
        First_Name: "John",
        Last_Name: "Doe",
        Hire_Date: new Date("2000-01-01")
    },
    {
        Emp_Id: 46,
        First_Name: "John",
        Last_Name: "Doe",
        Hire_Date: new Date("2000-01-01")
    },
    {
        Emp_Id: 47,
        First_Name: "Adam",
        Last_Name: "Doe",
        Hire_Date: new Date("2000-01-01")
    },
    {
        Emp_Id: 48,
        First_Name: "Jessica",
        Last_Name: "Doe",
        Hire_Date: new Date("2000-01-01")
    },
    {
        Emp_Id: 49,
        First_Name: "Elia",
        Last_Name: "Doe",
        Hire_Date: new Date("2000-01-01")
    }
]);


// db.students.insertMany([
//   { id: 1, name: 'Ryan', gender: 'M' },
//   { id: 2, name: 'Joanna', gender: 'F' }
// ]);
// db.students.find({ gender: 'F' });