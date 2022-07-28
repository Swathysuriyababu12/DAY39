db.topics.find({"date":"October"})
   .projection({topicName:1,date:1,_id:0})
  