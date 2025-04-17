<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />

      <Style type="text/css">
          body {background-color: green}
      </Style>
    </Head>

  </div>
</template>

<script>

import {ref} from "vue"
const title = ref('Hello world')  


</script>

<style lang="scss" scoped>

</style>