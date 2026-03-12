<template>
  <div class="bg-[#0B0E2A] text-[#F1F5FF] overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">

    <Header />

    <main>

      <!-- HERO -->
      <section class="relative pt-36 pb-32 overflow-hidden">

        <!-- glow -->
        <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7B5CFF] blur-[200px] opacity-20"></div>
        <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#FF6EC7] blur-[200px] opacity-20"></div>

        <div class="max-w-6xl mx-auto px-10 text-center">

          <h1 class="ffont-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-6">
            About <span class=" text-[#FF6EC7]">Kuro Haeksagon</span>
          </h1>

          <p class="text-lg text-white/70 max-w-2xl mx-auto">
            Transforming businesses through intelligent software solutions and innovative AI technologies
          </p>

        </div>

      </section>


      <!-- WHO WE ARE -->
      <section class="py-28 px-10 max-w-6xl mx-auto">

        <div class="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 class="font-serif text-4xl mb-8">
              Who We <span class="italic text-[#7B5CFF]">Are</span>
            </h2>

            <p class="text-white/70 leading-relaxed mb-6">
              Kuro Haeksagon is a forward-thinking technology solutions provider committed to driving business
              transformation through intelligent software systems. Our core mission is to help organizations optimize
              their operations, unlock data-driven insights, and accelerate growth with practical, scalable tools.
            </p>

            <p class="text-white/70 leading-relaxed mb-8">
              Founded with a vision to bridge the gap between complex technology and business needs, we specialize in
              creating seamless integrations, automated workflows, and AI-powered solutions that deliver real value to
              our clients.
            </p>

            <div class="flex flex-wrap gap-3">

              <span class="px-4 py-2 text-sm border border-white/10 rounded-full bg-white/5">
                Innovation
              </span>

              <span class="px-4 py-2 text-sm border border-white/10 rounded-full bg-white/5">
                Excellence
              </span>

              <span class="px-4 py-2 text-sm border border-white/10 rounded-full bg-white/5">
                Reliability
              </span>

              <span class="px-4 py-2 text-sm border border-white/10 rounded-full bg-white/5">
                Partnership
              </span>

            </div>

          </div>


          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

            <img src="~/assets/features.png" alt="Kuro Haeksagon Solutions" class="w-full object-contain" />

          </div>

        </div>

      </section>


      <!-- SERVICES -->
      <section class="py-28 px-10">

        <div class="max-w-6xl mx-auto">

          <div class="text-center mb-16">

            <h2 class="font-serif text-4xl mb-4">
              Our <span class="italic text-[#FF6EC7]">Expertise</span>
            </h2>

            <p class="text-white/60 max-w-xl mx-auto">
              We specialize in three key areas that drive digital transformation and business growth
            </p>

          </div>


          <div class="grid md:grid-cols-3 gap-8">

            <!-- CARD -->
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

              <h3 class="text-xl font-semibold mb-4">Software Integration</h3>

              <p class="text-white/70 mb-6">
                Seamlessly connecting systems to ensure smooth data flow and enhanced productivity. We break down silos
                and create unified workflows.
              </p>

              <ul class="space-y-2 text-white/60 text-sm">
                <li>• API Development & Integration</li>
                <li>• Data Migration & Synchronization</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Automation</li>
              </ul>

            </div>


            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

              <h3 class="text-xl font-semibold mb-4">ERP Modules</h3>

              <p class="text-white/70 mb-6">
                Streamlining enterprise resource planning for better control, planning, and operational efficiency with
                specialized Odoo solutions.
              </p>

              <ul class="space-y-2 text-white/60 text-sm">
                <li>• Odoo Implementation & Customization</li>
                <li>• Business Process Optimization</li>
                <li>• Financial Management Systems</li>
                <li>• Inventory & Supply Chain</li>
              </ul>

            </div>


            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

              <h3 class="text-xl font-semibold mb-4">AI Data Solutions</h3>

              <p class="text-white/70 mb-6">
                Harnessing artificial intelligence to turn data into actionable strategies that power innovation and
                competitive advantage.
              </p>

              <ul class="space-y-2 text-white/60 text-sm">
                <li>• Machine Learning Implementation</li>
                <li>• Computer Vision Applications</li>
                <li>• Generative AI Integration</li>
                <li>• Data Analytics & Insights</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      <!-- TECHNOLOGY -->
      <section class="py-28 px-10 bg-[#0F1238]">

        <div class="max-w-6xl mx-auto">

          <div class="text-center mb-16">

            <h2 class="font-serif text-4xl mb-4">
              Technologies We <span class="italic text-[#7B5CFF]">Master</span>
            </h2>

            <p class="text-white/60 max-w-xl mx-auto">
              Our technical expertise spans modern development frameworks, cloud platforms, and cutting-edge AI
              technologies
            </p>

          </div>


          <div class="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 class="mb-4 text-white font-semibold">Cloud Platforms</h3>
              <div class="space-y-3 text-white/70 text-sm">
                <div class="p-3 bg-white/5 rounded-lg">Google Cloud Platform</div>
                <div class="p-3 bg-white/5 rounded-lg">Amazon Web Services</div>
                <div class="p-3 bg-white/5 rounded-lg">Cloud Solutions</div>
              </div>
            </div>


            <div>
              <h3 class="mb-4 text-white font-semibold">Development</h3>
              <div class="space-y-3 text-white/70 text-sm">
                <div class="p-3 bg-white/5 rounded-lg">Software Development</div>
                <div class="p-3 bg-white/5 rounded-lg">N8N Automation</div>
                <div class="p-3 bg-white/5 rounded-lg">Odoo</div>
              </div>
            </div>


            <div>
              <h3 class="mb-4 text-white font-semibold">AI Technologies</h3>
              <div class="space-y-3 text-white/70 text-sm">
                <div class="p-3 bg-white/5 rounded-lg">Artificial Intelligence</div>
                <div class="p-3 bg-white/5 rounded-lg">Generative AI</div>
                <div class="p-3 bg-white/5 rounded-lg">Computer Vision</div>
              </div>
            </div>


            <div>
              <h3 class="mb-4 text-white font-semibold">Industries</h3>
              <div class="space-y-3 text-white/70 text-sm">
                <div class="p-3 bg-white/5 rounded-lg">Manufacturing</div>
                <div class="p-3 bg-white/5 rounded-lg">E-commerce</div>
                <div class="p-3 bg-white/5 rounded-lg">Healthcare</div>
              </div>
            </div>

          </div>

        </div>

      </section>


      <!-- CTA -->
      <section class="py-32 px-10 text-center relative overflow-hidden">

        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7B5CFF]/10 to-[#FF6EC7]/10"></div>

        <h2 class="font-serif text-4xl mb-6">
          Ready to <span class="italic text-[#FF6EC7]">Transform</span> Your Business?
        </h2>

        <p class="text-white/60 max-w-2xl mx-auto mb-10">
          Let's discuss how Kuro Haeksagon can help streamline your operations, integrate your systems, and unlock the
          power of AI for your organization.
        </p>

        <div class="flex justify-center gap-6 flex-wrap">

          <NuxtLink to="/contact" class="bg-gradient-to-r from-[#7B5CFF] to-[#FF6EC7]
px-8 py-4 rounded-full text-sm tracking-[2px] uppercase font-semibold
hover:scale-105 transition">
            Start Your Project
          </NuxtLink>

          <a href="mailto:hello@kurohaeksagon.com" class="border border-white/20 px-8 py-4 rounded-full text-sm tracking-[2px] uppercase
hover:bg-white/10 transition">
            Email Us
          </a>

        </div>

      </section>

    </main>

    <Footer />

  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
useSeoMeta({
  title: 'About - Kuro Haeksagon | AI & Software Solutions',
  description: 'Learn about Kuro Haeksagon, a technology solutions provider specializing in software integration, ERP modules, and AI data solutions for business transformation.'
})
</script>