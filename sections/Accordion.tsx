interface Props {
    questions?: Questions[]
}

interface Questions {
    question?: string;
    answer?: string;
}

function Accordion({ questions }: Props) {
    return (
        <div className="join join-vertical w-full px-4 mb-7 flex max-w-[1220px] mx-auto xl:px-0">
            <span className="text-secondary text-base font-bold text-center py-8">Perguntas frequentes</span>
            {questions?.map((list, index) => (
                <div className="collapse collapse-arrow join-item border-[#E0E0E0] border-b-[1px] border-solid">
                    <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                    <div className="collapse-title text-secondary text-base font-bold">{list.question}</div>
                    <div className="collapse-content">
                        <p className="text-[#7F7C7C] text-sm">{list.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion