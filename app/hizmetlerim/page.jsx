"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    desction:
      "Kullanıcı dostu ve etkileşimli web arayüzleri geliştiriyorum. Modern frontend teknolojilerini kullanarak hızlı, duyarlı ve estetik web siteleri tasarlıyorum.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    desction:
      "Güçlü ve ölçeklenebilir arka uç sistemleri inşa ediyorum. Veritabanı yönetimi, API geliştirme ve güvenlik odaklı çözümlerle sağlam altyapılar sunuyorum.",
    href: "",
  },
  {
    num: "03",
    title: "RESTful API",
    desction:
      "RESTful API'ler ile uygulamalar arası veri iletişimini kolaylaştırıyorum. Güvenli, hızlı ve esnek API'ler geliştirerek, farklı platformlar arasında sorunsuz entegrasyon sağlıyorum.",
    href: "",
  },
  {
    num: "04",
    title: "Socket Io",
    desction:
      "Gerçek zamanlı veri akışı gerektiren projeler için Socket.io ile çözümler üretiyorum. Anlık mesajlaşma, bildirim sistemleri ve canlı güncellemeler gibi özelliklerle projelere dinamik bir yapı kazandırıyorum.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-wrap group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.desction}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
