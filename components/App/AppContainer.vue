<template>
    <div class="flex flex-grow h-full"><slot /></div>
</template>
<script>
export default {
    data() {
        return {
            data: null, // initialize your data to null
        };
    },
    async fetch() {
        this.data = await this.$fetch("https://api.example.com/data");
    },
};
</script>
