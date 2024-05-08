import { app } from "./server.js";
import "dotenv/config";
import { connectDB } from "./db/index.js";


const port = process.env.PORT || 4000;

connectDB()
    .then(()=> {
        app.listen(port, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
});

