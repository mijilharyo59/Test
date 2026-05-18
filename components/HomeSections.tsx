'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

const categories = [
  { name: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Apparel', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80' }
];

const products = [
  { name: 'Arc Tread Derby', material: 'Crazy Horse Leather', price: '$680', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Column Tote', material: 'Nappa Leather', price: '$1,120', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Lineage Jacket', material: 'Suede', price: '$1,460', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1200&q=80' }
];

const materials = [
  { name: 'Crazy Horse Leather', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Nubuck', image: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Suede', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Nappa Leather', image: 'https://images.unsplash.com/photo-1521223344201-d169129f7b9a?auto=format&fit=crop&w=1200&q=80' }
];

export function HomeSections() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease: 'easeOut' }} className="editorial-grain absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2100&q=80" alt="Monochrome campaign portrait" fill className="object-cover grayscale" priority />
        </motion.div>
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-12 pt-20 md:px-14 lg:px-24">
          <MotionReveal className="max-w-xl">
            <h1 className="font-[var(--font-cormorant)] text-6xl leading-[0.9] tracking-[0.03em] md:text-8xl lg:text-[10rem]">JULL STUDIO</h1>
            <p className="mt-6 max-w-sm text-sm uppercase tracking-editorial text-mist">Bold Minimalism. Crafted. Wearable.</p>
          </MotionReveal>
          <motion.a whileHover={{ x: 8 }} transition={{ duration: 0.5 }} href="#collection" className="w-fit text-xs uppercase tracking-[0.2em] text-bone mix-blend-difference">
            Explore Collection
          </motion.a>
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
          <Image src="https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=2200&q=80" alt="Campaign architecture scene" fill className="object-cover grayscale" />
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
