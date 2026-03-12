<template>
  <div class="bg-[#0B0E2A] text-[#F1F5FF] overflow-x-hidden">

    <Header />

    <main>

      <!-- HERO -->
      <section class="relative pt-40 pb-28 text-center overflow-hidden">

        <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7B5CFF] blur-[200px] opacity-20"></div>
        <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#FF6EC7] blur-[200px] opacity-20"></div>

        <h1 class="font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.95] mb-6">
          Start Your <span class=" text-[#FF6EC7]">Project</span>
        </h1>

        <p class="text-white/70 max-w-2xl mx-auto">
          Let's discuss how Kuro Haeksagon can help streamline your systems,
          integrate your platforms, and unlock the power of AI.
        </p>

      </section>


      <!-- CONTENT -->
      <section class="py-20 px-10">

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <!-- FORM -->
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl">

            <h2 class="font-serif text-2xl mb-6">
              Start Your Project
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">

              <input v-model="form.name" placeholder="Your Name" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
focus:outline-none focus:border-[#7B5CFF]" />

              <input v-model="form.email" type="email" placeholder="Email Address" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
focus:outline-none focus:border-[#7B5CFF]" />

              <input v-model="form.subject" placeholder="Subject" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
focus:outline-none focus:border-[#7B5CFF]" />

              <textarea v-model="form.message" rows="5" placeholder="Tell us about your project..." required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
focus:outline-none focus:border-[#7B5CFF]"></textarea>

              <button type="submit" :disabled="isSubmitting" class="w-full bg-gradient-to-r from-[#7B5CFF] to-[#FF6EC7]
py-3 rounded-full uppercase tracking-[2px] text-sm font-semibold
hover:scale-105 transition disabled:opacity-50">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <p v-if="submitMessage" :class="submitSuccess ? 'text-green-400' : 'text-red-400'"
                class="text-sm text-center">
                {{ submitMessage }}
              </p>

            </form>

          </div>


          <!-- CONTACT INFO -->
          <div class="space-y-10">

            <div class="bg-white/5 border border-white/10 p-8 rounded-2xl">

              <h3 class="font-serif text-xl mb-6">
                Get In Touch
              </h3>

              <div class="space-y-4 text-white/70">

                <p>
                  <strong>Email</strong><br>
                  hello@kurohaeksagon.com
                </p>

                <p>
                  <strong>Response Time</strong><br>
                  Within 24 hours
                </p>

                <p>
                  <strong>Services</strong><br>
                  AI • ERP • Integration
                </p>

              </div>

            </div>


            <div class="bg-white/5 border border-white/10 p-8 rounded-2xl">

              <h3 class="font-serif text-xl mb-6">
                Our Expertise
              </h3>

              <ul class="space-y-3 text-white/70">

                <li>• Software Integration & API Development</li>
                <li>• Odoo ERP Implementation</li>
                <li>• AI & Machine Learning Solutions</li>
                <li>• Cloud Integration (AWS / GCP)</li>
                <li>• N8N Workflow Automation</li>

              </ul>

            </div>

            <div class="bg-gradient-to-r from-[#7B5CFF]/20 to-[#FF6EC7]/20
border border-white/10 p-8 rounded-2xl">

              <h3 class="font-serif text-xl mb-4">
                Why Choose Us
              </h3>

              <p class="text-white/70 mb-4">
                We deliver innovative technology solutions that drive real business value.
              </p>

              <ul class="text-sm text-white/70 space-y-2">
                <li>• Enterprise-grade solutions</li>
                <li>• Dedicated support</li>
                <li>• Rapid deployment</li>
                <li>• Scalable architecture</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>

    <Footer />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const config = useRuntimeConfig()
    const response = await fetch(`${config.public.apiBase}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()

    if (response.ok) {
      submitMessage.value = data.message || 'Thank you for your message! Our team will get back to you within 24 hours.'
      submitSuccess.value = true

      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    } else {
      throw new Error(data.error || 'Failed to send message')
    }
  } catch (error) {
    submitMessage.value = error.message || 'There was an error sending your message. Please try again.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Contact Us - Kuro Haeksagon | AI & Software Solutions',
  description: 'Get in touch with Kuro Haeksagon for AI solutions, ERP implementation, and software development services. Contact our expert team today.'
})
</script>