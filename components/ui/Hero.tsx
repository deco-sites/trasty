import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
    backgroundImage?: {
        image?: ImageWidget;
    }
    backgroundImageDesktop?: {
        image?: ImageWidget;
    }
    logotipo?: {
        image?: ImageWidget;
        width?: number;
        height?: number;
    }
    desktopImage?: {
        image?: ImageWidget;
        width?: number;
        height?: number;
        marginBottomEffect?: boolean;
    }
    /**
* @format rich-text
*/
    title?: string;
    /**
* @format rich-text
*/
    textContent?: string;
    button?: {
        buttonText?: string;
        buttonLink?: string;
    }

}

function Hero({ backgroundImage, backgroundImageDesktop, logotipo, desktopImage, title, textContent, button }: Props) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = globalThis.matchMedia('(min-width: 1024px)');
        setIsDesktop(mediaQuery.matches);

        const handleMediaChange = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const backgroundImageUrl = isDesktop ? backgroundImageDesktop?.image : backgroundImage?.image;

    return (
        <div
            className="hero min-h-[461px] lg:h-[806px] lg:flex lg:justify-center"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}>
            <div className="hero-content flex-col text-neutral-content items-start">
                {logotipo?.image && <Image
                    loading="lazy"
                    src={logotipo?.image}
                    alt="Banner descritivo de tecnologia"
                    width={logotipo?.width || 170}
                    height={logotipo?.height || 43}
                    style={{ height: `${logotipo?.height || 43}px` }}
                    class=""
                />
                }
                <div className="max-w-md lg:max-w-[586px]">
                    {title && <h1 className="mb-5 text-5xl font-bold" dangerouslySetInnerHTML={{
                        __html: title,
                    }}></h1>}
                    {textContent && <p className="mb-5" dangerouslySetInnerHTML={{
                        __html: textContent,
                    }}>
                    </p>
                    }
                    <a href={button?.buttonLink}><button className="btn bg-[#FCCC6B] border-none font-bold mt-4 rounded-[10px] text-center block mx-auto w-full lg:max-w-[164px] lg:mx-0">{button?.buttonText}</button></a>
                </div>
            </div>
            {desktopImage?.image && <Image
                loading="lazy"
                src={desktopImage?.image}
                alt="Banner descritivo de tecnologia"
                width={desktopImage?.width || 742}
                height={desktopImage?.height || 737}
                style={{ height: `${logotipo?.height || 737}px` }}
                class={`hidden lg:block ${desktopImage.marginBottomEffect ? "mb-[-15%]" : ''}`}
            />
            }
        </div>
    )
}

export default Hero