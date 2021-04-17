const fs = require('fs');
const EndDate = ["2021","04","13.md"];

let item = [];
let sliceItem = [];

newArticleList();
sliceItem = arraySlice(item,10);
sliceItem.forEach((v,i)=>{
  fs.writeFileSync(`./src/assets/data/top-${i + 1}.json`,JSON.stringify(v),(err)=>{
    if(err) console.log(err);
  });
});

function newArticleList(dateFilePath = generateDate(),m = 0){
  if(checkEndDate(dateFilePath)){
    return ;
  }
  let _dir = ['./src','assets','md-article'].concat(dateFilePath);
  let _dirStr = _dir.join("/");
  let f;

  try {
    if(fs.existsSync(_dirStr)){
      f = fs.readFileSync(_dirStr,'utf8');
    }
  }catch (err) {
    console.log(err);
  }

  if(f){
    item.push({
      path: dateFilePath.join("-").replace(".md",""),
      title: f.split('\n')[0]
    });
  }

  m ++;
  newArticleList(generateDate(m),m);
}

function generateDate(minusDay = 0){
  let day = new Date();
  day.setDate(day.getDate() - minusDay);
  return [
    String(day.getFullYear()),
    ('0' + (day.getMonth() + 1)).slice(-2),
    ('0' + day.getDate()).slice(-2) + ".md",
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
