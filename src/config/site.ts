/**
 * Centralized Site Configuration
 * Single source of truth for site-wide URLs, release states, and campus/activity parameters.
 * Note: Never fabricate store URLs or support emails that do not exist yet.
 */

export interface StoreChecklistItem {
  id: string;
  label: string;
  status: 'pending' | 'in_progress' | 'completed';
  notes: string;
}

export const siteConfig = {
  siteName: '敢不敢揪',
  appNameEn: 'Dare2Jo',
  canonicalUrl: 'https://dare2jo.jjmowlab.com',
  tagline: '找到現在也想一起的人。',
  concept: 'Want → Match → Happen',
  mission: '讓原本可能不會發生的那場球、讀書、吃飯，真的發生。',
  description:
    '「敢不敢揪」是專為大學生設計的即時活動配對 App。以活動與動機為核心，盲配不看臉、不滑卡片、免當主揪，撮合現在也想做同一件事的人。測試階段僅限同校配對，目前率先開放清大與交大。',

  // Store & Release Configuration (Editable as links become available)
  downloads: {
    // When null, UI shows disabled "即將推出" state without broken links
    iosAppStoreUrl: null as string | null,
    googlePlayUrl: null as string | null,
    webAppUrl: null as string | null,
    statusText: '即將推出（清大・交大封測準備中）',
    universalDownloadPath: '/download',
  },

  // Support & Contact (Editable when real support mailbox is configured)
  contact: {
    // Unconfigured support email - DO NOT invent one
    supportEmail: null as string | null,
    githubRepoUrl: 'https://github.com/egger-meow/find-people-now',
  },

  // Verified Campus Scope (from find-people-now SPEC & migrations)
  schools: [
    {
      code: 'NYCU',
      name: '國立陽明交通大學',
      shortName: '陽明交大',
      domains: ['@nycu.edu.tw'],
      campuses: ['光復校區', '博愛校區', '六家校區', '陽明校區', '北門校區', '台南歸仁校區'],
    },
    {
      code: 'NTHU',
      name: '國立清華大學',
      shortName: '清華大學',
      domains: ['@nthu.edu.tw'],
      campuses: ['校本部（光復校區）', '南大校區'],
    },
  ],

  // Real Supported Activity Types (verified directly from DB migrations)
  activities: [
    {
      id: 'basketball',
      name: '籃球',
      category: '運動',
      defaultDuration: 120,
      minParticipants: 6,
      maxParticipants: 12,
      groupStep: 2,
      iconEmoji: '🏀',
      description: '半場 3v3 或全場 5v5，系統依雙數步階配對，湊滿直接開打。',
    },
    {
      id: 'badminton',
      name: '羽球',
      category: '運動',
      defaultDuration: 120,
      minParticipants: 2,
      maxParticipants: 4,
      groupStep: 2,
      iconEmoji: '🏸',
      description: '單打或雙打，支援球技等級分級配對（新手／初階／中階／高階）。',
    },
    {
      id: 'eating_out',
      name: '吃飯/咖啡/探店',
      category: '生活',
      defaultDuration: 60,
      minParticipants: 3,
      maxParticipants: 6,
      groupStep: null,
      iconEmoji: '🍜',
      description: '約校外吃飯、喝咖啡、探新開的店，順便輕鬆聊聊。',
    },
    {
      id: 'study',
      name: '讀書',
      category: '學習',
      defaultDuration: 90,
      minParticipants: 2,
      maxParticipants: 6,
      groupStep: null,
      iconEmoji: '📖',
      description: '期中期末、寫程式、安靜自習或討論課業，支援目標類型對齊。',
    },
    {
      id: 'walking',
      name: '散步',
      category: '休閒',
      defaultDuration: 60,
      minParticipants: 2,
      maxParticipants: 4,
      groupStep: null,
      iconEmoji: '🚶',
      description: '環校步道、夜間吹風、放空轉換心情，輕鬆成行。',
    },
    {
      id: 'running',
      name: '跑步',
      category: '運動',
      defaultDuration: 60,
      minParticipants: 2,
      maxParticipants: 4,
      groupStep: null,
      iconEmoji: '🏃',
      description: '操場慢跑、夜跑，找個節奏相近的配速夥伴。',
    },
    {
      id: 'gym',
      name: '健身',
      category: '運動',
      defaultDuration: 90,
      minParticipants: 2,
      maxParticipants: 4,
      groupStep: null,
      iconEmoji: '💪',
      description: '重訓補位、互相保護、一起練課表。',
    },
    {
      id: 'board_games',
      name: '桌遊',
      category: '娛樂',
      defaultDuration: 150,
      minParticipants: 3,
      maxParticipants: 8,
      groupStep: null,
      iconEmoji: '🎲',
      description: '派對遊戲、陣營對戰或策略燒腦，地點自由投票協調。',
    },
    {
      id: 'mahjong',
      name: '麻將',
      category: '娛樂',
      defaultDuration: 180,
      minParticipants: 4,
      maxParticipants: 4,
      groupStep: null,
      iconEmoji: '🀄',
      description: '三缺一不用在社群求救，固定 4 人快速成局。',
    },
    {
      id: 'tennis',
      name: '網球',
      category: '運動',
      defaultDuration: 120,
      minParticipants: 2,
      maxParticipants: 8,
      groupStep: null,
      iconEmoji: '🎾',
      description: '支援 NTRP 自評分級配對，單雙打拉球練習。',
    },
    {
      id: 'table_tennis',
      name: '桌球',
      category: '運動',
      defaultDuration: 90,
      minParticipants: 2,
      maxParticipants: 8,
      groupStep: null,
      iconEmoji: '🏓',
      description: '對練拉球、休閒切磋，支援實力等級對齊。',
    },
    {
      id: 'karaoke',
      name: '唱K',
      category: '娛樂',
      defaultDuration: 180,
      minParticipants: 2,
      maxParticipants: 30,
      groupStep: null,
      iconEmoji: '🎤',
      description: '揪人歡唱 KTV，包廂歡聚不尷尬。',
    },
    {
      id: 'dance',
      name: '練舞',
      category: '運動',
      defaultDuration: 120,
      minParticipants: 2,
      maxParticipants: 30,
      groupStep: null,
      iconEmoji: '🕺',
      description: '鏡面走廊練舞交流，支援專屬舞風（Hip-Hop/Jazz/Popping/K-Pop 等）。',
    },
    {
      id: 'casual_hangout',
      name: '先聚了再說',
      category: '休閒',
      defaultDuration: 90,
      minParticipants: 5,
      maxParticipants: 20,
      groupStep: null,
      iconEmoji: '✨',
      description: '沒有固定形式，草皮放空、宵夜聊天，大家先聚在一起再決定。',
    },
  ],

  // Store-readiness tracking checklist
  storeReadinessChecklist: [
    {
      id: 'support-email',
      label: '設定正式客服/支援信箱 (Support Email)',
      status: 'pending',
      notes: '目前尚未設定，網站維持留白提示，不造假假信箱。',
    },
    {
      id: 'reviewed-privacy',
      label: '隱私權政策專業法律審閱 (Privacy Policy Review)',
      status: 'pending',
      notes: '目前以 SPEC.md/ERD.md 之資料庫真實運作條款為準，維持草稿 v0.1 標記。',
    },
    {
      id: 'reviewed-terms',
      label: '服務條款專業法律審閱 (Terms of Service Review)',
      status: 'pending',
      notes: '目前維持草稿 v0.1 標記，清楚列出禁止事項與責任歸屬。',
    },
    {
      id: 'external-deletion-flow',
      label: '網頁外部帳號刪除申請管道 (External Deletion Request Flow)',
      status: 'pending',
      notes: 'App 內已具備完整 delete_account() RPC 與 Edge Function，網頁已備妥說明與外部表單擴充架構。',
    },
    {
      id: 'ios-url',
      label: 'Apple App Store 上架連結',
      status: 'pending',
      notes: '等待審查通過後填入 siteConfig.downloads.iosAppStoreUrl。',
    },
    {
      id: 'android-url',
      label: 'Google Play 上架連結',
      status: 'pending',
      notes: '等待審查通過後填入 siteConfig.downloads.googlePlayUrl。',
    },
    {
      id: 'app-icon-assets',
      label: '正式應用程式圖標 (App Icon Assets)',
      status: 'completed',
      notes: '已導入真實高解析度 1254x1254 icon.png。',
    },
    {
      id: 'app-state-illustrations',
      label: '正式吉祥物插畫與狀態圖 (Official Mascot & State Illustrations)',
      status: 'completed',
      notes: '已導入 6 步真實教學圖、6 張完整情境狀態圖、18 款貼圖。',
    },
    {
      id: 'app-store-privacy-nutrition',
      label: 'App Store 隱私權資料標籤核對 (App Privacy Nutrition Label)',
      status: 'pending',
      notes: '需對齊無第三方追蹤、信箱/聯絡資訊/出席紀錄等項目。',
    },
    {
      id: 'google-play-data-safety',
      label: 'Google Play 資料安全性表單核對 (Google Play Data Safety)',
      status: 'pending',
      notes: '需對齊使用者資料刪除政策與非廣告用途聲明。',
    },
  ] as StoreChecklistItem[],
};
