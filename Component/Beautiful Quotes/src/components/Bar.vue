<template>
  <div>
    <h3>Quotes Added</h3>
    <div class="progress">
    	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
      :style="{width: (quotesAmount / maxQuotes) * 100 + '%'}"
      >
        {{ quotesAmount }} / {{ maxQuotes }}
    	</div>
    </div>
</div>
</template>
<script>
  export default {
    props: ['quotesAmount', 'maxQuotes']
  }
</script>
<style></style>
