import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    images?: {
        imageMobile?: ImageWidget;
        imageMobileWidth?: number;
        imageMobileHeight?: number;
        imageDesktop?: ImageWidget;
        imageDesktopWidth?: number;
        imageDesktopHeight?: number;
    }
    /**
* @format rich-text
*/
    text?: string;
    /**
* @description Use below to add an extra text with a image on mobile
*/
    extraTextWithImage?: ExtraMobile;
    /**
* @format rich-text
*/
    textDesktop?: string;
    /**
 * @description Use below to add an extra text with a image on desktop
 */
    extraTextWithImageDesktop?: ExtraDesktop;
}

interface ExtraDesktop {
    image?: ImageWidget;
    /**
* @format rich-text
*/
    text?: string;
}


interface ExtraMobile {
    image?: ImageWidget;
    /**
* @format rich-text
*/
    text?: string;
}

function BannerText({ images, text, textDesktop, extraTextWithImage, extraTextWithImageDesktop }: Props) {
    return (
        <div>
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 lg:gap-8 px-4 xl:px-0">
                {images?.imageMobile && <Image
                    loading="lazy"
                    src={images?.imageMobile}
                    alt="Banner descritivo de tecnologia"
                    width={images?.imageMobileWidth || 343}
                    height={images?.imageMobileHeight || 264}
                    style={{ height: `${images?.imageMobileHeight || 264}px` }}
                    class="lg:hidden mx-auto"
                />
                }
                {images?.imageDesktop && <Image
                    loading="lazy"
                    src={images?.imageDesktop}
                    alt="Banner descritivo de tecnologia"
                    width={images?.imageDesktopWidth || 343}
                    height={images?.imageDesktopHeight || 264}
                    style={{ height: `${images?.imageDesktopHeight || 264}px` }}
                    class="hidden lg:block"
                />
                }
                <div class="flex flex-col gap-4 lg:gap-12">
                    {text && <span class="lg:max-w-[487px] lg:hidden" dangerouslySetInnerHTML={{
                        __html: text,
                    }}></span>
                    }
                    {textDesktop && <span class="lg:max-w-[487px] hidden lg:block" dangerouslySetInnerHTML={{
                        __html: textDesktop,
                    }}></span>
                    }
                    <div class="flex gap-4 items-center">
                        {extraTextWithImage?.image &&
                            <Image
                                loading="lazy"
                                src={extraTextWithImage?.image}
                                alt="Ícone do texto"
                                width={43}
                                height={43}
                                style={{ height: `43px` }}
                                class="lg:hidden"
                            />
                        }
                        {extraTextWithImage?.text && <span class="lg:hidden" dangerouslySetInnerHTML={{
                            __html: extraTextWithImage?.text,
                        }}></span>
                        }
                        {extraTextWithImageDesktop?.image &&
                            <Image
                                loading="lazy"
                                src={extraTextWithImageDesktop?.image}
                                alt="Ícone do texto"
                                width={43}
                                height={43}
                                style={{ height: `43px` }}
                                class="hidden lg:block"
                            />
                        }
                        {extraTextWithImageDesktop?.text && <span class="hidden lg:block" dangerouslySetInnerHTML={{
                            __html: extraTextWithImageDesktop?.text,
                        }}></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerText