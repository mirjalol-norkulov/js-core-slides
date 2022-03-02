<script></script>

<template>
  <div
    class="mt-4 space-y-2 tracking-wide leading-normal p-2 rounded-sm border-2 border-dotted border-slate-300"
  >
    <section class="flex space-x-2 items-center">
      <carbon-information-filled class="text-blue-500" />
      <div classs="font-bold text-sm">
        <slot name="title" />
      </div>
    </section>
    <section class="text-sm">
      <slot />
    </section>
  </div>
</template>
