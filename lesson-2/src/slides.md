---
theme: ../../theme
highlighter: shiki
drawings:
  persist: false
download: true
hideInToc: true
colorSchema: light
title: 2-dars
---

# 2-dars. 

Ma'lumotlarning mantiqiy toifalari. Boolean tipi va mantiqiy amallar

---
hideInToc: true
---

# Reja

<Toc :columns="2" />


---
layout: image-right
image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/George_Boole_color.jpg/330px-George_Boole_color.jpg
---

# Boolean tipi

Boolean - 19-asr o'rtalarida mantiqning algebraik tizimini birinchi bo'lib aniqlagan [Jorj Bul](https://en.wikipedia.org/wiki/George_Boole) sharafiga nomlangan.

<SInfo>
  JavaScript dasturlash tilida Boolean primitive tip hisoblanadi.
</SInfo>


---
---

# Boolean tipi qiymatlari

Boolean tipi 2 ta true yoki false qiymatlarini qabul qila oladi.

```js
let quyoshChiqdi = true;

let erkak = true;

let isAdmin = false;

let hasRole = true;

let canChangeData = false;
```

Boolean o'zgaruvchilarga mantiqiy ifodalar yoki taqqoslashlarning natijasini ham berish mumkin.

```js
let isGreater = 4 > 1;

let canChangeData = role === 'admin';
```

---
---

# Mantiqiy operatorlar

JavaScriptda 4 ta mantiqiy operator mavjud

- || (or). Mantiqiy qo'shish
- && (and). Mantiqiy ko'paytirish
- ! (not). Mantiqiy inkor
- ?? (Nullish Coalescing)

---
---

# !(not). Inkor amali

Inkor amali ! (undov) belgisi orqali amalga oshiriladi.

Mantiqiy inkor amali biror boolean qiymatni teskari qiymatga o'giradi, ya'ni agar true bo'lsa false ga yoki aksincha.

```js
let ustozVaqtidaKeldi = true;

let darsdanQochamiz = !ustozVaqtidaKeldi;   // false
```

---
---

# && (and). Mantiqiy ko'paytirish amali.

Mantiqiy ko'paytirish amali && belgilari (2 ta ampersand) orqali amalga oshiriladi.

Mantiqiy ko'paytirish amali hamma qiymatlar true bo'lgan holatda true qiymatini qaytaradi, aks holda false qaytaradi.

<STable :columns="columns" :show-numeration="false" :data="data" row-key="id" />

<script setup>
  const columns = [
    {
      id: 1,
      title: 'A',
      field: 'a',
    },
    {
      id: 2,
      title: 'B',
      field: 'b'
    },
    {
      id: 3,
      title: 'A&&B',
      field: 'result'
    }
  ];

  const data = [
    {a: false, b: false, result: false },
    {a: false, b: true, result: false },
    {a: true, b: false, result: false },
    {a: true, b: true, result: true },
  ];
</script>

---
---

# || (or). Mantiqiy qo'shish amali.

Mantiqiy qo'shish amali || belgilari (2 ta vertical chiziq) orqali amalga oshiriladi.

Mantiqiy qo'shish amali kamida bitta qiymat true bo'lsa true qiymatini qaytaradi.

<STable :columns="columns" :show-numeration="false" :data="data" row-key="id" />

<script setup>
  const columns = [
    {
      id: 1,
      title: 'A',
      field: 'a',
    },
    {
      id: 2,
      title: 'B',
      field: 'b'
    },
    {
      id: 3,
      title: 'A||B',
      field: 'result'
    }
  ];

  const data = [
    {a: false, b: false, result: false },
    {a: false, b: true, result: true },
    {a: true, b: false, result: true },
    {a: true, b: true, result: true },
  ];
</script>

---
---

# Mantiqiy ifodalarga misollar


```js

let isDigit = number >= 0 && number < 10;

let isPositive = number > 0;

let isOdd = number % 2 === 1;

let isEven = number % 2 === 0;

let canLogin = isAccountActive && isAdmin;

let canSleep = hasEatenDinner && doneHomeworks;
```

---
---

# Taqqoslash operatorlari

- === teng
- !== teng emas
- &lt; kichik
- &lt;= kichik yoki teng
- &gt; katta
- &gt;= katta yoki teng


---
---

# Misol yechishga namunalar

<SQuestion>
  A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
</SQuestion>

```js

function boolean1(a) {
  return a > 0;
}

console.log(boolean1(10));
console.log(boolean1(-10));
console.log(boolean1(0));

```

<SQuestion>
  Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
</SQuestion>

```js

function boolean16(a) {
  return a % 2 === 0 && a >= 10 && a <= 99
};

console.log(boolean16(36));
console.log(boolean16(101));
console.log(boolean16(17));
```

---
---

# Misol yechishga namunalar