import Notas from "../models/Notas";

class NotasModel {
  async getNotas(user) {
    return await Notas.find({ user: user });
  }

  async getId(id) {
    return await Notas.findById(id);
  }

  async newNot(data,id){
    var create = new Notas(data);
    create.user = id;
    return await create.save();
  }
  async update(id, data) {
    const { nombre, desc } = data;
    return await Notas.findByIdAndUpdate(
      id,
      {
        nombre,
        desc,
      },
      { new: true }
    );
  }

  async delete(id) {
    await Notas.findByIdAndDelete(id);
    return {
      error: false,
      msg: "Nota eliminada",
    };
  }
}

export default NotasModel