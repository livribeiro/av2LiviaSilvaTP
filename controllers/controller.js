const my_database = new Map()

const gettAll = (req, res) => {
  var getDados = req.query.customer
  var Dados = [];
  for (let i = 0; i < Dados.length; i++) {
      if (getDados == Dados[i].customer) {
        returnData.push(Dados[i])
      }
      res.status(200).send(Dados[i])  
}
}

  const create = (req, res) => {
    const customers = req.body
    my_database.set(customers.datAd, customers)
    var datAd = {
      'id': Math.random().toString(42).substr(4, 10),
      'amount': body.amount,
      'produtc': body.produtc,
      'paymentMethod': body.paymentMethod,
      'customer': body.customer,
  }
  Dados.push(datAd)
  res.status(201).send(customers)
  }

const remove = (req, res) => {

  var id = `${req.params.id}`;
  let vd = false;
  for (let i = 0; i < Dados.length; i++) {
      console.log(Dados[i].id)
      console.log(id)
      if (id == Dados[i].id) {
        Dados.splice(i, 1);
        vd = true;
        }
      }
  
      if (!vd) res.json({ message: "não encontrado" }, 404)
      else res.json({}, 200)
  }

module.exports = {
  gettAll,
  create,
  remove
};