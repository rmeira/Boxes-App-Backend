const Box = require("../models/Box");

class BoxController {
  async index(req, res) {
    return await res.send("It's work 2");
  }
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });

    return res.json(box);
  }
  async store(req, res) {
    const box = await Box.create(req.body);
    return res.json(box);
  }
}

module.exports = new BoxController();
