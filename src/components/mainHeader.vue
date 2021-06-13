<template>
  <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-left">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          <slot></slot>
          {{titre}}
        </h1>
      </div>
    </header>
</template>

<script>
export default {
props:['titre']
}
</script>

<style>

</style>