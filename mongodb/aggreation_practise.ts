// 1___Retrieve the count of individuals who are active (isActive: true) for each gender.

db.getCollection("massive-data").aggregate([
    { $match: { isActive: true } },
    { $group: { _id: "$gender", count: { $sum: 1 } } }
])

// end 1 


// 2___Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana."

db.getCollection("massive-data").aggregate([
    { $match: { isActive: true, favoriteFruit: "banana" } },
    {$project: {name: 1, email: 1, isActive: 1, favoriteFruit: 1}}
])

// end 2 


// 3___Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age

db.getCollection("massive-data").aggregate([
    { $group: { _id: "$favoriteFruit", averageAge: { $avg: "$age" } } },
    { $sort: { averageAge: -1 } }
])