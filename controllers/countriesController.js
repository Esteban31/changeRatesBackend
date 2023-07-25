import axios from "axios"

export async function getAllCountries() {
      // https://restcountries.com/v3.1/all

      let countries = []

      const request = await axios.get("https://restcountries.com/v3.1/all")

      console.log(request)


}