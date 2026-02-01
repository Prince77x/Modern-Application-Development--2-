# 📌 JavaScript

### 1️⃣ What is JavaScript?

**JavaScript (JS)** is a programming language used to make web pages **interactive and dynamic**.

#### What JavaScript can do:
- Respond to user actions (click, type, submit)
- Change HTML & CSS dynamically
- Fetch data from servers (APIs)
- Build full applications (frontend + backend)

👉 **HTML = structure**  
👉 **CSS = style**  
👉 **JavaScript = logic & behavior**

**Example:**
```html
<button onclick="alert('Hello JS')">Click Me</button>
```

---

### 2️⃣ How JavaScript Runs in the Browser

When you open a webpage:
1. Browser loads HTML
2. Browser loads CSS
3. Browser loads JavaScript
4. JavaScript Engine executes JS code line by line

Each browser has its own JavaScript engine:
- Chrome → **V8**
- Firefox → **SpiderMonkey**

📌 JavaScript is **single-threaded**  
📌 JavaScript executes **top to bottom**

---

### 3️⃣ Setting Up Environment

#### ✅ Browser Console (Best for Beginners)
- Open Chrome
- Right click → Inspect → Console

```js
console.log("Hello JavaScript");
```

#### ✅ VS Code Setup
1. Create `index.html`
2. Create `script.js`
3. Open with Live Server or directly in browser

---

### 4️⃣ Inline Script vs External `.js` File

#### ❌ Inline Script (Not Recommended)
```html
<script>
  console.log("Inline JS");
</script>
```

#### ✅ External JavaScript File (Best Practice)
```html
<script src="script.js"></script>
```

📌 External JavaScript is:
- Cleaner
- Reusable
- Professional



---

## 🟢 VARIABLES

### 🔹 What is a Variable?

A **variable** is a container used to **store data** in memory.

```js
let age = 20;
```

---

### 🔹 Types of Variables

| Keyword | Scope    | Reassign | Redeclare | Use     |
| ------- | -------- | -------- | --------- | ------- |
| `var`   | Function | ✅        | ✅         | ❌ Avoid |
| `let`   | Block    | ✅        | ❌         | ✔ Yes   |
| `const` | Block    | ❌        | ❌         | ✔ Best  |

📌 **Rule:**

* Use `const` by default
* Use `let` if value changes
* Avoid `var`

---

### 🔹 Declaration vs Assignment

```js
let x;      // declared (undefined)
x = 10;     // assigned
```

---

### 🔹 Reassignment

```js
let a = 5;
a = 10;     // allowed

const b = 20;
b = 30;     // ❌ error
```

---

### 🔹 Value vs Reference Assignment

**Primitive (copy value):**

```js
let x = 5;
let y = x;
y = 10; // x still 5
```

**Object/Array (reference):**

```js
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 5; // obj1.a also 5
```

---

## 🟢 DATA TYPES

### 🔹 JavaScript is Dynamically Typed

Type is decided **at runtime**, not fixed.

---

### 🔹 Primitive Data Types

| Type      | Example         | Notes              |
| --------- | --------------- | ------------------ |
| Number    | `10`, `3.14`    | All numbers        |
| String    | `"Hello"`       | Text               |
| Boolean   | `true`, `false` | Logical            |
| Null      | `null`          | Intentional empty  |
| Undefined | `undefined`     | Not assigned       |
| Symbol    | `Symbol("id")`  | Unique ID          |
| BigInt    | `123n`          | Very large numbers |

---

### 🔹 Non-Primitive Data Types

| Type     | Example              |
| -------- | -------------------- |
| Object   | `{ name: "Prince" }` |
| Array    | `[1,2,3]`            |
| Function | `function(){}`       |

---

### 🔹 `null` vs `undefined`

| null              | undefined                |
| ----------------- | ------------------------ |
| Manually assigned | JS assigns automatically |
| Intentional empty | Value missing            |

---

### 🔹 Check Type

```js
typeof 10        // "number"
typeof "Hi"      // "string"
typeof null      // "object" ❌ (JS bug)
```

---

## 🟢 OPERATORS

### 🔹 Arithmetic Operators

| Operator | Meaning     |
| -------- | ----------- |
| `+`      | Addition    |
| `-`      | Subtraction |
| `*`      | Multiply    |
| `/`      | Divide      |
| `%`      | Remainder   |
| `**`     | Power       |

---

### 🔹 Assignment Operators

| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 5`  |
| `+=`     | `x += 2` |
| `-=`     | `x -= 1` |
| `*=`     | `x *= 3` |

---

### 🔹 Comparison Operators

| Operator          | Meaning          |
| ----------------- | ---------------- |
| `==`              | Loose (avoid)    |
| `===`             | Strict ✔         |
| `!=`              | Not equal        |
| `!==`             | Strict not equal |
| `>` `<` `>=` `<=` | Compare          |

📌 Always prefer **`===`**

---

### 🔹 Logical Operators

| Operator | Meaning |   |    |
| -------- | ------- | - | -- | 
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

---

### 🔹 Common Mistake

❌ Assignment instead of comparison

```js
if (x = 5) ❌
```

✔ Correct

```js
if (x === 5) ✔
```

---

## 🧠 QUICK REMEMBER RULES

* JS runs top-to-bottom
* `const` is safest
* Objects are passed by reference
* `===` avoids bugs
* `null` is intentional
* `undefined` is default

---

## 🎯 5-Minute Practice

1. Declare `const country = "India"`
2. Create a `let` variable and reassign it
3. Compare `5 == "5"` and `5 === "5"`
4. Use `+=` operator
5. Show object reference behavior
