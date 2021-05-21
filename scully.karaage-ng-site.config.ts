import { ScullyConfig } from '@scullyio/scully';
import * as fs from 'fs'

const items:any[] = JSON.parse(fs.readFileSync("src/assets/data/all.json",'utf8'));
const topPageCount:any = JSON.parse(fs.readFileSync("src/assets/data/page.json",'utf8'));

const articles:string[] = items.map((v)=> "/article/" + v.path);
const features:string[] = ["/feature/feature","/feature/profile","/feature/site"];
const tops:string[] = [...Array(topPageCount.count)].map((_,i)=>"/?page=" + (i + 1));

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "karaage-ng-site",
  outDir: './docs-static',
  routes: {},
  extraRoutes: articles.concat(features,tops)
};
