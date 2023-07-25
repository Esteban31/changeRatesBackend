import jsonwebtoken from "jsonwebtoken";

import { users } from "../bd/users.js";


function generateToken(email, password) {
      const jwtToken = process.env.JWT_TOKEN;

      const token = jsonwebtoken.sign(
            {
                  email,
                  password
            },
            jwtToken
      );

      return token;
}

export async function sayHi(req, res) {

      const token = generateToken();

      res.status(200).send({ message: "Hola" +token });
}


export async function login(req, res) {

      const jwtToken = process.env.JWT_TOKEN;

      const { email, password } = req.body;

      // We check the user is valid
      const result = users.filter((user) => user.email === email && user.password === password);

      if (result.length > 0) {

            const generatedToken = generateToken(email, password);

            res.status(200).send({ process: true, token: generatedToken });  
      } else {
            res.status(200).send({ process: false });  
      }


      // try {
      //       const requestToken = req.headers.authorization.split(" ")[1]
      //       const check = jsonwebtoken.verify(requestToken, jwtToken)

      //       console.log(check)
      // } catch (error) {
      //       console.log(error)
      //       res.status(200).send({ message: error.message });  
      // }
}
