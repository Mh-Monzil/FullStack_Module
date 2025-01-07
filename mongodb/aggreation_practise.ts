// 1___Retrieve the count of individuals who are active (isActive: true) for each gender.


db.getCollection("massive-data").aggregate([
    { $match: { isActive: true } },
    { $group: { _id: "$gender", count: { $sum: 1 } } }
])

// end 1 