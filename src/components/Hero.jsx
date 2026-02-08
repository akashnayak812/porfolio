import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { logo } from "../assets"; // Using logo which is now the user's photo
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div className='pointer-events-auto'>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className='text-[#915eff]'>Akash</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-secondary`}>
                        I develop 3D visuals, user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>

                <div className="lg:flex hidden flex-1 justify-end items-center h-full pointer-events-auto">
                    <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-violet-500 shadow-lg">
                        <img
                            src={logo} // Updated to use the imported logo
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* <ComputersCanvas /> */}

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
