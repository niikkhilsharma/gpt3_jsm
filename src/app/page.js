import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "@/containers";
import { CTA, Brand, Navbar } from "@/components";
import axios from "axios";

export default async function Home() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}
