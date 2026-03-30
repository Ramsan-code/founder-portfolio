# QA & Mobile Testing Checklist: Ilanthiraiyan Portfolio

This checklist ensures the portfolio meets professional standards for performance, accessibility, and cross-device compatibility.

---

## 1. Responsive Design Testing
*Goal: Flawless layout across all screen sizes.*

| Item | Test Steps | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Mobile (320px)** | View on small mobile (e.g. iPhone SE). | Hero text scales, Timeline is vertical, Nav hides. | [ ] |
| **Tablet (768px)** | View on iPad Portrait. | Timeline transitions to horizontal, margins increase. | [ ] |
| **Large Desktop (1440px)** | View on wide monitor. | Max-width constraints apply, images remain sharp. | [ ] |
| **Touch Targets** | Attempt to click buttons/links on mobile. | Minimum 44x44px target area reached. | [ ] |
| **Scroll Performance** | Swipe through the Timeline section. | Framer Motion animations remain at 60fps. | [ ] |

---

## 2. Content & Linguistic Accuracy
*Goal: Precision in names, titles, and Tamil script.*

| Item | Context | Validation Point | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Tamil Script** | Hero Section | இளந்திரையன் (Spelling and rendering). | [ ] |
| **Name Spelling** | Site-wide | Ilanthiraiyan (Check for consistency). | [ ] |
| **Organization Names** | Bio Section | NewBorn Cinema, Thiraippaasarai. | [ ] |
| **Contact Data** | CTA Section | Ilanthiraiyanfilm@gmail.com (Functional link). | [ ] |
| **Location** | CTA Section | Vavuniya, Sri Lanka (Correct geography). | [ ] |

---

## 3. Performance & Asset Optimization
*Goal: Fast loading on mobile 3G/4G.*

| Item | Tool / Step | Threshold | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | Page Load | < 2.5s on 4G. | [ ] |
| **Image Optimization** | Hero Image | Check Next.js auto-webp/avif format. | [ ] |
| **YouTube Lazy Loading** | Work Section | Videos do not block initial page render. | [ ] |
| **Asset Size** | Inspect Network Tab | Total initial payload < 1.5MB. | [ ] |

---

## 4. Accessibility (A11y)
*Goal: Inclusive experience for all users.*

| Item | Validation Point | Criteria | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Contrast Ratio** | Text vs Background | WCAG AA (4.5:1) for body text. | [ ] |
| **Keyboard Nav** | Tab through the site | High-contrast focus states visible. | [ ] |
| **Alt Text** | Images | Descriptive alt for Hero and Gallery images. | [ ] |
| **Reduced Motion** | System Prefs | Animation pauses/simplifies if enabled. | [ ] |

---

## 5. Deployment & Matrix Testing
*Goal: Browser coverage.*

*   **iOS Safari**: Current & Previous (Critical)
*   **Chrome Mobile**: Current (Critical)
*   **Firefox Mobile**: Current (High)
*   **Testing Tools**: 
    *   Chrome DevTools Device Mode (Initial)
    *   BrowserStack / Lambdatest (Final Coverage)
    *   Lighthouse (Performance Audit)

---

## Action Items (Severity: High)
*   [ ] Verify the `Public/Images` path if deploying to a nested subfolder.
*   [ ] Confirm the YouTube list privacy settings are "Public" (currently validated).
