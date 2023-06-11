<template>
  <div
    class="h-screen bg-cover bg-center bg-[url('~/assets/faker.gif')] text-slate-200"
  >
    <main
      class="h-full flex flex-col justify-center items-center p-10 bg-black/70"
    >
      <div class="flex flex-col gap-3">
        <h1 class="text-dynamic font-extrabold">TILT TRACKER</h1>
        <SearchForm />
      </div>
    </main>
  </div>
</template>

<style>
body {
  cursor: url("~/assets/cursor.png"), auto;
}
</style>
