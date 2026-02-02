# Good Coding Guidlines

This document captures practical, battle‑tested coding principles with simple JS examples.\
**The goal**: code that is easy to read, reason about, test, and maintain. These pricinples are not scoped to js/react/nodejs, they can be extended into any production grade software you are buidling with any language, framework or library.

## 1. Early Exit

**Idea:** Handle invalid or edge cases first and exit early. Avoid deep nesting.

### Bad
```js
function processOrder(order) {
  if (order) {
    if (order.isPaid) {
      if (!order.isCancelled) {
        return 'Processing order';
      }
    }
  }
  return 'Invalid order';
}
````

### Good

```js
function processOrder(order) {
  if (!order) return 'Invalid order';
  if (!order.isPaid) return 'Invalid order';
  if (order.isCancelled) return 'Invalid order';

  return 'Processing order';
}
```

**Why:** Flat structure, fewer branches, faster understanding.

---

## 2. Reduce Cyclomatic Complexity (Be Careful With Branching)

**Idea:** Too many `if / else / switch` paths increase mental load and testing effort.

### Bad

```js
function canAccessResource(user, resource) {
  if (user) {
    if (user.isActive) {
      if (user.role === 'ADMIN') {
        return true;
      } else if (user.role === 'EDITOR') {
        if (resource.isPublic || resource.ownerId === user.id) {
          return true;
        } else {
          return false;
        }
      } else {
        if (resource.isPublic) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

```

### Good

```js
function canAccessResource(user, resource) {
  if (!user || !user.isActive) return false;

  if (isAdmin(user)) return true;
  if (isEditor(user)) return canEditorAccess(user, resource);

  return isPublic(resource);
}

function isAdmin(user) {
  return user.role === 'ADMIN';
}

function isEditor(user) {
  return user.role === 'EDITOR';
}

function canEditorAccess(user, resource) {
  return isPublic(resource) || isOwner(user, resource);
}

function isPublic(resource) {
  return resource.isPublic;
}

function isOwner(user, resource) {
  return resource.ownerId === user.id;
}
```

**Why:** Fewer branches → simpler logic → easier testing.

---

## 3. Throw Exceptions — and Throw Them Louder

**Idea:** Fail fast and clearly. Silent failures are dangerous.

### Bad

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    return null;
  }
  return balance - amount;
}
```

### Good

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error('Insufficient balance for withdrawal');
  }
  return balance - amount;
}
```

**Why:** Errors surface immediately with context.

---

## 4. Code Should Peel Like an Onion & Read Like English

**Idea:** Express *intent*, not *conditions*.

### Bad

```js
if (user && user.role === 'ADMIN') {
  //code...
}
```

### Good

```js
if (User.hasRole('ADMIN')) {
    //code..
}

class User{
    static function hasRole(role) {
        return this!=null && this.role === role;
    }
}
```

**Why:** High-level code reads like English. Details are peeled away.

---

## 5. Imperative vs Declarative Code

**Imperative:** *How* to do something;
**Declarative:** *What* you want

### Imperative

```js
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    activeUsers.push(users[i]);
  }
}
```

### Declarative

```js
const activeUsers = users.filter(user => user.isActive);
```

**Why:** Less code, fewer bugs, clearer intent.

---

## 6. Don’t Mask Exceptions (Always Chain Them)

**Idea:** Never lose the original error context.

### Bad

```js
try {
  readFile();
} catch (e) {
  throw new Error('File operation failed');
}
```

### Good

```js
try {
  readFile();
} catch (e) {
  throw new Error('File operation failed', { cause: e });
}
```

**Why:** Debugging is easier with the full error chain.

---

## 7. Determinism Over Pragmatism

Prefer code that behaves the same way every time over code that “usually works.”

Pragmatic shortcuts feel productive today.
Non-deterministic behavior punishes you in production.

---

### What Determinism Means in Code

Deterministic code:

* produces the **same output** for the same input
* fails in **predictable, explainable ways**
* is easier to **test, debug, and reason about**

Pragmatic-but-sloppy code:

* depends on timing
* depends on hidden state
* depends on “it should be fine”

---

### Pragmatic (But Dangerous)

```js
let cachedUser;

function getUser() {
  if (!cachedUser) {
    cachedUser = fetchUserFromDB();
  }
  return cachedUser;
}
```

**What’s wrong:**

* Hidden global state
* Order-dependent behavior
* Impossible to reason about in isolation

---

### Deterministic (Explicit State)

```js
function getUser(userId, cache) {
  if (cache.has(userId)) {
    return cache.get(userId);
  }

  const user = fetchUserFromDB(userId);
  cache.set(userId, user);
  return user;
}
```

**Why it’s better:**

* Inputs are explicit
* Behavior is predictable
* Easy to test with a fake cache

---

### Another Classic Example: Time

#### Pragmatic

```js
function isOfferValid() {
  return Date.now() < OFFER_EXPIRY;
}
```

Good luck testing that.

#### Deterministic

```js
function isOfferValid(now) {
  return now < OFFER_EXPIRY;
}
```

Time is now a dependency — not a surprise.

---

### Determinism in Error Handling

#### Pragmatic

```js
try {
  doSomething();
} catch {
  // let's ignore it for now
}
```

This creates **random behavior later**.

#### Deterministic

```js
try {
  doSomething();
} catch (e) {
  logger.error(e);
  throw e;
}
```

Fail loudly. Fail predictably.

---

### When Pragmatism Wins (Yes, Exceptions Exist)

* quick prototypes
* throwaway scripts
* experiments with a short lifespan

But once code enters **shared ownership** or **production**, determinism wins.

---

### The Rule in One Line

> **Predictable failures beat unpredictable success.**

---

## Final Thought

> **Every Rule Has an Exception (Yes, Even These)**\
> **Good code is not clever code.**
> It’s obvious and readable — and honest when it fails.\
> <ins>Write code for humans first. Machines will manage<ins>.




