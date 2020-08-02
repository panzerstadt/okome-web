import { Client } from "../../components/Square/SquareAPI";

const ACCESS_TOKEN =
  "EAAAEKWMsagfxuR6l6ImNcBq0e0xtaGOTOcbrmYvY0520DvzEk3YuJ2js0Zov7a4";

const client = new Client({ access_token: ACCESS_TOKEN });

export default (req, res) => {
  return client.createCheckoutURL().catch((err) => {
    console.log(err);
    res.json({ message: "", data: err.toJSON() });
    return res;
  });
};
