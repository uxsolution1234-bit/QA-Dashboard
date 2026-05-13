const dashboardData = {
  browserTitle: "GRID R15",
  logoText: "QA_Report",
  sprint: "GME 7.18.0",
  start: "2026-04-20",
  end: "2026-05-11",
  unit: "QA Part",
  views: {
    dashboard: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Dashboard",
      totalIssues: 37,
      resolvedIssues: 37,
      criticalIssues: 6,
      env: [
        { label: "STG", value: 26, color: "#3f8cff" },
        { label: "Livetest", value: 11, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "N/A", value: 25, color: "#30d58f" },
        { label: "STG Done", value: 11, color: "#3f8cff" },
        { label: "Live Done", value: 1, color: "#f7c948" },
      ],
      compareTarget: "GME 7.17.0",
      comparison: [
        { label: "Total Issues", value: 37, diff: "-63 fewer than last sprint", positive: true },
        { label: "Critical (Highest+High)", value: 6, diff: "-6 fewer than last sprint", positive: true },
        { label: "Hard to Detect", value: 2, diff: "+1 more than last sprint", positive: false },
        { label: "Found in Livetest", value: 11, diff: "-9 fewer than last sprint", positive: true },
      ],
      assignees: [
        { name: "Manish Adhikari", issues: 12, color: "#3f8cff", tags: ["High 1"] },
        { name: "JY", issues: 8, color: "#30d58f", tags: ["High 3", "Hard to detect 1"] },
        { name: "SE", issues: 6, color: "#f7c948", tags: ["High 1"] },
        { name: "IU", issues: 5, color: "#f4a259", tags: ["Live found 2"] },
        { name: "DK", issues: 3, color: "#9b8cff", tags: ["Minor 3"] },
      ],
    },
    issueList: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Issue List",
      totalIssues: 44,
      resolvedIssues: 29,
      criticalIssues: 9,
      env: [
        { label: "STG", value: 30, color: "#3f8cff" },
        { label: "Livetest", value: 14, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "Open", value: 15, color: "#ff6b6b" },
        { label: "In Progress", value: 17, color: "#f7c948" },
        { label: "Done", value: 12, color: "#30d58f" },
      ],
      compareTarget: "Backlog Snapshot",
      comparison: [
        { label: "Open", value: 15, diff: "+4 from yesterday", positive: false },
        { label: "Reopened", value: 3, diff: "+1 from yesterday", positive: false },
        { label: "Blocked", value: 4, diff: "-2 from yesterday", positive: true },
        { label: "Need Triage", value: 7, diff: "+2 from yesterday", positive: false },
      ],
      assignees: [
        { name: "Manish Adhikari", issues: 13, color: "#3f8cff", tags: ["Open 4", "High 2"] },
        { name: "JY", issues: 9, color: "#30d58f", tags: ["Open 3"] },
        { name: "SE", issues: 8, color: "#f7c948", tags: ["Need triage 2"] },
        { name: "IU", issues: 7, color: "#f4a259", tags: ["Blocked 1"] },
      ],
      issueRows: [
        {
                "no": 1,
                "date": "2025-08-22",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.0.0.0",
                "modifiedVersion": "v1.0.0.0",
                "title": "Ad-hoc Group Exit or Delete ???대떦 Group????젣?섏? ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 2,
                "date": "2025-08-22",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.0.0.0",
                "modifiedVersion": "v1.0.0.0",
                "title": "View member list > 蹂몄씤 怨꾩젙 Long Press ??Context menu ?몄텧?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 3,
                "date": "2025-08-22",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.0.0.0",
                "modifiedVersion": "v1.0.0.0",
                "title": "洹몃９?댁뿉 Cross fleet ?녿뒗 ?곹깭 硫붿떆吏 ?꾩넚 ?? 諛쒖떊???붾㈃?먯꽌 ?꾩넚? ?섏?留?Toast message濡?Failed ?몄텧?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 4,
                "date": "2025-08-22",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.0.0.0",
                "modifiedVersion": "v1.0.0.0",
                "title": "Ad-hoc 洹몃９ ?앹꽦  ??硫ㅻ쾭 異붽? ?붾㈃??蹂몄씤???몄텧?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 5,
                "date": "2025-08-22",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.0.0.0",
                "modifiedVersion": "v1.0.0.0",
                "title": "Conveersation view  Message Tab ?먯꽌 Opt-in > Opt out 吏꾪뻾 ??Crash 諛쒖깮?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 6,
                "date": "2025-11-25",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3 Contacts ?먯꽌 寃?됱뼱 ?낅젰 ??硫ㅻ쾭 ?몄텧?곹깭?먯꽌 ?꾩껜 泥댄겕 踰꾪듉 ?좏깮 ???숈옉?섏? ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 7,
                "date": "2025-11-24",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "Emergency call??Idle ?곹깭 ?섎뒗 ?꾩긽..",
                "issueUrl": ""
        },
        {
                "no": 8,
                "date": "2025-11-24",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "group?좏깮 ??ptt踰꾪듉 ?좏깮????二쎈뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 9,
                "date": "2025-11-24",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "ANR",
                "issueUrl": ""
        },
        {
                "no": 10,
                "date": "2025-11-25",
                "issueStatus": "Open",
                "impactLevel": "High",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "諛⑹튂 ??媛뺤젣 醫낅즺?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 11,
                "date": "2025-11-25",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "Emergency Call ?쒕룄 ??Hot mic ?곹깭濡?蹂寃쎈릺吏 ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 12,
                "date": "2025-11-25",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "Contacts ?먯꽌 寃?됱뼱 ?낅젰 ??硫ㅻ쾭 ?고겢由???Context Menu 誘몃끂異쒕릺???꾩긽",
                "issueUrl": ""
        },
        {
                "no": 13,
                "date": "2025-11-25",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.2.0",
                "modifiedVersion": "v1.1.2.0",
                "title": "Contacts ?먯꽌 寃?됱뼱 ?낅젰 ??硫ㅻ쾭 ?몄텧?곹깭?먯꽌 ?꾩껜 泥댄겕 踰꾪듉 ?좏깮 ???숈옉?섏? ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 14,
                "date": "2025-12-16",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.0",
                "modifiedVersion": "v1.3.0",
                "title": "Audio gain control 蹂寃? ??湲곌린 蹂寃???湲곗〈媛믪씠 ?좎??섏? ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 15,
                "date": "2025-12-16",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.0",
                "modifiedVersion": "v1.3.0",
                "title": "Assigned private contact ? [OK]  踰꾪듉??寃뱀퀜?몄꽌 ?몄텧",
                "issueUrl": ""
        },
        {
                "no": 16,
                "date": "2025-12-16",
                "issueStatus": "Open",
                "impactLevel": "High",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.1.0",
                "modifiedVersion": "v1.0.1.0",
                "title": "GeonFence Group ??Member媛 留롮쓣 寃쎌슦??Call ?쒕룄?섏? ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 17,
                "date": "2025-12-16",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.0",
                "modifiedVersion": "v1.3.0",
                "title": "Call me ASAP ???섏떊 ?⑤쭚 ?명떚?곸뿭??諛⑺뼢?ㅻ줈 ?ъ빱???섏? ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 18,
                "date": "2025-12-08",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.2.3.0",
                "modifiedVersion": "v1.2.3.0",
                "title": "怨꾩젙 濡쒓렇??> ?ㅻⅨ org id 怨꾩젙?쇰줈 濡쒓렇?????⑤쭚 Home ?붾㈃?쇰줈 ?대룞?섎ŉ ???ъ떎?????깆씠 硫덉땄",
                "issueUrl": ""
        },
        {
                "no": 19,
                "date": "2025-12-08",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.2.3.0",
                "modifiedVersion": "v1.2.3.0",
                "title": "?ㅻ쭏?명룿?먯꽌 Geo-Fencing Group ?앹꽦 ??諛쒖떊 ?쒕룄 ???섏떊??Channel View ?붾㈃?먯꽌 Group Name 誘몃끂異?",
                "issueUrl": ""
        },
        {
                "no": 20,
                "date": "2025-12-10",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3  pre-arranged group?먯꽌 ?고겢由??? ad hoc group ??愿??硫붾돱???몄텧",
                "issueUrl": ""
        },
        {
                "no": 21,
                "date": "2025-12-10",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3  ad-hoc group? set as home group ?ㅼ젙 遺덇?",
                "issueUrl": ""
        },
        {
                "no": 22,
                "date": "2025-12-10",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3  Geo fence Group ?숈씪??Group 紐낆쑝濡??앹꽦 媛??",
                "issueUrl": ""
        },
        {
                "no": 23,
                "date": "2025-12-10",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3  opt-out ??洹몃９??硫붿떆吏 李??댁뼱???곹깭?먯꽌  opt-in ???먮룄 硫붿떆吏 ?낅젰???덈맖",
                "issueUrl": ""
        },
        {
                "no": 24,
                "date": "2025-12-10",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.3",
                "modifiedVersion": "v1.1.3",
                "title": "v1.1.3 Ad-hoc Group ?앹꽦 ???숈씪??Group 紐??앹꽦 媛??",
                "issueUrl": ""
        },
        {
                "no": 25,
                "date": "2025-12-17",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Member 誘몄꽑???곹깭?먯꽌??Ad-hoc Group ?앹꽦 媛??",
                "issueUrl": ""
        },
        {
                "no": 26,
                "date": "2025-12-17",
                "issueStatus": "Open",
                "impactLevel": "High",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.2.0",
                "modifiedVersion": "v1.0.2.0",
                "title": "Logout 踰꾪듉 ?좏깮 ??理쒖큹 濡쒓렇???섏씠吏濡??대룞?섏? ?딄퀬 寃??붾㈃ ?좎???",
                "issueUrl": ""
        },
        {
                "no": 27,
                "date": "2025-12-24",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.2",
                "modifiedVersion": "v1.3.2",
                "title": "Member List??Member媛 蹂댁씠吏 ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 28,
                "date": "2025-12-24",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Dispatcher > Affiliation ?붾㈃ >  Contact 異붽? ?꾨즺?섎뒗 ?앹뾽 ?몄텧 ?곹깭?먯꽌 ?ㅼ뿉 Affiliation ?곸뿭 踰꾪듉?ㅼ씠 ?좏깮 媛?ν븿",
                "issueUrl": ""
        },
        {
                "no": 29,
                "date": "2026-01-06",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.2.0",
                "modifiedVersion": "v1.0.2.0",
                "title": "Answer Call 諛쒖깮 ??Smpartphone ???쒓컙 移댁슫?멸? 誘몃끂異???",
                "issueUrl": ""
        },
        {
                "no": 30,
                "date": "2026-01-06",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.2.0",
                "modifiedVersion": "v1.0.2.0",
                "title": "Call ?곌껐 ?쏶mart Phone ?곸뿭 ?リ린 踰꾪듉??[Leave] 濡??몄텧?섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 31,
                "date": "2026-01-07",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Dispatcher Temporary Group > Affiliation > Opt-in, Opt-out ?ㅼ젙 ???ъ쭊?????곸슜?섏? ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 32,
                "date": "2026-01-08",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.2",
                "modifiedVersion": "v1.3.2",
                "title": "Temporary Group Call ?쒕룄 ??Channel View ??쾶 ?몄텧",
                "issueUrl": ""
        },
        {
                "no": 33,
                "date": "2026-01-12",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Setting > Call Recording Backup ?먯꽌 ?뚯씪 ?앹꽦?섏? ?딄퀬 ?먯깋?붾㈃?먯꽌 [痍⑥냼] 踰꾪듉 ?좏깮 ??理쒖떊?쒓컙?쇰줈 蹂寃???",
                "issueUrl": ""
        },
        {
                "no": 34,
                "date": "2026-01-13",
                "issueStatus": "Open",
                "impactLevel": "High",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Temporary Group > Affiliation ?먯꽌 Dispatcher 怨꾩젙?몄뿉 ?ㅻⅨ 硫ㅻ쾭瑜?Opt-in / Opt-out ???곸슜?섏? ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 35,
                "date": "2026-01-13",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.4",
                "modifiedVersion": "v1.1.4",
                "title": "Opt-in ?곹깭??Group Message ?낅젰 ?곹깭(?꾩넚 踰꾪듉 X) ?먯꽌 ?대떦 洹몃９ Opt-out ??Message ?꾩넚??媛?ν븿",
                "issueUrl": ""
        },
        {
                "no": 36,
                "date": "2026-01-15",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.2.0",
                "modifiedVersion": "v1.0.2.0",
                "title": "Message ?꾩넚 ???몄텧?섏? ?딄퀬 ???щ줈洹몄씤 ?숈옉",
                "issueUrl": ""
        },
        {
                "no": 37,
                "date": "2026-01-27",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.3.0",
                "modifiedVersion": "v1.3.3.0",
                "title": "Ad-hoc Group ??젣 ??NOTIFY???대젮?ㅼ?留??붾㈃??媛깆떊?섏? ?딆븘 ??젣??Group???⑥븘?덉쓬",
                "issueUrl": ""
        },
        {
                "no": 38,
                "date": "2026-01-28",
                "issueStatus": "Open",
                "impactLevel": "Low",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.5",
                "modifiedVersion": "v1.1.5",
                "title": "濡쒓렇????pv?먯꽌 ?몄텧?섎뒗 Appinfo RAM ?몄텧媛믪씠 ?뚯닔?먭퉴吏 ?몄텧?섏? ?딆쓬   pc : 16.0GB (15.7GB ?ъ슜媛?? pv : 15GB_RAM",
                "issueUrl": ""
        },
        {
                "no": 39,
                "date": "2026-01-29",
                "issueStatus": "Closed",
                "impactLevel": "High",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.5",
                "modifiedVersion": "v1.1.5",
                "title": "Add to Existing Adhoc Group ?먯꽌 dispatcher 怨꾩젙 泥댄겕 ??Done ?좏깮 ???붾쾭洹??먮윭 諛쒖깮",
                "issueUrl": ""
        },
        {
                "no": 40,
                "date": "2026-01-28",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.4.0",
                "modifiedVersion": "v1.3.4.0",
                "title": "Temp Group ?먯꽌  濡쒓렇?몃맂 怨꾩젙???ы븿??洹몃９??硫ㅻ쾭 異붽? ??GroupProfile ?먯꽌 fails???몄텧?섍퀬 ?덉쓬 (fails ?몄텧?섎뒗 GroupProfile? Not mine group )",
                "issueUrl": ""
        },
        {
                "no": 41,
                "date": "2026-02-09",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.3.0",
                "modifiedVersion": "v1.0.3.0",
                "title": "Call ??Speaker icon ?ㅼ젙 媛믪씠 ?댁쟾 ?ㅼ젙媛믪쑝濡??좎??섏? ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 42,
                "date": "2026-02-09",
                "issueStatus": "Open",
                "impactLevel": "High",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.5.0",
                "modifiedVersion": "v1.1.5.0",
                "title": "Temp Group 硫ㅻ쾭 Opt-in/Opt-out ?ㅼ젙 ??Affiliation 硫붾돱 ?ъ쭊?????ㅼ젙??媛믪씠 蹂寃쎈릺?댁엳吏 ?딆쓬",
                "issueUrl": ""
        },
        {
                "no": 43,
                "date": "2026-02-25",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.4.0",
                "modifiedVersion": "v1.0.4.0",
                "title": "ptt-z ?곌껐?곹깭?먯꽌 ?⑤쭚 ?ъ떆???? ?낆꽭?щ━ 硫붾돱 ?섎떒?먮뒗 ptt-z ?몄텧?섏?留?吏꾩엯 ???섏뼱留곷맂 湲곌린 ?녿떎怨??몄텧",
                "issueUrl": ""
        },
        {
                "no": 44,
                "date": "2026-04-01",
                "issueStatus": "Closed",
                "impactLevel": "Medium",
                "platform": "Feature Phone",
                "occurrenceVersion": "v1.3.6.0",
                "modifiedVersion": "v1.3.6.0",
                "title": "Conversation View?먯꽌 Nickname 蹂寃???誘몃컲??",
                "issueUrl": ""
        },
        {
                "no": 44,
                "date": "2026-04-06",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.6.0",
                "modifiedVersion": "v1.0.6.0",
                "title": "Geofence Group Opt-in/out ?숈옉 ??'Service unavailable' Toast 諛쒖깮",
                "issueUrl": ""
        },
        {
                "no": 45,
                "date": "2026-04-07",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.6.0",
                "modifiedVersion": "v1.0.6.0",
                "title": "Location Sharing ?붾㈃?먯꽌 Group 寃?????낅젰?좊븣留덈떎 DB ?ъ“?뚮줈 ?명븳 ?꾪꽣留?吏??諛쒖깮",
                "issueUrl": ""
        },
        {
                "no": 46,
                "date": "2026-04-07",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Smart Phone",
                "occurrenceVersion": "v1.0.6.0",
                "modifiedVersion": "v1.0.6.0",
                "title": "寃??寃곌낵?먯꽌 異붽????ъ슜????젣 ??寃?됯껐怨?由ъ뒪???뺤씤 ??[+] 踰꾪듉 誘몃끂異?",
                "issueUrl": ""
        },
        {
                "no": 47,
                "date": "2026-04-13",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.7.0",
                "modifiedVersion": "v1.1.7.0",
                "title": "Receive Group Call ??寃쎌슦 留덉씠??踰꾪듉 ?좏깮 ???뚮┝ ?앹뾽??諛쒖깮?섏? ?딅뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 48,
                "date": "2026-04-14",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.7.0",
                "modifiedVersion": "v1.1.7.0",
                "title": "ID / PW ?뺤긽 ?낅젰 ??濡쒓렇???쒕룄 ??'濡쒓렇???뺣낫媛 ?ㅻⅤ?? ?앹뾽 ?몄텧?섍퀬 ?ъ떆?????뺤긽 濡쒓렇???섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 49,
                "date": "2026-04-13",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.7.0",
                "modifiedVersion": "v1.1.7.0",
                "title": "Emergency Alert 諛쒖떊 ?곹깭?먯꽌 ?ъ떆?????앹뾽??誘몃끂異??섎뒗 ?꾩긽",
                "issueUrl": ""
        },
        {
                "no": 50,
                "date": "2026-04-21",
                "issueStatus": "Open",
                "impactLevel": "Medium",
                "platform": "Dispatcher",
                "occurrenceVersion": "v1.1.7.0",
                "modifiedVersion": "v1.1.7.0",
                "title": "Dispatcher Call ?쒕룄 ??諛쒖뼵?곹깭濡??몄텧?섎뒗 ?꾩긽",
                "issueUrl": ""
        }
],
    },
    analysis: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "Analysis",
      totalIssues: 37,
      resolvedIssues: 31,
      criticalIssues: 6,
      env: [
        { label: "API", value: 18, color: "#3f8cff" },
        { label: "Client", value: 12, color: "#30d58f" },
        { label: "Infra", value: 7, color: "#f4a259" },
      ],
      qaStatus: [
        { label: "Regression", value: 10, color: "#ff6b6b" },
        { label: "New Defect", value: 19, color: "#3f8cff" },
        { label: "Known Issue", value: 8, color: "#f7c948" },
      ],
      compareTarget: "Root Cause Trend",
      comparison: [
        { label: "Spec gap", value: 11, diff: "-3 than last sprint", positive: true },
        { label: "Data issue", value: 8, diff: "+2 than last sprint", positive: false },
        { label: "Timing issue", value: 6, diff: "-1 than last sprint", positive: true },
        { label: "3rd party", value: 4, diff: "same as last sprint", positive: true },
      ],
      assignees: [
        { name: "SE", issues: 10, color: "#f7c948", tags: ["Spec gap 4"] },
        { name: "JY", issues: 9, color: "#30d58f", tags: ["Regression 3"] },
        { name: "Manish Adhikari", issues: 7, color: "#3f8cff", tags: ["Data 2"] },
        { name: "IU", issues: 5, color: "#f4a259", tags: ["Timing 2"] },
      ],
    },
    qaOpinion: {
      reportTitle: "QA Sprint Report - GRID R15",
      subtitleSuffix: "QA Opinion",
      totalIssues: 37,
      resolvedIssues: 34,
      criticalIssues: 4,
      env: [
        { label: "Ready", value: 29, color: "#30d58f" },
        { label: "Watchlist", value: 8, color: "#f7c948" },
      ],
      qaStatus: [
        { label: "Approved", value: 23, color: "#30d58f" },
        { label: "Conditional", value: 10, color: "#f7c948" },
        { label: "Not Ready", value: 4, color: "#ff6b6b" },
      ],
      compareTarget: "Release Readiness",
      comparison: [
        { label: "Approval Score", value: 86, diff: "+5 than last report", positive: true },
        { label: "Risk Score", value: 21, diff: "-7 than last report", positive: true },
        { label: "Go/No-go Blockers", value: 2, diff: "-1 than last report", positive: true },
        { label: "Pending Clarification", value: 5, diff: "+1 than last report", positive: false },
      ],
      assignees: [
        { name: "QA Team", issues: 14, color: "#30d58f", tags: ["Approved 10"] },
        { name: "Dev Team", issues: 10, color: "#3f8cff", tags: ["Conditional 6"] },
        { name: "PM", issues: 7, color: "#f7c948", tags: ["Pending 5"] },
        { name: "Ops", issues: 6, color: "#f4a259", tags: ["Risk 2"] },
      ],
    },
  },
};

let currentView = "dashboard";
const dataStore = window.QADataStore;
let currentProject = dataStore.getCurrentProject();
const issueSortState = { field: null, dir: null };
const INITIAL_GRID_R15_ROWS = JSON.parse(JSON.stringify(dashboardData.views.issueList.issueRows || []));
let issueSearchQuery = "";
const selectedIssueKeys = new Set();
let issueRowsCache = [];

function getIssueIdPrefix(project = currentProject) {
  if (project === "GRID R15") return "R15";
  if (project === "Compact 고도화") return "CMP";
  return "ISS";
}

function buildIssueDetailUrl(rowKey, issueId) {
  const compactIssueId = String(issueId || "").trim();
  if (compactIssueId) {
    return `./issue-detail.html?issueId=${encodeURIComponent(compactIssueId)}&project=${encodeURIComponent(currentProject)}`;
  }
  return `./issue-detail.html?rowKey=${encodeURIComponent(String(rowKey || ""))}&project=${encodeURIComponent(currentProject)}`;
}

function toAbsoluteUrl(relativeOrAbsolute) {
  try {
    return new URL(relativeOrAbsolute, window.location.href).href;
  } catch (_) {
    return String(relativeOrAbsolute || "");
  }
}

function toKoreanDate(isoDate) {
  return isoDate.replaceAll("-", ".");
}

function calcPeriodDays(start, end) {
  const one = new Date(start);
  const two = new Date(end);
  const diff = Math.ceil((two - one) / (1000 * 60 * 60 * 24)) + 1;
  return `${diff}d`;
}

function setKpiCards(cards) {
  cards.slice(0, 8).forEach((card, idx) => {
    const n = idx + 1;
    document.getElementById(`kpiLabel${n}`).textContent = card.label;
    document.getElementById(`kpiValue${n}`).textContent = card.value;
    document.getElementById(`kpiSub${n}`).textContent = card.sub || "";
  });
}

function makeDonut(el, data) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  if (total <= 0) {
    el.style.background = "conic-gradient(#22324b 0% 100%)";
    return;
  }
  let cursor = 0;
  const stops = data.map((item) => {
    const start = (cursor / total) * 100;
    cursor += item.value;
    const end = (cursor / total) * 100;
    return `${item.color} ${start}% ${end}%`;
  });
  el.style.background = `conic-gradient(${stops.join(", ")})`;
}

function renderLegend(el, data) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  el.innerHTML = data
    .map((item) => {
      const pct = total > 0 ? Math.round((item.value / total) * 100) : 0;
      return `<li><span class="dot" style="background:${item.color}"></span>${item.label} - ${item.value} cases (${pct}%)</li>`;
    })
    .join("");
}

function renderComparison(el, data) {
  el.innerHTML = data
    .map(
      (item) => `
      <article class="mini-card">
        <p class="mini-label">${item.label}</p>
        <p class="mini-value">${item.value}</p>
        <p class="mini-diff ${item.positive ? "" : "bad"}">${item.diff}</p>
      </article>
    `,
    )
    .join("");
}

function renderAssignees(el, assignees) {
  const max = Math.max(1, ...assignees.map((a) => a.issues));
  el.innerHTML = assignees
    .map((a) => {
      const width = Math.round((a.issues / max) * 100);
      const tags = a.tags
        .map((tag) => {
          const yellow = tag.toLowerCase().includes("hard") || tag.toLowerCase().includes("triage");
          return `<span class="tag ${yellow ? "yellow" : ""}">${tag}</span>`;
        })
        .join("");
      return `
      <article class="person">
        <div class="person-head"><span>${a.name}</span><span>${a.issues} issues</span></div>
        <div class="bar"><span style="width:${width}%;background:${a.color}"></span></div>
        <div class="tag-row">${tags}</div>
      </article>`;
    })
    .join("");
}

function buildDashboardWidgetsFromIssues(rows) {
  const platformCount = {
    "Feature Phone": 0,
    "Smart Phone": 0,
    Dispatcher: 0,
  };
  rows.forEach((r) => {
    const key = String(r.platform || "");
    if (platformCount[key] !== undefined) platformCount[key] += 1;
  });

  const statusCount = {
    Open: 0,
    "In Progress": 0,
    Closed: 0,
    Resolved: 0,
  };
  rows.forEach((r) => {
    if (hasStatus(r.issueStatus, "open")) statusCount.Open += 1;
    if (hasStatus(r.issueStatus, "in progress")) statusCount["In Progress"] += 1;
    if (hasStatus(r.issueStatus, "closed")) statusCount.Closed += 1;
    if (hasStatus(r.issueStatus, "resolved")) statusCount.Resolved += 1;
  });

  const impactCount = {
    High: 0,
    Medium: 0,
    Low: 0,
  };
  rows.forEach((r) => {
    const key = String(r.impactLevel || "");
    if (impactCount[key] !== undefined) impactCount[key] += 1;
  });

  const openCount = rows.filter((r) => hasStatus(r.issueStatus, "open")).length;
  const closedCount = rows.filter((r) => hasStatus(r.issueStatus, "closed") || hasStatus(r.issueStatus, "resolved")).length;
  const fixedCount = rows.filter((r) => String(r.modifiedVersion || "").trim()).length;
  const unfixedCount = rows.length - fixedCount;

  return {
    env: [
      { label: "Feature Phone", value: platformCount["Feature Phone"] || 0, color: "#f4a259" },
      { label: "Smart Phone", value: platformCount["Smart Phone"] || 0, color: "#3f8cff" },
      { label: "Dispatcher", value: platformCount.Dispatcher || 0, color: "#9b8cff" },
    ],
    qaStatus: [
      { label: "Open", value: statusCount.Open || 0, color: "#3f8cff" },
      { label: "In Progress", value: statusCount["In Progress"] || 0, color: "#2f9ca3" },
      { label: "Closed", value: statusCount.Closed || 0, color: "#7f8ea3" },
      { label: "Resolved", value: statusCount.Resolved || 0, color: "#30d58f" },
    ],
    comparison: [
      { label: "Open Issues", value: openCount, diff: `${openCount} currently open`, positive: openCount === 0 },
      { label: "Closed", value: closedCount, diff: `${closedCount} completed`, positive: true },
      { label: "High Impact", value: impactCount.High || 0, diff: `${impactCount.High || 0} high-priority issues`, positive: (impactCount.High || 0) === 0 },
      { label: "Fixed Version Filled", value: fixedCount, diff: `${unfixedCount} without fixed version`, positive: unfixedCount === 0 },
    ],
    assignees: [
      { name: "High Impact", issues: impactCount.High || 0, color: "#ff6b6b", tags: [`Medium ${impactCount.Medium || 0}`, `Low ${impactCount.Low || 0}`] },
      { name: "Medium Impact", issues: impactCount.Medium || 0, color: "#f7c948", tags: [`High ${impactCount.High || 0}`] },
      { name: "Low Impact", issues: impactCount.Low || 0, color: "#30d58f", tags: [`Open ${openCount}`] },
    ],
  };
}

function countImpact(rows, level) {
  return rows.filter((r) => String(r.impactLevel || "").toLowerCase() === level).length;
}

function countStatus(rows, status) {
  return rows.filter((r) => hasStatus(r.issueStatus, status)).length;
}

function renderPlatformBreakdown(rows) {
  const container = document.getElementById("platformBreakdownGrid");
  if (!container) return;

  const platforms = [
    { key: "feature phone", label: "Feature Phone" },
    { key: "smart phone", label: "Smart Phone" },
    { key: "dispatcher", label: "Dispatcher" },
  ];

  container.innerHTML = platforms
    .map((platform, idx) => {
      const filtered = rows.filter((r) => String(r.platform || "").toLowerCase() === platform.key);
      const total = filtered.length;
      const high = countImpact(filtered, "high");
      const medium = countImpact(filtered, "medium");
      const low = countImpact(filtered, "low");
      const open = countStatus(filtered, "open");
      const inProgress = countStatus(filtered, "in progress");
      const closed = countStatus(filtered, "closed");
      const resolved = countStatus(filtered, "resolved");

      return `
        <article class="card platform-breakdown-card">
          <div class="platform-breakdown-head">
            <h3>${platform.label}</h3>
            <span class="chip">${total} issues</span>
          </div>
          <p class="platform-breakdown-total">Total Issues: <strong>${total}</strong></p>
          <div class="platform-breakdown-body">
            <div class="donut-layout compact">
              <div class="donut small" id="platformStatusDonut${idx}"><span>STS</span></div>
              <ul class="legend compact" id="platformStatusLegend${idx}">
                <li><span class="dot" style="background:#3f8cff"></span>Open - ${open}</li>
                <li><span class="dot" style="background:#2f9ca3"></span>In Progress - ${inProgress}</li>
                <li><span class="dot" style="background:#7f8ea3"></span>Closed - ${closed}</li>
                <li><span class="dot" style="background:#30d58f"></span>Resolved - ${resolved}</li>
              </ul>
            </div>
            <div class="platform-impact-box">
              <p class="platform-impact-title">Impact Level</p>
              <p><span class="impact-level-glyph high">⌃</span> High: ${high}</p>
              <p><span class="impact-level-glyph medium">=</span> Medium: ${medium}</p>
              <p><span class="impact-level-glyph low">⌄</span> Low: ${low}</p>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  platforms.forEach((platform, idx) => {
    const filtered = rows.filter((r) => String(r.platform || "").toLowerCase() === platform.key);
    const data = [
      { label: "Open", value: countStatus(filtered, "open"), color: "#3f8cff" },
      { label: "In Progress", value: countStatus(filtered, "in progress"), color: "#2f9ca3" },
      { label: "Closed", value: countStatus(filtered, "closed"), color: "#7f8ea3" },
      { label: "Resolved", value: countStatus(filtered, "resolved"), color: "#30d58f" },
    ];
    makeDonut(document.getElementById(`platformStatusDonut${idx}`), data);
  });
}

function getIssuePriority(field, value) {
  const table = {
    issueStatus: { open: 1, "in progress": 2, inprogress: 2, closed: 3, resolved: 4 },
    impactLevel: { high: 1, medium: 2, low: 3 },
    platform: { "feature phone": 1, "smart phone": 2, dispatcher: 3 },
  };
  const normalized = String(value || "").trim().toLowerCase();
  return table[field]?.[normalized] ?? 999;
}

function parseStatuses(value) {
  return String(value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function hasStatus(value, target) {
  return parseStatuses(value)
    .map((s) => s.toLowerCase())
    .includes(String(target).toLowerCase());
}

function sortIssueRows(rows) {
  if (!issueSortState.field || !issueSortState.dir) {
    return [...rows].sort((a, b) => (a.no || 0) - (b.no || 0));
  }

  const sorted = [...rows].sort((a, b) => {
    const aRank = getIssuePriority(issueSortState.field, a[issueSortState.field]);
    const bRank = getIssuePriority(issueSortState.field, b[issueSortState.field]);
    if (aRank !== bRank) return aRank - bRank;
    return a.no - b.no;
  });

  if (issueSortState.dir === "desc") sorted.reverse();
  return sorted;
}

function syncSortArrowState() {
  const buttons = document.querySelectorAll(".sort-arrow-btn");
  buttons.forEach((btn) => {
    const isActive =
      btn.dataset.sortField === issueSortState.field &&
      btn.dataset.sortDir === issueSortState.dir;
    btn.classList.toggle("active", isActive);
  });
}

function renderIssueTable(rows) {
  const sortedRows = sortIssueRows(rows);
  const body = document.getElementById("issueTableBody");
  const escapeHtml = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);

  body.innerHTML = sortedRows
    .map(
      (row, idx) => {
        const rowKey = String(row.rowKey || "");
        const checked = selectedIssueKeys.has(rowKey) ? "checked" : "";
        const issueId = String(row.issueId || "");
        const detailUrl = buildIssueDetailUrl(rowKey, issueId);
        return `
      <tr>
        <td><input type="checkbox" class="issue-row-check" data-row-key="${escapeHtml(rowKey)}" ${checked} /></td>
        <td>${idx + 1}</td>
        <td>
          <button
            type="button"
            class="issue-id-copy-btn issue-link"
            data-copy-link="${escapeHtml(toAbsoluteUrl(detailUrl))}"
            title="Copy issue link"
          >${escapeHtml(String(row.issueId || "-"))}</button>
        </td>
        <td>${escapeHtml(getRegistrationDateText(row))}</td>
        <td>${renderImpactLevelCell(row.impactLevel, escapeHtml)}</td>
        <td>${renderPlatformBadge(row.platform, escapeHtml)}</td>
        <td>${renderIssueStatusBadge(row.issueStatus, escapeHtml, rowKey, true)}</td>
        <td>${row.occurrenceVersion}</td>
        <td>${row.modifiedVersion}</td>
        <td>${renderAttachmentCell(row, escapeHtml)}</td>
        <td><a class="issue-link" href="${detailUrl}">${escapeHtml(row.title)}</a></td>
        <td><button class="delete-btn" data-row-key="${escapeHtml(rowKey)}" type="button">Delete</button></td>
      </tr>
    `;
      },
      )
    .join("");
  document.getElementById("issueTableCount").textContent = `${sortedRows.length} items`;
  syncIssueCheckAllState();
  syncSortArrowState();
  renderImpactSections(sortedRows, escapeHtml);
}

function getRegistrationDateText(row) {
  const dateText = String(row.date || "").trim();
  if (dateText) return dateText;
  const createdAt = String(row.createdAt || "").trim();
  if (!createdAt) return "-";
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toISOString().slice(0, 10);
}

function renderImpactLevelCell(level, escapeHtml) {
  const value = String(level || "").trim();
  const key = value.toLowerCase();
  let icon = "-";
  let cls = "impact-level-cell";
  if (key === "high") {
    icon = "⌃";
    cls += " high";
  } else if (key === "medium") {
    icon = "=";
    cls += " medium";
  } else if (key === "low") {
    icon = "⌄";
    cls += " low";
  }
  return `<span class="${cls}"><span class="impact-level-glyph">${icon}</span>${escapeHtml(value || "-")}</span>`;
}

function syncIssueCheckAllState() {
  const checkAll = document.getElementById("issueCheckAll");
  if (!checkAll) return;
  const rowChecks = Array.from(document.querySelectorAll("#issueTableBody .issue-row-check"));
  const total = rowChecks.length;
  const checkedCount = rowChecks.filter((el) => el.checked).length;
  checkAll.checked = total > 0 && checkedCount === total;
  checkAll.indeterminate = checkedCount > 0 && checkedCount < total;
}

function renderPlatformBadge(platform, escapeHtml) {
  const value = String(platform || "").trim();
  const key = value.toLowerCase();
  let cls = "platform-badge";
  if (key === "feature phone") cls += " feature-phone";
  else if (key === "smart phone") cls += " smart-phone";
  else if (key === "dispatcher") cls += " dispatcher";
  return `<span class="${cls}">${escapeHtml(value || "-")}</span>`;
}

function renderIssueStatusBadge(status, escapeHtml, rowKey = "", removable = false) {
  const statuses = parseStatuses(status);
  if (!statuses.length) return `<span class="status-badges"><span class="status-badge">-</span></span>`;
  const chips = statuses
    .map((s) => {
      const key = s.toLowerCase().replace(/\s+/g, " ").trim();
      const compactKey = key.replace(/[\s-]+/g, "");
      let cls = "status-badge";
      if (key === "closed") cls += " closed";
      else if (key === "open") cls += " open";
      else if (compactKey === "inprogress") cls += " in-progress";
      else if (key === "resolved") cls += " resolved";
      if (!removable) return `<span class="${cls}">${escapeHtml(s)}</span>`;
      return `
        <span class="${cls} removable">
          <span>${escapeHtml(s)}</span>
          <button
            class="status-remove-btn"
            type="button"
            data-row-key="${escapeHtml(String(rowKey || ""))}"
            data-status="${escapeHtml(s)}"
            aria-label="Remove ${escapeHtml(s)} status"
          >x</button>
        </span>
      `;
    })
    .join("");
  return `<span class="status-badges">${chips}</span>`;
}

function renderAttachmentCell(row, escapeHtml) {
  const files = Array.isArray(row.attachments) ? row.attachments : [];
  if (!files.length) return "-";
  return files
    .map(
      (file, idx) =>
        `<a class="attachment-link" href="${escapeHtml(file.dataUrl || "#")}" download="${escapeHtml(file.name || `attachment-${idx + 1}`)}">Download ${idx + 1}</a>`,
    )
    .join("<br/>");
}

function renderImpactList(targetId, countId, rows, escapeHtml) {
  const el = document.getElementById(targetId);
  const countEl = document.getElementById(countId);
  countEl.textContent = `${rows.length} items`;
  el.innerHTML = rows
    .map(
      (row) => `
      <li class="impact-item">
        <span class="impact-no">#${row.no}</span>
        ${
          row.issueUrl
            ? `<a class="issue-link" href="${escapeHtml(row.issueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(row.title)}</a>`
            : `<span>${escapeHtml(row.title)}</span>`
        }
        <span class="impact-meta">${renderPlatformBadge(row.platform, escapeHtml)} ${renderIssueStatusBadge(row.issueStatus, escapeHtml)}</span>
      </li>
    `,
    )
    .join("");
}

function renderImpactSections(rows, escapeHtml) {
  if (!document.getElementById("highList")) return;
  const high = rows.filter((row) => String(row.impactLevel).toLowerCase() === "high");
  const medium = rows.filter((row) => String(row.impactLevel).toLowerCase() === "medium");
  const low = rows.filter((row) => String(row.impactLevel).toLowerCase() === "low");
  renderImpactList("highList", "highCount", high, escapeHtml);
  renderImpactList("mediumList", "mediumCount", medium, escapeHtml);
  renderImpactList("lowList", "lowCount", low, escapeHtml);
}

function filterIssueRows(rows) {
  const q = issueSearchQuery.trim().toLowerCase();
  if (!q) return rows;
  return rows.filter((row) => {
    const target = [
      row.no,
      row.title,
      row.platform,
      row.issueStatus,
      row.impactLevel,
      row.occurrenceVersion,
      row.modifiedVersion,
      row.description,
    ]
      .join(" ")
      .toLowerCase();
    return target.includes(q);
  });
}

function toggleSections(viewKey) {
  const isIssueList = viewKey === "issueList";
  const isDashboard = viewKey === "dashboard";
  document.querySelector(".kpi-grid").classList.toggle("hidden", isIssueList);
  document.getElementById("midGrid").classList.toggle("hidden", isIssueList || isDashboard);
  document.getElementById("bottomGrid").classList.toggle("hidden", isIssueList || isDashboard);
  document.getElementById("platformBreakdownGrid").classList.toggle("hidden", !isDashboard);
  document.getElementById("issueTableSection").classList.toggle("hidden", !isIssueList);
  document.getElementById("listSearchSection").classList.toggle("hidden", !isIssueList);
}

function setActiveMenu(selectedView) {
  const items = document.querySelectorAll("#menuNav .menu-item");
  items.forEach((item) => {
    const isActive = item.dataset.view === selectedView;
    item.classList.toggle("active", isActive);
  });
}

function renderDashboard(baseData, viewKey) {
  const data = baseData.views[viewKey];
  const startK = toKoreanDate(baseData.start);
  const endK = toKoreanDate(baseData.end);
  const resolveRate = Math.round((data.resolvedIssues / data.totalIssues) * 100);

  currentView = viewKey;
  document.title = baseData.browserTitle;
  document.getElementById("logoText").textContent = baseData.logoText;
  const sprintNameEl = document.getElementById("sprintName");
  const sidebarPeriodEl = document.getElementById("sidebarPeriod");
  if (sprintNameEl) sprintNameEl.textContent = baseData.sprint;
  if (sidebarPeriodEl) sidebarPeriodEl.textContent = `${startK} - ${endK}`;
  const versionSelect = document.getElementById("versionBadge");
  const projectLabel = currentProject || baseData.browserTitle || "GRID R15";
  if (versionSelect && !Array.from(versionSelect.options).some((o) => o.value === projectLabel)) {
    const opt = document.createElement("option");
    opt.value = projectLabel;
    opt.textContent = projectLabel;
    versionSelect.appendChild(opt);
  }
  if (versionSelect) versionSelect.value = projectLabel;
  dataStore.setCurrentProject(projectLabel);
  document.getElementById("title").textContent = `QA Sprint Report - ${projectLabel}`;
  document.getElementById("subtitle").textContent = `${startK} ~ ${endK} | ${baseData.unit} | ${data.subtitleSuffix}`;
  const addIssueBtn = document.getElementById("addIssueBtn");
  if (addIssueBtn) addIssueBtn.href = `./issue-create.html?project=${encodeURIComponent(projectLabel)}`;

  const rows = getIssueRows();

  if (viewKey === "issueList" || viewKey === "dashboard") {
    const total = rows.length;
    const closed = rows.filter((r) => hasStatus(r.issueStatus, "closed") || hasStatus(r.issueStatus, "resolved")).length;
    const high = rows.filter((r) => hasStatus(r.issueStatus, "open") && String(r.impactLevel).toLowerCase() === "high").length;
    const medium = rows.filter((r) => hasStatus(r.issueStatus, "open") && String(r.impactLevel).toLowerCase() === "medium").length;
    const low = rows.filter((r) => hasStatus(r.issueStatus, "open") && String(r.impactLevel).toLowerCase() === "low").length;
    const featurePhone = rows.filter((r) => String(r.platform).toLowerCase() === "feature phone").length;
    const smartPhone = rows.filter((r) => String(r.platform).toLowerCase() === "smart phone").length;
    const dispatcher = rows.filter((r) => String(r.platform).toLowerCase() === "dispatcher").length;

    setKpiCards([
      { label: "Total Issues", value: total, sub: "All imported issues" },
      { label: "Closed", value: closed, sub: "Issue Status = Closed + Resolved" },
      { label: "High", value: high, sub: "Open + Impact Level = High" },
      { label: "Medium", value: medium, sub: "Open + Impact Level = Medium" },
      { label: "Low", value: low, sub: "Open + Impact Level = Low" },
      { label: "📟 Feature Phone", value: featurePhone, sub: "Platform count" },
      { label: "📱 Smart Phone", value: smartPhone, sub: "Platform count" },
      { label: "🖥️ Dispatcher", value: dispatcher, sub: "Platform count" },
    ]);

    if (viewKey === "dashboard") {
      document.getElementById("subtitle").textContent = `${startK} ~ ${endK} | ${baseData.unit} | Issue List`;
    }
  } else {
    setKpiCards([
      { label: "Total Issues", value: data.totalIssues, sub: "All issues collected in current scope" },
      { label: "Resolved", value: data.resolvedIssues, sub: `${resolveRate}% fixed` },
      { label: "Critical Issues", value: data.criticalIssues, sub: "Highest + High" },
      { label: "QA Period", value: calcPeriodDays(baseData.start, baseData.end), sub: `${baseData.start} - ${baseData.end}` },
      { label: "Resolve Rate", value: `${resolveRate}%`, sub: "Resolved / Total" },
      { label: "📟 Feature Phone", value: "-", sub: "Issue List only" },
      { label: "📱 Smart Phone", value: "-", sub: "Issue List only" },
      { label: "🖥️ Dispatcher", value: "-", sub: "Issue List only" },
    ]);
  }

  const widgets = viewKey === "dashboard" ? buildDashboardWidgetsFromIssues(rows) : data;

  if (viewKey === "dashboard") {
    document.getElementById("envCardTitle").textContent = "플랫폼 분포";
    document.getElementById("qaCardTitle").textContent = "이슈 상태 분포";
    document.getElementById("compareCardTitle").textContent = "이슈 요약";
    document.getElementById("assigneeCardTitle").textContent = "영향도 인사이트";
    document.getElementById("envDonutLabel").textContent = "플랫폼";
    document.getElementById("qaDonutLabel").textContent = "상태";
    document.getElementById("compareTarget").textContent = "Based on current Issue List";
  } else {
    document.getElementById("envCardTitle").textContent = "Test Environment";
    document.getElementById("qaCardTitle").textContent = "QA Status";
    document.getElementById("compareCardTitle").textContent = "Sprint Comparison";
    document.getElementById("assigneeCardTitle").textContent = "Assignee Insights";
    document.getElementById("envDonutLabel").textContent = "ENV";
    document.getElementById("qaDonutLabel").textContent = "QA";
    document.getElementById("compareTarget").textContent = `vs ${data.compareTarget}`;
  }

  makeDonut(document.getElementById("envDonut"), widgets.env);
  makeDonut(document.getElementById("qaDonut"), widgets.qaStatus);
  renderLegend(document.getElementById("envLegend"), widgets.env);
  renderLegend(document.getElementById("qaLegend"), widgets.qaStatus);
  renderComparison(document.getElementById("compareGrid"), widgets.comparison);
  renderAssignees(document.getElementById("assigneeList"), widgets.assignees);
  renderIssueTable(filterIssueRows(rows));
  if (viewKey === "dashboard") renderPlatformBreakdown(rows);
  toggleSections(viewKey);
  setActiveMenu(viewKey);
}
function getIssueRows() {
  return issueRowsCache;
}

function ensureRowKeys(rows) {
  return rows.map((row, idx) => ({
    ...row,
    rowKey: row.rowKey || `${row.no || idx + 1}_${row.date || ""}_${idx}`,
    issueStatus: row.issueStatus,
  }));
}

function resequenceRows(rows) {
  return rows.map((row, idx) => ({
    ...row,
    no: idx + 1,
  }));
}

function getIssueRegistrationTimestamp(row, idx) {
  const dateText = String(row.date || "").trim();
  const createdAtText = String(row.createdAt || "").trim();
  let t = Number.NaN;
  if (dateText) t = Date.parse(dateText);
  if (Number.isNaN(t) && createdAtText) t = Date.parse(createdAtText);
  if (Number.isNaN(t)) return 4102444800000 + idx; // far future fallback
  return t;
}

function assignIssueIds(rows) {
  const prefix = getIssueIdPrefix();
  const bottomFirst = [...rows].reverse();
  const idMap = new Map(
    bottomFirst.map((row, idx) => [
      String(row.rowKey || ""),
      `${prefix}-${String(idx + 1).padStart(4, "0")}`,
    ]),
  );

  return rows.map((row) => ({
    ...row,
    issueId: idMap.get(String(row.rowKey || "")) || row.issueId || "",
  }));
}

async function setIssueRows(rows) {
  const normalized = assignIssueIds(resequenceRows(ensureRowKeys(rows)));
  issueRowsCache = normalized;
  dashboardData.views.issueList.issueRows = normalized;
  await dataStore.saveRows(normalized, currentProject);
  const keySet = new Set(normalized.map((r) => String(r.rowKey || "")));
  Array.from(selectedIssueKeys).forEach((key) => {
    if (!keySet.has(key)) selectedIssueKeys.delete(key);
  });
}

async function hydrateIssueRows() {
  let rows = await dataStore.loadRows(currentProject);
  if (!Array.isArray(rows) || !rows.length) {
    rows = currentProject === "GRID R15" ? INITIAL_GRID_R15_ROWS : [];
  }
  await setIssueRows(rows);
}

function setupMenu(baseData) {
  const nav = document.getElementById("menuNav");
  nav.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-item");
    if (!button) return;
    const viewKey = button.dataset.view;
    if (!viewKey || viewKey === currentView) return;
    renderDashboard(baseData, viewKey);
  });
}

function setupProjectSelector(baseData) {
  const select = document.getElementById("versionBadge");
  if (!select) return;
  select.addEventListener("change", async (event) => {
    const next = String(event.target.value || "GRID R15");
    currentProject = next;
    dataStore.setCurrentProject(next);
    issueSearchQuery = "";
    issueSortState.field = null;
    issueSortState.dir = null;
    await hydrateIssueRows();
    renderDashboard(baseData, currentView);
  });
}

function setupKpiScroll() {
  const map = {
    high: "highSection",
    medium: "mediumSection",
    low: "lowSection",
  };
  document.querySelector(".kpi-grid").addEventListener("click", (event) => {
    if (currentView !== "issueList") return;
    const card = event.target.closest("[data-impact-target]");
    if (!card) return;
    const targetKey = card.dataset.impactTarget;
    const target = document.getElementById(map[targetKey]);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setupIssueSort(baseData) {
  const section = document.getElementById("issueTableSection");
  section.addEventListener("click", async (event) => {
    const button = event.target.closest(".sort-arrow-btn");
    if (!button) return;
    issueSortState.field = button.dataset.sortField;
    issueSortState.dir = button.dataset.sortDir;

    const rows = getIssueRows();
    renderIssueTable(rows);
  });
}

function setupIssueDelete() {
  const section = document.getElementById("issueTableSection");
  section.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.id === "issueCheckAll") {
      const rowChecks = Array.from(section.querySelectorAll("#issueTableBody .issue-row-check"));
      rowChecks.forEach((el) => {
        const rowKey = String(el.dataset.rowKey || "");
        el.checked = target.checked;
        if (target.checked) selectedIssueKeys.add(rowKey);
        else selectedIssueKeys.delete(rowKey);
      });
      syncIssueCheckAllState();
      return;
    }

    if (target.classList.contains("issue-row-check")) {
      const rowKey = String(target.dataset.rowKey || "");
      if (target.checked) selectedIssueKeys.add(rowKey);
      else selectedIssueKeys.delete(rowKey);
      syncIssueCheckAllState();
    }
  });

  section.addEventListener("click", async (event) => {
    const copyBtn = event.target.closest(".issue-id-copy-btn");
    if (copyBtn) {
      const text = String(copyBtn.dataset.copyLink || "").trim();
      if (!text) return;
      navigator.clipboard
        .writeText(text)
        .then(() => alert("Issue link copied."))
        .catch(() => alert("Copy failed. Please copy manually."));
      return;
    }

    const removeBtn = event.target.closest(".status-remove-btn");
    if (removeBtn) {
      const rowKey = String(removeBtn.dataset.rowKey || "");
      const statusToRemove = String(removeBtn.dataset.status || "").trim().toLowerCase();
      if (!rowKey || !statusToRemove) return;
      const rows = getIssueRows().map((row) => {
        if (String(row.rowKey) !== rowKey) return row;
        const nextStatuses = parseStatuses(row.issueStatus).filter((s) => s.trim().toLowerCase() !== statusToRemove);
        return { ...row, issueStatus: nextStatuses.join(", ") };
      });
      await setIssueRows(rows);
      renderDashboard(dashboardData, "issueList");
      return;
    }

    const bulkBtn = event.target.closest("#deleteSelectedBtn");
    if (bulkBtn) {
      if (!selectedIssueKeys.size) {
        alert("Please select issues first.");
        return;
      }
      const rows = getIssueRows().filter((row) => !selectedIssueKeys.has(String(row.rowKey || "")));
      selectedIssueKeys.clear();
      await setIssueRows(rows);
      renderDashboard(dashboardData, "issueList");
      return;
    }

    const btn = event.target.closest(".delete-btn");
    if (!btn) return;
    const rowKey = btn.dataset.rowKey;
    if (!rowKey) return;
    selectedIssueKeys.delete(String(rowKey));
    const rows = getIssueRows().filter((row) => String(row.rowKey) !== String(rowKey));
    await setIssueRows(rows);
    renderDashboard(dashboardData, "issueList");
  });
}

function setupExportExcel() {
  const btn = document.getElementById("exportExcelBtn");
  btn.addEventListener("click", () => {
    const rows = getIssueRows();
    const sheetRows = rows.map((row) => ({
      No: row.no,
      "Issue ID": row.issueId || "",
      "Registration date": getRegistrationDateText(row),
      "Issue Status": row.issueStatus,
      "Impact Level": row.impactLevel,
      Platform: row.platform,
      "Affected Version": row.occurrenceVersion,
      "Fixed Version": row.modifiedVersion,
      Title: row.title,
      "Issue Link": buildIssueDetailUrl(row.rowKey, row.issueId),
      URL: row.issueUrl || "",
    }));

    const ws = XLSX.utils.json_to_sheet(sheetRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "IssueList");
    const today = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `GRID_IssueList_${today}.xlsx`);
  });
}

function normalizeHeader(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[._-]/g, "");
}

function pickByHeader(row, headerMap, keys) {
  for (const key of keys) {
    const hit = headerMap.get(normalizeHeader(key));
    if (hit) return row[hit];
  }
  return "";
}

function normalizeImpactLevel(value) {
  const v = String(value || "").trim().toLowerCase();
  if (v === "high") return "High";
  if (v === "low") return "Low";
  return "Medium";
}

function normalizePlatform(value) {
  const v = String(value || "").trim().toLowerCase();
  if (v.includes("feature")) return "Feature Phone";
  if (v.includes("smart")) return "Smart Phone";
  if (v.includes("dispatcher") || v.includes("pc")) return "Dispatcher";
  return "Dispatcher";
}

function normalizeStatuses(value) {
  const raw = String(value || "");
  const pieces = raw
    .split(/[,\|/]/)
    .map((s) => s.trim())
    .filter(Boolean);
  const out = [];
  pieces.forEach((p) => {
    const key = p.toLowerCase();
    if (key === "open" && !out.includes("Open")) out.push("Open");
    if (key === "closed" && !out.includes("Closed")) out.push("Closed");
    if ((key === "in progress" || key === "inprogress" || key === "in-progress") && !out.includes("In Progress")) out.push("In Progress");
    if (key === "resolved" && !out.includes("Resolved")) out.push("Resolved");
  });
  if (!out.length) return "Open";
  return out.join(", ");
}

function parseImportedIssueRows(jsonRows) {
  if (!Array.isArray(jsonRows) || !jsonRows.length) return [];
  const sample = jsonRows[0] || {};
  const headerMap = new Map(
    Object.keys(sample).map((k) => [normalizeHeader(k), k]),
  );

  return jsonRows
    .map((row, idx) => {
      const no = pickByHeader(row, headerMap, ["no", "number"]);
      const impactLevel = pickByHeader(row, headerMap, ["impactlevel", "impact", "component"]);
      const platform = pickByHeader(row, headerMap, ["platform"]);
      const issueStatus = pickByHeader(row, headerMap, ["issuestatus", "status"]);
      const occurrenceVersion = pickByHeader(row, headerMap, ["affectedversion", "occurrenceversion", "occurrence", "version", "occurredversion"]);
      const modifiedVersion = pickByHeader(row, headerMap, ["fixedversion", "modifiedversion", "modified", "fixversion"]);
      const title = pickByHeader(row, headerMap, ["title", "summary", "issue", "descriptiontitle"]);
      const description = pickByHeader(row, headerMap, ["description"]);

      if (!String(title || "").trim()) return null;
      return {
        rowKey: `${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 8)}`,
        no: Number(no) || idx + 1,
        date: "",
        issueStatus: normalizeStatuses(issueStatus),
        impactLevel: normalizeImpactLevel(impactLevel),
        platform: normalizePlatform(platform),
        occurrenceVersion: String(occurrenceVersion || "").trim(),
        modifiedVersion: String(modifiedVersion || "").trim(),
        title: String(title || "").trim(),
        description: String(description || "").trim(),
        issueUrl: "",
        attachments: [],
        createdAt: new Date().toISOString(),
      };
    })
    .filter(Boolean);
}

function issueSignature(row) {
  const norm = (v) => String(v || "").trim().toLowerCase();
  return [
    norm(row.title),
    norm(row.platform),
    norm(row.occurrenceVersion),
  ].join("||");
}

function setupImportExcel() {
  const importBtn = document.getElementById("importExcelBtn");
  const importInput = document.getElementById("importExcelInput");
  if (!importBtn || !importInput) return;

  importBtn.addEventListener("click", () => importInput.click());

  importInput.addEventListener("change", async () => {
    const file = importInput.files?.[0];
    if (!file) return;

    try {
      const mode = window.prompt("Import mode: type 'replace' to overwrite, or 'append' to add to current list.", "append");
      if (!mode) return;
      const normalizedMode = String(mode).trim().toLowerCase();
      if (normalizedMode !== "replace" && normalizedMode !== "append") {
        alert("Please type only 'replace' or 'append'.");
        return;
      }

      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonRows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      const imported = parseImportedIssueRows(jsonRows);

      if (!imported.length) {
        alert("No valid issue rows found. Please check your header names and data.");
        return;
      }

      const beforeCount = getIssueRows().length;
      let nextRows;
      if (normalizedMode === "replace") {
        nextRows = imported;
      } else {
        const existingRows = getIssueRows();
        const existingSet = new Set(existingRows.map(issueSignature));
        const uniqueImported = [];
        const importedSet = new Set();

        imported.forEach((row) => {
          const sig = issueSignature(row);
          if (existingSet.has(sig)) return;
          if (importedSet.has(sig)) return;
          importedSet.add(sig);
          uniqueImported.push(row);
        });

        nextRows = [...uniqueImported, ...existingRows];
      }

      await setIssueRows(nextRows);
      issueSortState.field = null;
      issueSortState.dir = null;
      issueSearchQuery = "";
      renderDashboard(dashboardData, "issueList");
      const addedCount =
        normalizedMode === "replace"
          ? imported.length
          : Math.max(0, nextRows.length - beforeCount);
      alert(
        normalizedMode === "replace"
          ? `Imported ${addedCount} issues successfully (replace mode).`
          : `Imported ${addedCount} new issues successfully (duplicates skipped).`,
      );
    } catch (error) {
      alert("Import failed. Please check the file format.");
    } finally {
      importInput.value = "";
    }
  });
}

function setupIssueSearch(baseData) {
  const input = document.getElementById("issueSearchInput");
  const searchBtn = document.getElementById("issueSearchBtn");
  const resetBtn = document.getElementById("issueSearchResetBtn");

  const runSearch = () => {
    issueSearchQuery = input.value || "";
    if (currentView === "issueList") renderDashboard(baseData, "issueList");
  };

  searchBtn.addEventListener("click", runSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runSearch();
    }
  });
  resetBtn.addEventListener("click", () => {
    input.value = "";
    issueSearchQuery = "";
    if (currentView === "issueList") renderDashboard(baseData, "issueList");
  });
}

let lastRemoteUpdatedAt = null;

async function refreshFromRemoteIfNeeded() {
  if (!dataStore.isCollabEnabled()) return;
  const remoteUpdatedAt = await dataStore.getRemoteUpdatedAt(currentProject);
  if (!remoteUpdatedAt) return;
  if (lastRemoteUpdatedAt && remoteUpdatedAt === lastRemoteUpdatedAt) return;

  lastRemoteUpdatedAt = remoteUpdatedAt;
  await hydrateIssueRows();
  renderDashboard(dashboardData, currentView);
}

function startAutoSyncPolling() {
  if (!dataStore.isCollabEnabled()) return;
  window.setInterval(async () => {
    await refreshFromRemoteIfNeeded();
  }, 10000);
}

async function initializeApp() {
  await dataStore.init();
  setupMenu(dashboardData);
  setupProjectSelector(dashboardData);
  setupIssueSort(dashboardData);
  setupKpiScroll();
  setupIssueDelete();
  setupExportExcel();
  setupImportExcel();
  setupIssueSearch(dashboardData);

  await hydrateIssueRows();
  lastRemoteUpdatedAt = await dataStore.getRemoteUpdatedAt(currentProject);

  if (window.location.hash === "#issueList") {
    renderDashboard(dashboardData, "issueList");
  } else {
    renderDashboard(dashboardData, "dashboard");
  }
  startAutoSyncPolling();
}

initializeApp();

