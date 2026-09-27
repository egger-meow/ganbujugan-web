# 敢不敢揪 (Dare2Jo) 官方網站

> **找到現在也想一起的人。**
> 讓原本可能不會發生的那場球、讀書、吃飯，真的發生。

本專案為「**敢不敢揪**」專屬獨立官方網站與法定條款服務平台，採用 **Astro + TypeScript + Cloudflare Workers Static Assets + Wrangler** 建置，以極簡用戶端 JavaScript 與極致行動效能為核心，全站預先渲染 (SSG)，並透過 Cloudflare 邊緣網路高速分發。

- **正式營運網域**：`https://dare2jo.jjmowlab.com`
- **服務學校範圍**：國立陽明交通大學 (NYCU) & 國立清華大學 (NTHU)
- **行動應用程式端**：Flutter App (`find-people-now`)

---

## 1. 頁面架構 (Site Architecture)

| 路徑 (Route) | 頁面名稱 | 說明與對應功能 |
|---|---|---|
| `/` | **首頁 (Homepage)** | 品牌敘事、三大社交模式對比、Want&rarr;Match&rarr;Happen、怎麼玩 (6 步真實教學)、活動資料庫、不是交友軟體哲學、真實信任體系、Mascot Board、FAQ、下載卡片 |
| `/download` | **通用下載專頁** | 實體海報/校園文宣 QR Code 的永久跳轉目標；桌機突顯大 QR 碼，手機突顯商店下載按鈕；iOS/Android 審核中時呈現精緻「即將推出」狀態 |
| `/support` | **支援中心 (Support)** | 符合 App Store Support URL 規範；涵蓋帳號登入、配對成局、出席回報、安全檢舉、常見問題與開源回報管道 |
| `/privacy` | **隱私權政策 (Privacy)** | 對照實際資料庫模型（SPEC.md / ERD.md）撰寫；標注草稿審閱進度，無第三方廣告追蹤，透明揭示資料保留週期 |
| `/terms` | **服務條款 (Terms)** | 對照實際資料庫模型撰寫；明確禁止騷擾與違規行為，規範 UGC（活動類型/地點/集合提示）與免責聲明 |
| `/account-deletion` | **帳號刪除流程** | 嚴格依據 Apple/Google 規範與後端 `delete_account()` RPC + Edge Function 實際實作撰寫；詳列立即去識別化、物理清除與共用非識別紀錄保留規則，並備妥外部申請管道 |
| `/404` | **找不到頁面** | 結合迷路貓咪吉祥物（`lostMap` 貼圖）之溫暖友善 404 引導頁 |

---

## 2. 視覺系統與吉祥物資產 (Design System & Assets)

- **設計代碼源頭**：忠實派生自 `find-people-now/app/lib/theme/app_theme.dart`。
  - **主色 (Primary)**：森林翡翠綠 `#059669` / 活力綠 `#10B981`
  - **點綴色 (Secondary & Tertiary)**：天空藍 `#38BDF8`、暖陽黃 `#FBBF24`
  - **底色 (Surfaces)**：溫暖米白 `#FAF9F6`、卡片底 `#F3F0EA`、暗色 `#131614`
  - **幾何與動態**：圓角幾何 (12px / 16px / 24px / 9999px)、支援 `prefers-reduced-motion` 無障礙減動設定。
- **真實資產規範**：
  - 本專案所有吉祥物插畫、狀態圖與 18 款貼圖均為第一方正式品牌資產。
  - 統一於 `src/config/assets.ts` 集中管理。
  - 詳盡的尺寸、透明度、安全裁切規範請參閱 [`docs/ASSETS.md`](docs/ASSETS.md)。

---

## 3. 集中式設定與上架就緒清單 (Config & Store Readiness)

所有會隨發行進度變動的設定（商店網址、客服信箱、發布狀態）均收斂於 **`src/config/site.ts`**，無需在元件內搜尋 TODO：

```ts
export const siteConfig = {
  downloads: {
    iosAppStoreUrl: null, // 上架通過後直接貼上，按鈕即自動啟用
    googlePlayUrl: null,  // 上架通過後直接貼上，按鈕即自動啟用
  },
  contact: {
    supportEmail: null,   // 正式客服信箱完成後填入
  }
}
```

### 上架就緒狀態追蹤 (Store Readiness Checklist)
- [ ] 設定正式客服/支援信箱 (Support Email)
- [ ] 隱私權政策專業法律審閱 (Privacy Policy Legal Review)
- [ ] 服務條款專業法律審閱 (Terms of Service Legal Review)
- [x] App 內建帳號刪除流程 (`delete_account()` RPC + Edge Function)
- [x] 網頁外部帳號刪除流程說明與擴充架構
- [ ] Apple App Store 上架連結啟用
- [ ] Google Play 上架連結啟用
- [x] 正式高解析度 App Icon (1254x1254)
- [x] 正式吉祥物 6 步教學插畫與 6 大 UX 狀態圖
- [ ] App Store 隱私權資料標籤對齊 (Privacy Nutrition Labels)
- [ ] Google Play 資料安全性表單對齊 (Data Safety Form)

---

## 4. Flutter App 整合設定 (Flutter App Handoff)

Flutter App (`find-people-now`) 支援透過編譯期環境變數 `LEGAL_BASE_URL` 注入法定網址：

```bash
flutter run --dart-define=LEGAL_BASE_URL=https://dare2jo.jjmowlab.com
```

注入後，App 內部的條款點擊將自動解析為：
- `https://dare2jo.jjmowlab.com/terms`
- `https://dare2jo.jjmowlab.com/privacy`
- `https://dare2jo.jjmowlab.com/account-deletion`

---

## 5. 本地開發與測試 (Local Development & Testing)

```bash
# 安裝相依套件
npm install

# 啟動本地開發伺服器
npm run dev

# 執行 TypeScript 與 Astro 型別檢查
npm run check

# 執行靜態頁面完整性自動化測試
npm test

# 建置正式靜態檔案至 ./dist
npm run build
```

---

## 6. Cloudflare Workers 部署指引 (Deployment)

本站使用現代 **Cloudflare Workers with Static Assets** 架構部署，設定檔為 [`wrangler.jsonc`](wrangler.jsonc)。

### 本地直接部署
```bash
# 1. 建置靜態網站
npm run build

# 2. 測試部署模擬 (Dry Run)
npx wrangler deploy --dry-run

# 3. 正式發布至 Cloudflare Workers
npm run deploy
```

### 自訂網域設定 (Custom Domain Setup)
1. 確保 Cloudflare 帳號內已託管 `jjmowlab.com` 區域 (Zone)。
2. 在 Cloudflare Dashboard 進入 Worker `dare2jo-web` &rarr; **Settings** &rarr; **Domains & Routes** &rarr; **Add Custom Domain**。
3. 綁定 `dare2jo.jjmowlab.com`（Cloudflare 將自動佈署 SSL 憑證並更新 DNS 路由，不會覆蓋現有其他衝突紀錄）。

### GitHub Actions 自動部署
本專案已備妥 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)。在 GitHub Repo 的 **Settings &rarr; Secrets and variables &rarr; Actions** 中新增：
- `CLOUDFLARE_API_TOKEN`：具備 Worker 編輯權限之 API Token
- `CLOUDFLARE_ACCOUNT_ID`：Cloudflare 帳號識別碼
即可透過 GitHub Actions 介面手動或自動觸發部署。
