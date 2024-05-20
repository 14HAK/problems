import "dotenv/config"
import app from "./app";

app.listen(process.env.PORT, () => console.log(`server running at port: http://localhost:${process.env.PORT}`))