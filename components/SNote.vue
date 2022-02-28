<template>
  <div class="px-2 py-2 mt-4 rounded-sm flex flex-col space-y-2 border-2 border-dotted border-slate-300">
    <section class="flex items-center">
      <carbon-warning-filled class="mr-1 text-orange-300" />
      <span class="uppercase text-xs tracking-widest">Eslatma</span>
    </section>
    <div class="text-sm">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SNote",
};
</script>
