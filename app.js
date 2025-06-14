// 전역 변수
let sentences = [];
let folders = [];
let currentTab = 'sentences';
let selectedSentences = [];

// 음악 데이터
const musicData = {
    '신나는': [
        { title: '여름의 시작', mood: '활기찬 리듬', tags: '#여름 #드라이브' },
        { title: '청춘의 멜로디', mood: '에너지 넘치는', tags: '#청춘 #파티' },
        { title: '햇살 가득한 날', mood: '밝고 경쾌한', tags: '#행복 #즐거움' },
        { title: '리듬 속으로', mood: '신나는 비트', tags: '#댄스 #클럽' },
        { title: '자유의 날개', mood: '희망찬 멜로디', tags: '#자유 #모험' }
    ],
    '산책할 때': [
        { title: '고요한 오후', mood: '잔잔한 선율', tags: '#힐링 #자연' },
        { title: '바람의 속삭임', mood: '평화로운', tags: '#산책 #여유' },
        { title: '거리의 풍경', mood: '도시적 감성', tags: '#일상 #거리' },
        { title: '숲속 오솔길', mood: '자연의 소리', tags: '#숲 #명상' },
        { title: '해질녘 산책', mood: '노을빛 감성', tags: '#저녁 #감성' }
    ],
    '드라이브': [
        { title: '도로 위의 자유', mood: '시원한 질주', tags: '#자동차 #여행' },
        { title: '밤의 고속도로', mood: '도시의 불빛', tags: '#야경 #드라이브' },
        { title: '해안도로', mood: '바다의 향기', tags: '#바다 #여행' },
        { title: '새벽 출발', mood: '설렘 가득한', tags: '#새벽 #출발' },
        { title: '끝없는 지평선', mood: '광활한 대지', tags: '#모험 #자유' }
    ],
    '공부할 때': [
        { title: '집중의 시간', mood: '차분한 피아노', tags: '#공부 #집중' },
        { title: '도서관의 정적', mood: '고요한 분위기', tags: '#독서 #학습' },
        { title: '생각의 흐름', mood: '잔잔한 클래식', tags: '#사색 #명상' },
        { title: '지식의 샘', mood: '영감을 주는', tags: '#창의성 #아이디어' },
        { title: '밤샘 공부', mood: '깨어있는 밤', tags: '#시험 #노력' }
    ],
    '잠들기 전': [
        { title: '달빛 소나타', mood: '꿈결 같은', tags: '#수면 #꿈' },
        { title: '별이 빛나는 밤', mood: '포근한 멜로디', tags: '#밤 #휴식' },
        { title: '잠든 도시', mood: '고요한 밤', tags: '#도시 #정적' },
        { title: '꿈의 문턱', mood: '몽환적인', tags: '#꿈 #환상' },
        { title: '편안한 밤', mood: '따뜻한 위로', tags: '#위로 #평온' }
    ],
    '운동할 때': [
        { title: '파워 업', mood: '강렬한 비트', tags: '#운동 #에너지' },
        { title: '한계 돌파', mood: '동기부여', tags: '#도전 #극복' },
        { title: '러닝 하이', mood: '리드미컬한', tags: '#달리기 #유산소' },
        { title: '근육의 리듬', mood: '파워풀한', tags: '#웨이트 #힘' },
        { title: '승리의 순간', mood: '열정적인', tags: '#승리 #성취' }
    ],
    '카페에서': [
        { title: '커피 한 잔', mood: '재즈 감성', tags: '#카페 #여유' },
        { title: '오후의 티타임', mood: '부드러운 보사노바', tags: '#휴식 #대화' },
        { title: '창가의 자리', mood: '감성적인 어쿠스틱', tags: '#감성 #일상' },
        { title: '책과 음악', mood: '잔잔한 인디', tags: '#독서 #카페' },
        { title: '브런치 타임', mood: '경쾌한 재즈', tags: '#브런치 #주말' }
    ],
    '비오는 날': [
        { title: '빗소리 멜로디', mood: '촉촉한 감성', tags: '#비 #감성' },
        { title: '우산 속 둘', mood: '로맨틱한', tags: '#사랑 #비' },
        { title: '창문에 떨어지는 빗방울', mood: '센치한 발라드', tags: '#추억 #그리움' },
        { title: '비 갠 후', mood: '희망적인', tags: '#무지개 #새출발' },
        { title: '장마의 기억', mood: '애잔한 선율', tags: '#여름비 #추억' }
    ],
    '작업할 때': [
        { title: '창작의 시간', mood: '영감을 주는', tags: '#작업 #창작' },
        { title: '마감의 밤', mood: '집중력 향상', tags: '#마감 #집중' },
        { title: '아이디어 스케치', mood: '창의적인 리듬', tags: '#아이디어 #영감' },
        { title: '프로젝트 진행', mood: '생산적인 비트', tags: '#프로젝트 #업무' },
        { title: '완성의 기쁨', mood: '성취감 넘치는', tags: '#완성 #성취' }
    ],
    '기분 전환': [
        { title: '새로운 시작', mood: '활력 충전', tags: '#전환 #새출발' },
        { title: '기분 업!', mood: '긍정 에너지', tags: '#긍정 #활력' },
        { title: '스트레스 아웃', mood: '해방감 가득', tags: '#스트레스 #해방' },
        { title: '리프레시', mood: '상쾌한 멜로디', tags: '#리프레시 #재충전' },
        { title: '내일은 맑음', mood: '희망찬 선율', tags: '#희망 #내일' }
    ]
};

// 문장 데이터
const sentenceData = {
    '잠 잘때': [
        "오늘 하루도 수고했어요. 편안한 밤 되세요.",
        "별들이 당신의 꿈을 지켜줄 거예요.",
        "내일은 더 나은 날이 될 거예요. 굿나잇.",
        "달빛이 당신을 포근히 감싸길.",
        "좋은 꿈만 꾸세요. 내일 또 만나요."
    ],
    '여유': [
        "때로는 멈춰서 숨 쉬는 것도 필요해요.",
        "천천히 가도 괜찮아요. 당신의 속도로.",
        "오늘은 나를 위한 시간을 가져보세요.",
        "커피 한 잔의 여유, 그것만으로도 충분해요.",
        "바쁜 일상 속 작은 쉼표 하나."
    ],
    '에세이': [
        "삶은 우리가 쓰는 하나의 이야기입니다.",
        "매일이 새로운 페이지의 시작이에요.",
        "당신의 이야기는 아직 끝나지 않았어요.",
        "오늘을 기록하면 내일의 추억이 됩니다.",
        "평범한 일상도 특별한 이야기가 될 수 있어요."
    ],
    '생각 정리 중': [
        "복잡한 생각들, 하나씩 풀어봐요.",
        "머릿속 정리가 필요할 때가 있죠.",
        "생각의 미로에서 길을 찾아가는 중.",
        "차분히 정리하면 답이 보일 거예요.",
        "때로는 생각을 비우는 것도 정리예요."
    ],
    '위로': [
        "괜찮아요. 당신은 충분히 잘하고 있어요.",
        "힘든 날도 있어요. 그래도 괜찮아요.",
        "당신의 아픔을 이해해요. 혼자가 아니에요.",
        "시간이 모든 것을 해결해줄 거예요.",
        "울어도 돼요. 그것도 치유의 과정이에요."
    ],
    '동기부여': [
        "오늘의 한 걸음이 내일의 큰 도약이 됩니다.",
        "포기하지 마세요. 당신은 할 수 있어요.",
        "실패는 성공의 어머니입니다.",
        "꿈을 향해 한 걸음 더 나아가세요.",
        "당신의 가능성은 무한합니다."
    ],
    '사랑': [
        "사랑은 주는 것이 아니라 함께하는 것.",
        "당신과 함께라면 어디든 좋아요.",
        "사랑한다는 말, 오늘도 전해보세요.",
        "서로의 빛이 되어주는 것, 그것이 사랑.",
        "매일 조금씩 더 사랑하게 되는 기적."
    ],
    '행복': [
        "행복은 가까운 곳에 있어요.",
        "작은 것에서 찾는 큰 행복.",
        "웃음이 가득한 하루 되세요.",
        "행복은 선택이에요. 오늘도 행복을 선택하세요.",
        "매일이 선물같은 날이 되길."
    ]
};

// 페이지 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadMusicCards();
    loadPopularSentences();
    loadSentenceCards();
    loadSentences();
    loadFolders();
});

// 페이지 전환 함수
function showPage(pageName) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 모든 네비게이션 아이템 비활성화
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 선택된 페이지 표시
    document.getElementById(pageName + '-page').classList.add('active');
    
    // 해당 네비게이션 아이템 활성화
    const navItems = document.querySelectorAll('.nav-item');
    const pageIndex = ['home', 'archive', 'search', 'my'].indexOf(pageName);
    if (pageIndex !== -1) {
        navItems[pageIndex].classList.add('active');
    }
}

// 음악 카드 로드
function loadMusicCards() {
    const container = document.getElementById('music-cards');
    container.innerHTML = '';
    
    // 기본적으로 모든 음악 표시
    Object.values(musicData).flat().slice(0, 10).forEach((music, index) => {
        const card = createMusicCard(music, index);
        container.appendChild(card);
    });
}

// 음악 카드 생성
function createMusicCard(music, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="https://picsum.photos/150/120?random=${Math.random()}" alt="${music.title}" class="card-image">
        <div class="card-content">
            <div class="card-mood">${music.mood}</div>
            <div class="card-tags">${music.tags}</div>
        </div>
    `;
    
    card.onclick = () => showMusicDetail(music);
    return card;
}

// 음악 필터링
function filterMusic(tag) {
    const container = document.getElementById('music-cards');
    container.innerHTML = '';
    
    // 태그 활성화 상태 변경
    document.querySelectorAll('#music-tags .tag').forEach(t => {
        t.classList.remove('active');
        if (t.textContent === tag) {
            t.classList.add('active');
        }
    });
    
    // 해당 태그의 음악만 표시
    const musics = musicData[tag] || [];
    musics.forEach((music, index) => {
        const card = createMusicCard(music, index);
        container.appendChild(card);
    });
}

// 인기 문장 로드
function loadPopularSentences() {
    const container = document.getElementById('popular-sentences');
    container.innerHTML = '';
    
    const popularSentences = [
        "오늘도 당신의 하루가 음악처럼 아름답길",
        "때로는 침묵도 가장 아름다운 멜로디가 됩니다",
        "인생은 즉흥연주, 실수도 음악의 일부",
        "당신의 심장박동이 만드는 리듬을 들어보세요",
        "매일이 새로운 플레이리스트의 시작입니다"
    ];
    
    popularSentences.forEach((sentence, index) => {
        const vinylContainer = document.createElement('div');
        vinylContainer.className = 'small-vinyl-container';
        vinylContainer.style.animationDelay = `${index * 0.2}s`;
        
        vinylContainer.innerHTML = `
            <div class="small-vinyl">
                <div class="vinyl-grooves"></div>
                <div class="vinyl-text">${sentence}</div>
            </div>
        `;
        
        container.appendChild(vinylContainer);
    });
}

// 문장 카드 로드
function loadSentenceCards() {
    const container = document.getElementById('sentence-cards');
    container.innerHTML = '';
    
    // 기본적으로 모든 문장 표시
    Object.values(sentenceData).flat().slice(0, 10).forEach((sentence, index) => {
        const card = createSentenceCard(sentence, index);
        container.appendChild(card);
    });
}

// 문장 카드 생성
function createSentenceCard(sentence, index) {
    const card = document.createElement('div');
    card.className = 'quote-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="https://picsum.photos/200/150?random=${Math.random()}" alt="Quote" class="quote-image">
        <div class="quote-text">"${sentence}"</div>
    `;
    
    card.onclick = () => showSentenceDetail(sentence);
    return card;
}

// 문장 필터링
function filterSentences(tag) {
    const container = document.getElementById('sentence-cards');
    container.innerHTML = '';
    
    // 태그 활성화 상태 변경
    document.querySelectorAll('#sentence-tags .tag').forEach(t => {
        t.classList.remove('active');
        if (t.textContent === tag) {
            t.classList.add('active');
        }
    });
    
    // 해당 태그의 문장만 표시
    const sentences = sentenceData[tag] || [];
    sentences.forEach((sentence, index) => {
        const card = createSentenceCard(sentence, index);
        container.appendChild(card);
    });
}

// 보관함 탭 전환
function showArchiveTab(tab) {
    currentTab = tab;
    
    // 탭 활성화 상태 변경
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 탭 내용 전환
    if (tab === 'sentences') {
        document.getElementById('sentences-tab').style.display = 'block';
        document.getElementById('folders-tab').style.display = 'none';
    } else {
        document.getElementById('sentences-tab').style.display = 'none';
        document.getElementById('folders-tab').style.display = 'block';
    }
}

// 문장 목록 로드
function loadSentences() {
    const list = document.getElementById('sentence-list');
    list.innerHTML = '';
    
    // 로컬 스토리지에서 문장 불러오기
    sentences = JSON.parse(localStorage.getItem('sentences') || '[]');
    
    // 문장 개수 업데이트
    document.getElementById('sentence-count').textContent = sentences.length;
    
    sentences.forEach((sentence, index) => {
        const card = document.createElement('div');
        card.className = 'sentence-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="sentence-text">${sentence.text}</div>
            <div class="sentence-date">${sentence.date}</div>
            <button class="delete-button" onclick="deleteSentence(${index})">×</button>
        `;
        
        list.appendChild(card);
    });
}

// 폴더 목록 로드
function loadFolders() {
    const list = document.getElementById('folder-list');
    list.innerHTML = '';
    
    // 로컬 스토리지에서 폴더 불러오기
    folders = JSON.parse(localStorage.getItem('folders') || '[]');
    
    // 폴더 개수 업데이트
    document.getElementById('folder-count').textContent = folders.length;
    
    folders.forEach((folder, index) => {
        const card = document.createElement('div');
        card.className = 'folder-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="folder-icon">📁</div>
            <div class="folder-name">${folder.name}</div>
            <div class="folder-count">${folder.sentences.length}개의 문장</div>
            <button class="delete-button" onclick="deleteFolder(${index})">×</button>
        `;
        
        card.onclick = (e) => {
            if (!e.target.classList.contains('delete-button')) {
                showFolderContent(folder);
            }
        };
        
        list.appendChild(card);
    });
}

// 추가 모달 표시
function showAddModal() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (currentTab === 'sentences') {
        modalTitle.textContent = '새 문장 추가';
        modalBody.innerHTML = `
            <textarea class="modal-textarea" id="new-sentence" placeholder="오늘의 감성을 기록해보세요..."></textarea>
            <button class="modal-submit" onclick="addSentence()">추가하기</button>
        `;
    } else {
        modalTitle.textContent = '새 폴더 추가';
        modalBody.innerHTML = `
            <input type="text" class="modal-input" id="new-folder-name" placeholder="폴더 이름을 입력하세요">
            <div class="menu-title">문장 선택</div>
            <div class="sentence-select-list">
                ${sentences.map((sentence, index) => `
                    <div class="sentence-select-item" onclick="toggleSentenceSelection(${index}, this)">
                        <input type="checkbox" class="sentence-checkbox" id="sentence-${index}">
                        <label for="sentence-${index}">${sentence.text}</label>
                    </div>
                `).join('')}
            </div>
            <button class="modal-submit" onclick="addFolder()">추가하기</button>
        `;
        selectedSentences = [];
    }
    
    modal.classList.add('active');
}

// 문장 선택 토글
function toggleSentenceSelection(index, element) {
    const checkbox = element.querySelector('.sentence-checkbox');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        selectedSentences.push(index);
        element.classList.add('selected');
    } else {
        selectedSentences = selectedSentences.filter(i => i !== index);
        element.classList.remove('selected');
    }
}

// 문장 추가
function addSentence() {
    const textarea = document.getElementById('new-sentence');
    const text = textarea.value.trim();
    
    if (text) {
        const newSentence = {
            text: text,
            date: new Date().toLocaleDateString('ko-KR')
        };
        
        sentences.unshift(newSentence);
        localStorage.setItem('sentences', JSON.stringify(sentences));
        
        loadSentences();
        closeModal();
    }
}

// 폴더 추가
function addFolder() {
    const nameInput = document.getElementById('new-folder-name');
    const name = nameInput.value.trim();
    
    if (name) {
        const newFolder = {
            name: name,
            sentences: selectedSentences.map(index => sentences[index]),
            date: new Date().toLocaleDateString('ko-KR')
        };
        
        folders.unshift(newFolder);
        localStorage.setItem('folders', JSON.stringify(folders));
        
        loadFolders();
        closeModal();
    }
}

// 문장 삭제
function deleteSentence(index) {
    if (confirm('이 문장을 삭제하시겠습니까?')) {
        sentences.splice(index, 1);
        localStorage.setItem('sentences', JSON.stringify(sentences));
        loadSentences();
    }
}

// 폴더 삭제
function deleteFolder(index) {
    if (confirm('이 폴더를 삭제하시겠습니까?')) {
        folders.splice(index, 1);
        localStorage.setItem('folders', JSON.stringify(folders));
        loadFolders();
    }
}

// 폴더 내용 표시
function showFolderContent(folder) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = folder.name;
    modalBody.innerHTML = `
        <div class="folder-sentences">
            ${folder.sentences.map((sentence, index) => `
                <div class="folder-sentence-item" style="animation-delay: ${index * 0.1}s">
                    ${sentence.text}
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

// 문장 정렬
function sortSentences(order) {
    if (order === 'old') {
        sentences.reverse();
    } else {
        sentences = JSON.parse(localStorage.getItem('sentences') || '[]');
    }
    loadSentences();
}

// 폴더 정렬
function sortFolders(order) {
    if (order === 'old') {
        folders.reverse();
    } else {
        folders = JSON.parse(localStorage.getItem('folders') || '[]');
    }
    loadFolders();
}

// 태그 모달 표시
function showTagModal(tag) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = `${tag} 음악`;
    
    const musics = musicData[tag] || [];
    modalBody.innerHTML = `
        <div class="music-list">
            ${musics.map((music, index) => `
                <div class="music-item" style="animation-delay: ${index * 0.1}s">
                    <img src="https://picsum.photos/60/60?random=${Math.random()}" alt="${music.title}" class="music-item-image">
                    <div class="music-item-info">
                        <div class="music-item-title">${music.title}</div>
                        <div class="music-item-artist">${music.mood}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

// 상황별 음악 모달 표시
function showSituationModal(situation) {
    showTagModal(situation);
}

// 음악 상세 표시
function showMusicDetail(music) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = music.title;
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <img src="https://picsum.photos/200/200?random=${Math.random()}" alt="${music.title}" style="border-radius: 15px; margin-bottom: 20px;">
            <p style="font-size: 18px; color: #333; margin-bottom: 10px;">${music.mood}</p>
            <p style="color: #666;">${music.tags}</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// 문장 상세 표시
function showSentenceDetail(sentence) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '문장 상세';
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <p style="font-size: 20px; font-style: italic; line-height: 1.8; color: #333;">"${sentence}"</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// 검색 수행
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        alert(`"${query}"에 대한 검색 결과를 표시합니다.`);
        // 실제 검색 기능 구현
    }
}

// 모달 닫기
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// 모달 외부 클릭 시 닫기
document.getElementById('modal').onclick = function(e) {
    if (e.target.id === 'modal') {
        closeModal();
    }
}

// 엔터 키로 검색
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.activeElement.id === 'search-input') {
        performSearch();
    }
});

// 추가 애니메이션 효과
setInterval(() => {
    document.querySelectorAll('.vinyl-record, .small-vinyl').forEach(vinyl => {
        vinyl.style.animationDuration = `${3 + Math.random() * 2}s`;
    });
}, 5000);
