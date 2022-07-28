use zen
db.createCollection("topics")
db.topics.insertMany([
    {
     "topicName": "HTML",
     "date": "November",
     "mentor": "Jordyn",
     
    },
    {
     "topicName": "CSS",
     "date": "August",
     "mentor": "Jordyn",
    
    },
    {
     "topicName": "JAVASCRIPT",
     "date": "September",
     "mentor": "Andrew",
     
    },
    {
     "topicName": "REACT",
     "date": "January",
     "mentor": "Andrew",
    },
    {
     "topicName": "MYSQL",
     "date": "February",
     "mentor": "Andrew",
    },
    {
     "topicName": "MONGODB",
     "date": "October",
     "mentor": "Earnest",
    },
    {
     "topicName": "AWS",
     "date": "October",
     "mentor": "Earnest",
    },
    {
     "topicName": "DSA",
     "date": "March",
     "mentor": "Martine",
    },
    {
     "topicName": "NODEJS",
     "date": "February",
     "mentor": "Martine",
    },
    {
     "topicName": "AWT",
     "date": "August",
     "mentor": "Martine",
    }
   ])