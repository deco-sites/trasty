interface Props {
    imageEffect?: boolean;
    /**
* @format rich-text
*/
    text?: string;
    /**
* @format rich-text
*/
    textDesktop?: string;
    /**
* @format rich-text
*/
    textList?: string[];
}

function CustomText({ imageEffect = false, text, textDesktop, textList }: Props) {
    return (
        <div class="px-4 py-6 flex flex-col bg-[#F5F5F5F5]">
            {imageEffect && <img class="max-w-[343px] mx-auto lg:max-w-[586px] mb-[40px] lg:mb-[58px]" src="/box-dots.png" />}
            <div class="flex flex-col lg:flex-row lg:justify-center">
                {text && <span class="lg:max-w-[487px] lg:hidden" dangerouslySetInnerHTML={{
                    __html: text,
                }}></span>
                }
                {textDesktop && <span class="lg:max-w-[487px] hidden lg:block" dangerouslySetInnerHTML={{
                    __html: textDesktop,
                }}></span>
                }

                <ul class="flex flex-col list-disc px-8 mt-4">
                    {textList?.map((text) => (
                        <li><span class="text-sm text-primary">{text}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CustomText