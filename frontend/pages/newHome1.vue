<template>
    <div
        class="bg-[#D4E7D9] text-[#2E3A34] overflow-x-hidden cursor-none snap-y snap-mandatory h-screen overflow-y-scroll">

        <div ref="cursor"
            class="fixed w-3 h-3 bg-[#80B77F] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-multiply" />
        <div ref="cursorRing"
            class="fixed w-10 h-10 border border-[#80B77F] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-[width,height] duration-300" />

        <Header />

        <!-- section 1 -->
        <section class="snap-start min-h-screen grid grid-cols-2 max-md:grid-cols-1 overflow-hidden ">

            <div class="pt-36 pb-16 px-12 flex flex-col justify-between relative z-10 m-10">
                <div>
                    <p
                        class="text-[0.65rem] tracking-[3px] uppercase text-[#64748b] opacity-0 animate-fadeUp animation-delay-400">
                    </p>

                    <h1 v-html="heroTitle"
                        class="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] mt-4 opacity-0 animate-revealUp animation-delay-500">
                    </h1>
                </div>

                <div class="opacity-0 animate-fadeUp animation-delay-700 flex flex-col items-end gap-8">
                    <p class="text-[1rem] leading-[1.9] text-[#64748b] max-w-xs text-left">
                        {{ heroDescription }}
                    </p>
                </div>

                <div class="flex items-center gap-5 flex-wrap">
                    <NuxtLink to="/about" class="relative bg-[#5B3A68] text-white px-8 py-3.5 font-bold text-[0.75rem] tracking-[2px] uppercase no-underline
        after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-full after:h-full after:border after:border-[#5B3A68]
        hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200">
                        Our Solutions
                    </NuxtLink>

                    <NuxtLink to="/articles"
                        class="text-[0.7rem] tracking-[2px] uppercase text-[#64748b] border-b border-[#cbd5e1] pb-0.5 no-underline hover:text-[#9C5F93] hover:border-[#9C5F93] transition-colors">
                        Read Articles
                    </NuxtLink>
                </div>
            </div>

            <div class="relative bg-[#C4DEC8] overflow-hidden max-md:h-[50vh] flex items-center justify-center">
                <img src="~/assets/bot-logo-kh.png" alt="AI Bot"
                    class="max-h-[70%] object-contain animate-float drop-shadow-2xl relative z-10" />
            </div>
        </section>

        <!-- section 2 -->
        <section class="snap-start min-h-screen py-24 px-10 grid grid-cols-[1fr_2fr] max-md:grid-cols-1 gap-20 m-10">

            <p class="text-[1.25rem] tracking-[3px] uppercase text-[#64748b] pt-1 reveal col-start-1">
                Who We Are
            </p>

            <div class="feature-card col-start-1">
                <img src="~/assets/features.png" class="max-h-full object-contain animate-float" />
            </div>

            <div class="reveal col-start-2 row-span-2">
                <h2 class="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.1] tracking-[-0.02em]">
                    Each <em class="italic text-[#9C5F93]">strategy</em> is the perfect<br />
                    combination of creativity and practicality.
                </h2>

                <p class="text-[0.82rem] leading-[1.9] text-[#64748b] mt-6 max-w-xl">
                    {{ introParagraph1 }}
                </p>
            </div>

        </section>

        <!-- ULTRA AI ARTICLES MARQUEE -->
        <section class="snap-start min-h-screen flex flex-col items-center justify-center bg-[#f9ddfc] overflow-hidden">

            <div class="text-center mt-10 ">

                <p class="italic text-[0.8rem] tracking-[6px] uppercase text-[#f6f7f8] mb-3">
                    Latest
                </p>

                <h2 class="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[#58c0bc]">
                    Articles
                </h2>

                <div class="w-20 h-[2px] bg-[#300431] mx-auto mt-4"></div>

            </div>

            <!-- CAROUSEL -->
            <div class="focus-stage mt-10">

                <div v-for="(article, i) in articles.slice(0, 4)" :key="i"
                    :class="['focus-card', 'pos-' + ((i - activeIndex + 4) % 4)]">

                    <img :src="getImageUrl(getArticleImages(article)[0])" />

                    <div class="focus-overlay">
                        <h3>{{ article.title }}</h3>
                    </div>

                </div>

            </div>
        </section>

        <!-- section 3 -->
        <section class="snap-start min-h-screen bg-[#5B3A68] py-20 px-10 relative overflow-hidden ">

            <div
                class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9C5F93]/20 rounded-full blur-[120px] pointer-events-none" />

            <div class="flex justify-between items-baseline mb-16 reveal  mt-10">
                <h2 class="font-serif text-[clamp(2rem,5vw,5rem)] text-[#f8fafc] leading-none tracking-[-0.03em]">
                    New <span class="italic text-[#C4DEC8]">Solutions</span><br />
                </h2>
            </div>

            <div class="grid grid-cols-3 max-md:grid-cols-1 gap-0.5">

                <div v-for="(sol, i) in solutions" :key="sol.name"
                    class="bg-[#9C5F93] p-10 relative overflow-hidden group reveal transition-colors duration-300 hover:bg-[#7F4E78]"
                    :style="`transition-delay: ${i * 100}ms`">

                    <div
                        class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#80B77F] group-hover:w-full transition-all duration-500" />

                    <p class="text-[0.6rem] tracking-[3px] text-[#8ec8ca] mb-5">0{{ i + 1 }} —</p>

                    <h3 class="font-serif text-[1.6rem] text-[#f8fafc] leading-[1.2] mb-4">{{ sol.name }}</h3>

                    <p class="text-[0.75rem] text-[#94a3b8] leading-[1.8]">{{ sol.desc }}</p>

                    <div
                        class="mt-8 w-8 h-8 border border-[#334155] rounded-full flex items-center justify-center text-[#94a3b8] text-sm group-hover:border-[#80B77F] group-hover:text-[#80B77F] group-hover:rotate-45 transition-all duration-300">
                        →
                    </div>

                </div>

            </div>
            <div class="text-center mb-16  mt-10">
                <p class="italic text-[0.75rem] tracking-[6px] uppercase text-[#e4d3ef] mb-3">
                    Trusted by
                </p>

                <h2 class="font-serif text-[clamp(2rem,4vw,3rem)] text-[#c4ffe1]">
                    Leading Companies
                </h2>

                <div class="w-20 h-[2px] bg-[#80B77F] mx-auto mt-4"></div>

            </div>
            <div v-if="companies.length">
                <Swiper :modules="modules" :slides-per-view="'auto'" :space-between="80" :loop="true" :speed="16000"
                    :loop-additional-slides="20" :free-mode="true" :free-mode-momentum="false" :allow-touch-move="false"
                    :autoplay="{
                        delay: 1,
                        disableOnInteraction: false
                    }" class="company-swiper">
                    <SwiperSlide v-for="(company, i) in duplicatedCompanies" :key="i" class="company-slide">
                        <a :href="company.website" target="_blank">
                            <img :src="getImageUrl(company.logo_url)" :alt="company.name" class="company-logo" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <!-- section 4 -->
        <section class="snap-start min-h-screen py-24 px-10 m-10">

            <div class="flex justify-between items-baseline mb-16 reveal">
                <h2 class="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.02em]">
                    <em class="italic text-[#9C5F93]">Skills</em>
                </h2>

                <span class=" text-[0.65rem] tracking-[2px] text-[#64748b] uppercase">
                    09 Specialties
                </span>
            </div>

            <ul class="border-t border-[#cbd5e1]/20">

                <li v-for="(skill, i) in skills" :key="skill.name"
                    class="border-b border-[#cbd5e1]/20 flex justify-between items-center py-5 relative overflow-hidden group reveal cursor-none transition-all duration-300 hover:pl-5"
                    :style="`transition-delay: ${i * 50}ms`">

                    <div
                        class="absolute inset-0 bg-[#C4DEC8] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

                    <span
                        class="font-serif text-[clamp(1.2rem,2.5vw,2rem)] relative z-10 group-hover:text-[#5B3A68] transition-colors duration-300">
                        {{ skill.name }}
                    </span>

                    <span
                        class=" text-[0.65rem] tracking-[2px] uppercase text-[#64748b] relative z-10 group-hover:text-[#08979d] transition-colors duration-300">
                        {{ skill.tag }}
                    </span>

                </li>

            </ul>

        </section>

        <!-- section 5 -->
        <section
            class="snap-start min-h-screen bg-[#80B77F] py-28 px-10 grid grid-cols-2 max-md:grid-cols-1 gap-20 items-center relative overflow-hidden">

            <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#9C5F93] rounded-full opacity-25 blur-[80px]" />

            <h2 class="font-serif text-[clamp(3rem,7vw,7rem)] text-[#f8fafc] leading-[0.9] tracking-[-0.04em] reveal">
                Let's<br />Work<br /><em class="italic opacity-60">Together</em>
            </h2>

            <div class="relative z-10 reveal">

                <p class="text-[0.82rem] leading-[1.9] text-[#f8fafc]/80 mb-10">
                    Have a project in mind? Let's build something amazing together. We design modern digital
                    experiences
                    powered by intelligent systems.
                </p>

                <NuxtLink to="/contact"
                    class="inline-block bg-[#f8fafc] text-[#0f172a] px-9 py-4 font-bold text-[0.75rem] tracking-[2px] uppercase no-underline hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#065f62] transition-all duration-200">
                    Get In Touch
                </NuxtLink>

            </div>

        </section>
        <div class="snap-start">
            <Footer />
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import API from "../functions/API"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

const modules = [Autoplay, FreeMode]
const heroTitle = 'Kuro Haeksagon'
const activeIndex = ref(0)
const companies = ref([])

// ── HERO ──
const heroDescription =
    'A forward-thinking AI & Software Solution Company. We transform businesses through intelligent systems, automation, and modern digital experiences.'


const introParagraph1 =
    'Kuro Haeksagon is a forward-thinking technology solutions provider committed to driving business transformation through intelligent software systems. Our core mission is to help organizations optimize their operations, unlock data-driven insights, and accelerate growth with practical, scalable tools. We specialize in three key areas:'

// ── SOLUTIONS ──
const solutions = [
    {
        name: 'Software\nIntegration',
        desc: 'Seamlessly connecting systems to ensure smooth data flow and enhanced productivity across your organization.',
    },
    {
        name: 'ERP\nModules',
        desc: 'Streamlining enterprise resource planning with full Odoo support tailored to your specific business needs.',
    },
    {
        name: 'AI Data\nSolutions',
        desc: 'Harnessing artificial intelligence to turn raw data into actionable strategies that power innovation.',
    },
]

// ── SKILLS ──
const skills = [
    { name: 'Odoo', tag: 'ERP Platform' },
    { name: 'N8N Automation', tag: 'Workflow' },
    { name: 'Cloud Solutions', tag: 'Infrastructure' },
    { name: 'Google Cloud Platform', tag: 'GCP' },
    { name: 'Amazon Web Services', tag: 'AWS' },
    { name: 'Artificial Intelligence', tag: 'AI / ML' },
    { name: 'Software Development', tag: 'Engineering' },
    { name: 'Generative AI', tag: 'LLM / GenAI' },
    { name: 'Computer Vision', tag: 'CV / Imaging' },
]


const articles = ref([])
const loading = ref(false)

// ── SCROLL REVEAL ──
let revealObserver = null

// ── CURSOR ──
const cursor = ref(null)
const cursorRing = ref(null)
let mx = 0, my = 0, rx = 0, ry = 0, raf = null

const onMove = (e) => {
    mx = e.clientX; my = e.clientY
    if (cursor.value) {
        cursor.value.style.left = mx + 'px'
        cursor.value.style.top = my + 'px'
    }
}

const animateRing = () => {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    if (cursorRing.value) {
        cursorRing.value.style.left = rx + 'px'
        cursorRing.value.style.top = ry + 'px'
    }
    raf = requestAnimationFrame(animateRing)
}
const getImageUrl = (path) => {
    if (!path) return ""

    return `${apiBase}${path}`
}
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
const fetchCompanies = async () => {
    try {
        const res = await API.getCompanies()
        companies.value = res?.data || res || []
    } catch (err) {
        console.error("โหลดบริษัทไม่สำเร็จ", err)
        companies.value = []
    }
}
const config = useRuntimeConfig()
const apiBase = config.public?.apiBase || ""


onMounted(async () => {
    await Promise.all([
        fetchArticles(),
        fetchCompanies()
    ])
    window.addEventListener('mousemove', onMove)
    animateRing()

    revealObserver = new IntersectionObserver(
        (entries) => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible')
                revealObserver.unobserve(e.target)
            }
        }),
        { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
    setInterval(() => {

        if (!articles.value.length) return

        activeIndex.value =
            (activeIndex.value + 1) % articles.value.length

    }, 3000)

})
const duplicatedCompanies = computed(() => {
    return [
        ...companies.value,
        ...companies.value,
        ...companies.value,
        ...companies.value
    ]
})

onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
    revealObserver?.disconnect()
})
</script>

<style scoped>
body {
    font-family: 'Sora', sans-serif;
}

.company-marquee {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.company-swiper {
    width: 100%;
}

.company-slide {
    width: auto;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.company-logo {
    height: 50px;
    width: auto;
    min-width: 80px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.35s ease;
}

.company-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.08);
}

:deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
}

/* Articles */
.focus-stage {
    width: 1000px;
    height: 650px;
    position: relative;
}

/* base card */
.focus-card {
    position: absolute;
    width: 340px;
    height: 240px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, .15);
    transition: all .6s cubic-bezier(.22, 1, .36, 1);
}

.focus-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* TOP (MAIN CARD) */
.pos-0 {
    left: 50%;
    top: 0;
    transform: translateX(-50%) scale(1.2);
    z-index: 10;
}

/* LEFT */
.pos-1 {
    left: 0;
    top: 50%;
    transform: translateY(-50%) scale(.85);
    opacity: .6;
    filter: blur(2px);
}

/* RIGHT */
.pos-2 {
    right: 0;
    top: 50%;
    transform: translateY(-50%) scale(.85);
    opacity: .6;
    filter: blur(2px);
}

/* BOTTOM */
.pos-3 {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scale(.85);
    opacity: .6;
    filter: blur(2px);
}

/* overlay */
.focus-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 18px;
    background: linear-gradient(to top, rgba(0, 0, 0, .7), transparent);
}

.focus-overlay h3 {
    color: white;
    font-size: .9rem;
}



/* Smooth animation */
@keyframes tickerMove {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.feature-card {
    border-radius: 30px;
    padding: 40px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
    max-width: 500px;
    margin-top: 10px;
}

html {
    scroll-behavior: smooth;
}


/* Reveal */
.reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Keyframes */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(16px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes revealUp {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-18px);
    }
}

@keyframes ticker {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

/* Tailwind can't do these directly */
.animate-fadeUp {
    animation: fadeUp 0.8s forwards;
}

.animate-revealUp {
    animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-ticker {
    animation: ticker 18s linear infinite;
}

.animation-delay-200 {
    animation-delay: 0.2s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
}

.animation-delay-500 {
    animation-delay: 0.5s;
}

.animation-delay-700 {
    animation-delay: 0.7s;
}
</style>
