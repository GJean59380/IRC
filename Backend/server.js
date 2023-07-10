const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./Config/db.js");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

dotenv.config();
connectDB();
const  app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is Running successfuly")
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req,res) => {
    console.log(req.params.id);
    const singleChat = chats.find(c=>c._id === req.params.id);
    res.send(singleChat);
});

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.port || 5000

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));

