<template>
  <div class="px-2 py-2 mt-4 rounded-sm flex flex-col space-y-2 border-2 border-dotted">
    <section class="flex items-center">
      <carbon-warning-filled class="mr-1 text-orange-500" />
      <span class="uppercase text-xs tracking-widest">Eslatma</span>
    </section>
    <div class="mt-0.5 text-sm">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SNote",
};
</script>
