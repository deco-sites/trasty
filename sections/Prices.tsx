import Prices from "../islands/Prices.tsx";
import type { Props } from "../components/ui/Prices/Prices.tsx";

export default function PriceDiv(props: Props) {
    return (
        <div id="prices">
            <Prices {...props} />
        </div>
    )
}