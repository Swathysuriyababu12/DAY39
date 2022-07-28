 db.users.aggregate([
     {
   $lookup:
     {
       from:"codekata",
       localField:"_id",
       foreignField:"id",
       as:"output"
    } },
     {$unwind:"$output"},
     {$project:{
       name:1,
       output:1,
       _id:0,
     }},
     {
         $group:{
             "_id":"$_id",
             
         }
     }

 ])