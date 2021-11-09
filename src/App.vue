<template>
    <div class="calculator" :class="className">
        <div class="calculator__body">
            <top-panel />
            <display />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import TopPanel from './components/TopPanel.vue'
import Display from './components/Display.vue'
export default {
    name: 'App',
    components: {
        Display, TopPanel
    },
    setup() {
        const store = useStore()
        const className = computed(() => store.getters.className)
        return {
            className
        }
    }
}
</script>
