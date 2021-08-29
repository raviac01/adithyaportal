import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero() {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/Adithya.jpg" alt='An image showing Adithya' width={300} height={300} />
            </div>
            <h1>Hi, Im Adithya</h1>
            <p> Blog about Jee Preparation Notes </p>
        </section>
    )
}