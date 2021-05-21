import { Server } from "socket.io";
import connectDB from "../../middleware/mongo";
import Notas from '../../services/notas';

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");
    const io = new Server(res.socket.server);
    const notas = new Notas();

    io.on("connection", (socket) => {
      socket.on("getNotas", async (args,callback) => {
        const nots = await notas.getNotas(args.id)
        callback({
            data: nots || []
          });
      });

      socket.on("newNotas", async (args, callback) => {
        const {data,id} = args
        const newNot = await notas.newNot(data,id)
        callback({
          data: newNot,
        });
      });

      socket.on("update",async(args,callback)=>{
        const {data,id} = args
        const updateData = await notas.update(id,data);
        callback({
          data: updateData,
        });
      })

      socket.on("delete",async(args,callback)=>{
        const del = await notas.delete(args.id)
        callback({
          data: del,
        });
      })

      socket.on("disconnect", () => console.log("desconectado"));
    });
  } else {
    console.log("socket.io already running");
  }
  res.end();
};
export const config = {
  api: {
    bodyParser: false,
  },
};

export default connectDB(ioHandler);
