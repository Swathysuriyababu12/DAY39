use zen
db.createCollection("users")
db.users.insertMany([
{"name":"Dalton","batch":"batch 1","companyDrives":["Corwin - Collins","Farrell Inc,Stokes and Sons"],"gender":"Male","phone":"(522) 755-2813 x64223","_id":"1"},
{"name":"Christelle","batch":"batch 2","companyDrives":["Corwin - Collins","Stokes and Sons","Lindgren, Gerhold and Thompson"],"gender":"Female","phone":"359-941-2264","_id":"2"},
{"name":"Eli","batch":"batch 3","companyDrives":["Farrell Inc","Stokes and Sons"],"gender":"Male","phone":"1-293-298-7448 x3373","_id":"3"},
{"name":"Ava","batch":"batch 4","companyDrives":["Farrell Inc","Stokes and Sons","Lindgren, Gerhold and Thompson"],"gender":"Female","phone":"940-515-3758 x2021","_id":"4"},
{"name":"Stewart","batch":"batch 4","companyDrives":["Corwin - Collins","Lindgren, Gerhold and Thompson"],"gender":"Female","phone":"885.835.6598 x4103","_id":"5"},
{"name":"Manuel","batch":"batch 6","companyDrives":["Farrell Inc"],"gender":"Female","phone":"747.512.7457 x7642","_id":"6"},
{"name":"Mafalda","batch":"batch 7","companyDrives":["Corwin - Collins","Stokes and Sons","Lindgren, Gerhold and Thompson"],"gender":"Male","phone":"(586) 443-7058 x37496","_id":"7"},
{"name":"Victoria","batch":"batch 8","companyDrives":["Farrell Inc","Stokes and Sons"],"gender":"Female","phone":"746-984-7768 x109","_id":"8"}, 
{"name":"Emma","batch":"batch 9","companyDrives":["Corwin - Collins","Stokes and Sons","Lindgren, Gerhold and Thompson"],"gender":"Female","phone":"866-526-2709 x20634","_id":"9"},
{"name":"Garrick","batch":"batch 10","companyDrives":["Corwin - Collins","Stokes and Sons","Lindgren, Gerhold and Thompson"],"gender":"Male","phone":"(240) 234-6654 x4748","_id":"10"}
])
