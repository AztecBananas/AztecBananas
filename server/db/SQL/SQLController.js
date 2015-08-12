var mysql = require('mysql'); 

var connection = mysql.createConnection({ 
  user: 'root', 
  password: '', 
  database: 'PoliticalData'
});

connection.connect();

//initializes the joinedData table with information from all three tables
var init = function(){ 
  var queryString = 'insert into joinedData select candidate.CAND_NAME, candidate.CAND_PTY_AFFILIATION, \
  candidate.CAND_ELECTION_YR, candidate.CAND_OFFICE_ST, candidate.CAND_OFFICE_DISTRICT, committees.CMTE_NM, \
  committees.CMTE_PTY_AFFILIATION, cont_to_cand.TRANSACTION_AMT from candidate inner join cont_to_cand \
  on candidate.CAND_ID = cont_to_cand.CAND_ID inner join committees on cont_to_cand.CMTE_ID = committees.CMTE_ID;'
  
  connection.query(queryString, function(err, results){ 
    if(err) console.log(err)
  });

};






