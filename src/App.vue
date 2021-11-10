<template>
    <div class="calculator" :class="className">
        <div class="calculator__body">
            <top-panel />
            <display />
            <buttons-panel />
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import TopPanel from './components/TopPanel.vue'
import Display from './components/Display.vue'
import ButtonsPanel from './components/ButtonsPanel.vue'
export default {
    name: 'App',
    components: {
        Display, TopPanel, ButtonsPanel
    },
    setup() {
        const store = useStore()
        const className = computed(() => store.getters.className)
        onMounted(() => store.dispatch('getTheme'))
        return {
            className
        }
    }
}
</script>
