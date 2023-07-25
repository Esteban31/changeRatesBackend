import axios from "axios";
import jsonwebtoken from "jsonwebtoken";


export async function getAllCountries(req, res) {

      const jwtToken = process.env.JWT_TOKEN;

      let countries = [];

      try {
            const requestToken = req.headers.authorization.split(" ")[1]
            const check = jsonwebtoken.verify(requestToken, jwtToken)

            if (check) {
                  

                  const request = await axios.get("https://restcountries.com/v3.1/all");

                  request.data.forEach((element) => {

                        let key;
                        let currencyName;
                        for (let kleyName in element["currencies"]) {
                              key = kleyName;
                              currencyName = element["currencies"][kleyName].name
                              break; 
                        }


                        countries.push({
                              flag: element.flags.png,
                              name: element.name.common,
                              currencyName: currencyName,
                              currency: key,
                        });
                  });

                  return res.status(200).send({countries: countries});

            }

      } catch (error) {
            console.log(error)
            res.status(401).send({ message: error.message  });  
      }

      
}


export async function convert(req, res) {


      const { from, to, amount } = req.body


      const jwtToken = process.env.JWT_TOKEN;


      try {
            const requestToken = req.headers.authorization.split(" ")[1]
            const check = jsonwebtoken.verify(requestToken, jwtToken)

            if (check) {
                  

                  const request = await axios.get(`https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${process.env.FOREX_API_KEY}`);

                  let result = 0
                  for (let item in request.data["result"]) {
                        result = request.data["result"][item]
                        break; 
                  }


                  return res.status(200).send({result: result});

            }

      } catch (error) {
            console.log(error)
            res.status(401).send({ message: error.message  });  
      }

}
