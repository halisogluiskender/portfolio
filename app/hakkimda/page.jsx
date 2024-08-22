"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPhp } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Hakkımda",
  description:
    "10 yılı aşkın süredir yazılım geliştirme alanında profesyonel deneyime sahip bir Full Stack Developer olarak, geniş bir teknoloji yelpazesinde yetkinlik sahibiyim. PHP, SCSS, HTML5, CSS3, JavaScript, ReactJs, NextJs, SQL, REST API, Ajax ve websocket konularında uzmanım. Yazılım geliştirme sürecinde `perfect pixel` CSS kavramını benimseyerek, estetik ve işlevsel kullanıcı arayüzleri oluşturuyorum.",
  info: [
    {
      fieldName: "İsim",
      fieldValue: "İskender Halisoğlu",
    },
    {
      fieldName: "Telefon",
      fieldValue: "(+90) 535 233 52 33",
    },
    {
      fieldName: "Deneyim",
      fieldValue: "10+ Yıl",
    },
    {
      fieldName: "Email",
      fieldValue: "halisogluiskender@gmail.com",
    },
  ],
};

// expreince data
const expreince = {
  icon: "/assets/resume/badge.svg",
  title: "İş Deneyimlerim",
  description:
    "Yazılım geliştirme alanında edindiğim deneyimlerle, birçok farklı projede yer aldım. Hem frontend hem de backend geliştirme konusunda uzmanlaştım, çeşitli şirketlerde ve freelance çalışarak geniş bir teknoloji yelpazesinde derinlemesine bilgi sahibi oldum.",
  items: [
    {
      company: "Sakans Yazılım Teknolojileri",
      position: "Fullstack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "Freelance",
      position: "Fullstack Developer",
      duration: "2018 - 2022",
    },
    {
      company: "Espro Interactive",
      position: "Fullstack Developer",
      duration: "2015 - 2018",
    },
    {
      company: "Netfikir Ajans",
      position: "Frontend Developer",
      duration: "2013 - 2015",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Eğitimim",
  description:
    "Bilgisayar programcılığı alanında aldığım eğitimler, yazılım dünyasında güçlü bir temel oluşturmamı sağladı. Hem lise hem de üniversite düzeyinde aldığım dersler, mesleki becerilerimi geliştirmeme yardımcı oldu.",
  items: [
    {
      institution: "Alıtınbaş Üniversitesi",
      position: "Bilgisayar Programcılığı",
      duration: "2024",
    },
    {
      institution: "Yıldırım Ticaret Lisesi",
      position: "Bilgisayar Programcılığı",
      duration: "2009",
    },
  ],
};

// skills data
const skills = {
  title: "Yeteneklerim",
  description:
    "Modern web geliştirme süreçlerinde etkin şekilde kullandığım becerilerim. Hem frontend hem de backend teknolojilerinde yetkinim ve kullanıcı dostu, performanslı uygulamalar geliştirme konusunda deneyimliyim.",
  skilList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="expreince"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="expreince">Expreince</TabsTrigger>
            <TabsTrigger value="egitim">Eğitim</TabsTrigger>
            <TabsTrigger value="yetenekler">Yetenekler</TabsTrigger>
            <TabsTrigger value="hakkimda">Hakkımda</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* expreince */}
            <TabsContent value="expreince" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expreince.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {expreince.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expreince.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 whitespace-nowrap">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="egitim" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.position}
                        </h3>
                        <div className="flex items-start gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] min-w-[6px] min-h-[6px] rounded-full bg-accent mt-3"></span>
                          <p className="text-white/60 text-left max-w-[260px]">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="yetenekler" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-accent text-primary border-none">
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="hakkimda"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
