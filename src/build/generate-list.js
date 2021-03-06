const fs = require('fs');
const glob = require('glob');
const EndDate = ["2021","04","13*.md"];

let item = [];
let sliceItem = [];

newArticleList();
sliceItem = arraySlice(item,10);
sliceItem.forEach((v,i)=>{
  fs.writeFileSync(`./src/assets/data/top-${i + 1}.json`,JSON.stringify(v),(err)=>{
    if(err) console.log(err);
  });
});

fs.writeFileSync(`./src/assets/data/all.json`,JSON.stringify(item),(err)=>{
  if(err) console.log(err);
});

fs.writeFileSync(`./src/assets/data/page.json`,JSON.stringify({
  count: glob.sync("./src/assets/data/top-*.json").length
}),(err)=>{
  if(err) console.log(err);
});



//
function newArticleList(dateFilePath = generateDate(),m = 0){
  if(checkEndDate(dateFilePath)){
    return ;
  }
  const _rootDir = ['src','assets','md-article'];
  const _imgDir = ['src','assets','img'];
  const _dir = _rootDir.concat(dateFilePath);
  const _dirStr = _dir.join("/");
  const files = glob.sync(_dirStr);

  files.forEach(file => {
    let f = fs.readFileSync(file,'utf8');
    let path = file.replace(_rootDir.join("/"),"").replace(/\//g,"-").replace(".md","").slice(1);
    let thumbnailPath = _imgDir.concat(dateFilePath).join("/").replace(/\*/g,"").replace(".md","") + "/thumbnail.png";
    let isThumbnail = fs.existsSync(thumbnailPath);

    item.push({
      path: path,
      title: f.split('\n')[0].replace("#",""),
      thumbnail: isThumbnail ? thumbnailPath.replace("src/","") : "assets/img/no-img.png"
    });

  });

  m ++;
  newArticleList(generateDate(m),m);
}

function generateDate(minusDay = 0){
  let day = new Date();
  day.setDate(day.getDate() - minusDay);
  return [
    String(day.getFullYear()),
    ('0' + (day.getMonth() + 1)).slice(-2),
    ('0' + day.getDate()).slice(-2) + "*.md",
  ]
}

function checkEndDate(date){
  return date.join("/") == EndDate.join("/");
}

function arraySlice(array,number){
  const length = Math.ceil(array.length / number)
 return new Array(length).fill().map((_, i) =>
   array.slice(i * number, (i + 1) * number)
 )
}
