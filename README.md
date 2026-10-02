# 📚 MPSC परीक्षा हब

Marathi MPSC आणि स्पर्धा परीक्षा अभ्यास वेबसाइट - दैनिक प्रश्न, गणिताचे सूत्र, बातमी आणि शैक्षणिक सामग्री.

## ✨ वैशिष्ट्य

- 📝 **दैनिक प्रश्न** - प्रतिदिन नविन प्रश्न उत्तर
- 📐 **गणिताचे सूत्र** - सर्व महत्वाचे सूत्र एका जागेवर
- 📰 **परीक्षा बातमी** - स्पर्धा परीक्षेची नविन बातमी
- 🏛️ **राजकीय अर्थव्यवस्था** - भारतीय संविधान आणि राजकारण
- 📜 **इतिहास** - भारतीय इतिहास महत्वाचे प्रकरण
- 🌍 **भूगोल** - भारत आणि महाराष्ट्राचा भूगोल
- 📱 **मोबाइल फ्रेंडली** - सर्व डिव्हाइसवर चांगले दिसते
- 🎨 **आधुनिक डिজाइन** - सुंदर आणि सरल UI/UX

## 🚀 सुरुवात करा

### आवश्यकता
- कोणतीही विशेष आवश्यकता नाही
- फक्त एक वेब ब्राउজर चाहिए

### स्थानीय चलवणे

#### Python 3+ वापरून:
```bash
# Repository clone करा
git clone https://github.com/suryawanshisambhaji9011-sudo/mpsc-pariksha-hub.git
cd mpsc-pariksha-hub

# सर्व्हर सुरु करा
python -m http.server 8000

# ब्राउজरमध्ये खुला करा
http://localhost:8000
```

#### Node.js वापरून:
```bash
# Repository clone करा
git clone https://github.com/suryawanshisambhaji9011-sudo/mpsc-pariksha-hub.git
cd mpsc-pariksha-hub

# सर्व्हर सुरु करा (http-server स्थापित करा)
npm install -g http-server
http-server

# http://localhost:8080 वर उघडा
```

## 📂 फाइल संरचना

```
mpsc-pariksha-hub/
├── index.html       # मुख्य पृष्ठ
├── styles.css       # शैलीकरण
├── app.js          # JavaScript लॉजिक
├── data.js         # प्रश्न, सूत्र, बातमी डेटा
├── README.md       # हे फाइल
└── package.json    # प्रकल्प माहिती
```

## 📝 डेटा संरचना

### दैनिक प्रश्न
```javascript
{
    id: 1,
    question: "प्रश्न",
    options: ["विकल्प 1", "विकल्प 2", "विकल्प 3", "विकल्प 4"],
    correctAnswer: 0,  // यांत्रिकी सूचकांक
    explanation: "व्याख्या"
}
```

### गणिताचे सूत्र
```javascript
{
    id: 1,
    title: "सूत्राचा नाव",
    formula: "सूत्र",
    category: "वर्ग"
}
```

### बातमी
```javascript
{
    id: 1,
    title: "बातमीचा शीर्षक",
    date: "YYYY-MM-DD",
    description: "बातमीचा विवरण"
}
```

## 🎯 नविन सामग्री कसे जोडा

### दैनिक प्रश्न जोडणे
`data.js` मध्ये `dailyQuestions` अॅरेमध्ये नविन प्रश्न जोडा:

```javascript
{
    id: 6,
    question: "तुमचा प्रश्न येथे",
    options: ["विकल्प 1", "विकल्प 2", "विकल्प 3", "विकल्प 4"],
    correctAnswer: 0,
    explanation: "योग्य उत्तराची व्याख्या"
}
```

### सूत्र जोडणे
`data.js` मध्ये `formulas` अॅरेमध्ये नविन सूत्र जोडा:

```javascript
{
    id: 9,
    title: "सूत्राचा नाव",
    formula: "सूत्र",
    category: "वर्ग"
}
```

### बातमी जोडणे
`data.js` मध्ये `news` अॅरेमध्ये नविन बातमी जोडा:

```javascript
{
    id: 6,
    title: "बातमीचा शीर्षक",
    date: "2024-10-02",
    description: "बातमीचा विस्तृत विवरण"
}
```

## 🌐 ऑनलाइन तैनाती

### GitHub Pages वर तैनाती (मुक्त)
1. Repository settings मध्ये जा
2. "Pages" विभाग शोधा
3. "Deploy from a branch" निवडा
4. Main branch निवडा
5. Save करा

### Vercel वर तैनाती (मुक्त)
1. vercel.com वर साइन अप करा
2. Import करा या GitHub repository
3. Deploy करा

### Netlify वर तैनाती (मुक्त)
1. netlify.com वर साइन अप करा
2. Repository कनेक्ट करा
3. स्वतः तैनाती सक्षम करा

## 📊 व्��वहार केलेल्या तंत्रज्ञान

- **HTML5** - संरचना
- **CSS3** - शैलीकरण (Responsive Design)
- **JavaScript (Vanilla)** - कार्यक्षमता
- **No Dependencies** - कोणत्याही बाह्य लाइब्रेरीची आवश्यकता नाही

## 🎨 रंग योजना

- प्राथमिक रंग: `#667eea` (निळा-जांभळा)
- द्वितीयक रंग: `#764ba2` (जांभळा)
- पार्श्वभूमी: `#ffffff` (पांढरा)
- मजकूर: `#333333` (गडद)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🤝 योगदान

 योगदान देण्यास स्वागत आहे! अनुसरण करा:

1. Repository fork करा
2. नविन branch तयार करा (`git checkout -b feature/नविन-वैशिष्ट्य`)
3. बदल commit करा (`git commit -m 'नविन वैशिष्ट्य जोडा'`)
4. Branch push करा (`git push origin feature/नविन-वैशिष्ट्य`)
5. Pull Request तयार करा

## 📄 लाइसेन्स

MIT License - तुमच्या प्रकल्पांमध्ये मुक्तपणे वापरा.

## 📞 संपर्क

- GitHub: [@suryawanshisambhaji9011-sudo](https://github.com/suryawanshisambhaji9011-sudo)
- Email: तुमचा ईमेल

## 🎓 शैक्षणिक उद्देश्य

ही परियोजना निम्नलिखित शिक्षार्थ्यांसाठी सहायक आहे:
- MPSC परीक्षार्थी
- राज्य सेवा परीक्षा उमेदवार
- SSC परीक्षार्थी
- सामान्य ज्ञान अभ्यास करणारे

## 🌟 भविष्य की योजनाएं

- [ ] मोबाइल अॅप (React Native)
- [ ] व्यक्तिगत प्रगति ट्रैकिंग
- [ ] प्रश्न कठिनाई स्तर
- [ ] समय सीमा परीक्षा
- [ ] उपयोगकर्ता प्रोफाइल आणि स्कोरबोर्ड
- [ ] AI-চালিত प्रश्न सुझाव
- [ ] वीडियो पाठ्यक्रम एकीकरण

---

**सुख पूर्वक अभ्यास करा! 🎓**
