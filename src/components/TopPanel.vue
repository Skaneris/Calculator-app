<template>
    <div class="top">
        <div class="top__logo">calc</div>
        <div class="top__trigger">
            <div class="label">theme</div>
            <theme-trigger />
        </div>
    </div>
</template>

<script>
import ThemeTrigger from './ThemeTrigger.vue'
export default {
    name: 'TopPanel',
    components: {
        ThemeTrigger
    },
}
</script>
