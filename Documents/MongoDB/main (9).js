db.students.insertMany([
  {
        Name: "Tanay",
        Age: 23,
        Country_Of_Origin: "India",
        Gender: "Male",
        Graduated: true,
        Postal_Address: 
    {
        
      Street: "Andheri",
      City: "Mumbai"

    },
        Achievements: [
          { 
              Award: "React Project Winner", Year: 2024 
          },
          {
              Award: "Best Preseter", Year: 2024
          }
        ]
      }
    ]);
// _id:ObjectId('6735995ea6cddcbab042f807')
_id:('10')