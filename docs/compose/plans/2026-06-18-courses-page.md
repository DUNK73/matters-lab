# Courses Page Implementation Plan

> [!NOTE]
> This document may not reflect the current implementation.
> See the final report for up-to-date state:
> [Final Report](../reports/courses-page.md)

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a new `courses.html` page with course information for kids and teenagers, matching the existing design system.

**Architecture:** Single static HTML page reusing existing CSS blocks (header, hero, courses, buttons, footer). New CSS block for age-group course cards.

**Tech Stack:** Vanilla HTML, CSS (BEM methodology), Montserrat font, live-server for dev.

---

### Task 1: Create courses.html page structure

**Files:**
- Create: `courses.html`

- [ ] **Step 1: Create courses.html with header, hero, course sections, and footer**

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Online English Pronunciation Courses for Kids & Teens | Matters</title>
  <meta name="description" content="Online English pronunciation courses for kids and teenagers. Cambridge exam preparation, accent training, and speaking practice at Matters Lab.">
  <!-- Favicon and app icons -->
  <link rel="icon" type="image/x-icon" href="./src/assets/favicon/matters-favicon/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="./src/assets/favicon/matters-favicon/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./src/assets/favicon/matters-favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./src/assets/favicon/matters-favicon/favicon-96x96.png">
  <link rel="apple-touch-icon" sizes="57x57" href="./src/assets/favicon/matters-favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./src/assets/favicon/matters-favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./src/assets/favicon/matters-favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./src/assets/favicon/matters-favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./src/assets/favicon/matters-favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./src/assets/favicon/matters-favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./src/assets/favicon/matters-favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./src/assets/favicon/matters-favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./src/assets/favicon/matters-favicon/apple-icon-180x180.png">
  <link rel="apple-touch-icon" href="./src/assets/favicon/matters-favicon/apple-icon.png">
  <link rel="apple-touch-icon" href="./src/assets/favicon/matters-favicon/apple-icon-precomposed.png">
  <link rel="manifest" href="./src/assets/favicon/matters-favicon/manifest.json">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="Matters">
  <meta name="theme-color" content="#ffffff">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="./src/assets/favicon/matters-favicon/ms-icon-144x144.png">
  <link rel="icon" type="image/png" sizes="36x36" href="./src/assets/favicon/matters-favicon/android-icon-36x36.png">
  <link rel="icon" type="image/png" sizes="48x48" href="./src/assets/favicon/matters-favicon/android-icon-48x48.png">
  <link rel="icon" type="image/png" sizes="72x72" href="./src/assets/favicon/matters-favicon/android-icon-72x72.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./src/assets/favicon/matters-favicon/android-icon-96x96.png">
  <link rel="icon" type="image/png" sizes="144x144" href="./src/assets/favicon/matters-favicon/android-icon-144x144.png">
  <link rel="icon" type="image/png" sizes="192x192" href="./src/assets/favicon/matters-favicon/android-icon-192x192.png">
  <meta name="msapplication-square70x70logo" content="./src/assets/favicon/matters-favicon/ms-icon-70x70.png">
  <meta name="msapplication-square150x150logo" content="./src/assets/favicon/matters-favicon/ms-icon-150x150.png">
  <meta name="msapplication-square310x310logo" content="./src/assets/favicon/matters-favicon/ms-icon-310x310.png">
  <link rel="mask-icon" href="./src/assets/favicon/matters-favicon/favicon.ico" color="#000000">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="src/styles/main.css" />
  <link rel="stylesheet" href="src/styles/pages/courses.css" />
</head>

<body class="page">

  <header class="header">
    <div class="header__container">
      <div class="header__logo"><a href="index.html"><img src="src/assets/logo/matters-logo-1.png" alt="Matters Logo"
          class="header__logo-img"></a></div>

      <div class="header__menu">
        <span class="header__menu-text">en/ru</span>

        <details id="main-menu" class="nav" open>
          <summary class="header__burger" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <nav class="menu">
            <a href="index.html">Home</a>
            <a href="courses.html">Courses</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
          </nav>
        </details>

        <script>
          let mql = window.matchMedia("(min-width: 1440px)");
          let mainMenu = document.getElementById("main-menu");

          mql.onchange = (event) => {
            if (event.matches) {
              document.getElementById("main-menu").open = true;
              mainMenu.open = true;
            } else {
              mainMenu.open = false;
            }
          };
        </script>

      </div>
    </div>
  </header>

  <main>

    <section class="hero">
      <div class="hero__media"></div>

      <div class="hero__overlay">
        <span class="hero__line"></span>

        <div class="hero__content">
          <h1 class="hero__title">
            Courses for<br>
            Kids & Teens
          </h1>
          <div class="hero__body">
            <span class="hero__tag">
              Start their English journey today.
            </span>
            <span class="hero__line-horizontal"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="content_section kids-courses">
      <h2 class="content_section__title kids-courses__title">For Kids (7-12 years)</h2>

      <div class="kids-courses__list">

        <article class="kids-courses__card">
          <div class="kids-courses__card-header">
            <span class="kids-courses__age">Ages 7-12</span>
            <h3 class="kids-courses__card-title">Cambridge Exam Prep for Kids</h3>
          </div>
          <p class="kids-courses__text">
            Prepare your child for Cambridge English exams (Starters, Movers, Flyers) with fun,
            engaging lessons. Our program builds confidence in reading, writing, listening, and
            speaking while making exam preparation enjoyable.
          </p>
          <ul class="kids-courses__features">
            <li>Interactive lessons with games and activities</li>
            <li>Practice tests aligned with Cambridge standards</li>
            <li>Small group sizes for personalized attention</li>
            <li>Progress tracking and parent updates</li>
          </ul>
          <button class="button kids-courses__button">Learn more</button>
        </article>

      </div>
    </section>

    <section class="content_section content_section--gray teens-courses">
      <h2 class="content_section__title teens-courses__title">For Teens (13-17 years)</h2>

      <div class="teens-courses__list">

        <article class="teens-courses__card">
          <div class="teens-courses__card-header">
            <span class="teens-courses__age">Ages 13-17</span>
            <h3 class="teens-courses__card-title">Cambridge Exam Prep for Teens</h3>
          </div>
          <p class="teens-courses__text">
            Comprehensive preparation for Cambridge exams (KET, PET, FCE, CAE). Our structured
            program develops advanced language skills and exam strategies needed for success
            in international English certifications.
          </p>
          <ul class="teens-courses__features">
            <li>Exam-focused curriculum with proven methodology</li>
            <li>Full-length mock exams with detailed feedback</li>
            <li>Writing workshops and speaking practice</li>
            <li>Flexible scheduling for busy students</li>
          </ul>
          <button class="button teens-courses__button">Learn more</button>
        </article>

      </div>
    </section>

    <section class="content_section inspiring">
      <div class="inspiring__media"></div>
      <div class="inspiring__overlay">
        <div class="inspiring__content">
          <h2 class="content_section__title content_section__title--white inspiring__title">Ready to start?</h2>
          <p class="inspiring__text">
            Give your child the gift of confident English communication. Our expert teachers
            make learning fun and effective.
          </p>
          <button class="inspiring__button button">Contact us</button>
        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <section class="footer_section questions">
      <h2 class="questions__title">
        Still have questions?<br>
        We will be happy to help!
      </h2>

      <form class="questions__form">
        <div class="questions__field">
          <label class="questions__label" for="name">Name</label>
          <input required class="questions__input" type="text" id="name" name="name" placeholder="Your name">
        </div>

        <div class="questions__field">
          <label class="questions__label" for="email">Email</label>
          <input required class="questions__input" type="email" id="email" name="email" placeholder="Your email"
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$">
        </div>

        <div class="questions__field">
          <label class="questions__label" for="phone">Phone</label>
          <input required class="questions__input" type="input" id="phone" name="phone" placeholder="Your phone"
            pattern="[0-9]+">
        </div>

        <div class="questions__field">
          <label class="questions__label" for="message">Message</label>
          <textarea required class="questions__textarea" id="message" name="message" placeholder="Your message"
            rows="4"></textarea>
        </div>

        <label class="questions__checkbox">
          <input id="agree" type="checkbox" class="questions__checkbox-input">
          <span class="questions__checkbox-box"></span>
          <span class="questions__checkbox-text" aria-required="true">
            I agree to the processing of personal data
          </span>
        </label>

        <button id="mailSendButton" class="button questions__button" type="button" disabled>
          Submit
        </button>

        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>

        <script type="text/javascript">
          const phone = document.getElementById('phone');
          const email = document.getElementById('email');
          const name = document.getElementById('name');
          const message = document.getElementById('message');
          const agree = document.getElementById('agree');
          const mailSendButton = document.getElementById('mailSendButton');

          const enabled = () => {
            if (phone.value && email.value && name.value && message.value && agree.checked) {
              mailSendButton.disabled = false;
            } else {
              mailSendButton.disabled = true;
            }
          };

          const touched = (element) => {
            element.classList.add('touched');
          };

          (function () {
            emailjs.init({
              publicKey: "wmpPPI0KdGExknR4e",
            });
          })();

          mailSendButton.addEventListener('click', (event) => {
            emailjs.send("service_rg5i1no", "template_yf89nxc", {
              email: email.value,
              name: name.value,
              message: message.value,
            });

            email.value = null;
            name.value = null;
            message.value = null;
            agree.checked = false;
            enabled();
          });

          phone.addEventListener('input', (event) => { enabled(); });
          email.addEventListener('input', (event) => { enabled(); });
          name.addEventListener('input', (event) => { enabled(); });
          message.addEventListener('input', (event) => { enabled(); });
          agree.addEventListener('input', (event) => { enabled(); });

          phone.addEventListener('focus', (event) => { touched(event.target); });
          email.addEventListener('focus', (event) => { touched(event.target); });
          name.addEventListener('focus', (event) => { touched(event.target); });
          message.addEventListener('focus', (event) => { touched(event.target); });
          agree.addEventListener('focus', (event) => { touched(event.target); });
        </script>

      </form>
    </section>

    <section class="footer_section legal">
        <ul class="legal__list">
          <li class="legal__item">
            <a href="/documents/document-viewer.html?documentId=1" class="legal__link">Публичная оферта</a>
          </li>
          <li class="legal__item">
            <a href="/documents/document-viewer.html?documentId=2" class="legal__link">Пользовательское соглашение</a>
          </li>
          <li class="legal__item">
            <a href="/documents/document-viewer.html?documentId=3" class="legal__link">Политикой конфиденциальности и
              обработки персональных данных</a>
          </li>
          <li class="legal__item">
            <a href="/documents/document-viewer.html?documentId=4" class="legal__link">Согласие на обработку
              персональных данных</a>
          </li>
          <li class="legal__item">
            <a href="/documents/document-viewer.html?documentId=5" class="legal__link">Согласие на информационную и
              рекламную рассылку</a>
          </li>
        </ul>
        <p class="legal__info">Савельева Юлия Александровна. ИНН 402710463255. Плательщик налога на профессиональный
          доход (самозанятая).</p>
      </section>

    <section class="copyright">
      <span>© Matters - 2026</span>
    </section>
  </footer>

  <button id="scrollTopBtn" class="back-to-top">
    <span class="back-to-top__label">Back to top</span>
    <div class="back-to-top__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2263 -0.422 19.9719 31.062" width="19.9719px"
        height="31.062px">
        <path fill-rule="evenodd" fill="#fff"
          d="M 10.214 30.64 C 10.826 30.64 11.318 30.148 11.318 29.536 L 11.318 3.367 L 18.299 10.347 C 18.91 10.958 19.941 10.676 20.16 9.854 C 20.261 9.471 20.16 9.061 19.877 8.778 L 10.999 -0.101 C 10.57 -0.529 9.858 -0.529 9.43 -0.101 L 0.551 8.778 C -0.051 9.38 0.223 10.411 1.053 10.639 C 1.436 10.739 1.847 10.63 2.121 10.347 L 9.101 3.367 L 9.101 29.536 C 9.101 30.148 9.603 30.64 10.214 30.64 Z"
          style="stroke-width: 1;" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)" />
      </svg>
    </div>
  </button>
  <script>
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "flex";
        setTimeout(() => {
          scrollTopBtn.style.opacity = "1";
        }, 50);
      } else {
        scrollTopBtn.style.opacity = "0";
        setTimeout(() => {
          scrollTopBtn.style.display = "none";
        }, 300);
      }
    };

    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  </script>

</body>

</html>
```

- [ ] **Step 2: Verify page loads**

Run: `npx live-server --port=3000` and open `http://localhost:3000/courses.html`
Expected: Page renders with header, hero, two course sections, CTA, and footer.

---

### Task 2: Create courses.css styles

**Files:**
- Create: `src/styles/pages/courses.css`

- [ ] **Step 1: Create courses.css with kids and teens course card styles**

```css
/* Kids Courses Section */
.kids-courses {
  background-color: var(--white);
}

.kids-courses__title {
  margin-bottom: 30px;
}

.kids-courses__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.kids-courses__card {
  padding: 20px 16px;
  border-radius: var(--radius);
  background-color: var(--gray-light);
}

.kids-courses__card-header {
  margin-bottom: 12px;
}

.kids-courses__age {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: var(--green);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.kids-courses__card-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--dark);
}

.kids-courses__text {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--gray-text);
}

.kids-courses__features {
  margin: 0 0 20px;
  padding-left: 20px;
}

.kids-courses__features li {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--gray-text);
}

.kids-courses__button {
  font-size: 14px;
  font-weight: 500;
}

/* Teens Courses Section */
.teens-courses {
  background-color: var(--gray-light);
}

.teens-courses__title {
  margin-bottom: 30px;
}

.teens-courses__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.teens-courses__card {
  padding: 20px 16px;
  border-radius: var(--radius);
  background-color: var(--white);
}

.teens-courses__card-header {
  margin-bottom: 12px;
}

.teens-courses__age {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: var(--dark);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.teens-courses__card-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--dark);
}

.teens-courses__text {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--gray-text);
}

.teens-courses__features {
  margin: 0 0 20px;
  padding-left: 20px;
}

.teens-courses__features li {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--gray-text);
}

.teens-courses__button {
  font-size: 14px;
  font-weight: 500;
}

/* Tablet styles */
@media (min-width: 768px) {
  .kids-courses__card,
  .teens-courses__card {
    padding: 24px 20px;
  }

  .kids-courses__card-title,
  .teens-courses__card-title {
    font-size: 24px;
  }

  .kids-courses__text,
  .teens-courses__text {
    font-size: 15px;
  }

  .kids-courses__button,
  .teens-courses__button {
    padding: 14px 22px;
    font-size: 15px;
  }
}

/* Desktop styles */
@media (min-width: 1280px) {
  .kids-courses__card,
  .teens-courses__card {
    padding: 28px 24px;
  }

  .kids-courses__card-title,
  .teens-courses__card-title {
    font-size: 28px;
  }

  .kids-courses__text,
  .teens-courses__text {
    font-size: 16px;
  }

  .kids-courses__features li,
  .teens-courses__features li {
    font-size: 16px;
  }

  .kids-courses__button,
  .teens-courses__button {
    padding: 16px 26px;
    font-size: 16px;
  }
}
```

- [ ] **Step 2: Verify styles render correctly**

Run: `npx live-server --port=3000` and open `http://localhost:3000/courses.html`
Expected: Cards display with proper spacing, colors, typography matching the design system.

---

### Task 3: Add navigation link on main page (optional)

**Files:**
- Modify: `index.html:104-109`

- [ ] **Step 1: Add "Courses" link to main page nav**

In `index.html`, update the nav section:

```html
<nav class="menu">
  <a href="#">About</a>
  <a href="courses.html">Courses</a>
  <a href="#">Pricing</a>
  <a href="#">Contacts</a>
</nav>
```

- [ ] **Step 2: Verify navigation works**

Run: `npx live-server --port=3000` and click "Courses" link in header.
Expected: Navigates to `courses.html`.

---

### Task 4: Final verification

- [ ] **Step 1: Run live-server and test all pages**

Run: `npx live-server --port=3000`

Test checklist:
- [ ] `index.html` loads correctly
- [ ] `courses.html` loads correctly
- [ ] Header navigation works on both pages
- [ ] Hero sections render properly
- [ ] Course cards display with correct styles
- [ ] Footer form works on courses page
- [ ] Responsive behavior at mobile/tablet/desktop breakpoints
- [ ] Back-to-top button works on courses page

- [ ] **Step 2: Commit changes**

```bash
git add courses.html src/styles/pages/courses.css index.html
git commit -m "feat: add courses page for kids and teens with Cambridge exam prep"
```
