const dashboardData = {
  browserTitle: "GRID R15",
  logoText: "GRID R15_QA Report",
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
                "title": "Ad-hoc Group Exit or Delete 시 해당 Group이 삭제되지 않는 현상",
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
                "title": "View member list > 본인 계정 Long Press 시 Context menu 노출되는 현상",
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
                "title": "그룹내에 Cross fleet 없는 상태 메시지 전송 시  발신자 화면에서 전송은 되지만 Toast message로 Failed 노출되는 현상",
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
                "title": "Ad-hoc 그룹 생성  후 멤버 추가 화면에 본인이 노출되는 현상",
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
                "title": "Conveersation view  Message Tab 에서 Opt-in > Opt out 진행 시 Crash 발생하는 현상",
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
                "title": "v1.1.3 Contacts 에서 검색어 입력 후 멤버 노출상태에서 전체 체크 버튼 선택 시 동작하지 않는 현상",
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
                "title": "Emergency call시 Idle 상태 되는 현상..",
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
                "title": "group선택 후 ptt버튼 선택시 앱 죽는 현상",
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
                "title": "방치 후 강제 종료되는 현상",
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
                "title": "Emergency Call 시도 시 Hot mic 상태로 변경되지 않는 현상",
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
                "title": "Contacts 에서 검색어 입력 후 멤버 우클릭 시 Context Menu 미노출되는 현상",
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
                "title": "Contacts 에서 검색어 입력 후 멤버 노출상태에서 전체 체크 버튼 선택 시 동작하지 않는 현상",
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
                "title": "Audio gain control 변경  후 기기 변경 시 기존값이 유지되지 않는 현상",
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
                "title": "Assigned private contact 와 [OK]  버튼이 겹쳐져서 노출",
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
                "title": "GeonFence Group 의 Member가 많을 경우에 Call 시도되지 않음",
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
                "title": "Call me ASAP 시 수신 단말 노티영역이 방향키로 포커스 되지 않음",
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
                "title": "계정 로그인 > 다른 org id 계정으로 로그인 후 단말 Home 화면으로 이동되며 앱 재실행 시 앱이 멈춤",
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
                "title": "스마트폰에서 Geo-Fencing Group 생성 후 발신 시도 시 수신자 Channel View 화면에서 Group Name 미노출",
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
                "title": "v1.1.3  pre-arranged group에서 우클릭 시  ad hoc group 의 관한 메뉴도 노출",
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
                "title": "v1.1.3  ad-hoc group은 set as home group 설정 불가",
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
                "title": "v1.1.3  Geo fence Group 동일한 Group 명으로 생성 가능",
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
                "title": "v1.1.3  opt-out 된 그룹에 메시지 창 열어둔 상태에서  opt-in 후 에도 메시지 입력이 안됨",
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
                "title": "v1.1.3 Ad-hoc Group 생성 시 동일한 Group 명 생성 가능",
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
                "title": "Member 미선택 상태에서도 Ad-hoc Group 생성 가능",
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
                "title": "Logout 버튼 선택 시 최초 로그인 페이지로 이동되지 않고 검은화면 유지됨",
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
                "title": "Member List에 Member가 보이지 않음",
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
                "title": "Dispatcher > Affiliation 화면 >  Contact 추가 완료되는 팝업 노출 상태에서 뒤에 Affiliation 영역 버튼들이 선택 가능함",
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
                "title": "Answer Call 발생 시 Smpartphone 에 시간 카운트가 미노출 됨",
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
                "title": "Call 연결 시Smart Phone 영역 닫기 버튼이 [Leave] 로 노출되는 현상",
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
                "title": "Dispatcher Temporary Group > Affiliation > Opt-in, Opt-out 설정 후 재진입 시 적용되지 않음",
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
                "title": "Temporary Group Call 시도 시 Channel View 늦게 노출",
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
                "title": "Setting > Call Recording Backup 에서 파일 생성되지 않고 탐색화면에서 [취소] 버튼 선택 시 최신시간으로 변경 됨",
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
                "title": "Temporary Group > Affiliation 에서 Dispatcher 계정외에 다른 멤버를 Opt-in / Opt-out 시 적용되지 않음",
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
                "title": "Opt-in 상태의 Group Message 입력 상태(전송 버튼 X) 에서 해당 그룹 Opt-out 시 Message 전송이 가능함",
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
                "title": "Message 전송 시 노출되지 않고 앱 재로그인 동작",
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
                "title": "Ad-hoc Group 삭제 시 NOTIFY는 내려오지만 화면이 갱신되지 않아 삭제한 Group이 남아있음",
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
                "title": "로그인 시 pv에서 노출되는 Appinfo RAM 노출값이 소수점까지 노출되지 않음   pc : 16.0GB (15.7GB 사용가능) pv : 15GB_RAM",
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
                "title": "Add to Existing Adhoc Group 에서 dispatcher 계정 체크 후 Done 선택 시 디버그 에러 발생",
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
                "title": "Temp Group 에서  로그인된 계정의 포함된 그룹에 멤버 추가 시 GroupProfile 에서 fails이 노출되고 있음 (fails 노출되는 GroupProfile은 Not mine group )",
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
                "title": "Call 시 Speaker icon 설정 값이 이전 설정값으로 유지되지 않음",
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
                "title": "Temp Group 멤버 Opt-in/Opt-out 설정 후 Affiliation 메뉴 재진입 시 설정한 값이 변경되어있지 않음",
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
                "title": "ptt-z 연결상태에서 단말 재시작 후  악세사리 메뉴 하단에는 ptt-z 노출되지만 진입 시 페어링된 기기 없다고 노출",
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
                "title": "Conversation View에서 Nickname 변경 후 미반영",
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
                "title": "Geofence Group Opt-in/out 동작 시 'Service unavailable' Toast 발생",
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
                "title": "Location Sharing 화면에서 Group 검색 시 입력할때마다 DB 재조회로 인한 필터링 지연 발생",
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
                "title": "검색 결과에서 추가한 사용자 삭제 후 검색결과 리스트 확인 시 [+] 버튼 미노출",
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
                "title": "Receive Group Call 의 경우 마이크 버튼 선택 시 알림 팝업이 발생하지 않는 현상",
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
                "title": "ID / PW 정상 입력 후 로그인 시도 시 '로그인 정보가 다르다' 팝업 노출되고 재시도 시 정상 로그인 되는 현상",
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
                "title": "Emergency Alert 발신 상태에서 재시도 시 팝업이 미노출 되는 현상",
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
                "title": "Dispatcher Call 시도 시 발언상태로 노출되는 현상",
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
const issueSortState = { field: null, dir: null };
const ISSUE_STORAGE_KEY = "grid_r15_issue_rows";
let issueSearchQuery = "";

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
      const pct = Math.round((item.value / total) * 100);
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
  const max = Math.max(...assignees.map((a) => a.issues));
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

function getIssuePriority(field, value) {
  const table = {
    issueStatus: { open: 1, closed: 2 },
    impactLevel: { high: 1, medium: 2, low: 3 },
    platform: { "feature phone": 1, "smart phone": 2, dispatcher: 3 },
  };
  const normalized = String(value || "").trim().toLowerCase();
  return table[field]?.[normalized] ?? 999;
}

function sortIssueRows(rows) {
  if (!issueSortState.field || !issueSortState.dir) {
    return [...rows].sort((a, b) => {
      const aTime = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bTime = b.createdAt ? Date.parse(b.createdAt) : 0;
      if (aTime !== bTime) return bTime - aTime;
      return (b.no || 0) - (a.no || 0);
    });
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
      (row) => `
      <tr>
        <td>${row.no}</td>
        <td>${row.impactLevel}</td>
        <td>${row.platform}</td>
        <td>${row.issueStatus}</td>
        <td>${row.occurrenceVersion}</td>
        <td>${row.modifiedVersion}</td>
        <td>${renderAttachmentCell(row, escapeHtml)}</td>
        <td><a class="issue-link" href="./issue-detail.html?rowKey=${encodeURIComponent(row.rowKey || "")}">${escapeHtml(row.title)}</a></td>
        <td><button class="delete-btn" data-row-key="${escapeHtml(row.rowKey || "")}" type="button">Delete</button></td>
      </tr>
    `,
      )
    .join("");
  document.getElementById("issueTableCount").textContent = `${sortedRows.length} items`;
  syncSortArrowState();
  renderImpactSections(sortedRows, escapeHtml);
}

function renderAttachmentCell(row, escapeHtml) {
  const files = Array.isArray(row.attachments) ? row.attachments : [];
  if (!files.length) return "-";
  return files
    .map(
      (file, idx) =>
        `<a class="attachment-link" href="${escapeHtml(file.dataUrl || "#")}" target="_blank" rel="noopener noreferrer">File ${idx + 1}</a>`,
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
        <span class="impact-meta">${escapeHtml(row.platform)} | ${escapeHtml(row.issueStatus)}</span>
      </li>
    `,
    )
    .join("");
}

function renderImpactSections(rows, escapeHtml) {
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
  document.getElementById("midGrid").classList.toggle("hidden", isIssueList);
  document.getElementById("bottomGrid").classList.toggle("hidden", isIssueList);
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
  document.getElementById("versionBadge").textContent = baseData.sprint;
  document.getElementById("title").textContent = data.reportTitle;
  document.getElementById("subtitle").textContent = `${startK} ~ ${endK} | ${baseData.unit} | ${data.subtitleSuffix}`;
  if (viewKey === "issueList") {
    const rows = data.issueRows || [];
    const total = rows.length;
    const closed = rows.filter((r) => String(r.issueStatus).toLowerCase() === "closed").length;
    const high = rows.filter(
      (r) =>
        String(r.issueStatus).toLowerCase() === "open" &&
        String(r.impactLevel).toLowerCase() === "high",
    ).length;
    const medium = rows.filter(
      (r) =>
        String(r.issueStatus).toLowerCase() === "open" &&
        String(r.impactLevel).toLowerCase() === "medium",
    ).length;
    const low = rows.filter(
      (r) =>
        String(r.issueStatus).toLowerCase() === "open" &&
        String(r.impactLevel).toLowerCase() === "low",
    ).length;
    const featurePhone = rows.filter((r) => String(r.platform).toLowerCase() === "feature phone").length;
    const smartPhone = rows.filter((r) => String(r.platform).toLowerCase() === "smart phone").length;
    const dispatcher = rows.filter((r) => String(r.platform).toLowerCase() === "dispatcher").length;
    setKpiCards([
      { label: "Total Issues", value: total, sub: "All imported issues" },
      { label: "Closed", value: closed, sub: "Issue Status = Closed" },
      { label: "High", value: high, sub: "Open + Impact Level = High" },
      { label: "Medium", value: medium, sub: "Open + Impact Level = Medium" },
      { label: "Low", value: low, sub: "Open + Impact Level = Low" },
      { label: "📟 Feature Phone", value: featurePhone, sub: "Platform count" },
      { label: "📱 Smart Phone", value: smartPhone, sub: "Platform count" },
      { label: "🖥️ Dispatcher", value: dispatcher, sub: "Platform count" },
    ]);
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
  document.getElementById("compareTarget").textContent = `vs ${data.compareTarget}`;

  makeDonut(document.getElementById("envDonut"), data.env);
  makeDonut(document.getElementById("qaDonut"), data.qaStatus);
  renderLegend(document.getElementById("envLegend"), data.env);
  renderLegend(document.getElementById("qaLegend"), data.qaStatus);
  renderComparison(document.getElementById("compareGrid"), data.comparison);
  renderAssignees(document.getElementById("assigneeList"), data.assignees);
  renderIssueTable(filterIssueRows(data.issueRows || []));
  toggleSections(viewKey);
  setActiveMenu(viewKey);
}

function getIssueRows() {
  return dashboardData.views.issueList.issueRows || [];
}

function ensureRowKeys(rows) {
  return rows.map((row, idx) => ({
    ...row,
    rowKey: row.rowKey || `${row.no || idx + 1}_${row.date || ""}_${idx}`,
  }));
}

function setIssueRows(rows) {
  const normalized = ensureRowKeys(rows);
  dashboardData.views.issueList.issueRows = normalized;
  localStorage.setItem(ISSUE_STORAGE_KEY, JSON.stringify(normalized));
}

function hydrateIssueRows() {
  const raw = localStorage.getItem(ISSUE_STORAGE_KEY);
  if (!raw) {
    setIssueRows(getIssueRows());
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length) {
      setIssueRows(parsed);
    }
  } catch (_) {
    setIssueRows(getIssueRows());
  }
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
  section.addEventListener("click", (event) => {
    const button = event.target.closest(".sort-arrow-btn");
    if (!button) return;
    issueSortState.field = button.dataset.sortField;
    issueSortState.dir = button.dataset.sortDir;

    const rows = baseData.views.issueList.issueRows || [];
    renderIssueTable(rows);
  });
}

function setupIssueDelete() {
  const section = document.getElementById("issueTableSection");
  section.addEventListener("click", (event) => {
    const btn = event.target.closest(".delete-btn");
    if (!btn) return;
    const rowKey = btn.dataset.rowKey;
    if (!rowKey) return;
    const rows = getIssueRows().filter((row) => String(row.rowKey) !== String(rowKey));
    setIssueRows(rows);
    renderDashboard(dashboardData, "issueList");
  });
}

function setupExportExcel() {
  const btn = document.getElementById("exportExcelBtn");
  btn.addEventListener("click", () => {
    const rows = getIssueRows();
    const sheetRows = rows.map((row) => ({
      No: row.no,
      Date: row.date,
      "Issue Status": row.issueStatus,
      "Impact Level": row.impactLevel,
      Platform: row.platform,
      "Occurrence version": row.occurrenceVersion,
      "Modified version": row.modifiedVersion,
      Title: row.title,
      URL: row.issueUrl || "",
    }));

    const ws = XLSX.utils.json_to_sheet(sheetRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "IssueList");
    XLSX.writeFile(wb, "GRID_IssueList.xlsx");
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

setupMenu(dashboardData);
setupIssueSort(dashboardData);
setupKpiScroll();
hydrateIssueRows();
setupIssueDelete();
setupExportExcel();
setupIssueSearch(dashboardData);
if (window.location.hash === "#issueList") {
  renderDashboard(dashboardData, "issueList");
} else {
  renderDashboard(dashboardData, "dashboard");
}
