<template>
    <div class="bg-white text-gray-900 overflow-hidden">

        <Header />

        <main>

            <section ref="hero" class="hero-section">

                <div class="hero-bg-glow"></div>

                <div class="hero-container">

                    <div ref="heroContent" class="hero-left">

                        <h1 class="hero-title">
                            {{ heroTitle }}
                        </h1>

                        <p class="hero-subtitle">
                            {{ heroDescription }}
                        </p>

                        <div class="hero-buttons">

                            <NuxtLink to="/about" class="btn-primary">
                                {{ aboutButtonText }}
                            </NuxtLink>

                            <NuxtLink to="/articles" class="btn-outline">
                                {{ articlesButtonText }}
                            </NuxtLink>

                        </div>

                    </div>

                    <div class="hero-right">

                        <div class="hero-image-wrap">

                            <img src="~/assets/bot-logo-kh.png" class="hero-image" alt="AI Illustration" />

                            <div class="hero-circle"></div>
                            <div class="hero-circle hero-circle-2"></div>

                        </div>

                    </div>

                </div>

            </section>

            <section ref="solutions" class="py-32 px-6 bg-gray-50 relative">
                <div class="max-w-6xl mx-auto">

                    <div class="text-center mb-20">
                        <h2 class="section-title mb-6">
                            {{ introTitle }}
                        </h2>

                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            {{ introSubtitle }}
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-16 items-start">

                        <div>
                            <p class="text-gray-600 leading-relaxed mb-8">
                                {{ introParagraph1 }}
                            </p>

                            <div class="space-y-6">
                                <div class="solution-card">
                                    <h3 class="solution-heading">Software Integration</h3>
                                    <p class="text-gray-600">{{ introParagraph2 }}</p>
                                </div>

                                <div class="solution-card">
                                    <h3 class="solution-heading">ERP Modules</h3>
                                    <p class="text-gray-600">{{ introParagraph3 }}</p>
                                </div>

                                <div class="solution-card">
                                    <h3 class="solution-heading">AI Data Solutions</h3>
                                    <p class="text-gray-600">{{ introParagraph4 }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="feature-card">
                            <img src="~/assets/features.png" class="max-h-full object-contain animate-float" />
                        </div>

                    </div>

                    <div class="mt-20">
                        <h3 class="text-lg text-gray-500 mb-8 tracking-widest uppercase text-center">
                            Core Capabilities
                        </h3>

                        <div class="skills-grid" ref="skillsGrid">
                            <div v-for="skill in skills" :key="skill" class="skill-card">
                                {{ skill }}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="py-28 px-6 bg-gray-50">

                <div class="max-w-6xl mx-auto">

                    <div class="text-center mb-16">
                        <h2 class="section-title mb-4">
                            Latest Articles
                        </h2>
                        <p class="text-gray-500">
                            Insights, tutorials, and thoughts on modern technology
                        </p>
                    </div>

                    <div v-if="loading" class="text-center py-10">
                        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#08979d]"></div>
                        <p class="mt-3 text-gray-500">Loading articles...</p>
                    </div>

                    <div v-else-if="articles.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                        <article v-for="article in articles.slice(0, 3)" :key="article.id"
                            class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 group">

                            <div v-if="getArticleImages(article) && getArticleImages(article).length > 0"
                                class="h-48 overflow-hidden">
                                <img :src="getImageUrl(getArticleImages(article)[currentImageIndex[article.id] || 0])"
                                    class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>

                            <div class="p-6">
                                <h3 class="text-lg font-semibold mb-3 line-clamp-2">
                                    {{ article.title }}
                                </h3>

                                <p class="text-gray-600 text-sm mb-5 line-clamp-3">
                                    {{ article.content?.slice(0, 140) }}...
                                </p>

                                <div class="flex justify-between items-center text-sm">
                                    <span class="text-gray-400">
                                        {{ formatDate(article.created_at) }}
                                    </span>
                                    <NuxtLink :to="`/articles/${article.id}`"
                                        class="text-[#08979d] font-medium hover:text-[#065f62]">
                                        Read More →
                                    </NuxtLink>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="text-center">
                        <NuxtLink to="/articles" class="btn-primary">
                            View All Articles
                        </NuxtLink>
                    </div>

                </div>

            </section>

            <section class="py-28 bg-white">
                <div class="max-w-6xl mx-auto text-center">
                    <h2 class="section-title mb-4">
                        Trusted by Leading Companies
                    </h2>
                    <p class="text-gray-500 mb-16">
                        We're proud to partner with innovative organizations
                    </p>
                    <div v-if="companiesLoading" class="py-10">
                        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#08979d]"></div>
                    </div>
                    <div v-else-if="trustedCompanies.length" class="flex flex-wrap justify-center gap-12 items-center">
                        <a v-for="company in trustedCompanies" :key="company.id" :href="company.website" target="_blank"
                            class="opacity-70 hover:opacity-100 transition">
                            <img :src="getCompanyLogoUrl(company.logo_url)" :alt="company.name"
                                class="h-10 object-contain" />
                        </a>
                    </div>
                </div>
            </section>

            <section class="relative py-36 text-inherit overflow-hidden">
                <div class="hero-bg-glow"></div>
                <div
                    class="absolute inset-0 bg-[linear-gradient(rgba(8,151,157,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,151,157,0.03)_1px,transparent_1px)] bg-[size:40px_40px]">
                </div>

                <div
                    class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#08979d]/10 blur-[140px] rounded-full">
                </div>
                <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full">
                </div>

                <div class="relative max-w-4xl mx-auto text-center px-6">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Let's Work Together
                    </h2>
                    <p class="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together.
                        We design and develop modern digital experiences.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-6">
                        <NuxtLink to="/contact" class="px-8 py-4 rounded-xl bg-[#08979d] text-white font-semibold
        hover:scale-105 hover:shadow-[0_0_40px_rgba(8,151,157,0.4)]
        transition-all duration-300">
                            Get In Touch
                        </NuxtLink>
                        <a href="mailto:hello@kurohaeksagon.com" class="px-8 py-4 rounded-xl border border-[#08979d] text-[#08979d]
        hover:bg-[#08979d] hover:text-white
        hover:scale-105
        transition-all duration-300">
                            Send Email
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import API from "../functions/API"

gsap.registerPlugin(ScrollTrigger)

/* ---------------------------
CONFIG
--------------------------- */

const config = useRuntimeConfig()
const apiBase = config.public?.apiBase || ""

/* ---------------------------
REFS
--------------------------- */

const skillsGrid = ref(null)
const heroContent = ref(null)
const solutions = ref(null)

/* ---------------------------
HERO TEXT
--------------------------- */

const heroTitle = "Kuro Haeksagon!"

const heroDescription =
    "A passionate AI & Software Solution Company sharing insights, experiences, and knowledge through modern technologies and innovative AI solutions."

const aboutButtonText = "Learn More About Us"
const articlesButtonText = "Read Our Articles"

/* ---------------------------
INTRO
--------------------------- */

const introTitle = "Our Sulutions for your Business"

const introSubtitle =
    "Automated ERP Modules, Software Integration and AI Solutions"

const introParagraph1 =
    "Kuro Haeksagon is a forward-thinking technology solutions provider committed to driving business transformation through intelligent software systems."

const introParagraph2 =
    "Software Integration: Seamlessly connecting systems to ensure smooth data flow and enhanced productivity."

const introParagraph3 =
    "ERP Modules: Streamlining enterprise resource planning for better control, planning, and operational efficiency with additional support for Odoo solutions tailored to your business needs."

const introParagraph4 =
    "AI Data Solutions: Harnessing artificial intelligence to turn data into actionable strategies that power innovation."

/* ---------------------------
SKILLS
--------------------------- */

const skills = [
    "Odoo",
    "N8N Automation",
    "Cloud Solutions",
    "Google Cloud Platform (GCP)",
    "Amazon Web Service (AWS)",
    "Artificial Intelligence",
    "Software Development",
    "Generative AI",
    "Computer Vision"
]

/* ---------------------------
STATE
--------------------------- */

const articles = ref([])
const trustedCompanies = ref([])

const loading = ref(false)
const companiesLoading = ref(false)

/* ---------------------------
UTIL FUNCTIONS
--------------------------- */

const formatDate = (date) => {
    if (!date) return ""
    try {
        return new Date(date).toLocaleDateString("en-GB")
    } catch {
        return ""
    }
}

const getImageUrl = (path) => {
    if (!path) return ""

    return `${apiBase}${path}`
}

const getCompanyLogoUrl = (path) => {
    if (!path) return ""
    return `${apiBase}/${path}`
}

/* ---------------------------
FETCH ARTICLES
--------------------------- */

const fetchArticles = async () => {
    try {
        loading.value = true

        const res = await API.getArticles()

        articles.value = res?.data || res || []

    } catch (err) {
        console.error("โหลดบทความไม่สำเร็จ", err)
        articles.value = []
    } finally {
        loading.value = false
    }
}

/* ---------------------------
FETCH COMPANIES
--------------------------- */

const fetchCompanies = async () => {
    try {
        companiesLoading.value = true

        const res = await API.getCompanies()

        trustedCompanies.value = res?.data || res || []

    } catch (err) {
        console.error("โหลดบริษัทไม่สำเร็จ", err)
        trustedCompanies.value = []
    } finally {
        companiesLoading.value = false
    }
}

/* ---------------------------
ARTICLE IMAGES SAFE PARSER
--------------------------- */

const getArticleImages = (article) => {

    if (!article || !article.images) return []

    try {

        if (Array.isArray(article.images)) {
            return article.images
        }

        if (typeof article.images === "string") {
            return JSON.parse(article.images)
        }

        return []

    } catch (err) {

        console.warn("image parse error", err)
        return []

    }

}

/* ---------------------------
SLIDESHOW
--------------------------- */

const currentImageIndex = ref({})
const slideshowIntervals = ref({})

const startImageSlideshow = (articleId) => {

    const article = articles.value.find(a => a?.id === articleId)

    if (!article) return

    const images = getArticleImages(article)

    if (!images || images.length <= 1) return

    if (currentImageIndex.value[articleId] === undefined) {
        currentImageIndex.value[articleId] = 0
    }

    if (slideshowIntervals.value[articleId]) {
        clearInterval(slideshowIntervals.value[articleId])
    }

    slideshowIntervals.value[articleId] = setInterval(() => {

        currentImageIndex.value[articleId] =
            (currentImageIndex.value[articleId] + 1) % images.length

    }, 2500)

}

/* ---------------------------
WATCH ARTICLES
--------------------------- */

watch(articles, (newArticles) => {

    if (!newArticles || !newArticles.length) return

    newArticles.forEach(article => {

        if (article?.id) {
            startImageSlideshow(article.id)
        }

    })

}, { immediate: true })

/* ---------------------------
ANIMATIONS
--------------------------- */

const initAnimations = () => {

    if (heroContent.value) {

        gsap.from(heroContent.value.children, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })

    }

    if (solutions.value) {

        const leftColumn =
            solutions.value.querySelectorAll(".solution-card, p")

        gsap.fromTo(
            leftColumn,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: solutions.value,
                    start: "top 75%",
                    once: true
                }
            }
        )

    }

    if (skillsGrid.value) {

        gsap.fromTo(
            skillsGrid.value.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: skillsGrid.value,
                    start: "top 85%",
                    once: true
                }
            }
        )

    }

    ScrollTrigger.refresh()

}

/* ---------------------------
MOUNT
--------------------------- */

onMounted(async () => {

    try {

        await Promise.all([
            fetchArticles(),
            fetchCompanies()
        ])

        await nextTick()

        initAnimations()

    } catch (err) {

        console.error("page load error", err)

    }

})

/* ---------------------------
CLEANUP
--------------------------- */

onUnmounted(() => {

    Object.values(slideshowIntervals.value).forEach(interval => {
        clearInterval(interval)
    })

})
</script>


<style scoped>
/* TYPOGRAPHY */
.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    color: #111827;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #6b7280;
    margin-top: 1.5rem;
    max-width: 600px;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
}

/* BUTTONS */
.btn-primary {
    background: #08979d;
    color: white;
    padding: 16px 36px;
    border-radius: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
}

.btn-primary:hover {
    background: #067a7f;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(8, 151, 157, 0.2);
}

.btn-outline {
    border: 2px solid #08979d;
    color: #08979d;
    padding: 16px 36px;
    border-radius: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
}

.btn-outline:hover {
    background: rgba(8, 151, 157, 0.05);
    transform: translateY(-3px);
}

/* CARDS */
.solution-card {
    background: white;
    padding: 28px;
    border-radius: 20px;
    border: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.solution-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
    border-color: #08979d;
}

.solution-heading {
    font-weight: 600;
    margin-bottom: 10px;
    color: #08979d;
}

.feature-card {
    background: white;
    border-radius: 30px;
    padding: 40px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
}

/* SKILLS GRID */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    max-width: 1000px;
    margin: 0 auto;
}

.skill-card {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 14px;
    border-radius: 12px;
    text-align: center;
    color: #374151;
    font-weight: 500;
    transition: all 0.3s ease;
}

.skill-card:hover {
    border-color: #08979d;
    color: #08979d;
    background: #f0f9f9;
    transform: translateY(-3px);
}

/* HERO LAYOUT & ANIMATION */
.hero-section {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: white;
}

.hero-container {
    max-width: 1280px;
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 40px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    margin-top: 2rem;
}

.hero-right {
    display: flex;
    justify-content: center;
    position: relative;
}

.hero-image {
    width: 100%;
    max-width: 500px;
    position: relative;
    z-index: 2;
}

/* DECORATIVE ELEMENTS (GLOW) */
.hero-circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(8, 151, 157, 0.15), transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.hero-bg-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(8, 151, 157, 0.08), transparent 70%);
    top: -150px;
    left: -150px;
    filter: blur(60px);
}

/* UTILS */
.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .hero-title {
        font-size: 2.8rem;
    }
}

@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 60px;
    }

    .hero-left {
        margin: auto;
    }

    .hero-subtitle {
        margin: 1.5rem auto 0;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-image {
        max-width: 320px;
    }
}
</style>
