import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  alt?: string;
}

function Footer({ image, alt }: Props) {
  return (
    <div class="bg-secondary w-full flex items-center justify-center py-6">
      {image &&
        <Image
          loading="lazy"
          src={image}
          alt={alt}
          width={155}
          height={40}
        />
      }
    </div>
  )
}

export default Footer