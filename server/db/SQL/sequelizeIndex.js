var Sequelize = require('sequelize');
var orm = new Sequelize('PoliticalData', 'root', '');

var Committees = orm.define('committees', { 
  CMTE_ID: Sequelize.STRING,
  CMTE_NM: Sequelize.STRING,
  TRES_NM: Sequelize.STRING,
  CMTE_ST1: Sequelize.STRING, 
  CMTE_ST2: Sequelize.STRING, 
  CMTE_CITY: Sequelize.STRING,
  CMTE_ST: Sequelize.STRING,
  CMTE_DSNG: Sequelize.STRING,
  CMTE_TP: Sequelize.STRING,
  CMTE_PTY_AFFILIATION: Sequelize.STRING,
  CMTE_FILING_FREQ: Sequelize.STRING,
  ORG_TP: Sequelize.STRING,
  CONNECTED_ORG_NM: Sequelize.STRING,
  CAND_ID: Sequelize.STRING
}); 

var Contributions = orm.define('cont_to_cand', { 
  CMTE_ID: Sequelize.STRING,
  AMNDT_IND: Sequelize.STRING,
  RPT_TP: Sequelize.STRING,
  TRANSACTION_PGI: Sequelize.STRING,
  IMAGE_NUM: Sequelize.STRING,
  TRANSACTION_TP: Sequelize.STRING,
  ENTITY_TP: Sequelize.STRING,
  NAME: Sequelize.STRING,
  CITY: Sequelize.STRING,
  STATE: Sequelize.STRING,
  ZIP_CODE: Sequelize.STRING,
  EMPLOYER: Sequelize.STRING,
  OCCUPATION: Sequelize.STRING,
  TRANSACTION_DT: Sequelize.DATE,
  TRANSACTION_AMT: Sequelize.DECIMAL(14,2),
  OTHER_ID: Sequelize.STRING,
  CAND_ID: Sequelize.STRING,
  TRAN_ID: Sequelize.STRING,
  FILE_NUM: Sequelize.INTEGER,
  MEMO_CD: Sequelize.STRING,
  MEMO_TEXT: Sequelize.STRING,
  SUB_ID: Sequelize.INTEGER
});

var Candidate = orm.define('candidate', { 
  `CAND_ID` Sequelize.STRING,
  `CAND_NAME` Sequelize.STRING,
  `CAND_PTY_AFFILIATION` Sequelize.STRING,
  `CAND_ELECTION_YR` Sequelize.INTEGER,
  `CAND_OFFICE_ST` Sequelize.STRING,
  `CAND_OFFICE`  Sequelize.STRING,
  `CAND_OFFICE_DISTRICT` Sequelize.STRING,
  `CAND_ICI` Sequelize.STRING,
  `CAND_STATUS` Sequelize.STRING,
  `CAND_PCC` Sequelize.STRING,
  `CAND_ST1` Sequelize.STRING,
  `CAND_ST2` Sequelize.STRING,
  `CAND_CITY` Sequelize.STRING,
  `CAND_ST` Sequelize.STRING,
  `CAND_ZIP` Sequelize.STRING
}); 

Candidate.sync();
Contributions.sync();
Committees.sync();

module.exports = { 
  get: function(req, res){ 



  }


}

'select CAND_NAME, CAND_PTY_AFFILIATION, CAND_ELECTION_YR,'




