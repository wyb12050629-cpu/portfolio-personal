/* ========================================
   Sparkle Particle Background
   ======================================== */
(function () {
    var canvas = document.getElementById('sparkleCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var PARTICLE_COUNT = 120;
    var starColors = ['#2172C8', '#0EA5C8'];
    var dotColor = '#4A90D9';
    var particles = [];

    for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 1,
            baseOpacity: Math.random() * 0.55 + 0.15,
            speed: Math.random() * 0.017 + 0.008,
            phase: Math.random() * Math.PI * 2,
            vx: (Math.random() - 0.5) * 0.24,
            vy: (Math.random() - 0.5) * 0.24,
            type: Math.random() < 0.5 ? 'star' : 'dot',
            color: starColors[Math.floor(Math.random() * 2)]
        });
    }

    function drawStar(x, y, size, opacity, color) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        for (var j = 0; j < 5; j++) {
            var outerAngle = (j * 4 * Math.PI) / 5 - Math.PI / 2;
            var innerAngle = outerAngle + (2 * Math.PI) / 10;
            if (j === 0) {
                ctx.moveTo(x + Math.cos(outerAngle) * size, y + Math.sin(outerAngle) * size);
            } else {
                ctx.lineTo(x + Math.cos(outerAngle) * size, y + Math.sin(outerAngle) * size);
            }
            ctx.lineTo(x + Math.cos(innerAngle) * size * 0.45, y + Math.sin(innerAngle) * size * 0.45);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawDot(x, y, size, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.phase += p.speed;
            var opacity = Math.sin(p.phase) * 0.3 + p.baseOpacity;
            if (opacity < 0) opacity = 0;

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.height + 10;
            if (p.y > canvas.height + 10) p.y = -10;

            if (p.type === 'star') {
                drawStar(p.x, p.y, p.size, opacity, p.color);
            } else {
                drawDot(p.x, p.y, p.size, opacity);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();

/* ========================================
   Hero Typing Animation
   ======================================== */
(function () {
    var typingEl = document.getElementById('typing-text');
    if (!typingEl) return;

    var text = "AI를 기반한 실행력으로\n국경없는 여행경험을\n설계하는 왕유빈입니다.";
    var i = 0;

    function type() {
        if (i < text.length) {
            if (text[i] === '\n') {
                typingEl.innerHTML += '<br>';
            } else {
                typingEl.innerHTML += text[i];
            }
            i++;
            setTimeout(type, 55);
        }
    }

    window.addEventListener('DOMContentLoaded', function () {
        setTimeout(type, 600);
    });
})();

/* ========================================
   Proposal Tab Switcher
   ======================================== */
function switchTab(idx, el) {
    document.querySelectorAll('.ptab').forEach(function(t){ t.classList.remove('on'); });
    document.querySelectorAll('.ptab-content').forEach(function(t){ t.classList.remove('active'); });
    el.classList.add('on');
    document.getElementById('ptab-' + idx).classList.add('active');
}

/* ========================================
   Feature Sub-Tab Switcher (탭2 핵심 기능)
   ======================================== */
var featData = [
    { t:"01 · 주간 보고 자동 집계", d:"매주 수기로 작성하던 영업 주간 보고서를 자동으로 생성합니다. 수요일 기준으로 해당 주차 데이터가 자동 집계되어 클립보드 복사 한 번으로 보고 완료.", p:["일일 활동 로그 입력 → 주간 보고 통계 즉시 재계산","week_wednesday 컬럼 기준 자동 주차 분류","공식인증 / 일반대리점 리그별 체결률 분리 집계","클립보드 복사로 보고 리소스 97% 절감"] },
    { t:"02 · 이중 단가 관리", d:"대리점 단가와 하나투어 단가를 분리 관리합니다. 입금가 변동 시 해당 견적의 마진율과 수익이 즉시 자동 재계산됩니다.", p:["대리점 단가 / 하나투어 단가 이중 구조","입금가 변경 시 수익·마진율 자동 재산출","최종 넷가 = 최초입금가 - 하나투어수익으로 자동 계산","분기별 마진율 현황 실시간 모니터링"] },
    { t:"03 · 진행 상태 트래킹", d:"견적별 영업 진행 상태를 실시간으로 추적합니다. 예약→체결→발권→입금의 전 단계를 단일 화면에서 관리합니다.", p:["예약 / 체결 / 미체결 / 재컨택 상태 분류","다음 액션 일정 및 담당자 메모 기록","견적번호 KEY로 전 탭 상태 자동 동기화","D-7 이내 출발건 자동 하이라이트"] },
    { t:"04 · 출발 달력 연동", d:"체결된 견적의 출발일이 달력에 자동 표시됩니다. D-7 이내 출발 건을 시각적으로 확인하여 미수 리스크를 선제 관리합니다.", p:["체결 견적 출발일 달력 자동 연동","D-7 이내 출발건 별도 리스트 노출","월별 / 연별 뷰 전환 지원","정산 완료 / 미완료 상태 색상 구분"] },
    { t:"05 · 대리점별 견적 조회", d:"84개 담당 대리점 전체를 단일 화면에서 관리합니다. 대리점 클릭 시 해당 견적 이력과 활동 로그를 즉시 확인할 수 있습니다.", p:["대리점별 분기 실적 추이 그래프","최근 접촉일 및 특징 메모 기록","공식인증 / 일반대리점 구분 필터","견적 파이프라인 팝업 연동"] },
    { t:"06 · 분기별 실적 조회", d:"2분기~4분기 분기별 인센티브 실적을 한눈에 비교 분석합니다. 전년 동기 대비 성장률 추적으로 영업 전략 수립에 활용합니다.", p:["분기별 총 매출 / 하나투어 수익 집계","전년 동기 대비 성장률 자동 계산","대리점별 분기 실적 랭킹 정렬","리그별 차등 보상 산출 연동"] }
];

function switchFeat(idx, el) {
    document.querySelectorAll('.feat-btn').forEach(function(t){ t.classList.remove('on'); });
    el.classList.add('on');
    var f = featData[idx];
    document.getElementById('fdTitle').textContent = f.t;
    document.getElementById('fdDesc').textContent = f.d;
    document.getElementById('fdPoints').innerHTML = f.p.map(function(p){
        return '<div class="fd-point">' + p + '</div>';
    }).join('');
}

/* ========================================
   Expertise — Performance Charts (lazy init)
   ======================================== */
var chartsInitialized = false;

function initCharts() {
    if (chartsInitialized) return;
    chartsInitialized = true;

    // chart1 — 도넛 (달성률)
    var ctx1 = document.getElementById('chart1');
    if (!ctx1) return;
    new Chart(ctx1.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['달성', ''],
            datasets: [{
                data: [103, 0],
                backgroundColor: ['#2172C8', '#E4F2FF'],
                borderWidth: 0
            }]
        },
        options: {
            animation: false,
            animations: false,
            transitions: { active: { animation: { duration: 0 } } },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            devicePixelRatio: 1,
            cutout: '70%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        },
        plugins: [{
            id: 'centerText',
            afterDraw: function (chart) {
                var ctx = chart.ctx;
                var area = chart.chartArea;
                ctx.save();
                ctx.font = "bold 20px Syne, sans-serif";
                ctx.fillStyle = '#2172C8';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('103%', area.left + area.width / 2, area.top + area.height / 2);
                ctx.restore();
            }
        }]
    });

    // chart2 — bar (인사동 일매출: 도입 전 vs 도입 후)
    var ctx2 = document.getElementById('chart2');
    if (!ctx2) return;
    new Chart(ctx2.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['도입 전', '도입 후'],
            datasets: [{
                data: [150, 260],
                backgroundColor: ['#93c5fd', '#2172C8'],
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.6
            }]
        },
        options: {
            animation: false,
            animations: false,
            transitions: { active: { animation: { duration: 0 } } },
            responsive: true,
            maintainAspectRatio: false,
            devicePixelRatio: 1,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
                x: { ticks: { color: '#8AAAC8', font: { size: 11 } }, grid: { display: false } },
                y: { min: 0, max: 300, ticks: { color: '#8AAAC8', font: { size: 11 }, callback: function (v) { return v + '만'; } }, grid: { color: 'rgba(33,114,200,0.07)' } }
            }
        }
    });

    // chart3 — bar (하나투어 26Q2 성장률: 전년 vs 금년)
    var ctx3 = document.getElementById('chart3');
    if (!ctx3) return;
    new Chart(ctx3.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['전년도 25Q2', '금년도 26Q2'],
            datasets: [{
                data: [28, 109],
                backgroundColor: ['#93c5fd', '#2172C8'],
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.6
            }]
        },
        options: {
            animation: false,
            animations: false,
            transitions: { active: { animation: { duration: 0 } } },
            responsive: true,
            maintainAspectRatio: false,
            devicePixelRatio: 1,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
                x: { ticks: { color: '#8AAAC8', font: { size: 11 } }, grid: { display: false } },
                y: { min: 0, max: 120, ticks: { color: '#8AAAC8', font: { size: 11 }, callback: function (v) { return v + '명'; } }, grid: { color: 'rgba(33,114,200,0.07)' } }
            }
        }
    });
}

// #expertise 섹션이 화면에 진입할 때 딱 한 번만 차트 초기화
(function () {
    var expertiseSection = document.getElementById('performance');
    if (expertiseSection) {
        var observer = new IntersectionObserver(
            function (entries) {
                if (entries[0].isIntersecting) {
                    initCharts();
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(expertiseSection);
    }
})();

/* ========================================
   Nav Scroll Shadow (passive, no scroll manipulation)
   ======================================== */
(function () {
    var nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });
})();

/* ========================================
   1. Hero Orb Count-Up Animation
   ======================================== */
(function () {
    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    function countUp(el, target, prefix, suffix, duration) {
        var start = performance.now();
        function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var value = Math.floor(easeOutQuart(progress) * target);
            el.textContent = prefix + value + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    var orbs = document.querySelectorAll('.orb-num');
    if (orbs.length >= 3) {
        setTimeout(function () {
            countUp(orbs[0], 103, '', '%', 1800);
            countUp(orbs[1], 282, '+', '%', 1800);
            countUp(orbs[2], 73, '', '%', 1800);
        }, 300);
    }
})();

/* ========================================
   2. Hero Tags Staggered Fade-In
   ======================================== */
(function () {
    var tags = document.querySelectorAll('.hero-tags span');
    tags.forEach(function (tag) {
        tag.classList.add('tag-hidden');
    });
    setTimeout(function () {
        tags.forEach(function (tag, i) {
            setTimeout(function () {
                tag.classList.add('tag-visible');
            }, i * 100);
        });
    }, 800);
})();

/* ========================================
   3. Timeline Entrance Animation
   ======================================== */
(function () {
    var timeline = document.querySelector('.timeline');
    if (!timeline) return;

    // Set initial hidden state
    timeline.classList.add('tl-animate');
    var items = timeline.querySelectorAll('.tl-item');
    items.forEach(function (item) {
        item.classList.add('tl-hidden');
    });

    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            timeline.classList.add('tl-draw');
            items.forEach(function (item, i) {
                setTimeout(function () {
                    item.classList.add('tl-show');
                }, i * 150);
            });
            observer.disconnect();
        }
    }, { threshold: 0.15 });
    observer.observe(timeline);
})();

/* ========================================
   5. Fade-Up Observer (all .fade-up elements)
   ======================================== */
(function () {
    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
        fadeObserver.observe(el);
    });
})();
