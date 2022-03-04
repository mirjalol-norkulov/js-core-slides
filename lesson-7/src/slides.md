---
theme: ../../theme
highlighter: shiki
drawings:
  persist: false
hideInToc: true
colorSchema: light
title: 7-dars. String tipi
---

# String tipi


---
hideInToc: true
---

# Reja

<Toc :columns="2" />

---
---

# String tipi

JavaScript-da matnli ma'lumotlar satrlar sifatida saqlanadi. Bitta belgi uchun alohida tip mavjud emas.

JavaScript dasturlash tilida **String** primitive tip hisoblanadi.

Satrlar qo'shtirnoq bilan o'ralgan bo'lishi kerak.

JavaScriptda qo'shtirnoqlarning 3 xil turi mavjud:

- Ikkitali tirnoq (Double quote): "Salom".
- Bittali tirnoq (Single quote): 'Salom'.
- Orqa tirnoq (Backtick): `Salom`.

```js

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

```

---
---

# Qo'shtirnoq va birtirnoq

Bu ikkalasini ishlashi bir xil.

```js
let firstname = 'Ali';
let lastName = "Valiyev";
```

Qo'shtirnoqning ichida birtirnoqni yoki birtirnoq ichida qo'shtirnoqni ishlatish mumkin.

```js
let quote = '"Be yourself; everyone else is already taken." - Oscar Wilde';

let rumiQuote = "Yo asling kabi ko'rin, yo ko'ringaning kabi bo'l";
```

---
---

# Backtick

Backtick orqali satr ichiga JavaScript ifodalarni va o'zgaruvchilarni joylashtirishimiz mumkin. Buning uchun o'zgaruvchi yoki ifodani `${}` ichida yozish kerak.

```js
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);  // 1 + 2 = 3
```

Backtick'ning yana bir afzalligi biz matnlarni bir nechta qatorlarga bo'lishimiz mumkin:

```js
let masalliqlar = `Masalliqlar: 
  Brokkoli 1 dona
  Mayonez
  Sir
  Qotgan non
`;

console.log(masalliqlar);
```

---
---

# Maxsus belgilar

Birtirnoq va qo'shtirnoqlarda ham ko'p qatorli matn yaratish mumkin. Buning uchun `\n` maxsus belgisidan foydalaniladi.
Bu belgi yangi qatorga o'tishni bildiradi.

```js
let masalliqlar = "Masalliqlar:\n Brokkoli 1 dona\n Mayonez\n Sir\n Qotgan non";
```

---
---

# Satr uzunligi. `length` xususiyati.

`length` xususiyati orqali satrning uzunligini bilishimiz mumkin.

```js
let sentence = 'London is the capital of Great Britain';

console.log(sentence.length);

console.log(`Gapda ${sentence.length} ta belgi bor.`);
```

---
---

# Satrdagi belgilarni olish. Indeks orqali murojaat qilish

Satrdagi ma'lum bir pozitsiyadagi belgini olish uchun kvadrat qavslar `[indeks]` dan foydalaniladi:

```js
let name = 'Abdulloh';

console.log(name[0]);
console.log(name[1]);

// Oxirgi belgini olish
console.log(name[name.length - 1]);
```

<SNote>

Satrlarda indeks 0 dan boshlanadi. Shuning uchun oxirgi belgini olish uchun satr uzunligidan birni ayirish kerak.

</Snote>

---
---

# Immutibility

JavaScriptda string tipi immutable, ya'ni individual belgilarini o'zgaritirib bo'lmaydi.

Quyidagi kod ishlamaydi:

```js
let str = 'Hi';

str[0] = 'h'; // error

console.log(str);
```

str ni o'zgartirish uchun yangi satr hosil qilish va uni str o'zgaruvchisiga o'zlashtirish kerak bo'ladi.

```js
let str = 'Hi';

str = 'h' + str[1];

console.log( str ); // hi
```


---
layout: center
---

# Satrlar ustida amallar. Mavjud standard metodlar.

---
---

# Katta va kichik harflarga o'girish

```js
console.log('Banan'.toUpperCase());

console.log('Olma'.toLowerCase());

let fruit = 'olma';

console.log(fruit[0].toUpperCase());
```

---
---

# Satr ichidan qidirish

## str.indexOf

indexOf metodi orqali satr ichida satrni qidirish mumkin.

str ning ichidan substr ni pos pozitsiyadan boshlab qidiradi va topilgan indeksni qaytaradi, agar topilmasa -1 qaytaradi.

```js
str.indexOf(substr, pos);
```

```js
let msg = 'Hello, World!';

console.log(msg.indexOf('Hello'));    // 0, chunki Hello so'zi 0-indeksdan boshlangan.

console.log(msg.indexOf('hello'));    // -1, chunki katta va kichik harflar farqlanadi.

console.log(msg.indexOf('!'));

console.log(msg.indexOf('Hello', 5)); // -1, chunki qidiruvcni 5-indeksdan boshlaydi.
```

---
---

# includes, startsWith, endsWith

Agar satr ichidagi qism satr bor yo'qligini tekshirmoqchi bo'lsak va indeks kerak bo'lmasa includes metodidan foydalanishimiz mumkin.

```js
let lang = 'JavaScript';

lang.includes('Java');  // true
```

startsWith va endsWith metodlari vazifasini nomlaridan bilib olishimiz mumkin.

```js
let name = "Ali Valiyev";

console.log(name.startsWith("Ali"));

console.log(name.endsWith("yev"));
```

---
---

# Satr ichidan qismlarni olish.

Satrning ichidan ma'lum bir qismini olish uchun 3 ta metod mavjud:

- `str.slice(start [, end])`
- `str.substring(start, [, end])`
- `str.substr(start [, length])`

```js

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

```

slice metodiga manfiy indekslarni ham berish mumkin.

```js
let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'
```

Bu 3 metodlardan **slice** metodini ishlatish tavsiya etiladi.


---
---

# Satrlarni taqqoslash

Satrlar taqqoslanganda har bitta belgi alifbo tartibida solishtirib chiqiladi.
Ammo yodda tutish kerak bo'lgan qoidalar bor:

- Kichkina harflar har doim katta harflardan katta hisoblanadi: <br/>
  ```js
  console.log( 'a' > 'Z' )    // true
  ```
- [Diakritik](https://en.wikipedia.org/wiki/Diacritic) belgilarga ega harflar "tartibsiz": <br/>
  ```js
  console.log( 'Österreich' > 'Zealand' ); // true
  ```
  Bunday belgili nomlarni saralaganimizda kutilmagan natijalarga duch kelishimiz mumkin, chunki `Zeeland` `Österreich` dan keyin keladi deb o'ylaymiz, aslida esa unday bo'lmaydi.

---
---

# UTF-16

Satrlarda belgilar [UTF-16](https://en.wikipedia.org/wiki/UTF-16) kodirovkasi orqali kodlanadi. Ya'ni har bir belgi o'zining kodiga ega.

JavaScriptda belgining UTF-16 dagi kodini olish, yoki kod bo'yicha belgini olish uchun metodlari mavjud:

`str.codePointAt(pos)` orqali biror belgining kodini aniqlash mumkin.

```js
console.log( "z".codePointAt(0) ); // 0-indeksdagi belgining kodi: 122
console.log( "Z".codePointAt(0) ); // 0-indeksdagi belgining kodi: 90
```

`String.fromCodePoint(code)` orqali biror kod orqali belgini olishimiz mumkin.

```js
console.log( String.fromCodePoint(90) );      // Z; 90 kodga ega bo'lgan belgi Z harfi
```

---
---

# Satrlarni to'g'ri taqqoslash

Satrlarni to'g'ri taqqoslash algoritmi biz o'ylaganimzdan ko'ra ancha murakkab bo'ladi, chunki alifbolar tillarga qarab farqlanadi.

Brauzer taqqoslash uchun belgilar qaysi tilda ekanligini bilishi kerak.

Baxtimizga zamonaviy brauzerlar [ECMA-402](http://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf) standartini qo'llab quvvatlaydi. Bu standartda har xil tillardagi belgilarni taqqoslash uchun maxsus metod bor.

`str.localeCompare(str2)` metodi str str2 ga teng, katta yoki kichikligini bildiruvchi butun sonni quyidagi qoida bo'yicha qaytaradi:

- Agar str str2 dan kichik bo'lsa manfiy son qaytaradi.
- Agar str str2 dan katta bo'lsa musbat son qaytaradi.
- Agar str str2 ga teng bo'lsa 0 qaytaradi.

```js
console.log( 'Österreich'.localeCompare('Zealand') ); // -1
```

Bundan tashqari bu metodga katta va kichik harflarni farqlash, qaysi til bo'yicha taqqolash va boshqa qo'shimcha sozlamalarni berish mumkin. 
Batafsil [dokumentatsiyadan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) o'qishingiz mumkin.