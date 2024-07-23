<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Info', href: '#', current: false },
  { name: 'Library', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
]
</script>

<template>
  <Disclosure as="header" class="bg-white " v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 mt-5">
      <div class="relative flex h-16 justify-between">
        <div class="relative z-10 flex px-2 lg:px-0">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="/src/assets/logo.png" alt="Your Company" />
          </div>
        </div>
        <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div class="rounded-full bg-gray-200">
            <nav class="hidden lg:flex items-center justify-center px-4" aria-label="Global">
              <router-link
                  v-for="item in navigation" :key="item.name" :to="item.href"
                  :class="[item.current ? 'text-gray-900' : 'hover:border-b-2 border-black', 'text-gray-500 inline-flex items-center px-3 py-4 text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}
              </router-link>
            </nav>
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <!-- Login -->
          <Menu as="div" class="relative ml-4 flex-shrink-0">
            <div>
              <router-link to="/login">
                Login
              </router-link>
            </div>
          </Menu>
        </div>
      </div>

    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>

</style>
