use("CrudDb")
// ***   CREATE
db.createCollection("courses")

// db.courses.insertOne({
//     "name":"Yogesh ",
//     "role":"Software Developer",
//     Salary:30
// })
// db.courses.insertMany([
//     {
//         "name":"Khushagra",
//         "role":"Software Developer",
//         Salary:15
//     },
//     {
//         "name":"pratyaksh",
//         "role":"Software Developer and Big D",
//         Salary:20
//     },
//     {
//         "name":"Vibhor",
//         "role":"Ai and ML Engineer",
//         Salary:25 
//     }
// ])
/**          READ */
// *** find 
// let a=db.courses.find({
//     Salary:30 
// })
// console.log(a.toArray());
// **** find one

// let b=db.courses.findOne({
//     Salary:30
// })
// console.log(b);

/****** FIND USING $EQ OPERATOR */
// let a=db.courses.find({
//     Salary:{$eq:30}
// })
// console.log('hello mittr i have salary of 30 lpa',a);
/**        UPDATE  */


// db.courses.updateOne({Salary:30},{$set:{Salary:40}})

// db.courses.updateMany({Salary:30},{$set:{Salary:45}})

/** UPDATE USING NOT OPERATOR */
     db.courses.updateMany({Salary:{$not:{$eq:40}}},{$set:{Salary:50}})

/**         DELETE  */

//db.courses.deleteOne({Salary:40})
            /** USING OR OPERATOR */
// db.courses.deleteMany({$or:[
//     {Salary:15},
//     {Salary:25},
//     {Salary:20}
// ]},
      /** USING IN OPERATOR */
// db.courses.deleteMany({
//   Salary:{$in:[15,20,25]}
// })

// db.courses.deleteMany({
//     $or:[
//    { "Role":"Software Developer"},
//     { "role":"Software Developer and Big D"}
//     ]
// })