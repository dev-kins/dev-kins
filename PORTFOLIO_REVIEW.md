# Portfolio review and implementation

Reviewed September 25, 2026. Changes are local; no deployment or push was performed.

## Hiring-manager assessment

The strongest signal is your Laravel work across several different workflows. Real application screenshots, an identifiable person, an internship context, a public school-system repository, and direct contact details were useful foundations. The green palette, portrait, and dev-kins identity were worth keeping.

The old page made that evidence harder to judge. The school case study dominated the page; repeated stats, technology badges, layered cards, gradients, and labels such as “recruiter-ready” competed with the projects. “Core expertise,” “Advanced React,” “live in production,” and broad capability lists overstated what could be established. The CRM was absent. The About copy had less personality than the specific debugging and Crew Chief examples you supplied.

A recruiter should now be able to identify your strongest tools, target roles, individual work, concrete debugging experience, and each project's limitations. Team size and collaboration boundaries, dates for the non-internship projects, and one walkthrough or source example per project would make the evidence stronger still. No metrics, client adoption, professional React experience, AI functionality, start date, preferred city, or relocation commitment were invented.

## Direction and changes by page/section

| Area | Finding | Implemented change |
| --- | --- | --- |
| Home / hero | Broad claim plus several counts and technology lists; identity secondary | Lead with Kian/Kino and the work behind school and HR workflows. Show Laravel, PHP, HTML, CSS as the strongest foundation. Projects and résumé are the primary actions. |
| Projects | Long school case study overwhelms the rest; status and aspirations mixed together | Four comparable case studies with project shortcuts, personal contribution, concrete problem, and explicit status. Galleries remain available through native disclosures. |
| LSHS | Public repository works; “live in production” unsupported | Developed modules and promotion logic documented. Docker/PHP/assets/database troubleshooting described. Failed deployment history and unverified live workflows stated; removed working-demo CTA. |
| HR | Existing page implied current workplace production use | Record LAN demonstration accurately; describe applicant-to-employee conversion and the employee-number problem. No ongoing adoption or outcome claims. |
| Naic OpenGov | Planned procurement/analytics ideas read like existing capabilities | Separate implemented core modules from ideas. State unverified deployment and outstanding page/route verification. Explain column/route/Blade mismatches. Label as a personal project. |
| ClientPilot | Missing | Add Laravel/Inertia/React case study. Describe local lead, role, deal, and activity work and authorization fixes. Task completion unconfirmed; AI planned. No fabricated screenshot or repository link. |
| Experience | Long repeated project details and delivery claims | Concise internship context. Retain company and Feb–May 2026 dates from existing portfolio; connect to the HR case study. |
| Skills | Flat badges suggest equal proficiency; “Advanced React” unsupported | Strongest foundation / tools used / developing through projects. Add Tailwind, Livewire, Inertia. Specific growth areas: frontend state/accessibility, validation/authorization, deployment, tests, evaluated AI features. |
| About | Generic principles and a grammar error | Use Kino, persistence through errors and testing fixes, and brief McDonald's Crew Chief teamwork context. |
| Contact | A multi-field form merely opened an email draft; repeated résumé cards | Direct, selectable email, explicit email-app behavior, résumé, GitHub, LinkedIn. Confirmed target roles and Philippines onsite/hybrid openness. |
| 404 | Immediate relative redirect concealed missing pages and could fail on nested URLs | Useful standalone error page with root-relative styles and return-home link. |

The portfolio has one public HTML content page with section anchors, plus the 404 document and résumé asset. No additional content-page routes were found in the source or live navigation.

## Developer findings and fixes

- Fixed a confirmed mobile-menu CSS conflict: the old button expanded while navigation remained hidden. New mobile rules explicitly show the open navigation.
- Removed stacked generations of CSS overrides, reveal-on-scroll dependencies, loader, decorative animations, duplicate project counts, and icon injection. The content is immediately visible.
- Replaced the old overlay (no focus placement, trap, or restoration) with a native modal dialog. Tab stays on its close control; Escape closes it; focus returns to the originating link. Screenshot links still open their images without JavaScript.
- Added visible focus styles, labelled sections, meaningful screenshot-link names, native gallery disclosures, a focusable main target, and navigation focus management. Escape only handles the mobile menu when it is open.
- Main navigation and disclosures remain usable without JavaScript. Theme storage errors are caught, and the initial theme follows the system preference when no saved preference exists.
- Consolidated responsive layout, used flexible columns, preserved readable text, and removed decorative motion. Reduced-motion preferences disable smooth scrolling.
- Rewrote metadata, used an absolute social-image URL, and removed the stale manually maintained update date and portfolio-version messaging.
- Kept static HTML/CSS/JavaScript. No framework, package dependencies, or build step was added.

## Link review

- Portfolio home and all public sections inspected through the browser and local source.
- https://github.com/dev-kins and https://github.com/dev-kins/lshs-omis load publicly. School repository README corroborates the project and its stack; the application itself was not functionally audited.
- The school Render URL initially displayed a cold-start screen and later rendered its public homepage. This establishes homepage reachability only, not database health, authentication, or working academic workflows. Your latest known failed-deployment/database-suspension history is retained without treating the landing page as a verified demo.
- LinkedIn reached an authentication wall; profile contents could not be verified without signing in.
- The existing live 404 document redirected to the homepage, as its source indicated.
- The résumé file exists locally, and its public URL returns HTTP 200 with application/pdf. The in-app browser PDF preview was blank; PDF content was not revised or independently audited.
- Mailto addresses and local asset/anchor destinations were checked. No email was sent and no project records were created or changed.

## Verification

Story: a visitor can understand Kian's background, navigate to each project, inspect its screenshots and status, and find the résumé or email address.

- Served the static site locally at http://127.0.0.1:4173 and inspected desktop and mobile screenshots.
- No horizontal overflow measured at widths 320, 390, 768, and 1440 pixels.
- Mobile menu opens, section selection closes it and focuses the section, and project/contact anchor navigation works.
- The custom 404 page renders and its return-home link works.
- Gallery disclosure opens; preview loads; keyboard focus, Tab containment, Escape, and focus restoration checked.
- Light and dark themes visually inspected; no browser console warnings or errors observed during the checked flows.
- Checked 63 asset/link references, 19 image elements, and 26 IDs: no missing local destinations, duplicate IDs, broken anchors, or missing alt attributes.
- Calculated principal text contrast pairs: light body 13.10:1, secondary 5.96:1, accent 7.69:1; dark body 14.72:1, secondary on tinted background 6.74:1, accent on tinted background 7.20:1.
- JavaScript syntax checked with `node --check script.js`; whitespace checked with `git diff --check`.
- No backend/API exists in this portfolio, and no package build/test suite is configured. Checks do not establish complete WCAG conformance or validate the linked applications' business logic.

## Next evidence to add

1. A short ClientPilot walkthrough and a shareable code link, when available. This would substantiate the React/Inertia work most directly.
2. Team size and exact ownership boundaries for collaborative projects, plus dates. The current copy reflects the personal contributions you confirmed.
3. One concrete test or code example per case study: promotion logic, employee-number handling, and sales-rep permissions are good candidates.
4. Recheck the school deployment and OpenGov routes before restoring any live-demo claim. Capture the date and workflow actually tested.
5. Review the résumé for consistency with this more precise positioning. The PDF was retained unchanged.
