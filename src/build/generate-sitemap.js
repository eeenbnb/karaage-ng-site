const xml2js = require('xml2js');
const fs = require('fs');
const glob = require('glob');

const builder = new xml2js.Builder();
const urls = ["https://sushi.karaage.tokyo/"];
const sitemap = {
  urlset:{
    $:{
      "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"
    },
    url:[]
  }
};
const files = glob.sync('./src/assets/data/top-*.json');

files.forEach((file,i) => {
  if(i != 0){
    urls.push(urls[0] + `page/${i + 1}`)
  }
  let json = JSON.parse(fs.readFileSync(file,'utf8'));
  json.forEach(item => {
    urls.push(urls[0] + `article/${item.path}`)
  });
});

urls.forEach(
  (v)=>{
    sitemap.urlset.url.push({
      loc:v,
    })
  }
);
const xml = builder.buildObject(sitemap);

fs.writeFileSync(`./docs/sitemap.xml`,xml,(err)=>{
  if(err) console.log(err);
});
