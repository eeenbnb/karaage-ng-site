const fs = require('fs');

const items = JSON.parse(fs.readFileSync("src/assets/data/all.json",'utf8'));
const topPageCount = JSON.parse(fs.readFileSync("src/assets/data/page.json",'utf8'));

const articles = items.map((v)=> "/article/" + v.path);
const features = ["/feature/feature","/feature/profile","/feature/site"];
const tops = [...Array(topPageCount.count)].map((_,i)=>"/page/" + (i + 1));

fs.writeFileSync(`./route.txt`,articles.concat(features,tops).join("\n"),(err)=>{
  if(err) console.log(err);
});
