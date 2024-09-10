import { useId } from "../../../sdk/useId.ts";
import Slider from "../Slider.tsx"
import { clx } from "../../../sdk/clx.ts";
import Icon from "site/components/ui/Icon.tsx";
import { useState } from 'preact/hooks';
import Modal from "./Modal.tsx"

export interface Props {
    title?: {
        title?: string;
        subtitle?: string;
    }
    cards?: Card[]
}

interface Card {
    highlight?: boolean;
    title?: string;
    subtitle?: string;

    /**
    * @format rich-text
    */
    itemsList?: string[];

    /**
    * @format rich-text
    */
    price?: string;
    buttonText?: string;
}

function Prices({ title, cards }: Props) {
    const id = useId();
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCardTitle, setSelectedCardTitle] = useState('');


    const handleOpenModal = (cardTitle: string) => {
        setSelectedCardTitle(cardTitle);
        setModalOpen(true);
    };
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div id={id} class="bg-[#F5F5F5] py-6 lg:pb-20 lg:pt-[72px]">
            <div id="prices" class="flex flex-col gap-2 mb-8 lg:mb-16">
                <span class="font-bold text-secondary text-base lg:text-2xl text-center">{title?.title}</span>
                <span class="text-primary text-sm lg:text-base text-center">{title?.subtitle}</span>
            </div>
            <div class="px-4 2xl:px-0">
                <Slider class="carousel carousel-center sm:carousel-end gap-4 lg:gap-8 2xl:justify-center sm:gap-[104px] w-full items-center h-[630px]">
                    {cards?.map((card, index) => (
                        <Slider.Item
                            index={index}
                            class={clx(
                                "carousel-item max-w-[276px] w-full flex flex-col",
                            )}
                        >
                            <div class={`${card.highlight ? "bg-secondary" : 'bg-info'} relative flex flex-col text-center rounded-t-xl items-center justify-center h-[104px]`}>
                                {card.highlight && <span class="bg-[#FCCC6B] text-secondary font-bold text-[11px] py-1 px-2 absolute bottom-[-10px] left-2/4 translate-x-[-50%] rounded-[5px]">RECOMENDADO</span>}
                                <span class={`${card.highlight ? 'text-[#FCCC6B]' : 'text-secondary'} text-[20px] font-bold`}>{card.title}</span>
                                <span class="text-base-300 font-bold text-sm">{card.subtitle}</span>
                            </div>
                            <div class="bg-base-300 pt-6 pb-8 px-4 rounded-b-xl shadow-lg">
                                <ul class="list-disc min-h-[268px] flex flex-col justify-center pl-4">
                                    {card?.itemsList?.map((item) => (
                                        <li class="leading-5">
                                            <span class="text-[10px]" dangerouslySetInnerHTML={{
                                                __html: item,
                                            }} />
                                        </li>
                                    ))}
                                </ul>
                                <Icon class="w-full h-[2px] mt-8" id="CircleEffect" />
                                <div class="py-8">
                                    {card.price && <span dangerouslySetInnerHTML={{
                                        __html: card.price,
                                    }} />
                                    }
                                </div>

                                <button
                                    class="btn py-3 mx-auto text-black font-bold text-sm bg-[#FCCC6B] rounded-[10px] w-full flex items-center justify-center"
                                    onClick={() => handleOpenModal(card.title ?? '')}
                                >
                                    {card.buttonText}
                                </button>
                            </div>
                        </Slider.Item>
                    ))}
                </Slider>
                <ul class="flex items-center gap-2 justify-center 2xl:hidden">
                    {cards?.map((_, index) => (
                        <li class="carousel-item">
                            <Slider.Dot
                                index={index}
                            >
                                <div class="bg-[#D9D9D9] h-[14px] w-[14px] no-animation rounded-full group-disabled:bg-[#2D296B] transition-all"></div>
                            </Slider.Dot>
                        </li>
                    ))}
                </ul>
            </div>
            <Slider.JS rootId={id} initial={cards && cards.length / 2} />
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                cardTitle={selectedCardTitle}
            />
        </div>
    )
}

export default Prices;
