import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


interface Props {
    /**
 * @format rich-text
 */
    title?: string;
    /**
 * @format rich-text
 */
    subtitle?: string;
    cards?: Cards[]
    buttonText?: string;
    buttonLink?: string;
}

interface Cards {
    image?: ImageWidget;
    imageWidth?: number;
    imageHeight?: number;
    /**
* @format rich-text
*/
    title?: string;
    /**
* @format rich-text
*/
    textContent?: string;
}

function Benefits({ title, subtitle, cards, buttonText = "QUERO CONTRATAR", buttonLink = "/" }: Props) {
    return (
        <div class="bg-[#F5F5F5] py-6">
            <div>
                {title && <span dangerouslySetInnerHTML={{
                    __html: title,
                }}></span>
                }
                {subtitle && <span dangerouslySetInnerHTML={{
                    __html: subtitle,
                }}></span>
                }

                <ul class="flex flex-col gap-4 items-center justify-center mt-4 lg:mt-16 mb-6 max-w-[1180px] lg:flex-row lg:flex-wrap lg:mx-auto">
                    {cards?.map((card) => (
                        <li class="max-w-[296px] h-[152px] w-full px-4 py-6 bg-gradient-to-r from-[#262475] to-[#46C2EE] rounded-[10px] flex gap-4">
                            {card.image && <Image
                                loading="lazy"
                                src={card.image}
                                alt="Ícone do card de benefícios"
                                width={card.imageWidth || 40}
                                height={card.imageHeight || 44}
                                style={{ height: `${card.imageHeight || 44}px` }}
                            />
                            }
                            <div class="flex flex-col justify-between">
                                {card.title && <span dangerouslySetInnerHTML={{
                                    __html: card.title,
                                }}></span>
                                }
                                {card.textContent && <span dangerouslySetInnerHTML={{
                                    __html: card.textContent,
                                }}></span>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
                <a href={buttonLink} class="btn py-3 mx-auto text-black font-bold text-sm mt-6 bg-[#FCCC6B] rounded-[10px] max-w-[222px] flex items-center justify-center">{buttonText}</a>
            </div>
        </div>
    )
}

export default Benefits