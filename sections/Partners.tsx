import { useId } from "../sdk/useId.ts";
import Slider from "../components/ui/Slider.tsx"
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "../sdk/clx.ts";

interface Props {
    banners?: {
        image?: ImageWidget;
        width?: number;
        height: number;
    }[]
    sliderInterval?: number;
}

function Partners({ banners, sliderInterval }: Props) {
    const id = useId();

    return (
        <div class="py-12 px-[50px]" id={id}>
            <Slider class="carousel gap-[72px] sm:gap-[104px] w-full items-center">
                {banners?.map((banner, index) => (
                    <Slider.Item
                        index={index}
                        class={clx(
                            "carousel-item",
                        )}
                    >
                        {banner.image && <Image
                            loading="lazy"
                            src={banner.image}
                            alt="Ícone do card de benefícios"
                            width={banner.width || 93}
                            height={banner.height || 46}
                            style={{ height: `${banner.height || 46}px` }}
                        />
                        }
                    </Slider.Item>
                ))}
            </Slider>
            <Slider.JS rootId={id} interval={sliderInterval && sliderInterval * 1e3} />
        </div>
    )
}

export default Partners