<template>
	<header class="flex flex-wrap items-center justify-between px-12 pt-12 md:px-16">
		<NuxtLink to="/" class="text-lg text-left md:w-full md:text-center md:text-xl">
			<b>berkinakkaya.dev</b>
		</NuxtLink>

		<div class="md:hidden" @click="showMobileMenu = !showMobileMenu">
			<VueFeather type="menu" stroke="white" size="36"></VueFeather>
		</div>
	</header>

	<nav class="justify-center items-center gap-10 mt-10 hidden md:flex">
		<NuxtLink :class="{ active: $route.name == 'index' }" to="/">Home</NuxtLink>
		<NuxtLink :class="{ active: $route.name == 'about' }" to="/about">About</NuxtLink>
		<NuxtLink :class="{ active: $route.name == 'experience' }" to="/experience">Experience</NuxtLink>
		<NuxtLink :class="{ active: $route.name == 'work' }" to="/work">Projects</NuxtLink>
		<NuxtLink :class="{ active: $route.name == 'contact' }" to="/contact">Contact</NuxtLink>
		<NuxtLink :class="{ active: $route.name == 'blog' }" to="/blog">Blog</NuxtLink>
		<a href="https://berkinakkaya.dev/resume.pdf" target="_blank">Resume</a>
	</nav>

	<div id="mobile_menu" class="px-12 pt-8 sm:px-24 flex flex-col" :class="{ show: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'index' }" to="/">Home</NuxtLink>
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'about' }" to="/about">About</NuxtLink>
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'experience' }" to="/experience">Experience</NuxtLink>
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'work' }" to="/work">Projects</NuxtLink>
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'contact' }" to="/contact">Contact</NuxtLink>
		<NuxtLink class="reveal text-xl p-6" :class="{ active: $route.name == 'blog' }" to="/blog">Blog</NuxtLink>
		<a class="reveal text-xl p-6" href="https://berkinakkaya.dev/resume.pdf" target="_blank">Resume</a>
	</div>
</template>

<style lang="scss">
nav a {
	opacity: 0.3;
	transition: 0.35s ease;

	&.active {
		font-weight: bold;
	}

	&.active,
	&:hover {
		opacity: 1;
	}
}

/* prettier-ignore */
#mobile_menu {
	position: absolute;
	left: 0;
	top: 120px;
	right: 0;
	height: 100vh;
	max-height: calc(100vh - 120px);
	background: #09182e;
	z-index: 1;

	&:not(.show) {
		display: none;
	}

	a:nth-child(1) { animation-delay: 0.1s; }
	a:nth-child(2) { animation-delay: 0.2s; }
	a:nth-child(3) { animation-delay: 0.3s; }
	a:nth-child(4) { animation-delay: 0.4s; }
	a:nth-child(5) { animation-delay: 0.5s; }
	a:nth-child(6) { animation-delay: 0.6s; }
	a:nth-child(7) { animation-delay: 0.7s; }
	a:nth-child(8) { animation-delay: 0.8s; }
	a:nth-child(9) { animation-delay: 0.9s; }
}
</style>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
	data: () => ({
		showMobileMenu: false,
		activeRoute: "",
	}),
	mounted() {
		console.log(this.$route.name);
	},
};
</script>