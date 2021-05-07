# manaba Enhanced for MGU
Make your manaba a little bit more comfortable.

## IMPORTANT.

This is a fork of [mkobayashime/manaba-enhanced](https://github.com/mkobayashime/manaba-enhanced/), and is adjusted to be used by students of Meijigakuin University. As of release 2.7.0, there is no new feature on top of original, but with a few features removed that were specific for University of Tsukuba. 

We are not, and do not represent any official of Meijigakuin University. We will not be held responsible for any damages and troubles caused by this software. You will be responsible for any lost or damage caused with the use of this extension. 


![Screenshot](./bin/dist/thumbnail1.png)

## Supported Univ. / 対応大学
- UMeijigakuin University / 明治学院大学

## Features

1. Assignments will be colored according to the time to the deadline.

    Red: 1 day remaining  
    Yellow: 3 days remaining  
    Green: 7 days remaining

1. The report entered in the report input screen will be auto-saved, and not disappear even if the page is closed.

1. Highlight the publication deadline of course newses and course contents.

1. Remove the confirmation dialogue when you click links.

## 機能

1. マイページに表示される課題一覧を、締切までの時間によって色分けします

    赤: 期限まであと1日  
    黄: 期限まであと3日  
    緑: 期限まであと7日

1. レポート入力画面で入力しているレポートを自動保存し、ページを閉じても消えないようにします

1. コースニュースやコンテンツの公開期限を強調表示します

1. 外部リンクをクリックした際の確認ダイアログを取り除きます

## Disclaimer / 免責事項

This is an unofficial software and has nothing to do with the administration of the Meijigakuin University.

We will not be held responsible for any damages and troubles caused by this software.

これは大学非公式のソフトウェアであり、筑波大学とは無関係です

私達はこのソフトウェアを利用したことによるいかなる損害、トラブルに対する責任を負いません

## Development

```
make // Install dependencies

make watch // Run in dev mode

make build // When the app is ready to publish in store

make format // Run Prettier

make lint // Run ESLint

make typecheck // Run typecheck
```
## Contribution

Suggestions and pull requests are welcomed!

## License

[MIT License](./LICENSE)