const db = require("../config/db");

exports.summary = (req, res) => {
  const query = `
    SELECT 
      SUM(CASE WHEN type='income' THEN amount ELSE 0 END) as totalIncome,
      SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) as totalExpense
    FROM records
  `;

  db.query(query, (err, result) => {
    const data = result[0];
    data.netBalance = data.totalIncome - data.totalExpense;
    res.json(data);
  });
};