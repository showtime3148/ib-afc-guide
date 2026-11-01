// AFC(후보학교 신청서) 길잡이 — 단계·문제 해결·서류 데이터
// 예당고등학교가 2026년 10월 DP 후보학교 신청을 하며 실제로 겪은 과정을 바탕으로 정리했습니다.

window.STAGES = [
  {
    id: "prep",
    title: "0. 신청 전 준비",
    when: "AFC 작성 1~3개월 전",
    items: [
      { id: "prep-feas", text: "타당성 조사(Feasibility study) 마무리", tip: "AFC의 학교 소개, 철학, 이해관계자 문항 답변 대부분을 타당성 조사서에서 그대로 가져다 씁니다. 먼저 끝내 두면 AFC 작성 시간이 절반으로 줄어듭니다." },
      { id: "prep-hos", text: "교장(또는 지정자) Cat 1 관리자 워크숍 이수증 확보", tip: "Head of School 또는 Leading the learning 등 Cat 1 관리자 워크숍 수료증이 Documents 5번 필수 서류입니다. 제출 전에 반드시 있어야 합니다." },
      { id: "prep-board", text: "법인 이사회(관리기구) 보고·승인", tip: "Agreement에 이사장 이름으로 전자 서명하게 됩니다. 이사회 보고와 예산 승인 기록을 미리 남겨 두세요." },
      { id: "prep-office", text: "교육청 지원 공문(재정 지원 확인서) 받기", tip: "Documents 2번 'Support from authorities' 서류입니다. 교육청 IB 담당 장학사에게 요청하세요." },
      { id: "prep-myib", text: "My IB 계정 만들기와 My School 접속 확인", tip: "코디네이터 개인 계정(My IB)으로 로그인해 학교 페이지(My School)에 들어갈 수 있어야 합니다." }
    ]
  },
  {
    id: "profile",
    title: "1. 학교 프로필과 직원 등록 (My School)",
    when: "AFC 시작 첫 주",
    items: [
      { id: "pr-info", text: "학교 정보·주소·학년도 입력", tip: "영문 주소는 학교 공문의 영문 표기와 똑같이 맞추세요. 설립 연도는 하나로 통일합니다." },
      { id: "pr-section", text: "학년별 학생 수(School section) 입력", tip: "학년별로 따로 입력합니다. DP 대상 학년은 'Projected(예상)'로 표시합니다." },
      { id: "pr-staff", shot: "screens/08-school-staff.jpg", shotCap: "School Profile → School staff: 관리 역할(교장·코디네이터·결제 담당)이 Confirmed 목록에 있어야 합니다. 일반 교사는 각자 My IB에서 등록합니다.", text: "Head of School, Coordinator, Billing Contact 등록과 Confirmed 상태 확인", tip: "세 역할 모두 Confirmed여야 청구서가 발행됩니다. 이름은 Last name(성)과 First name(이름)을 정확히 나눠 입력하세요. 예: Last name HONG / First name Gil-dong" },
      { id: "pr-overall", shot: "screens/09-head-overall.jpg", shotCap: "같은 화면 아래쪽 Head of School (Overall)에서 교장을 고르고 Save.", text: "School staff 화면의 'Head of School (Overall)' 선택 후 Save", tip: "빨간 별표 필수 칸인데 놓치기 쉽습니다. 이걸 안 하면 마지막 제출 때 'Profile Review Section 미완료' 오류가 납니다." },
      { id: "pr-review", shot: "screens/03-profile-save.jpg", shotCap: "신청서 Profile Review 맨 아래 Save and Continue를 눌러야 완료됩니다.", text: "Profile Review 화면에서 내용 확인 후 저장", tip: "내용을 다 채웠어도 페이지 맨 아래 'Save and Continue'를 눌러야 완료로 인정됩니다. 그전까지 왼쪽 메뉴의 Profile Review는 체크 없이 파란 글씨로 남습니다." }
    ]
  },
  {
    id: "pay",
    title: "2. 후보 신청비 결제",
    when: "프로필 완료 직후",
    items: [
      { id: "pay-invoice", text: "청구서(Invoice) 금액과 통화(SGD) 확인", tip: "IB 수수료는 싱가포르 달러로 청구됩니다. 공시 금액과 실제 청구 금액이 다를 수 있으니 청구서 금액을 기준으로 예산을 잡으세요." },
      { id: "pay-card", text: "카드 결제 또는 송금", tip: "학교 카드로 결제하면 바로 반영됩니다. 행정실과 결제 방법을 미리 정해 두세요." },
      { id: "pay-receipt", text: "결제 영수증 PDF 저장", tip: "Documents 4번 'Proof of payment'로 업로드합니다." }
    ]
  },
  {
    id: "afc",
    title: "3. AFC 섹션 작성",
    when: "2~4주",
    items: [
      { id: "afc-school", shot: "screens/02-left-menu.jpg", shotCap: "신청서 왼쪽 메뉴. 초록색 체크 = 완료, 노란색 = 미완료.", text: "School and Community Description", tip: "학교 역사, 지역, 학생 구성, DP가 학교에 줄 기여. 타당성 조사서 1·6번을 다듬어 쓰면 됩니다." },
      { id: "afc-prog", text: "Programme Information", tip: "법인명, 성별 구성, 기숙사, 학급 규모, IB 학생 추가 수업료 여부. 교육청 지원 공문 내용과 맞추세요." },
      { id: "afc-subj", text: "Subject proposal (개설 과목)", tip: "한국어로 운영 가능한 과목인지 먼저 확인하세요. 예: 그룹 3(개인과 사회)은 한국어 공식 가이드가 역사뿐입니다." },
      { id: "afc-a", text: "Standard A: Philosophy", tip: "사명 선언문, 철학 일치 정도, 이해관계자 표, 전원 참여 여부. '부분적으로 일치(Partially)'라고 솔직하게 답하고 개선 과정을 쓰는 편이 자연스럽습니다." },
      { id: "afc-b1", text: "Standard B1: Leadership and structure", tip: "관리기구(법인 이사회) 설명, 리더십 팀, 채용 책임, 코디네이터 업무 비율, 언어 정책." },
      { id: "afc-b2", shot: "screens/04-b2-3a.jpg", shotCap: "3번 → 3a를 펼치면 빨간 필수 칸이 나옵니다.", text: "Standard B2: Resources and support", tip: "교사 수는 School Staff에 등록된 인원으로 자동 계산됩니다. 3번을 펼치면 나오는 3a 안의 필수 입력 칸 '인증 후 새로 채용한 교원의 적응·연수 계획'을 꼭 작성하고 Save and Continue를 누르세요." },
      { id: "afc-budget", shot: "screens/05-budget.jpg", shotCap: "시작 연도 Save → Add to Budget으로 항목 추가 → Save and Continue.", text: "Implementation Budget (5개년 예산, SGD)", tip: "후보 신청비, 컨설테이션비, 워크숍비, 인증 신청비, 연회비를 연도별로 넣습니다. B2.3a의 연수 계획과 금액이 맞아야 합니다." }
    ]
  },
  {
    id: "docs",
    title: "4. 필수 서류 업로드 (Documents)",
    when: "번역 공증 기간 포함 1~2주",
    items: [
      { id: "doc-legal", shot: "screens/06-documents.jpg", shotCap: "항목별 Upload로 올리면 위 표에 쌓입니다.", text: "1. 법적 지위 서류 + 공증 영문 번역본", tip: "가장 오래 걸립니다. 설립 인가서·법인 등기부 등을 번역 공증 받아 한 PDF로 묶으세요. 미리 맡기세요." },
      { id: "doc-auth", text: "2. 당국 지원 확인서 (교육청 공문)", tip: "교육청이 DP 운영을 재정 지원한다는 내용이 들어간 공문과 영문 번역본." },
      { id: "doc-org", text: "3. 영문 조직도 (DP 코디네이터와 보고 체계 포함)", tip: "교장 → 교감(코디네이터) → 부장·교과 교사의 보고선이 보여야 합니다. 개인정보(생년월일 등)는 넣지 마세요." },
      { id: "doc-pay", text: "4. 후보 신청비 결제 증빙", tip: "카드 영수증이나 송금 확인서." },
      { id: "doc-cat1", text: "5. 관리자 Cat 1 워크숍 수료증", tip: "교장 또는 지정자의 수료증 PDF." },
      { id: "doc-save", text: "Save and Continue 누르기", tip: "업로드만 하고 저장하지 않으면 '미완료'로 남습니다." }
    ]
  },
  {
    id: "submit",
    title: "5. 검토와 제출",
    when: "마지막 날",
    items: [
      { id: "sub-left", shot: "screens/02-left-menu.jpg", shotCap: "제출 전 모든 메뉴가 초록색인지 확인합니다.", text: "왼쪽 메뉴가 모두 초록색인지 확인", tip: "노란색은 미완료입니다. Profile Review(파란 글씨)도 체크 표시가 있어야 합니다." },
      { id: "sub-get", text: "Get Application으로 신청서 사본 받아 검토", tip: "누르면 약 15분 뒤 등록된 이메일로 신청서 전체가 옵니다. 오타·빈칸·이름 표기를 확인하세요." },
      { id: "sub-approve", text: "교장·이사장께 보고하고 내부 결재", tip: "전자 서명은 교장과 이사장이 신청서를 읽고 승인한 것으로 간주됩니다." },
      { id: "sub-agree", shot: "screens/07-agreement.jpg", shotCap: "이름·직함 입력, Signature 체크(날짜 자동), Submit Application.", text: "Agreement 입력: 교장 이름·직함, 이사장 이름·직함, 서명 체크", tip: "예: HONG Gil-dong, Principal / KIM Cheol-su, Chair of the Board of Trustees. Signature를 체크하면 아래 칸에 오늘 날짜가 자동으로 들어갑니다. 교육감(Superintendent) 칸은 해당 없으면 비워 둡니다." },
      { id: "sub-submit", text: "Submit Application", tip: "오류 창이 뜨면 '문제 해결' 탭에서 메시지를 찾아보세요." }
    ]
  },
  {
    id: "after",
    title: "6. 제출 이후",
    when: "제출 후 수개월",
    items: [
      { id: "af-review", shot: "screens/01-dashboard-stage.jpg", shotCap: "대시보드 Diploma Programme 상자에서 진행 단계를 확인합니다.", text: "IB 검토와 후보학교 승인 메일 확인", tip: "추가 자료 요청이 올 수 있으니 코디네이터 메일함을 자주 확인하세요." },
      { id: "af-consult", text: "컨설턴트 배정과 컨설테이션비 납부", tip: "후보학교 승인 뒤 청구됩니다. 교육청 지원금 집행 시기와 맞춰 두세요." },
      { id: "af-pd", text: "교사 Cat 1 워크숍 일정 확정", tip: "인증 신청(AFA)과 확인 방문 전까지 DP 담당 교사 전원이 이수해야 합니다." },
      { id: "af-staff", text: "교사들의 My IB 가입과 학교 연결 안내", tip: "일반 교사는 학교가 직접 추가할 수 없고, 각자 My IB에 가입해 학교와 역할을 등록해야 교사 수가 반영됩니다." }
    ]
  }
];

window.TROUBLES = [
  {
    q: "The following sections are not completed or have not been saved: Document Section, Profile Review Section, Resources Support Section…",
    tags: ["제출 오류", "Submit"],
    a: "아직 완료되지 않았거나 저장되지 않은 섹션이 있어 제출할 수 없다는 뜻입니다. 메시지에 나온 섹션을 왼쪽 메뉴에서 찾아 끝내고 저장하세요.",
    steps: ["Document Section → Documents: 필수 서류 5종 업로드 후 Save and Continue", "Profile Review Section → 맨 위 Profile Review: 내용 확인 후 페이지 맨 아래 Save and Continue. School staff 화면의 Head of School (Overall) 선택 여부도 확인", "Resources Support Section → B2: Resources and support: 빨간 테두리 문항(예: 3a)을 펼쳐 작성 후 Save"]
  },
  {
    q: "왼쪽 메뉴의 섹션이 노란색으로 표시돼요",
    tags: ["메뉴 색"],
    a: "노란색은 필수 칸이 비어 있거나 저장되지 않았다는 뜻입니다. 초록색과 체크 표시가 되어야 완료입니다.",
    steps: ["해당 섹션을 열어 빨간 'Required data' 표시가 있는 칸을 찾습니다", "접혀 있는 문항(+ 표시)도 펼쳐서 확인합니다", "Save를 누르고 메뉴 색이 바뀌는지 확인합니다"]
  },
  {
    q: "문항 테두리가 빨간색이에요 (예: 3a. The school complies with the IB professional development requirement…)",
    tags: ["B2", "필수 문항"],
    a: "빨간 테두리는 그 안에 비어 있는 필수 칸이 있다는 뜻입니다. + 를 눌러 펼쳐야 칸이 보입니다. B2의 3a는 연수 요약표(View Chart)와 서술 칸 하나로 되어 있습니다.",
    steps: ["3번 문항의 + → 다시 3a의 + 를 눌러 펼칩니다", "View Chart는 School staff에 입력한 교직원 연수 정보로 자동 생성됩니다. 비어 있으면 School staff에서 연수 이력을 입력하세요", "아래 빨간 'Required data' 칸(인증 후 새로 채용한 교원의 적응·연수 계획)에 계획을 씁니다. '항목별 가이드' B2.3 예시 참고", "Save and Continue를 누르고 테두리와 왼쪽 메뉴 색이 바뀌는지 확인합니다"]
  },
  {
    q: "Number of full-time teachers가 0으로 나오고 입력이 안 돼요",
    tags: ["B2.2", "교사 수"],
    a: "회색 칸은 직접 입력하는 칸이 아니라 School Staff에 등록된 교사 수가 자동으로 표시되는 칸입니다.",
    steps: ["School staff 화면의 'Add new contact'는 코디네이터, 교장, 결제 담당, 시험 담당 등 관리 역할만 추가할 수 있습니다", "일반 교사는 각자 My IB에 가입해 학교와 역할을 등록해야 합니다", "제출 자체를 막는 항목은 아니므로, 다른 필수 항목을 먼저 끝내세요"]
  },
  {
    q: "교장 이름이 'GIL DONG, HONG'처럼 거꾸로 나와요",
    tags: ["이름 표기"],
    a: "목록은 '성, 이름' 순서로 표시됩니다. 성과 이름 칸이 바뀌어 입력된 것입니다.",
    steps: ["School staff에서 해당 직원의 Edit를 누릅니다", "Last name에 성(HONG), First name에 이름(Gil-dong)을 입력합니다", "Agreement에 서명할 이름 표기와 똑같이 맞춥니다"]
  },
  {
    q: "Head of School (Overall) 칸이 'Select a Contact'로 비어 있어요",
    tags: ["Profile Review", "직원"],
    a: "학교 전체 교장을 지정하는 필수 칸입니다. 비어 있으면 Profile Review가 미완료로 남습니다.",
    steps: ["목록에서 교장을 선택합니다", "바로 아래 Save를 누릅니다"]
  },
  {
    q: "법적 지위 서류(Legal status documentation)는 뭘 올려야 하나요?",
    tags: ["Documents"],
    a: "학교의 법적 지위와, 지역 당국이 교육기관으로 인정했다는 사실을 보여 주는 공식 서류입니다. 영어가 아니면 공증받은 번역본이 필요합니다.",
    steps: ["사립: 학교 설립 인가서 + 학교법인 등기사항전부증명서 (공립: 학교 설립 근거 공문 등)", "번역 공증 사무소나 번역행정사에 영문 번역과 공증을 맡깁니다 (보통 1~3일)", "원본 스캔 → 영문 번역본 → 공증 확인서 순서로 한 PDF로 합쳐 업로드합니다"]
  },
  {
    q: "Agreement의 이사장(Chair of the governing body)과 교육감(Superintendent) 칸은 어떻게 쓰나요?",
    tags: ["Agreement", "서명"],
    a: "사립은 학교법인 이사장이 관리기구 대표입니다. 교육감 칸은 해당 없으면 비워 둡니다.",
    steps: ["교장: 'HONG Gil-dong, Principal' 형식으로 입력하고 Signature 체크 (아래 칸에 날짜가 자동 입력됨)", "이사장: 'KIM Cheol-su, Chair of the Board of Trustees' 형식 + Signature 체크", "영문 이름은 여권 표기와 맞춥니다", "전자 서명은 승인으로 간주되니 사전 보고·결재를 받아 두세요"]
  },
  {
    q: "Get Application을 눌렀는데 아무 일도 없어요",
    tags: ["검토"],
    a: "'Success, please wait 15 minutes' 메시지가 떴다면 정상입니다. 약 15분 뒤 등록된 이메일로 신청서 사본이 옵니다.",
    steps: ["스팸함도 확인합니다", "받은 사본으로 이름, 과목, 예산, 빈칸을 점검합니다"]
  },
  {
    q: "Agreement에 입력한 내용이 사라졌어요",
    tags: ["Agreement"],
    a: "다른 섹션을 고치러 다녀오면 서명 칸이 초기화될 수 있습니다.",
    steps: ["모든 섹션을 초록색으로 만든 뒤, 맨 마지막에 Agreement를 입력하고 바로 제출합니다"]
  },
  {
    q: "그룹 3(개인과 사회)에서 경제나 철학을 한국어로 열 수 있나요?",
    tags: ["Subject proposal", "과목"],
    a: "IB의 한국 학교용 자료에서 그룹 3의 한국어 공식 가이드는 역사(SL·HL)뿐입니다. 경제·철학은 영어로 수업·시험을 볼 가능성이 큽니다.",
    steps: ["한국어 DP 학교 대부분은 그룹 3을 역사로 개설합니다", "다른 과목을 원하면 컨설턴트나 IB 아시아태평양 사무소에 한국어 응시 가능 여부를 먼저 확인하세요"]
  },
  {
    q: "수수료가 안내 자료와 실제 청구 금액이 달라요",
    tags: ["비용"],
    a: "공시 수수료와 실제 청구 금액이 다를 수 있습니다(감면·크레딧 등). 예산은 실제 청구서 금액을 기준으로 잡으세요.",
    steps: ["청구서 PDF를 보관하고 행정실과 공유합니다", "컨설테이션비 등 다음 청구 예정 금액은 IB 담당자에게 미리 확인합니다"]
  }
];

window.DOCS = [
  { name: "Legal status documentation", ko: "법적 지위 서류 (+ 공증 번역)", lead: "1~2주", who: "행정실·번역 공증 사무소" },
  { name: "Support from authorities", ko: "교육청 지원 확인 공문", lead: "1~2주", who: "교육청 IB 담당" },
  { name: "Organization chart", ko: "영문 조직도", lead: "1~2일", who: "코디네이터" },
  { name: "Proof of payment", ko: "후보 신청비 결제 영수증", lead: "결제 당일", who: "행정실" },
  { name: "Proof of completion of Category 1 Administrators workshop", ko: "관리자 Cat 1 워크숍 수료증", lead: "워크숍 이수 후", who: "교장" }
];

// 실제 IB My School 화면 (예당고 2026. 11. 캡처, 개인정보 흐림 처리). 화면 구성은 IB가 바꿀 수 있습니다.
window.SCREENS = [
  { img: "screens/01-dashboard-stage.jpg", title: "My School 대시보드: 신청 단계 확인",
    notes: ["Dashboard 아래쪽 Diploma Programme 상자에서 현재 단계(Stage)와 세부 단계(Sub-Stage)를 봅니다.", "'Request for Candidacy / Work in progress (School)'는 학교가 아직 작성 중이고 제출 전이라는 뜻입니다.", "'View Candidacy Application'을 누르면 신청서로 들어갑니다."] },
  { img: "screens/08-school-staff.jpg", title: "School Profile → School staff: 관리 역할 등록",
    notes: ["위쪽 메뉴 School Profile → 왼쪽 School staff로 들어갑니다.", "교장(Head of School), 코디네이터(Programme Coordinator), 결제 담당(Billing Contact)이 Confirmed 목록에 있어야 합니다.", "'Add new contact'는 이런 관리 역할만 추가합니다. 일반 교사는 각자 My IB에 가입해 학교와 역할을 등록합니다.", "이름 표기는 Edit에서 Last name(성)과 First name(이름)을 나눠 고칩니다."] },
  { img: "screens/09-head-overall.jpg", title: "School staff 아래쪽: Head of School (Overall)",
    notes: ["빨간 별표 필수 칸입니다. 교장을 골라 Save를 누르세요.", "비어 있으면 제출할 때 Profile Review 미완료 오류가 납니다."] },
  { img: "screens/02-left-menu.jpg", title: "신청서 왼쪽 메뉴: 색으로 진행 상황 읽기", narrow: true,
    notes: ["초록색 + 체크 = 완료", "노란색 = 필수 칸이 비어 있거나 저장되지 않음 (예: B2)", "체크 없는 파란 글씨 = 아직 Save and Continue를 누르지 않은 섹션 (예: Profile Review)", "모든 항목이 초록색이 되어야 제출할 수 있습니다."] },
  { img: "screens/03-profile-save.jpg", title: "Profile Review: 맨 아래 Save and Continue",
    notes: ["학교 주소, 학년별 학생 수, 직원(School staff) 상자를 + 로 펼쳐 확인합니다.", "확인만 하고 나가면 미완료로 남습니다. 반드시 맨 아래 Save and Continue를 누르세요.", "제출할 때 'Profile Review Section not completed' 오류가 나는 가장 흔한 원인입니다."] },
  { img: "screens/04-b2-3a.jpg", title: "B2 3a: 빨간 테두리 안의 필수 칸",
    notes: ["3번 → 3a를 차례로 펼치면 연수 요약표(View Chart)와 서술 칸이 나옵니다.", "View Chart는 School staff에 입력한 교직원 연수 정보로 자동으로 만들어집니다.", "빨간 'Required data' 칸: 인증 후 새로 채용한 교원의 적응·연수 계획을 씁니다.", "작성 후 Save and Continue."] },
  { img: "screens/05-budget.jpg", title: "Implementation Budget: 5개년 예산표 (SGD)",
    notes: ["먼저 시작 연도(planned start year)를 고르고 Save합니다.", "Add to Budget으로 항목을 추가하고, 오른쪽 연필 아이콘으로 고칩니다.", "후보·컨설테이션 관련 비용, 연회비, 워크숍(Cat 1 관리자·과목 교사) 비용을 연도별로 넣습니다.", "B2.3의 연수 계획과 금액이 맞아야 합니다. 마지막에 Save and Continue."] },
  { img: "screens/06-documents.jpg", title: "Documents: 필수 서류 5종 업로드",
    notes: ["항목별 Upload 버튼으로 올리면 위 표에 문서 종류(Document type)와 함께 쌓입니다.", "법적 지위 서류는 영어·프랑스어·스페인어가 아니면 공증 번역본이 필요합니다.", "다 올린 뒤 맨 아래 Save and Continue."] },
  { img: "screens/07-agreement.jpg", title: "Agreement: 서명과 제출",
    notes: ["교장 이름·직함, 이사장(관리기구 대표) 이름·직함을 입력합니다. 교육감 칸은 해당 없으면 비워 둡니다.", "Signature를 체크하면 아래 칸에 날짜가 자동으로 들어갑니다.", "같은 페이지 위쪽 Get Application으로 신청서 사본을 이메일로 받아 검토한 뒤 Submit Application을 누릅니다."] }
];
