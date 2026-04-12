var faqData = [
    {
        keywords: ["한마디", "정의", "자기소개", "본인"],
        q: "본인을 한마디로 정의한다면?",
        a: "성과를 내기 전까지는 멈추지 않는, 목표 달성 중독자입니다! 단순히 일을 하는 게 아니라 어떻게든 결과를 만들어내는 과정에서 쾌감을 느껴요. 하나투어 1Q 목표 103% 달성, 인사동 일 매출 73% 상승 등 제가 머문 모든 곳에서 성장의 흔적을 남겨왔습니다."
    },
    {
        keywords: ["강점", "장점", "잘하는"],
        q: "가장 큰 강점은 무엇인가요?",
        a: "문제를 마주했을 때 왜 안 되지?라고 고민하기보다 어떻게 해결하지?라며 도구부터 찾는 기민함입니다. 하나투어에서도 수기 업무가 영업 시간을 뺏는다면, 가만히 있지 않고 AI 대시보드를 직접 만들어 문제를 해결해버렸습니다. 저는 판을 깔아주면 스스로 도구를 만들어 결과를 내는 사람입니다!"
    },
    {
        keywords: ["스타트업", "게릴라즈", "인턴"],
        q: "스타트업에서 일해본 경험이 있나요?",
        a: "네! 게릴라즈 CX 인턴 당시, 외국인 고객들이 한국 지리를 몰라 숙소 찾기를 포기하는 걸 보고만 있을 수 없었습니다. 직접 대학별 필터링 시스템을 제안해 구현했고, 고객 문의를 25% 늘렸습니다. 시켜서 하는 일이 아니라, 성장에 필요한 일을 찾아내는 스타트업적 DNA가 제 몸에 흐르고 있어요 ^ㅁ^"
    },
    {
        keywords: ["하나투어", "세일즈", "영업", "노하우"],
        q: "하나투어에서 배운 세일즈 노하우는?",
        a: "이전까지는 직접 현장에서 뛰었다면, 하나투어에서는 조금 멀리서 바라보며 여행산업의 큰 틀을 이해할 수 있었습니다. 상품이 어떻게 기획되고 유통되는지 공급 구조를 파악했고, 예산을 직접 집행하며 프로모션을 설계하는 경험도 쌓았습니다. 덕분에 현장 감각과 사업적 시야를 동시에 갖추게 된 시간이었습니다."
    },
    {
        keywords: ["중요", "가치관", "업무방식", "일할때"],
        q: "업무할 때 가장 중요하게 생각하는 것은?",
        a: "압도적 효율입니다. 단순 반복 업무에 시간을 쓰는 걸 제일 싫어해요. 그 시간을 아껴서 한 명의 고객이라도 더 만나고, 하나라도 더 매력적인 상품을 소싱하는 데 써야 성과가 나니까요. 모든 업무 프로세스에 AI를 녹여 최소 리소스로 최대 성과를 내는 데 집착합니다."
    },
    {
        keywords: ["동료", "평가", "어떤사람", "팀"],
        q: "동료들이 말하는 왕유빈은?",
        a: "함께 일하면 에너지가 전염되는 사람! 그리고 맡기면 반드시 해내는 사람이라는 말을 가장 많이 듣습니다. 팀 전체의 사기를 끌어올리고 끝내 실적으로 증명하는 스타일입니다."
    },
    {
        keywords: ["역할", "기여", "인바운드시장"],
        q: "인바운드 시장에서 본인의 역할은?",
        a: "공급망의 병목 현상을 찾아내고 기술과 영업력을 동원해 그걸 뚫어내는 사업 가속기 역할을 하고 싶습니다. 한국을 찾는 외국인들에게 뻔한 투어가 아닌, 제가 기획한 진짜 한국을 가장 스마트한 방식으로 전달하는 시스템을 구축할 거예요!"
    },
    {
        keywords: ["AI", "인공지능", "기술", "개발"],
        q: "AI 역량이 사업개발에 어떻게 도움이 될까요?",
        a: "AI는 제게 개발 지식이 아니라 실행의 속도입니다. 남들이 기획안만 쓰고 있을 때, 저는 AI와 협업해 프로토타입을 만들고 바로 시장 반응을 확인합니다. 이 기민함이 인바운드 사업을 남들보다 2배, 3배 빠르게 성장시킬 무기라고 생각합니다."
    },
    {
        keywords: ["마지막", "한마디", "각오", "포부"],
        q: "마지막으로 하고 싶은 말은?",
        a: "저는 제 역량을 쏟아부어 함께 이기러 갑니다. 저 왕유빈이 그 속도를 더하겠습니다. 잘 부탁드립니다 ^ㅁ^"
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
