import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Express + TS API</h2>")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Flashcards app is running on port ${port}`);
})
