import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const checks = [
  {
    name: "App shell exists",
    pass: () => read("app/index.html").includes('id="viewRoot"'),
  },
  {
    name: "Three roles exist",
    pass: () =>
      ["student", "teacher", "admin"].every((role) =>
        read("app/app.js").includes(`"${role}"`),
      ),
  },
  {
    name: "Account and Settings are separated",
    pass: () =>
      read("app/index.html").includes("settingsTemplate") &&
      read("app/app.js").includes("function renderSettings()") &&
      read("app/app.js").includes("drawRoleAccountPanel"),
  },
  {
    name: "Montserrat typography is configured",
    pass: () =>
      read("app/index.html").includes("Montserrat") &&
      read("app/styles.css").includes('"Montserrat"'),
  },
  {
    name: "Figma-like marketing font is separated from lesson font",
    pass: () =>
      read("app/index.html").includes("family=Inter") &&
      read("app/styles.css").includes("--figma-sans") &&
      read("app/styles.css").includes('body[data-shell="marketing"]') &&
      read("app/styles.css").includes(".course-layout"),
  },
  {
    name: "Phase 1 pass/fail logic exists",
    pass: () =>
      read("app/app.js").includes("score >= 70") &&
      read("app/app.js").includes('"failed"'),
  },
  {
    name: "Creator Studio exists",
    pass: () =>
      read("app/app.js").includes("function renderStudio()") &&
      read("app/index.html").includes("studioTemplate"),
  },
  {
    name: "Classroom invite exists",
    pass: () =>
      read("app/app.js").includes("inviteCode") &&
      read("app/app.js").includes("joinClassForm"),
  },
  {
    name: "Admin audit and risk alerts exist",
    pass: () =>
      read("app/app.js").includes("auditLog") &&
      read("app/app.js").includes("buildRiskAlerts"),
  },
  {
    name: "Lesson tutor prompt is temporarily hidden",
    pass: () =>
      !read("app/index.html").includes('id="tutorPanel"') &&
      !read("app/app.js").includes("Ask for help") &&
      !read("app/app.js").includes("Tutor prompt"),
  },
  {
    name: "Reflection blocks render suggested answers",
    pass: () =>
      read("app/app.js").includes("function getReflectionAnswer") &&
      read("app/app.js").includes("reflection-answer") &&
      read("app/app.js").includes("reflection-toggle") &&
      read("app/app.js").includes("reflection-response") &&
      read("app/app.js").includes("reflectionDrafts") &&
      read("app/app.js").includes("Câu trả lời của bạn") &&
      read("app/app.js").includes("aria-expanded") &&
      read("app/app.js").includes("const interactive = blocks.filter(") &&
      read("app/app.js").includes(
        '(block) => block.type === "multiple_choice"',
      ) &&
      !read("app/app.js").includes(
        '<textarea rows="5" placeholder="Write your answer"',
      ),
  },
  {
    name: "Lesson Q&A uses comment replies and voting",
    pass: () =>
      read("app/app.js").includes("function applyVote") &&
      read("app/app.js").includes("comment-thread") &&
      read("app/app.js").includes("comment-reply") &&
      read("app/app.js").includes("vote-button") &&
      read("app/app.js").includes("reddit-vote") &&
      read("app/app.js").includes("▲") &&
      read("app/app.js").includes("▼") &&
      read("app/styles.css").includes(".comment-bubble") &&
      read("app/styles.css").includes(".reply-form") &&
      read("app/styles.css").includes(".reddit-vote"),
  },
  {
    name: "Teacher and admin can edit lesson blocks",
    pass: () =>
      read("app/app.js").includes("canCreateContent()") &&
      read("app/app.js").includes("Fix lesson") &&
      read("app/app.js").includes("function drawLessonEditor") &&
      read("app/app.js").includes("Save lesson changes") &&
      read("app/app.js").includes("Add image block") &&
      read("app/app.js").includes("readFileAsDataUrl(file)") &&
      read("app/app.js").includes("state.customCourses.unshift(nextCourse)") &&
      read("app/app.js").includes("function buildInlineImageEditor") &&
      read("app/app.js").includes("inline-image-file") &&
      read("app/app.js").includes("renderInlineBlockImage(block)"),
  },
  {
    name: "Fix lesson can reorder and delete blocks",
    pass: () =>
      read("app/app.js").includes("function buildLessonEditorBlockHeader") &&
      read("app/app.js").includes('data-editor-action="up"') &&
      read("app/app.js").includes('data-editor-action="down"') &&
      read("app/app.js").includes('data-editor-action="delete"') &&
      read("app/app.js").includes("blocks.splice(index, 1)") &&
      read("app/styles.css").includes(".lesson-editor-block-actions"),
  },
  {
    name: "Lesson image uploads are optimized for localStorage",
    pass: () =>
      read("app/app.js").includes("function readImageFileAsOptimizedDataUrl") &&
      read("app/app.js").includes("compactLocalAssetLibrary()") &&
      read("app/app.js").includes("getStorageSaveErrorMessage") &&
      read("app/app.js").includes("canvas.toDataURL") &&
      read("app/app.js").includes("readImageFileAsOptimizedDataUrl(file)") &&
      read("app/app.js").includes("function renderLessonImage") &&
      read("app/app.js").includes("data-lesson-image") &&
      read("app/app.js").includes("Không tải được ảnh"),
  },
  {
    name: "Asset library uses IndexedDB with compact localStorage fallback",
    pass: () =>
      read("app/app.js").includes('const indexedDbName = "studyflow-db-v1"') &&
      read("app/app.js").includes("function openStudyflowDb") &&
      read("app/app.js").includes("async function hydrateStateFromIndexedDb") &&
      read("app/app.js").includes(
        "function createCompactStateForLocalStorage",
      ) &&
      read("app/app.js").includes("assetLibraryLimit = 60") &&
      read("app/app.js").includes("Compact storage") &&
      read("app/app.js").includes(
        "writeStateToIndexedDb(structuredClone(state))",
      ),
  },
  {
    name: "Local course edits can be uploaded to the web backend",
    pass: () =>
      read("app/app.js").includes(
        "async function publishLocalCourseToBackend",
      ) &&
      read("app/app.js").includes(
        "async function publishAllLocalCoursesToBackend",
      ) &&
      read("app/app.js").includes("async function uploadEmbeddedCourseMedia") &&
      read("app/app.js").includes("function findLocalAssetDataUrl") &&
      read("app/app.js").includes("createCourseMediaUploadContext") &&
      read("app/app.js").includes("findBackendMediaForBlock") &&
      read("app/app.js").includes("rememberInLibrary") &&
      read("app/app.js").includes("relinkedCount") &&
      /getUploadableMediaSource\(\s*block,\s*"src",\s*"assetId"/m.test(
        read("app/app.js"),
      ) &&
      /getUploadableMediaSource\(\s*block,\s*"imageSrc",\s*"imageAssetId"/m.test(
        read("app/app.js"),
      ) &&
      read("app/app.js").includes("dataUrlToFile") &&
      read("app/app.js").includes("Upload toàn bộ data lên web") &&
      read("app/app.js").includes("Upload saved course to web") &&
      read("api/courses.php").includes("course_replaced") &&
      read("api/courses.php").includes(
        "delete from course_levels where course_id = ?",
      ) &&
      read("api/courses.php").includes(
        "json_decode((string)$block['content_json'], true)",
      ),
  },
  {
    name: "Frontend loads full courses from backend database",
    pass: () =>
      read("app/app.js").includes("function normalizeBackendCourseRecord") &&
      read("app/app.js").includes("async function syncCoursesFromBackend") &&
      read("app/app.js").includes("await syncCoursesFromBackendSafely()") &&
      read("api/courses.php").includes("$course['levels'] = $levels") &&
      read("api/courses.php").includes("$lesson['blocks'] = $blocks"),
  },
  {
    name: "Lesson media uploads support Cloudinary storage",
    pass: () =>
      read("app/app.js").includes("async function apiUploadAssetFile") &&
      read("app/app.js").includes('accept="video/*"') &&
      read("app/app.js").includes("renderVideoBlockMedia(block)") &&
      read("app/app.js").includes('<video class="lesson-video" controls') &&
      read("api/assets.php").includes("storage_upload") &&
      read("api/assets.php").includes("storage_media_url") &&
      read("api/storage.php").includes("storage_is_cloudinary") &&
      read("api/storage.php").includes("cloudinary_http_request") &&
      read("api/storage-health.php").includes("uploadReady") &&
      read("api/storage-health.php").includes("storage_check_cloudinary") &&
      read("api/assets.php").includes("Cloud storage upload failed") &&
      read("api/media.php").includes("MEDIA_PROXY_DISABLED") &&
      read("api/storage.php").includes("CURLOPT_USERPWD") &&
      read("api/storage.php").includes("CURLAUTH_BASIC") &&
      read("app/app.js").includes("res\\.cloudinary\\.com") &&
      read("api/assets.php").includes("$_FILES['file']") &&
      read("api/config.sample.php").includes("cloudinary_api_secret") &&
      read(".gitignore").includes("api/config.php"),
  },
  {
    name: "Lesson text preserves paragraph breaks",
    pass: () =>
      read("app/app.js").includes("function renderRichParagraphs") &&
      read("app/app.js").includes("split(/\\n\\s*\\n/g)") &&
      read("app/app.js").includes('replace(/\\n/g, "<br />")') &&
      read("app/app.js").includes('class="rich-text"') &&
      read("app/styles.css").includes(".rich-text") &&
      read("app/styles.css").includes("gap: 18px"),
  },
  {
    name: "Image captions render quoted and italic",
    pass: () =>
      read("app/app.js").includes("function renderMediaCaption") &&
      read("app/app.js").includes('<p class="media-caption">"') &&
      read("app/styles.css").includes("font-style: italic"),
  },
  {
    name: "Production RLS blueprint exists",
    pass: () =>
      read("db/rls_policies.sql").includes("enable row level security"),
  },
  {
    name: "Storage policy blueprint exists",
    pass: () => read("db/storage_policies.sql").includes("lesson-assets"),
  },
  {
    name: "Namecheap MySQL schema exists",
    pass: () =>
      read("db/namecheap_mysql_schema.sql").includes(
        "create table if not exists profiles",
      ),
  },
  {
    name: "PHP backend API scaffold exists",
    pass: () =>
      read("api/bootstrap.php").includes("function require_role") &&
      read("api/login.php").includes("password_verify") &&
      read("api/courses.php").includes("pending_review") &&
      read("api/health.php").includes("database"),
  },
  {
    name: "Frontend backend bridge exists",
    pass: () =>
      read("app/app.js").includes("async function apiRequest") &&
      read("app/app.js").includes("backendLoginForm") &&
      read("app/app.js").includes("pushProgressToBackend") &&
      read("app/app.js").includes("pushCourseSubmissionToBackend"),
  },
  {
    name: "Expanded backend endpoints exist",
    pass: () =>
      [
        "notes.php",
        "classrooms.php",
        "assets.php",
        "admin/media-cleanup.php",
        "reviews.php",
        "questions.php",
        "reports.php",
        "admin/reports.php",
      ].every((file) => read(`api/${file}`).includes("respond(")),
  },
  {
    name: "Course summary title is protected from ugly wraps",
    pass: () =>
      read("app/styles.css").includes(".summary-title.compact-title") &&
      read("app/app.js").includes("getSummaryTitleClass"),
  },
  {
    name: "No old dark shell tokens",
    pass: () => !/#101112|#151819|#17191b|#202326/.test(read("app/styles.css")),
  },
  {
    name: "Root route opens landing home",
    pass: () =>
      read("app/app.js").includes(
        'const hash = window.location.hash.replace("#", "") || "home"',
      ),
  },
  {
    name: "Login and register forms cannot show together",
    pass: () =>
      read("app/styles.css").includes("[hidden]") &&
      read("app/app.js").includes("loginForm.hidden = isRegister"),
  },
  {
    name: "Settings internals are admin only",
    pass: () =>
      read("app/app.js").includes(
        'const adminMode = state.account.role === "admin"',
      ) &&
      read("app/app.js").includes(
        'view.querySelector("#systemPanel")?.remove()',
      ) &&
      read("app/app.js").includes(
        'view.querySelector(".data-tools-panel")?.remove()',
      ),
  },
  {
    name: "Vietnamese and English localization both run",
    pass: () =>
      read("app/app.js").includes(
        "document.documentElement.lang = getLanguage()",
      ) && !read("app/app.js").includes('if (getLanguage() === "vi") {'),
  },
  {
    name: "Deploy cache bust token is current",
    pass: () =>
      read("app/index.html").includes("styles.css?v=20260714-upload-progress1") &&
      read("app/index.html").includes(
        "studyflow-resend.css?v=20260713-resend2",
      ) &&
      read("app/index.html").includes(
        "app.js?v=20260714-upload-progress1",
      ),
  },
  {
    name: "Settings shows upload progress and API error detail",
    pass: () =>
      read("app/app.js").includes("function createUploadProgressController") &&
      read("app/app.js").includes("estimatePublishAllUploadSteps") &&
      read("app/app.js").includes("adminUploadProgressPanel") &&
      read("app/app.js").includes("formatUploadError") &&
      read("app/styles.css").includes(".upload-progress-bar") &&
      read("app/styles.css").includes(".upload-log-item.error"),
  },
  {
    name: "Marketing landing uses real scaled layout instead of browser zoom",
    pass: () =>
      read("app/styles.css").includes("--landing-edge") &&
      !read("app/styles.css").includes("zoom: 0.75") &&
      !read("app/styles.css").includes("width: 133.333333%"),
  },
  {
    name: "Landing hero no longer renders the learning widget",
    pass: () =>
      !read("app/index.html").includes('class="landing-visual"') &&
      !read("app/index.html").includes('class="learning-widget"'),
  },
  {
    name: "Landing proof copy is placed before the learning system",
    pass: () => {
      const html = read("app/index.html");
      return (
        html.indexOf('class="landing-proof-copy"') > -1 &&
        html.indexOf('class="landing-proof-copy"') <
          html.indexOf('class="learning-system"')
      );
    },
  },
  {
    name: "Landing section nav scrolls to public anchors",
    pass: () =>
      read("app/index.html").includes('href="#home-program"') &&
      read("app/index.html").includes('data-home-scroll="home-backed"') &&
      read("app/index.html").includes('id="home-program"') &&
      read("app/app.js").includes("homeSectionAnchors") &&
      read("app/app.js").includes("scrollToHomeSection") &&
      read("app/app.js").includes("homeSectionAnchors.has(name)"),
  },
  {
    name: "Landing uses the StudyFlow Resend light design system",
    pass: () =>
      read("app/index.html").includes("NỀN TẢNG HỌC TẬP CHO NGƯỜI VIỆT") &&
      read("app/index.html").includes("<h1>StudyFlow</h1>") &&
      read("app/index.html").includes("Học. Kết nối. Tiến bộ.") &&
      read("app/index.html").includes("studyflow-galaxy.png") &&
      read("app/studyflow-resend.css").includes("--sf-accent: #55d6a7") &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="app"] .lesson-shell',
      ),
  },
  {
    name: "Landing copy balance pass is applied",
    pass: () =>
      read("app/styles.css").includes("Landing copy balance pass - 20260630") &&
      read("app/styles.css").includes(".landing-hero-kicker") &&
      read("app/styles.css").includes("font-size: 20px") &&
      read("app/styles.css").includes("font-style: italic") &&
      read("app/styles.css").includes("text-transform: none"),
  },
  {
    name: "Landing proof and about copy are refreshed",
    pass: () =>
      read("app/index.html").includes("landing-proof-kicker") &&
      read("app/index.html").includes("studyflow-learning-chart.png") &&
      !read("app/index.html").includes("studyflow-learning-chart.html") &&
      read("app/index.html").includes('class="learning-system"') &&
      read("app/index.html").includes('class="about-section"') &&
      read("app/index.html").includes('class="contact-section"'),
  },
  {
    name: "Landing uses black smooth scrollbar polish",
    pass: () =>
      read("app/styles.css").includes("scroll-behavior: smooth") &&
      read("app/styles.css").includes("scrollbar-color: #000000 #fbfbf5") &&
      read("app/styles.css").includes("html::-webkit-scrollbar-thumb"),
  },
  {
    name: "Priority landing sections use real product UI",
    pass: () =>
      read("app/index.html").includes('class="learning-system"') &&
      read("app/index.html").includes('class="studyflow-dashboard"') &&
      read("app/index.html").includes('class="landing-feature-intro"') &&
      !read("app/index.html").includes(
        'class="landing-proof-art landing-proof-chart"',
      ) &&
      !read("app/index.html").includes('class="preview-card large"') &&
      read("app/studyflow-resend.css").includes(".learning-system-flow") &&
      read("app/studyflow-resend.css").includes(".dashboard-context"),
  },
  {
    name: "Responsive final pass exists",
    pass: () =>
      read("app/styles.css").includes("Responsive final pass") &&
      read("app/styles.css").includes("@media (max-width: 920px)") &&
      read("app/styles.css").includes("@media (max-width: 700px)") &&
      read("app/styles.css").includes("overflow-x: hidden") &&
      read("app/styles.css").includes("overscroll-behavior-x"),
  },
  {
    name: "Landing clamps page overflow but allows local horizontal scroll",
    pass: () =>
      read("app/styles.css").includes(".landing-page") &&
      read("app/styles.css").includes("overflow-x: hidden") &&
      read("app/styles.css").includes(".partner-marquee") &&
      read("app/styles.css").includes("overflow-x: auto") &&
      read("app/styles.css").includes(
        "max-width: calc(100vw - (var(--landing-edge) * 2))",
      ) &&
      read("app/styles.css").includes("-webkit-overflow-scrolling: touch"),
  },
  {
    name: "Onboarding profile and interest flow exists",
    pass: () =>
      read("app/index.html").includes("onboardingTemplate") &&
      read("app/app.js").includes("function renderOnboarding()") &&
      read("app/app.js").includes("getRecommendedCoursesForInterests") &&
      read("app/app.js").includes("isProfileSetupComplete()") &&
      read("app/app.js").includes('"onboarding"'),
  },
  {
    name: "Onboarding recommendations are selectable instead of navigational",
    pass: () => {
      const app = read("app/app.js");
      const start = app.indexOf("function drawOnboardingRecommendations");
      const end = app.indexOf("function renderOnboarding");
      const block = app.slice(start, end);
      return (
        block.includes("onboarding-course-choice") &&
        block.includes("aria-pressed") &&
        block.includes("drawOnboardingRecommendations(root)") &&
        !block.includes("window.location.hash") &&
        app.includes("Bạn hãy chọn ít nhất một khóa học đề xuất")
      );
    },
  },
  {
    name: "Course enrollment state is explicit",
    pass: () =>
      read("app/app.js").includes("function toggleCourseQueue") &&
      read("app/app.js").includes("course-enroll-button") &&
      read("app/app.js").includes("Đăng ký khóa học") &&
      read("app/app.js").includes(
        "if (!isCourseQueued(course.id)) addCourseToQueue(course.id)",
      ),
  },
  {
    name: "Role dashboards have quick actions",
    pass: () =>
      read("app/app.js").includes("role-action-strip") &&
      read("app/app.js").includes('data-student-action="next"') &&
      read("app/app.js").includes('data-go="classrooms"') &&
      read("app/app.js").includes("getNextRegisteredLessonPlan"),
  },
  {
    name: "Auth forms validate email and password before API",
    pass: () =>
      read("app/app.js").includes("function isValidEmail") &&
      read("app/app.js").includes("Email chưa đúng định dạng.") &&
      read("app/app.js").includes("Mật khẩu cần ít nhất 8 ký tự."),
  },
  {
    name: "Account supports backend password changes",
    pass: () =>
      read("app/index.html").includes("passwordChangePanel") &&
      read("app/app.js").includes('apiRequest("password.php"') &&
      read("api/password.php").includes("password_verify") &&
      read("api/password.php").includes("password_hash"),
  },
  {
    name: "Admin can manage database user roles",
    pass: () =>
      read("app/app.js").includes("function loadAdminUsers") &&
      read("app/app.js").includes('apiRequest("admin/users.php"') &&
      read("app/app.js").includes("function saveAdminUserRole") &&
      read("app/styles.css").includes(".admin-user-row"),
  },
  {
    name: "Teacher accounts require admin approval",
    pass: () =>
      read("api/register.php").includes("teacher_pending") &&
      read("api/admin/users.php").includes("teacher_pending") &&
      read("db/namecheap_mysql_schema.sql").includes("teacher_pending") &&
      read("app/app.js").includes("Giáo viên chờ duyệt") &&
      read("app/app.js").includes(
        '["student", "teacher_pending", "teacher", "admin"]',
      ),
  },
  {
    name: "Teacher and admin bypass student lesson locks",
    pass: () =>
      read("app/app.js").includes("function isEducatorRole") &&
      read("app/app.js").includes("if (isEducatorRole()) return true") &&
      read("app/app.js").includes("Teacher access") &&
      read("app/app.js").includes("continueButton.hidden = isEducatorRole()"),
  },
  {
    name: "Course completion shows a certificate panel",
    pass: () =>
      read("app/app.js").includes("function drawCourseCertificate") &&
      read("app/app.js").includes("completion.percent < 100") &&
      read("app/styles.css").includes(".course-certificate-panel"),
  },
  {
    name: "New accounts do not get fake school defaults",
    pass: () =>
      read("app/app.js").includes('school: ""') &&
      read("app/app.js").includes('className: ""') &&
      !read("app/app.js").includes('school: "THPT Nguyễn Trãi"'),
  },
  {
    name: "Auth routes share the Resend-inspired light shell",
    pass: () =>
      read("app/index.html").includes('class="auth-shell"') &&
      read("app/index.html").includes('class="auth-layout"') &&
      read("app/index.html").includes('class="auth-preview"') &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="auth"] .auth-shell',
      ) &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="auth"] .auth-logo::after',
      ) &&
      read("app/app.js").includes("dataset.authMode = isRegister") &&
      read("app/app.js").includes('? "register"') &&
      read("app/app.js").includes("dataset.authRole = safeRole"),
  },
  {
    name: "Register page no longer shows poem copy",
    pass: () =>
      !read("app/app.js").includes("Không có việc gì khó") ||
      (read("app/app.js").includes("- Trích Chủ tịch Hồ Chí Minh -") &&
        !read("app/app.js").includes("#Chủ tịch Hồ Chí Minh vĩ đại")),
  },
  {
    name: "Auth forms use the shared accessible form system",
    pass: () =>
      read("app/index.html").includes('id="backendLoginForm"') &&
      read("app/index.html").includes('id="backendRegisterForm"') &&
      read("app/index.html").includes('class="auth-switch-row"') &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="auth"] .auth-form input:focus',
      ) &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="auth"] .auth-submit-button',
      ),
  },
  {
    name: "Auth preview replaces the legacy galaxy split screen",
    pass: () => {
      const html = read("app/index.html");
      const start = html.indexOf('<template id="authTemplate">');
      const end = html.indexOf('<template id="onboardingTemplate">');
      const auth = html.slice(start, end);
      return (
        auth.includes("LEARNING WORKSPACE") &&
        auth.includes("auth-course-preview") &&
        auth.includes("auth-preview-grid") &&
        !auth.includes("studyflow-galaxy.png") &&
        !auth.includes("meteor-layer") &&
        !auth.includes("auth-story-panel")
      );
    },
  },
  {
    name: "Landing feature tabs show detailed copy",
    pass: () =>
      read("app/index.html").includes('data-feature="quality"') &&
      read("app/app.js").includes("landingFeatureDetails") &&
      read("app/app.js").includes("FPT University") &&
      read("app/app.js").includes('button.setAttribute("aria-pressed"'),
  },
  {
    name: "Backed by marquee and contact section exist",
    pass: () =>
      read("app/index.html").includes("backed-section") &&
      read("app/index.html").includes("partner-fpt.png") &&
      read("app/index.html").includes("partner-binance.png") &&
      read("app/index.html").includes("Lê (Zaris) Tuấn Kiệt") &&
      read("app/styles.css").includes("@keyframes partner-marquee"),
  },
  {
    name: "Technical contact uses readable semantic light-theme cards",
    pass: () =>
      read("app/index.html").includes('<dl class="contact-grid">') &&
      read("app/index.html").includes('href="tel:+84945419867"') &&
      read("app/index.html").includes('href="mailto:feedsemilate@gmail.com"') &&
      read("app/studyflow-resend.css").includes(
        'body[data-shell="marketing"] .contact-item dd',
      ) &&
      read("app/studyflow-resend.css").includes("color: var(--sf-text)"),
  },
  {
    name: "Backed by strip keeps original logo colors",
    pass: () =>
      read("app/index.html").includes("Get started") &&
      read("app/styles.css").includes("object-fit: contain") &&
      read("app/styles.css").includes("filter: none"),
  },
  {
    name: "Social preview metadata is StudyFlow branded",
    pass: () =>
      read("app/index.html").includes('property="og:title"') &&
      read("app/index.html").includes(
        'content="StudyFlow LMS - Nền tảng học tập cá nhân hóa"',
      ) &&
      read("app/index.html").includes('property="og:image"') &&
      read("app/index.html").includes(
        'content="https://zaovietknives.com/assets/studyflow-galaxy.png"',
      ) &&
      read("app/index.html").includes('name="twitter:card"') &&
      read("app/index.html").includes('content="summary_large_image"') &&
      read("app/index.html").includes('rel="icon" href="./favicon.svg"'),
  },
  {
    name: "Namecheap UTF8 hardening exists",
    pass: () =>
      read("api/bootstrap.php").includes("SET NAMES utf8mb4") &&
      read("db/namecheap_utf8_fix.sql").includes(
        "alter table courses convert to character set utf8mb4",
      ) &&
      read("db/namecheap_utf8_fix.sql").includes(
        "alter table lesson_blocks convert to character set utf8mb4",
      ) &&
      !/^\);$/m.test(read("db/namecheap_mysql_schema.sql")),
  },
];

const results = checks.map((check) => {
  try {
    return { name: check.name, ok: Boolean(check.pass()) };
  } catch (error) {
    return { name: check.name, ok: false, error: error.message };
  }
});

for (const result of results) {
  console.log(
    `${result.ok ? "PASS" : "FAIL"} ${result.name}${result.error ? ` - ${result.error}` : ""}`,
  );
}

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  process.exitCode = 1;
}
