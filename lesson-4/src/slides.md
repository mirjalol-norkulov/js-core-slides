---
theme: ../../theme
highlighter: shiki
drawings:
  persist: false
hideInToc: true
colorSchema: light
title: 4-dars. Switch operatori
---

# 4-dars. Switch operatori

---
hideInToc: true
---

# Reja

<Toc :columns="2" />


---
---

# Switch operatori

Switch - operatorini bir nechta if else if operatorlarining o'rniga ishlatish mumkin. 
Bunda biror bir qiymatni bir qancha variantlarini tekshirish tushunarli va soddaroq bo'ladi.

Switch operatori bir yoki bir nechta case bloklaridan tashkil topgan bo'ladi, va oxirida ixtiyoriy default bloki bo'lishi mumkin.

<div class="grid grid-cols-2 gap-x-4">

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- **x** ning qiymatini **case** bloklariga berilgan qiymat bilan tekshirib chiqiladi.
- Agar x ning qiymati biror bir **case** blokida berilgan qiymatga teng bo'lsa **switch** operatori shu case blokidan boshlab to eng yaqin **break** operatorigacha bo'lgan kodni ishga tushiradi(yoki switch operatorini oxirigacha).
- Hech qaysi case lar to'g'ri kelmaganda **default** ichidagi kod ishga tushadi.

</div>

---
title: Switch flowchart
---

<img src="/assets/switch.webp" class="max-h-full" />

---
class: pr-28
---

```js
let day = 3;

switch(day) {
  case 1:
    console.log('Dushanba');
    break;
  case 2:
    console.log('Seshanba');
    break;
  case 3:
    console.log('Chorshanba');
    break;
  case 4:
    console.log('Payshanba');
    break;
  case 5:
    console.log('Juma');
    break;
  case 6:
    console.log('Shanba');
    break;
  case 7:
    console.log('Yakshanba');
    break;
  default:
    console.log("Noma'lum hafta kuni");
}
```

---
---

# Break ishlatilmagandagi holat

Agar breakni unutib qoldirsangiz kod ishlashda davom etadi va keyingi kelgan case larni tekshirmaydi.

```js
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

---
---

# Switchga ifodalarni berish

Switch va case larga biror qiymati hisoblanadigan ifodalarni ham berish mumkin.

```js
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```


---
---

# case larni guruhlash

Bir nechta case holatlarida bir xil kodni ishlatmoqchi bo'lsangiz case larni guruhlashingiz mumkin.

```js
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

---
---

# strict type checking

Switch operatori qiymatlarni tekshirishda **===** operatoridan foydalanadi, ya'ni qiymatlarning tiplarini ham tekshiradi.

```js
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
```


---
---

# Misol ishlashga namuna

<SQuestion>

**Case5.** A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi 
progaramma tuzilsin. amal quyidagi qiymatlarni qabul qiladi: 1-qo'shish, 2-ayirish, 3-bo'lish, 4-
ko'paytirish.


</SQuestion>

```js
function case5(a, b, amal) {
  switch(amal) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    case 3:
      return a / b;
    case 4:
      return a* b;
  }
}

console.log(case5(3, 4, 1));
console.log(case5(3, 4, 2));
console.log(case5(3, 4, 2));
console.log(case5(3, 4, 4));

```
