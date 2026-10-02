// आजचे प्रश्न लोड करण्याचे फंक्शन
function loadQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    dailyQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        let optionsHTML = '';
        q.options.forEach((option, optionIndex) => {
            optionsHTML += `
                <div class="option" onclick="selectAnswer(${index}, ${optionIndex})" id="option-${index}-${optionIndex}">
                    ${String.fromCharCode(65 + optionIndex)}) ${option}
                </div>
            `;
        });
        
        questionCard.innerHTML = `
            <h3>प्रश्न ${index + 1}: ${q.question}</h3>
            <div class="options">
                ${optionsHTML}
            </div>
            <button class="btn btn-secondary" onclick="toggleAnswer(${index})">उत्तर दाखवा</button>
            <div class="answer-text" id="answer-${index}">
                <strong>✓ योग्य उत्तर:</strong> ${String.fromCharCode(65 + q.correctAnswer)}) ${q.options[q.correctAnswer]}<br>
                <strong>व्याख्या:</strong> ${q.explanation}
            </div>
        `;
        
        questionsList.appendChild(questionCard);
    });
}

// उत्तर निवडणे
function selectAnswer(questionIndex, optionIndex) {
    const question = dailyQuestions[questionIndex];
    
    // सर्व पूर्वी निवडलेल्या विकल्पांचे वर्ग हटवा
    for (let i = 0; i < question.options.length; i++) {
        document.getElementById(`option-${questionIndex}-${i}`).classList.remove('selected');
    }
    
    // नवीन निवडलेल्या विकल्पावर वर्ग जोडा
    document.getElementById(`option-${questionIndex}-${optionIndex}`).classList.add('selected');
    
    // योग्य/चुकीचा उत्तर तपासा
    if (optionIndex === question.correctAnswer) {
        alert('✓ योग्य उत्तर!');
    } else {
        alert('✗ चुकीचे उत्तर. योग्य उत्तर: ' + String.fromCharCode(65 + question.correctAnswer));
    }
}

// उत्तर दाखवा/लपवा
function toggleAnswer(questionIndex) {
    const answerText = document.getElementById(`answer-${questionIndex}`);
    answerText.classList.toggle('show');
}

// सूत्र लोड करण्याचे फंक्शन
function loadFormulas() {
    const formulasList = document.getElementById('formulasList');
    formulasList.innerHTML = '';
    
    formulas.forEach((formula) => {
        const formulaCard = document.createElement('div');
        formulaCard.className = 'formula-card';
        formulaCard.innerHTML = `
            <h3>📐 ${formula.title}</h3>
            <p><strong>वर्ग:</strong> ${formula.category}</p>
            <code>${formula.formula}</code>
        `;
        formulasList.appendChild(formulaCard);
    });
}

// बातमी लोड करण्याचे फंक्शन
function loadNews() {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    
    news.forEach((newsItem) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        const date = new Date(newsItem.date);
        const formattedDate = date.toLocaleDateString('mr-IN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        newsCard.innerHTML = `
            <h3>📰 ${newsItem.title}</h3>
            <p>${newsItem.description}</p>
            <p class="news-date">📅 ${formattedDate}</p>
        `;
        newsList.appendChild(newsCard);
    });
}

// राजकीय अर्थव्यवस्था लोड करणे
function loadPolity() {
    const polityList = document.getElementById('polityList');
    polityList.innerHTML = '';
    
    polity.forEach((item) => {
        const polityCard = document.createElement('div');
        polityCard.className = 'polity-card';
        
        let keyPointsHTML = '';
        if (item.key_points) {
            keyPointsHTML = '<ul>';
            item.key_points.forEach(point => {
                keyPointsHTML += `<li>${point}</li>`;
            });
            keyPointsHTML += '</ul>';
        }
        
        polityCard.innerHTML = `
            <h3>🏛️ ${item.title}</h3>
            <p>${item.content}</p>
            ${keyPointsHTML}
        `;
        polityList.appendChild(polityCard);
    });
}

// इतिहास लोड करणे
function loadHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    history.forEach((item) => {
        const historyCard = document.createElement('div');
        historyCard.className = 'history-card';
        
        let keyFactsHTML = '';
        if (item.key_facts) {
            keyFactsHTML = '<ul>';
            item.key_facts.forEach(fact => {
                keyFactsHTML += `<li>${fact}</li>`;
            });
            keyFactsHTML += '</ul>';
        }
        
        historyCard.innerHTML = `
            <h3>📜 ${item.title}</h3>
            <p>${item.content}</p>
            ${keyFactsHTML}
        `;
        historyList.appendChild(historyCard);
    });
}

// भूगोल लोड करणे
function loadGeography() {
    const geographyList = document.getElementById('geographyList');
    geographyList.innerHTML = '';
    
    geography.forEach((item) => {
        const geographyCard = document.createElement('div');
        geographyCard.className = 'geography-card';
        
        let keyFactsHTML = '';
        if (item.key_facts) {
            keyFactsHTML = '<ul>';
            item.key_facts.forEach(fact => {
                keyFactsHTML += `<li>${fact}</li>`;
            });
            keyFactsHTML += '</ul>';
        }
        
        geographyCard.innerHTML = `
            <h3>🌍 ${item.title}</h3>
            <p>${item.content}</p>
            ${keyFactsHTML}
        `;
        geographyList.appendChild(geographyCard);
    });
}

// सर्व सामग्री लोड करणे
function initializeApp() {
    loadQuestions();
    loadFormulas();
    loadNews();
    loadPolity();
    loadHistory();
    loadGeography();
}

// पृष्ठ लोड झाल्यावर अॅप सुरु करा
document.addEventListener('DOMContentLoaded', initializeApp);
