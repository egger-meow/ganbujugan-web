/**
 * Centralized Asset Registry
 * Provides strongly-typed, semantic access to all authentic product images and mascot stickers.
 * Never alter, mock, or substitute these assets.
 */

export interface ImageAssetMeta {
  src: string;
  width: number;
  height: number;
  alt: string;
  isTransparent: boolean;
}

export interface TutorialStep {
  step: number;
  title: string;
  shortTitle: string;
  description: string;
  highlightText: string;
  image: ImageAssetMeta;
}

export const assets = {
  // Brand & Identity
  appIcon: {
    src: '/images/icon.png',
    width: 1254,
    height: 1254,
    alt: '敢不敢揪 官方應用程式圖標 - 活力翡翠綠貓咪吉祥物',
    isTransparent: false,
  } as ImageAssetMeta,

  banner: {
    src: '/images/in-app banner.png',
    width: 2172,
    height: 724,
    alt: '敢不敢揪 校園全景圖 - 綠意鐘樓與探索當下活動的夥伴',
    isTransparent: false,
  } as ImageAssetMeta,

  // Mascot Hero Visuals
  mascot: {
    heroPointing: {
      src: '/images/login_screen.png',
      width: 1122,
      height: 1402,
      alt: '敢不敢揪 潮酷貓咪吉祥物 - 穿著連帽衫與球鞋指向你，身旁圍繞著籃球、咖啡、書本與夥伴',
      isTransparent: true,
    } as ImageAssetMeta,

    giantThumbsUp: {
      src: '/images/stickers/01_giant_thumbs_up.png',
      width: 620,
      height: 973,
      alt: '敢不敢揪 貓咪吉祥物豎起大拇指比讚',
      isTransparent: true,
    } as ImageAssetMeta,
  },

  // Tutorial Flow (「怎麼玩」6 步驟)
  tutorial: [
    {
      step: 1,
      title: '想做什麼，直接發起',
      shortTitle: '發起動機',
      highlightText: '不需當主揪寫長文，選類型與時間即刻出發',
      description:
        '打球、讀書、吃宵夜、探新店，甚至是想在草皮散步。選擇你的校區、時間範圍與人數預期，30 秒送出你想做的事。',
      image: {
        src: '/images/tutorial_steps/1.png',
        width: 564,
        height: 510,
        alt: '步驟 1：選擇活動類型、時間範圍與人數',
        isTransparent: true,
      },
    },
    {
      step: 2,
      title: '動機對齊，智慧盲配',
      shortTitle: '智慧盲配',
      highlightText: '不看臉、不滑卡片、沒有外貌焦慮',
      description:
        '系統只依據「活動類型、時間重疊度、校區地點、人數限制」撮合彼此。配對前雙方完全匿名，回歸最純粹的共同意願。',
      image: {
        src: '/images/tutorial_steps/2.png',
        width: 480,
        height: 510,
        alt: '步驟 2：系統匿名盲配撮合現在也想做同一件事的人',
        isTransparent: true,
      },
    },
    {
      step: 3,
      title: '雙向確認，安全成局',
      shortTitle: '安全確認',
      highlightText: '小人數活動開啟雙向確認，雙方同意才正式成團',
      description:
        '針對 1~2 人低人數活動，系統提供專屬安全卡（顯示科系、學制與可信度等級），10 分鐘內雙方均按下確認才會成局，任一方猶豫則無痛解散。',
      image: {
        src: '/images/tutorial_steps/3.png',
        width: 492,
        height: 510,
        alt: '步驟 3：小人數活動的安全雙向確認機制',
        isTransparent: true,
      },
    },
    {
      step: 4,
      title: '地點投票與集合提示',
      shortTitle: '投票與特徵',
      highlightText: '候選地點線上投票，特徵提示讓現場一眼認出',
      description:
        '成局後全員投票決定最適合的活動地點，並能留下「見面提示」（例如：穿綠色外套、坐在靠窗長桌），免去尷尬相認的窘境。',
      image: {
        src: '/images/tutorial_steps/4.png',
        width: 480,
        height: 514,
        alt: '步驟 4：成員投票決定地點與留下見面提示',
        isTransparent: true,
      },
    },
    {
      step: 5,
      title: '活動發生，現場集合',
      shortTitle: '現場碰面',
      highlightText: '讓原本可能不會發生的局，真正發生',
      description:
        '帶著手機前往集合點，點擊「我到了」完成報到。活動期間解鎖外部聯絡方式（LINE / IG / Discord），現場直接開始享受活動！',
      image: {
        src: '/images/tutorial_steps/5.png',
        width: 564,
        height: 514,
        alt: '步驟 5：活動成局，成員到場碰面享受當下',
        isTransparent: true,
      },
    },
    {
      step: 6,
      title: '出席回報與下次再揪',
      shortTitle: '信用累積',
      highlightText: '建立健康校園生活圈，聊得來就互按下次再揪',
      description:
        '活動後回報出席狀況，累積個人信用品質（Trusted / Normal / New 等級）。若彼此投緣，互相按下「下次再揪」，解鎖更持久的校園玩伴。',
      image: {
        src: '/images/tutorial_steps/6.png',
        width: 492,
        height: 514,
        alt: '步驟 6：出席回報、信用品質結算與下次再揪',
        isTransparent: true,
      },
    },
  ] as TutorialStep[],

  // Product UX State Moments
  productStates: {
    emptyState: {
      src: '/images/目前還沒有人在揪，但你可以當第一個.png',
      width: 1254,
      height: 1254,
      alt: '目前還沒有人在揪，但你可以當第一個！貓咪手持放大鏡探索中',
      title: '目前還沒有人在揪，但你可以當第一個',
      caption: '發起只要 30 秒，說不定下個轉角就有人也正想去球場或自習室。',
      isTransparent: true,
    },
    matchingInProgress: {
      src: '/images/系統正在幫你找也想做同一件事的人.png',
      width: 1254,
      height: 1254,
      alt: '系統正在幫你找也想做同一件事的人！',
      title: '系統正在幫你找也想做同一件事的人',
      caption: '背景自動撮合，不用守在手機前刷版，撮合成功推播通知。',
      isTransparent: true,
    },
    matchSuccess: {
      src: '/images/配對成功.png',
      width: 1254,
      height: 1254,
      alt: '配對成功！貓咪被夥伴歡呼舉起',
      title: '配對成功！成局就在一瞬間',
      caption: '動機、時間、校區完全相符，伙伴到齊準備出發。',
      isTransparent: true,
    },
    locationVoting: {
      src: '/images/大家一起投票決定去哪裡.png',
      width: 1254,
      height: 1254,
      alt: '大家一起投票決定去哪裡！在地圖上討論集合點',
      title: '大家一起投票決定去哪裡',
      caption: '校區候選地點全員民主投票，同分依最早提案決定。',
      isTransparent: true,
    },
    arrived: {
      src: '/images/我到了.png',
      width: 1254,
      height: 1254,
      alt: '我到了！貓咪在集合點揮手打卡',
      title: '「我到了」一鍵報到',
      caption: '抵達集合點即時更新狀態，隊友到齊不走散。',
      isTransparent: true,
    },
    rematch: {
      src: '/images/下次再揪.png',
      width: 1254,
      height: 1254,
      alt: '下次再揪！雙方雙向互按打勾好評',
      title: '聊得來？那就「下次再揪」',
      caption: '雙向點擊「再約」，聯絡方式永久保留，好夥伴不失聯。',
      isTransparent: true,
    },
  },

  // 18 Sticker Set
  stickers: {
    giantThumbsUp: {
      src: '/images/stickers/01_giant_thumbs_up.png',
      width: 620,
      height: 973,
      name: '巨型比讚',
      alt: '吉祥物巨型比讚貼圖',
    },
    derpTongue: {
      src: '/images/stickers/02_derp_tongue.png',
      width: 260,
      height: 224,
      name: '俏皮吐舌',
      alt: '吉祥物俏皮吐舌貼圖',
    },
    confusedQuestion: {
      src: '/images/stickers/03_confused_question.png',
      width: 291,
      height: 221,
      name: '滿頭問號',
      alt: '吉祥物問號困惑貼圖',
    },
    happyLaugh: {
      src: '/images/stickers/04_happy_laugh.png',
      width: 245,
      height: 219,
      name: '開心大笑',
      alt: '吉祥物燦笑開懷貼圖',
    },
    gamerController: {
      src: '/images/stickers/05_gamer_controller.png',
      width: 220,
      height: 210,
      name: '手把開打',
      alt: '吉祥物握著遊戲手把貼圖',
    },
    sneakyDrool: {
      src: '/images/stickers/06_sneaky_drool.png',
      width: 235,
      height: 190,
      name: '肚子餓流口水',
      alt: '吉祥物嘴饞流口水貼圖',
    },
    coolSunglasses: {
      src: '/images/stickers/07_cool_sunglasses.png',
      width: 215,
      height: 231,
      name: '帥氣墨鏡',
      alt: '吉祥物戴著帥氣墨鏡貼圖',
    },
    peekingWall: {
      src: '/images/stickers/08_peeking_wall.png',
      width: 185,
      height: 221,
      name: '偷偷探頭',
      alt: '吉祥物暗中觀察探頭貼圖',
    },
    exhaustedLowBattery: {
      src: '/images/stickers/09_exhausted_low_battery.png',
      width: 278,
      height: 178,
      name: '電力耗盡',
      alt: '吉祥物電量不足癱軟貼圖',
    },
    dizzySpiral: {
      src: '/images/stickers/10_dizzy_spiral.png',
      width: 197,
      height: 188,
      name: '頭暈目眩',
      alt: '吉祥物蚊香眼暈眩貼圖',
    },
    basketball: {
      src: '/images/stickers/11_basketball.png',
      width: 255,
      height: 241,
      name: '指尖轉球',
      alt: '吉祥物轉動籃球貼圖',
    },
    studyingLaptop: {
      src: '/images/stickers/12_studying_laptop.png',
      width: 297,
      height: 236,
      name: '筆電苦讀',
      alt: '吉祥物瘋狂敲鍵盤寫作業貼圖',
    },
    eatingRamen: {
      src: '/images/stickers/13_eating_ramen.png',
      width: 236,
      height: 238,
      name: '大口吃麵',
      alt: '吉祥物吃熱騰騰拉麵貼圖',
    },
    runningFast: {
      src: '/images/stickers/14_running_fast.png',
      width: 243,
      height: 231,
      name: '疾速奔跑',
      alt: '吉祥物塵土飛揚狂奔貼圖',
    },
    jumpingExcited: {
      src: '/images/stickers/15_jumping_excited.png',
      width: 264,
      height: 329,
      name: '興奮起跳',
      alt: '吉祥物躍起歡呼貼圖',
    },
    lostMap: {
      src: '/images/stickers/16_lost_map.png',
      width: 227,
      height: 314,
      name: '看地圖迷路',
      alt: '吉祥物拿著校園地圖迷航冒汗貼圖',
    },
    collapsedSpilledCoffee: {
      src: '/images/stickers/17_collapsed_spilled_coffee.png',
      width: 366,
      height: 289,
      name: '咖啡翻倒靈魂出竅',
      alt: '吉祥物打翻咖啡原地倒地靈魂出竅貼圖',
    },
    peaceSignFriends: {
      src: '/images/stickers/18_peace_sign_friends.png',
      width: 322,
      height: 308,
      name: '比YA三人組',
      alt: '吉祥物與兩個小夥伴開心地比YA貼圖',
    },
  },
};
