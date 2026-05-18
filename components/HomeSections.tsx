'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

const categories = [
  { name: 'Footwear', image: '/images/hero.jpg' },
  { name: 'Bags', image: '/images/hero.jpg' },
  { name: 'Accessories', image: '/images/hero.jpg' },
  { name: 'Apparel', image: '/images/hero.jpg' }
];

const products = [
  { name: 'Arc Tread Derby', material: 'Crazy Horse Leather', price: '$680', image: '/images/hero.jpg' },
  { name: 'Column Tote', material: 'Nappa Leather', price: '$1,120', image: '/images/hero.jpg' },
  { name: 'Lineage Jacket', material: 'Suede', price: '$1,460', image: '/images/hero.jpg' }
];

const materials = [
  { name: 'Crazy Horse Leather', image: '/images/hero.jpg' },
  { name: 'Nubuck', image: '/images/hero.jpg' },
  { name: 'Suede', image: '/images/hero.jpg' },
  { name: 'Nappa Leather', image: '/images/hero.jpg' }
];

export function HomeSections() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#090909]">
        <motion.div
          initial={{ scale: 1.14, x: 12 }}
          animate={{ scale: 1.04, x: 0 }}
          transition={{ duration: 4.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-grain absolute inset-0"
        >
          <Image src="/images/hero.jpg" alt="Monochrome campaign portrait" fill className="object-cover object-[66%_center] grayscale blur-[1.2px]" priority />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(0,0,0,0.92)_12%,rgba(0,0,0,0.62)_44%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.78)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.12),transparent_38%)]" />
        <div className="absolute inset-y-0 left-[58%] hidden w-px bg-[#f2f1ec]/20 md:block" />

        <div className="relative z-10 grid min-h-screen grid-cols-12 px-6 pb-12 pt-20 md:px-14 md:pb-16 lg:px-24">
          <MotionReveal className="col-span-8 col-start-1 self-start pt-10 md:col-span-5 md:pt-16">
            <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#e3e1dc]/60">JULL STUDIO / EDITION 01</p>
            <h1 className="font-[var(--font-cormorant)] text-[3.2rem] leading-[0.86] tracking-[0.045em] text-[#eceae5] md:text-[5.1rem] lg:text-[6.9rem]">
              JULL
              <br />
              STUDIO
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.25} className="col-span-5 col-start-8 mt-24 self-end pb-3 md:col-span-3 md:col-start-9 md:mb-24 md:mt-0">
            <p className="max-w-[15rem] text-[10px] uppercase leading-[2] tracking-[0.27em] text-[#d3d2cd]">
              Bold Minimalism. Crafted. Wearable.
            </p>
            <motion.a
              whileHover={{ x: 4 }}
              transition={{ duration: 0.7 }}
              href="#collection"
              className="mt-10 inline-block border-t border-[#e6e4dd]/30 pt-4 text-[9px] uppercase tracking-[0.33em] text-[#f2f0ea]"
            >
              Explore Collection
            </motion.a>
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-14 lg:px-24">
        <MotionReveal><h2 className="mb-10 text-xs uppercase tracking-[0.24em] text-ink/70">Featured Categories</h2></MotionReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, idx) => (
            <MotionReveal key={category.name} delay={idx * 0.1} className={idx % 2 === 0 ? 'md:pt-12' : ''}>
              <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.6 }} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist/40">
                  <Image src={category.image} alt={category.name} fill className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.22em]">{category.name}</p>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-36 md:px-14 lg:px-24">
        <MotionReveal>
          <p className="max-w-3xl font-[var(--font-cormorant)] text-5xl leading-[1.05] md:text-7xl">Quiet Forms.<br />Bold Intentions.</p>
        </MotionReveal>
      </section>

      <section id="collection" className="px-6 py-20 md:px-14 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, idx) => (
            <MotionReveal key={product.name} delay={idx * 0.1}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover grayscale transition duration-700 hover:scale-[1.02]" />
                </div>
                <div className="mt-5 space-y-1 text-xs tracking-[0.18em] uppercase">
                  <p>{product.name}</p>
                  <p className="text-ink/60">{product.material}</p>
                  <p>{product.price}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 md:px-14 lg:px-24">
        <MotionReveal><h3 className="mb-10 text-xs uppercase tracking-[0.24em]">Material Philosophy</h3></MotionReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {materials.map((material, idx) => (
            <MotionReveal key={material.name} delay={idx * 0.08}>
              <article>
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image src={material.image} alt={material.name} fill className="object-cover grayscale" />
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink/75">{material.name}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-6 mb-20 mt-10 min-h-[70vh] overflow-hidden md:mx-14 lg:mx-24">
        <motion.div initial={{ scale: 1.03 }} whileInView={{ scale: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }} className="absolute inset-0 editorial-grain">
          <Image src="/images/hero.jpg" alt="Campaign architecture scene" fill className="object-cover grayscale" />
        </motion.div>
        <div className="relative z-10 flex min-h-[70vh] items-end p-8 md:p-14">
          <p className="font-[var(--font-cormorant)] text-4xl text-bone mix-blend-difference md:text-6xl">Crafted for Distinction.</p>
        </div>
      </section>

      <footer className="px-6 pb-14 pt-24 md:px-14 lg:px-24">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.24em] text-ink/70">
          <a href="#">Instagram</a><a href="#">Contact</a><a href="#">Journal</a><a href="#">Store</a>
        </nav>
      </footer>
    </>
  );
}
