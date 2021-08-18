const xml2js = require('xml2js');
const fs = require('fs');
const URL = "https://sushi.karaage.tokyo/";
const builder = new xml2js.Builder();

const rss = {
  rss:{
    $:{
      "version" : "2.0",
      "xmlns:atom": "http://www.w3.org/2005/Atom"
    },
    channel:{
      title: "Sushi karaage",
      link: URL,
      description: "sushi karaageのブログです",
      lastBuildDate: new Date().toUTCString(),
      item: []
    }
  }
};

const json = JSON.parse(fs.readFileSync("./src/assets/data/all.json",'utf8'));
json.forEach(item => {
  const path = item.path.split("-");
  const pathName = "./src/assets/md-article/" + path.join("/") + ".md"
  const file = fs.readFileSync(pathName,'utf8');
  const { birthtime } = fs.statSync(pathName);
  rss.rss.channel.item.push({
    title: file.split('\n')[0].replace("#",""),
    link: URL + "article/" + item.path,
    guid: URL + "article/" + item.path,
    pubDate: new Date(birthtime).toUTCString(),
  })
});


const xml = builder.buildObject(rss);
console.log(xml);
fs.writeFileSync(`./dist/karaage-ng-site/browser/rss.xml`,xml,(err)=>{
  if(err) console.log(err);
});
