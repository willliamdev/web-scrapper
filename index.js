import axios from 'axios';
import * as cheerio from 'cheerio';


const url = "https://www.githubstatus.com"
// const url = "https://willliam.dev"





async function Fetch() {
  const dataFetched = []
  const { data } = await axios.get(url).then((response) => {
    return response
  })

  const $ = cheerio.load(data)
  $("div.component-container").remove()
  const listItems = $("div.component-container ").find("span.name")
  listItems = listItems.replaceWith()



  listItems.each((i, e) => {
    dataFetched.push($(e).text().replace(/\n/g, '').replace(/\s\s+/g, ' '))
  })
  return dataFetched
}

let statuses = await Fetch()


// statuses = statuses.map((index) => {
//   const regex = /\s*\n*/g

//   if (index.match(regex)) {
//     return index
//   }
//   return ""
// }
// )

console.log("daqui: \n:", statuses)
