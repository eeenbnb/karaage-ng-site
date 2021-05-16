const fs = require('fs');
const glob = require('glob');
const request = require('request');
const path = require('path');
const { JSDOM } = require('jsdom')

const urls = fs.readFileSync(
    path.resolve(__dirname,"url.txt"),'utf8')
    .split('\n')
    .filter(t=>t.length > 0
  );

const get = (url) =>{
  return new Promise((resolve, reject)=>{
    request.get({
      uri: url,
      headers: {'Content-type': 'text/html;'},
    }, function(err, req, data){
      if(req.statusCode == 200){
        resolve(data)
        //fs.writeFileSync(path.resolve(__dirname,`./temp-${Date.now()}.html`), data);
      }
      console.log("complate:",url);
      resolve("");
    });
  })
}

const htmlParse = (htmlText) =>{
  try{
    const dom = new JSDOM(htmlText);
    // get element
    const text = dom.window.document.title;
    console.log(`text:`,text);
  }catch (e){
    console.error(e)
  }
}

Promise.all(urls.map(url=>get(url))).then((htmls)=>{
  htmls.forEach((html) => {
    htmlParse(html)
  });
});

// glob.sync(path.resolve(__dirname,`./temp-*.html`)).forEach((p)=>{
//   fs.unlinkSync(p);
// });
