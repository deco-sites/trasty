import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    title?: string;
    backgroundImage?: ImageWidget;
    backgroundImageMobile?: ImageWidget;
    list?: {
        image?: ImageWidget;
        title?: string;
        content?: string[];
    }[]
}

function AboutUs({ title, backgroundImage, backgroundImageMobile, list }: Props) {
    return (
        <div class="relative">
            {backgroundImage && <Image
                loading="lazy"
                src={backgroundImage}
                alt="Quem somos imagem de fundo"
                width={1920}
                height={657}
                class="w-full h-[657px] hidden lg:block"
            />
            }
            {backgroundImageMobile && <Image
                loading="lazy"
                src={backgroundImageMobile}
                alt="Quem somos imagem de fundo"
                width={377}
                height={625}
                class="w-full h-[625px] lg:hidden"
            />
            }
            <div class="bg-[#1E225AB2] absolute top-2/4 left-2/4 max-w-[919px] translate-x-[-50%] translate-y-[-50%] py-6 px-4 lg:p-8 rounded-[10px] w-[90%] lg:w-full">
                <span class="text-base-300 text-[20px] lg:text-2xl mb-4 lg:mb-12 block font-bold">{title}</span>
                <ul class="flex flex-col gap-4 lg:gap-12">
                    {list?.map((item) => (
                        <li class="flex gap-6">          {item?.image &&
                            <><Image
                                loading="lazy"
                                src={item.image}
                                alt="Quem somos"
                                width={70}
                                height={70}
                                class="max-h-[70px] hidden lg:block" />
                                <Image
                                    loading="lazy"
                                    src={item.image}
                                    alt="Quem somos"
                                    width={42}
                                    height={42}
                                    class="max-h-[42px] lg:hidden" /></>
                        }
                            <div class="flex flex-col leading-[21px]">
                                <span class="text-sm lg:text-base text-base-300 font-bold">{item?.title}</span>
                                <ul class="list-disc pl-4">
                                    {item?.content?.map((text) => (
                                        <li class="marker:text-white">
                                            <span class="text-xs lg:text-sm text-base-300 font-light">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutUs