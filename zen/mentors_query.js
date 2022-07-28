db.mentors.find({"menteeCount":{$gte:15})
   .projection({_id:0,mentor:1})
   .sort({_id:-1})
   .limit(100)