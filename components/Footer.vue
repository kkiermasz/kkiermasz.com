<template>
  <v-footer class="justify-center flex-grow-0 bg-transparent flex-column">
    <v-main tag="div">
      <div class="text-center bg-transparent text-grey ma-3 text-caption">© jakub kiermasz {{
          new Date().getFullYear()
        }}
      </div>
    </v-main>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

