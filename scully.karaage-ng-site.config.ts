import { ScullyConfig } from '@scullyio/scully';
import * as fs from 'fs'
let items:any[] = JSON.parse(fs.readFileSync("src/assets/data/all.json",'utf8'));

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "karaage-ng-site",
  outDir: './docs/static',
  routes: {},
  extraRoutes: items.map((v)=> "/article/" + v.path)
};
