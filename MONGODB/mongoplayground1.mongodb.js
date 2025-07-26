use("sigmadevDatabase");

// inserting some data of courses in sigmadec database
db.getCollection('course').insertMany(
    [
        {
            "_id": ObjectId("6877d1332b52610ec85df761"),
            "name": "Java",
            "price": 2000,
            "instructor": "Yogesh"
          },
          {
            "_id": ObjectId("6877d1442b52610ec85df762"),
            "name": "Python",
            "price": 1800,
            "instructor": "Neha"
          },
          {
           " _id": ObjectId("6877d1592b52610ec85df763"),
           " name": "JavaScript",
           " price": 1500,
           " instructor": "Amit"
          },
          {
           " _id": ObjectId("6877d1662b52610ec85df764"),
            "name": "C++",
            "price": 1600,
            "instructor": "Ravi"
          }
         
      ]);

      console.log('DONE INSERTING DATA');