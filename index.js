import axios from 'axios';
import * as cheerio from 'cheerio';


const url = "https://www.githubstatus.com"
// const url = "https://willliam.dev"




async function load() {
  const { data } = await axios.get(url).then((response) => {
    return response
  })


  const $ = cheerio.load(data)

  const listItems = $("div.components-container").children("div.component-container").text()

  console.log(listItems)



}

load()