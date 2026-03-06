<template>
    <div class="bg-[#f0ece3] text-[#1a1714] overflow-x-hidden cursor-none">

        <!-- CURSOR -->
        <div ref="cursor"
            class="fixed w-3 h-3 bg-[#1a1714] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-multiply" />
        <div ref="cursorRing"
            class="fixed w-10 h-10 border border-[#1a1714] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-[width,height] duration-300" />

        <!-- NAV -->
        <Header />

        <!-- ═══ HERO ═══ -->
        <section class="min-h-screen grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">

            <!-- Left -->
            <div class="pt-36 pb-16 px-12 flex flex-col justify-between relative z-10">
                <div>
                    <p
                        class="font-mono text-[0.65rem] tracking-[3px] uppercase text-[#6b6359] opacity-0 animate-fadeUp animation-delay-400">
                        <!-- Est. 2024 — <span class="text-[#c4788a]">AI & Software</span> -->
                    </p>

                    <h1 v-html="heroTitle"
                        class="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] mt-4 opacity-0 animate-revealUp animation-delay-500">
                    </h1>
                </div>

                <div class="opacity-0 animate-fadeUp animation-delay-700">
                    <p class="font-mono text-[0.82rem] leading-[1.9] text-[#6b6359] max-w-xs mb-8">
                        {{ heroDescription }}
                    </p>
                    <div class="flex items-center gap-5 flex-wrap">
                        <NuxtLink to="/about" class="relative bg-[#1a1714] text-[#f0ece3] px-8 py-3.5 font-bold text-[0.75rem] tracking-[2px] uppercase no-underline
              after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-full after:h-full after:border after:border-[#1a1714]
              hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200">
                            Our Solutions
                        </NuxtLink>
                        <NuxtLink to="/articles"
                            class="font-mono text-[0.7rem] tracking-[2px] uppercase text-[#6b6359] border-b border-[#c8c0b4] pb-0.5 no-underline hover:text-[#c4788a] hover:border-[#c4788a] transition-colors">
                            Read Articles
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Right -->
            <div class="relative bg-[#e8cdd3] overflow-hidden max-md:h-[50vh] flex items-center justify-center">
                <img src="~/assets/bot-logo-kh.png" alt="AI Bot"
                    class="max-h-[70%] object-contain animate-float drop-shadow-2xl relative z-10" />
                <span
                    class="absolute bottom-10 left-10 font-serif text-[5rem] leading-none text-[#8b3a50] opacity-10 pointer-events-none select-none">AI</span>
            </div>

            <!-- Ticker -->
            <!-- <div class="col-span-2 ticker-wrapper">

                <div class="ticker">

                    <div class="ticker-track">

                        <div v-for="(article, i) in [...articles, ...articles]" :key="article.id + '-' + i"
                            class="ticker-item">

                            <img v-if="getArticleImages(article).length"
                                :src="getImageUrl(getArticleImages(article)[0])" class="ticker-logo" />

                            <span class="ticker-sep">✦</span>

                        </div>

                    </div>

                </div>

            </div> -->
        </section>

        <!-- ═══ ABOUT ═══ -->
        <section class="py-24 px-10 grid grid-cols-[1fr_2fr] max-md:grid-cols-1 gap-20">
            <p class="font-mono text-[0.65rem] tracking-[3px] uppercase text-[#6b6359] pt-1 reveal">Who We Are</p>
            <div class="reveal">
                <h2 class="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.1] tracking-[-0.02em]">
                    Each <em class="italic text-[#c4788a]">strategy</em> is the perfect<br />
                    combination of creativity and practicality.
                </h2>
                <p class="font-mono text-[0.82rem] leading-[1.9] text-[#6b6359] mt-6 max-w-xl">
                    {{ introParagraph1 }}
                </p>
            </div>
        </section>

        <div class="h-px bg-[#c8c0b4] opacity-30 mx-10" />

        <!-- ═══ BIG TYPE MARQUEE ═══ -->
        <div class="py-14 overflow-hidden border-y border-[#c8c0b4]/20">
            <div class="flex whitespace-nowrap animate-ticker" style="animation-duration:22s">
                <span v-for="(word, i) in [...marqueeWords, ...marqueeWords]" :key="i"
                    :class="i % 2 === 0 ? 'text-[#1a1714]' : '[-webkit-text-stroke:1px_#c8c0b4] [-webkit-text-fill-color:transparent]'"
                    class="font-serif text-[clamp(3.5rem,8vw,8rem)] tracking-[-0.04em] leading-none px-10">
                    {{ word }}
                </span>
            </div>
        </div>

        <!-- ═══ SOLUTIONS ═══ -->
        <section class="bg-[#1a1714] py-20 px-10 relative overflow-hidden">
            <div
                class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c4788a]/10 rounded-full blur-[120px] pointer-events-none" />

            <div class="flex justify-between items-baseline mb-16 reveal">
                <h2 class="font-serif text-[clamp(2rem,5vw,5rem)] text-[#f0ece3] leading-none tracking-[-0.03em]">
                    New <span class="italic text-[#c4788a]">Arrivals</span><br />Solutions
                </h2>
                <span class="font-mono text-[0.65rem] tracking-[2px] uppercase text-[#6b6359]">Our Offerings 2024</span>
            </div>

            <div class="grid grid-cols-3 max-md:grid-cols-1 gap-0.5">
                <div v-for="(sol, i) in solutions" :key="sol.name"
                    class="bg-[#221e1b] p-10 relative overflow-hidden group reveal transition-colors duration-300 hover:bg-[#2d2723]"
                    :style="`transition-delay: ${i * 100}ms`">
                    <div
                        class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#c4788a] group-hover:w-full transition-all duration-500" />

                    <p class="font-mono text-[0.6rem] tracking-[3px] text-[#c4788a] mb-5">0{{ i + 1 }} —</p>
                    <h3 class="font-serif text-[1.6rem] text-[#f0ece3] leading-[1.2] mb-4">{{ sol.name }}</h3>
                    <p class="font-mono text-[0.75rem] text-[#7a7067] leading-[1.8]">{{ sol.desc }}</p>

                    <div
                        class="mt-8 w-8 h-8 border border-[#3a342e] rounded-full flex items-center justify-center text-[#c8c0b4] text-sm group-hover:border-[#c4788a] group-hover:text-[#c4788a] group-hover:rotate-45 transition-all duration-300">
                        →
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ SKILLS ═══ -->
        <section class="py-24 px-10">
            <div class="flex justify-between items-baseline mb-16 reveal">
                <h2 class="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.02em]">
                    <em class="italic text-[#c4788a]">Skills</em>
                </h2>
                <span class="font-mono text-[0.65rem] tracking-[2px] text-[#6b6359] uppercase">09 Specialties</span>
            </div>

            <ul class="border-t border-[#c8c0b4]/20">
                <li v-for="(skill, i) in skills" :key="skill.name"
                    class="border-b border-[#c8c0b4]/20 flex justify-between items-center py-5 relative overflow-hidden group reveal cursor-none transition-all duration-300 hover:pl-5"
                    :style="`transition-delay: ${i * 50}ms`">
                    <div
                        class="absolute inset-0 bg-[#e8cdd3] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                    <span
                        class="font-serif text-[clamp(1.2rem,2.5vw,2rem)] relative z-10 group-hover:text-[#8b3a50] transition-colors duration-300">{{
                            skill.name }}</span>
                    <span
                        class="font-mono text-[0.65rem] tracking-[2px] uppercase text-[#6b6359] relative z-10 group-hover:text-[#c4788a] transition-colors duration-300">{{
                            skill.tag }}</span>
                </li>
            </ul>
        </section>

        <!-- ═══ CTA ═══ -->
        <section
            class="bg-[#c4788a] py-28 px-10 grid grid-cols-2 max-md:grid-cols-1 gap-20 items-center relative overflow-hidden">
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#8b3a50] rounded-full opacity-25 blur-[80px]" />
            <h2 class="font-serif text-[clamp(3rem,7vw,7rem)] text-[#f0ece3] leading-[0.9] tracking-[-0.04em] reveal">
                Let's<br />Work<br /><em class="italic opacity-60">Together</em>
            </h2>
            <div class="relative z-10 reveal">
                <p class="font-mono text-[0.82rem] leading-[1.9] text-[#f0ece3]/80 mb-10">
                    Have a project in mind? Let's build something amazing together. We design modern digital experiences
                    powered by intelligent systems.
                </p>
                <NuxtLink to="/contact"
                    class="inline-block bg-[#f0ece3] text-[#1a1714] px-9 py-4 font-bold text-[0.75rem] tracking-[2px] uppercase no-underline hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#8b3a50] transition-all duration-200">
                    Get In Touch
                </NuxtLink>
            </div>
        </section>

        <!-- FOOTER -->
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import API from "../functions/API"

const heroTitle = 'Kuro Haeksagon'

// ── HERO ──
const heroDescription =
    'A forward-thinking AI & Software Solution Company. We transform businesses through intelligent systems, automation, and modern digital experiences.'

// ── TICKER ──
const tickerItems = [
    'AI Solutions', 'Software Integration', 'ERP Modules',
    'Cloud Platform', 'Generative AI', 'Computer Vision',
    'N8N Automation', 'Odoo Solutions',
]

// ── MARQUEE ──
const marqueeWords = ['Kuro Haeksagon', 'Automation', 'AI Solutions', 'Innovation']

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

const currentImageIndex = ref({})
const slideshowIntervals = ref({})


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
const config = useRuntimeConfig()
const apiBase = config.public?.apiBase || ""
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

// ── SCROLL REVEAL ──
let revealObserver = null

onMounted(async () => {

    await Promise.all([
        fetchArticles(),
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
})

onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
    revealObserver?.disconnect()
})
</script>

<style scoped>
/* Google Fonts */
/* @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;700;800&family=Courier+Prime:ital@0;1&display=swap'); */
/* Ticker container */
.ticker-wrapper {
    height: 80px;
    background: #14110f;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* fade edge */
.ticker-wrapper::before,
.ticker-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
}

.ticker-wrapper::before {
    left: 0;
    background: linear-gradient(to right, #14110f, transparent);
}

.ticker-wrapper::after {
    right: 0;
    background: linear-gradient(to left, #14110f, transparent);
}

.ticker {
    width: 100%;
    overflow: hidden;
}

.ticker-track {
    display: flex;
    width: max-content;
    animation: ticker-scroll 35s linear infinite;
    align-items: center;
}

.ticker-item {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 50px;
}

.ticker-logo {
    height: 38px;
    width: auto;
    object-fit: contain;
    opacity: .9;
    filter: grayscale(1);
    transition: all .3s ease;
}

.ticker-logo:hover {
    opacity: 1;
    filter: none;
    transform: scale(1.1);
}

.ticker-sep {
    color: #e5c8d1;
    font-size: 18px;
    opacity: .6;
}

@keyframes ticker-scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
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

/* 
.font-serif {
    font-family: 'DM Serif Display', serif;
} */

.font-mono {
    font-family: 'Courier Prime', monospace;
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
