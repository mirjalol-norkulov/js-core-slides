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

Parametrlar orqali funksiya ma'lumotlarni yuborishimiz mumkin.

```js
function showMessage(from, text) {
  console.log(from + ': ' + text);
};

showMessage('Bilol', 'Assalomu alaykum!');
showMessage('Ali', 'Va alaykum assalom!');
```