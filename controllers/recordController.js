const db = require("../config/db");

exports.createRecord = (req, res) => {
  const { amount, type, category, date, note } = req.body;

  if (amount <= 0) return res.status(400).json({ message: "Invalid amount" });

  db.query(
    "INSERT INTO records (user_id,amount,type,category,date,note) VALUES (?,?,?,?,?,?)",
    [req.user.id, amount, type, category, date, note],
    () => res.json({ message: "Record added" })
  );
};

exports.getRecords = (req, res) => {
  let query = "SELECT * FROM records WHERE 1=1";
  let params = [];

  if (req.query.type) {
    query += " AND type=?";
    params.push(req.query.type);
  }

  db.query(query, params, (err, results) => {
    res.json(results);
  });
};

exports.updateRecord = (req, res) => {
  const { amount, type, category, date, note } = req.body;

  db.query(
    "UPDATE records SET amount=?, type=?, category=?, date=?, note=? WHERE id=?",
    [amount, type, category, date, note, req.params.id],
    () => res.json({ message: "Updated" })
  );
};

exports.deleteRecord = (req, res) => {
  db.query("DELETE FROM records WHERE id=?", [req.params.id], () => {
    res.json({ message: "Deleted" });
  });
};