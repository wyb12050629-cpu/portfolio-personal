var faqData = [
    {
        keywords: ["한마디", "정의", "자기소개", "본인"],
        q: "본인을 한마디로 정의한다면?",
        a: "'성과가 날 때까지 절대 멈추지 않는 사람'이에요. 열심히 한다는 말은 누구나 하지만, 저는 숫자로 증명하거든요. 하나투어 Q1 목표 103% 달성, Q2 성장률 +282%, 인사동 일 매출 73% 상승 — 거기에 토스 미니앱 실서비스 출시까지. 어떤 환경에서도 결과를 만들어낸 게 제 트랙레코드예요. 결과에 집착하는 사람이 필요하다면, 그게 저입니다!"
    },
    {
        keywords: ["강점", "장점", "잘하는"],
        q: "가장 큰 강점은 무엇인가요?",
        a: "문제를 발견하면 그냥 넘어가질 못해요. 하나투어에서 수기 업무가 영업 시간을 갉아먹을 때 불평 대신 AI 대시보드를 만들었고, 퇴근 후엔 토스 미니앱을 직접 기획·개발·심사·배포해서 실서비스로 출시해버렸거든요. 개발자가 아닌 영업사원이요. 판만 깔아주면 스스로 도구를 만들고 성과를 가져오는 사람 — 저 같은 사람이 팀에 한 명만 있어도 확실히 다르거든요 ^ㅁ^"
    },
    {
        keywords: ["스타트업", "게릴라즈", "인턴"],
        q: "스타트업에서 일해본 경험이 있나요?",
        a: "있어요! 게릴라즈 CX팀 인턴 때, 외국인 고객들이 한국 지리를 몰라 숙소 탐색 단계에서 이탈하는 걸 데이터로 발견했어요. 가만히 있지 않고 대학별 랜드마크 기반 필터링 시스템을 직접 제안해서 구현했고, 고객 문의 전환율을 25% 끌어올렸습니다. 시켜서 하는 게 아니라 문제를 먼저 찾아서 해결하는 게 제 방식이에요."
    },
    {
        keywords: ["하나투어", "세일즈", "영업", "노하우"],
        q: "하나투어에서 배운 세일즈 노하우는?",
        a: "전국 83개 파트너사를 직접 관리하면서 배운 건, B2B 세일즈는 결국 '파트너가 이기게 해주는 것'이라는 거예요. 그래서 각 파트너의 규모와 특성을 분석해 '리그제 랭킹 프로모션'을 직접 설계했어요. 한정된 예산으로 모든 파트너가 동기를 갖게 만든 결과, Q2 성장률이 +282%가 나왔습니다. 영업은 관계이고, 관계는 전략이에요."
    },
    {
        keywords: ["중요", "가치관", "업무방식", "일할때"],
        q: "업무할 때 가장 중요하게 생각하는 것은?",
        a: "시간은 곧 성과예요. 반복 업무에 하루를 쓰면, 그날 고객 한 명을 못 만난 거거든요. 그래서 저는 모든 루틴 업무를 AI로 자동화하고, 그 시간을 전략과 관계에 씁니다. 하나투어에서 AI 대시보드로 업무 시간 95%를 줄인 것도 그 연장선이에요. 효율이 곧 경쟁력이라고 믿어요."
    },
    {
        keywords: ["동료", "평가", "어떤사람", "팀"],
        q: "동료들이 말하는 왕유빈은?",
        a: "에너지가 전염된다는 말이랑, 맡기면 반드시 해온다는 말을 제일 많이 들어요. 저는 분위기만 올리고 끝나는 게 아니라, 실적으로 마무리하는 스타일이거든요. 팀에게 부담이 아니라 추진력이 되고 싶어요. 같이 일해보시면 바로 느끼실 거예요!"
    },
    {
        keywords: ["AI", "인공지능", "기술", "개발"],
        q: "AI를 어떻게 업무에 활용하나요?",
        a: "저한테 AI는 '개발 지식'이 아니라 '실행 속도'예요. 남들이 기획안 만드는 시간에 저는 이미 동작하는 걸 만들어버려요. 영업사원 신분으로 사내 AI 정산 시스템을 만들었고, 사이드로 토스 미니앱까지 실서비스로 출시했거든요 — 기획, 개발, 심사, 배포 전부 혼자서요. AI를 실행 도구로 쓸 줄 아는 영업사원은 그냥 영업사원 한 명이 아니에요. 그게 저의 차별점입니다!"
    },
    {
        keywords: ["마지막", "한마디", "각오", "포부"],
        q: "마지막으로 하고 싶은 말은?",
        a: "저는 어디서 일하든 그 조직의 성장에 실질적인 속도를 더하고 싶어요. 잘하겠다는 말보다, 제 포트폴리오의 숫자들이 이미 대신 말해주고 있다고 생각해요. 왕유빈, 한 번만 믿어봐 주세요. 후회 없게 해드릴게요 ^ㅁ^"
    }
];

function findAnswer(input) {
    var text = input.trim().toLowerCase();
    var bestMatch = null;
    var bestScore = 0;

    faqData.forEach(function (item) {
        var score = 0;
        item.keywords.forEach(function (keyword) {
            if (text.includes(keyword.toLowerCase())) score++;
        });
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    });

    if (bestScore === 0) {
        return "앗, 제가 준비한 답변 범위를 벗어났어요 😅 yubinlili125@gmail.com 으로 직접 문의해주세요!";
    }
    return bestMatch.a;
}

function typeAnswer(container, text, idx) {
    if (idx >= text.length) return;
    container.textContent += text[idx];
    var msgs = document.getElementById('chatMessages');
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(function () { typeAnswer(container, text, idx + 1); }, 18);
}

function sendChat() {
    var input = document.getElementById('chatInput');
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMsg(text, 'user');

    setTimeout(function () {
        var reply = findAnswer(text);
        var msgs = document.getElementById('chatMessages');
        var div = document.createElement('div');
        div.className = 'msg msg-assistant';
        msgs.appendChild(div);
        typeAnswer(div, reply, 0);
    }, 400);
}

function askQuestion(q) {
    document.getElementById('chatInput').value = q;
    sendChat();
}

function appendMsg(text, type) {
    var msgs = document.getElementById('chatMessages');
    var div = document.createElement('div');
    div.className = 'msg msg-' + type;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
}

// 추천 키워드 pill 자동 생성
(function () {
    var container = document.querySelector('.chat-suggestions');
    if (!container) return;
    container.innerHTML = '';
    faqData.forEach(function (item) {
        var btn = document.createElement('button');
        btn.textContent = item.keywords[0];
        btn.setAttribute('data-kw', item.keywords[0]);
        btn.addEventListener('click', function () {
            askQuestion(this.getAttribute('data-kw'));
        });
        container.appendChild(btn);
    });
})();
