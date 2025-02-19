import Image from "next/image"
import about1Image from "../../../public/about-1.png"
import about2Image   from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >

            <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
               <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image 
                src={about1Image}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
                />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                <Image 
                src={about2Image}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
                />
                </div> 
                </div>

            <div className="space-y-6 mt-10"data-aos="fade-up-left" data-aos-delay="500">
                <h2 className="text-4xl font-bold">SOBRE</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Aberto desde 2024
                    </li>

                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Profissionais Nomeados
                    </li>

                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Atendimento customizavel
                    </li>
                </ul>


                <div  className="flex gap-2" >

                    <a href="#"
                    className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                    <WhatsappLogo className="w-5 h-5 text-white" />
                    Contanto Via Whatsapp
                    </a>

                    <a href="#"
                    className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        
                    <MapPin className="w-5 h-5 text-white"/>
                    Endereço da Loja
                    </a>

                </div>

            </div>




            </div>
            </div>
        </section>
    )
}