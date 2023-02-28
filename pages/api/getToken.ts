import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { ironOptions } from "../../lib/iron-config";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(
    req: NextApiRequest,
    res: NextApiResponse) {
        
    res.send({token: req.session.token});
}