---
theme: ../../theme
highlighter: shiki
drawings:
  persist: false
hideInToc: true
colorSchema: light
title: 8-dars. Funksiyalar
---

# Funksiyalar


---
hideInToc: true
---

# Reja

<Toc :columns="2" />

---
---

# Funksiyalar

Ko'pincha biz dasturimizni ko'pgina qismlarida bir xil ishni bajarishimizga to'g'ri keladi.

Masalan, biror bir formatlangan xabarni foydalanuvchi saytga login qilib kirganida, yoki profilidan logout qilib chiqib ketganida ko'rsatishimiz yoki boshqa biror vazifa.

Funksiyalar orqali biz ko'p takrorlanadigan kodlarni bitta blokga olib bir nechta joyda ishlatishimiz mumkin.

Biz shu paytgacha ham JavaScriptda mavjud bo'lgan ba'zi funksiyalarni ishlatib ko'rdik, masalan **console.log** funksiyasi.

Funksiyani e'lon qilish uchun **function** kalit so'zidan foydalanamiz

```js
function showMessage() {
  console.log('Salom hammaga!');
} 
```

---
layout: two-cols
class: gap-x-12
---

# Funksiyalarni e'lon qilish

Funksiyani e'lon qilish tartibi:

- **function** kalit so'zi
- funksiya nomi
- Qavs ichida parametrlar ro'yxati (parametrlar bo'lmasligi ham mumkin)
- {} - figurali qavslar ichida funksiya tanasi.

::right::

<img src="/assets/function.webp" />

---
---

# Funksiyaga murojaat qilish

Funksiya ichidagi kod ishga tushishi uchun biz funksiyaga murojaat qilishimiz kerak.

Funksiyaga murojaat qilish **function call** deb ataladi. Funksiyaga uning nomi orqali murojaat qilinadi.

```js
function showMessage() {
  console.log('Hello, welcome!');
  console.log('How can I help you?');
}

showMessage();
```

---
---

# Lokal o'zgaruvchilar

Funksiya ichida e'lon qilingan o'zgaruvchilar lokal o'zgaruvchilar deb ataladi.

Lokal o'zgaruvchilar faqat funksiya ichidagina mavjud bo'ladi, tashqaridan turib bu o'zgaruvchilarga murojaat qilib bo'lmaydi.

```js
function showMessage() {
  let msg1 = 'Hello, welcome!';
  let msg2 = 'How can I help you?';
  
  console.log(msg1);
  console.log(msg2);
}

showMessage();
```

---
---

# Tashqi o'zgaruvchilar

Funksiya o'zidan tashqarida e'lon qilingan o'zgaruvchilarga murojaat qilishi yoki ularni o'zgartirishi mumkin.

```js
let userName = 'Bilol';

function showMessage() {
  let message = 'Assalomu alaykum, ' + userName;
  console.log(message);
}

showMessage(); // Assalomu alaykum, Bilol
```

---
---

# Tashqi o'zgaruvchilarni o'zgartirish


```js
let userName = 'Bilol';

function showMessage() {
  userName = "Ali"; // (1) tashqarida e'lon qilingan o'zgaruvchini o'zgartirish

  let message = 'Assalomu alaykum, ' + userName;
  console.log(message);
}

console.log( userName ); // Funksiyaga murojaat qilishdan oldin: Bilol

showMessage();

console.log( userName ); // Funksiyaga murojaat qilingandan keyin: Ali
```

<SInfo>
<template #title>Global o'zgaruvchilar</template>

Funksiyadan tashqaridan e'lon qilingan o'zgaruvchilar global o'zgaruvchilar deb nomlanaladi.
Global o'zgaruvchilar barcha funksiyalar tomonidan o'zgartirilishi mumkin. Global o'zgaruvchilardan kamroq foydalanish tavsiya etiladi.

</SInfo>

---
---

# Parametrlar

Parametrlar orqali funksiyaga ma'lumotlarni yuborishimiz mumkin.

```js
function showMessage(from, text) {
  console.log(from + ': ' + text);
};

showMessage('Bilol', 'Assalomu alaykum!');
showMessage('Ali', 'Va alaykum assalom!');
```

```js
function square(a) {
  return a * a;
}

function discriminant(a, b, c) {
  return square(b) - 4 * a * c;
}
```

---
---
# Parametrlarning nusxalanishi

Biz parametrlarni funksiyaga berganimizda funksiya ichida lokal o'zgaruvchilar e'lon qilinadi va qiymatlar shu o'zgaruvchilarga nusxa qilib olinadi.

```js
let number = 5;

function square(n) {
  n = n * n;
  return n;
}

console.log(square(number));
console.log(number);
```

---
---

# Parametrlarning default qiymati

Agar funksiyaga murojaat qilinayotganda parametr berilmasa parametr qiymati `undefined` bo'ladi

```js

function getSuccessMessage(name) {
  return `Welcome ${name}! You have successfully signed up.`
}

console.log(getSuccessMessage())
```

Welcome undefined! You have successfully signed up.

---
---

# Parametrga default qiymat berish

Funksiyani e'lon qilishda parametrga default qiymat berishimiz mumkin.

```js
function getSuccessMessage(name = 'user') {
  return `Welcome ${name}! You have successfully signed up`
}

console.log(getSuccessMessage())
console.log(getSuccessMessage("Ali"))
```

Welcome user! You have successfully signed up

Weclome Ali! You have successfully signed up

---
---

# Default qiymatga funksiya berish

```js
function showTime(time = getDefaultTime()) {
  console.log(`Time is: `, time)
}

function getDefaultTime() {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

showTime('22:00')
showTime()
setTimeout(showTime, 1000)
```

Bu yerda showTime funksiyasiga time parametri berilsa `getDefaultTime` funksiyasi ishga tushmaydi.
Parametr berilmaganda esa har safar funksiya yangidan ishga tushadi.

---
---

# Qiymat qaytarish. return

Funksiya murojaat qilingan joyga biror qiymat qaytarishi mumkin, buning uchun **return** kalit so'zidan foydalaniladi.

```js
function getPerimeter(a, b, c) {
  return a + b + c
}

let p = getPerimeter(3, 4, 5)

console.log('p = ', p)
```

Return kalit so'zi qayerda yozilsa funksiya o'sha joyda ishlashdan to'xtaydi va returndan keyin yozilgan qiymat tashqi kodga qaytariladi.

```js
function checkRole(role) {
  if(role === 'admin') {
    return true
  }

  return false
}
```

---
---

# Bo'sh qiymat qaytarish. undefined

Agar siz hech narsa return qilmasangiz funksiya default holatda undefined qaytaradi. Quyidagi 3 ta funksiya undefined qaytaradi:

```js
function example1() {}

function example2() {
  return
}

function example3() {
  return undefined
}
```

Ko'p hollarda funksiyani ishlashdan to'xtatish uchun return qilinadi.

```js
function calculateSalary(baseSalary) {
  if(baseSalary === undefined) {
    return
  }
  return baseSelect * 0.83
}
```