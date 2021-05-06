# このサイトについて

[こいつ](https://twitter.com/sushi_karaage) が作ってるブログサービス。  

## 技術的な話

Angularで作ってます。以下がリポジトリです。  
[eeenbnb/karaage-ng-site](https://github.com/eeenbnb/karaage-ng-site)

### ng --version

```bash
> npx ng --version

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/


Angular CLI: 11.2.8
Node: 10.16.0
OS: darwin x64

Angular: 11.2.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.8
@angular-devkit/build-angular   0.1102.8
@angular-devkit/core            11.2.8
@angular-devkit/schematics      11.2.8
@angular/cli                    11.2.8
@schematics/angular             11.2.8
@schematics/update              0.1102.8
rxjs                            6.6.7
typescript                      4.1.5
```

### ディレクトリ構成

```bash
src
├── @types         // custom @types
├── app
│   ├── const-data // 定数
│   ├── pages      // ページ
│   ├── router     // ルーティング設定
│   ├── service    // サービス
│   ├── styles     // sass
│   └── ui         // コンポーネント
├── assets
├── build          // スクリプト等
└── environments
```
