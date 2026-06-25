# 彡禾悅包棟民宿網站整理紀錄

這份文件整理目前 `preview.html` 的網站方向、文案與素材安排，方便上傳到 GitHub 保存，也方便之後同步回正式 Next.js 專案。

## 網站定位

彡禾悅是小琉球三合院包棟民宿，網站風格以溫暖米色、深棕文字、橄欖綠點綴為主，方向偏向 boutique hotel / 老宅民宿 / 安靜有質感的品牌網站。

## Hero 首屏

- 版型：左右分欄
- 左側：品牌文字與 CTA
- 右側：庭院正面照片
- 主文字：
  - 彡禾悅
  - 小琉球三合院包棟民宿
  - 12 人舒適入住，最多可住 16 人
- 按鈕：
  - 查看房型
  - 立即預約

## 品牌故事

主標語：

> 回家的感覺，不一定是在家。

補充文字：

> 在小琉球的三合院老宅裡，  
> 和家人朋友一起慢慢生活幾天。

老宅故事：

> 這裡曾是三代同堂生活的家。  
> 經過整理與翻修後，  
> 我們保留老屋的人情味與記憶，  
> 加入現代舒適的住宿空間。  
> 讓來到小琉球的家人與朋友，  
> 能在同一個屋簷下自在相聚。

## Google 評論

目前 about 區塊使用三則 Google 評論：

- ★★★★★ Benson Liu・Google 評論
- ★★★★★ Remy HOU・Google 評論
- ★★★★★ 許淑君・Google 評論

## 空間與設備

三個項目：

1. 娛樂相聚
2. 海島起居
3. 毛孩友善

目前圖片放在：

- `public/images/amenities/entertainment.jpg`
- `public/images/amenities/island-living.jpg`
- `public/images/amenities/cola.jpg`

## 客房資訊

四間房型：

- 聽風四人房
- 晨曦四人房
- 望玥雙人房
- 聆雨雙人房

房型照片放在：

- `public/images/rooms/tingfeng.jpg`
- `public/images/rooms/chenxi.jpg`
- `public/images/rooms/wangyue.jpg`
- `public/images/rooms/lingyu.jpg`

## 加購體驗

區塊標題：

> 旅程中的加購體驗

副標：

> 從船票、機車到小琉球在地體驗，  
> 我們可以協助您事先安排，讓旅程更輕鬆。

項目包含：

- 船票來回
- 機車租賃
- 潮間帶導覽
- 夜遊導覽
- 浮潛體驗
- 烤肉吃到飽
- 獨木舟
- 立槳 SUP
- 玻璃船
- 深潛體驗
- 卡丁車

## 預約與聯絡

LINE 連結：

`https://line.me/R/ti/p/@477rnchd`

Footer 聯絡資訊：

- 電話：0919-172-702
- 地址：屏東縣琉球鄉（小琉球）
- 預約方式：LINE 預約為主

Footer 地圖文字：

> 彡禾悅位於小琉球杉福村，  
> 鄰近島上主要道路，前往各景點都方便。  
>  
> 抵達小琉球後，  
> 可依照 Google Maps 導航前往民宿。

## 目前主要檔案

- `preview.html`：目前所有設計修改都集中在這份預覽檔。
- `public/images/`：網站使用的照片素材。
- `PROJECT_NOTES.md`：本整理文件。

## 後續提醒

目前最新設計主要在 `preview.html`。若要正式部署到 Vercel，需要將 `preview.html` 的內容同步回 Next.js 的 `app` 與 `components`。
