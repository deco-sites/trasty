import { useState, useEffect } from 'preact/hooks';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    cardTitle: string;
}

export default function Modal({ isOpen, onClose, cardTitle }: ModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [site, setSite] = useState('');
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [message, setMessage] = useState('');

    const sendForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '' || site === '') {
            setMessage('Erro: Preencha todos os campos');
            setShowMessageModal(true);
            autoCloseModal();
            return;
        }

        const templateParams = {
            card_title: cardTitle,
            from_name: name,
            email: email,
            phone: phone,
            site: site
        };


        // @ts-ignore
        window.emailjs.send("service_jh34wnu", "template_nscdxwb", templateParams, "tmKMu4QTTuGaOohNF")
            .then(() => {
                setName('');
                setEmail('');
                setPhone('');
                setSite('');
                setMessage('Enviado com sucesso!');
                setShowMessageModal(true);
                autoCloseModal();

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'card_title': cardTitle,
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'site': site,
                    'event': 'EnvioForm'
                });

            }, () => {
                setMessage('Erro ao enviar. Tente novamente.');
                setShowMessageModal(true);
                autoCloseModal();
            });
    };

    const closeAllModals = () => {
        setShowMessageModal(false);
        onClose(); // Fecha o modal principal também
    };

    // Função que fecha automaticamente após 5 segundos
    const autoCloseModal = () => {
        setTimeout(() => {
            closeAllModals();
        }, 5000); // 5000ms = 5 segundos
    };

    useEffect(() => {
        if (!isOpen) {
            setName('');
            setEmail('');
            setPhone('');
            setSite('');
            setMessage('');
            setShowMessageModal(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-8 w-[90%] sm:w-full max-w-md">
                <h2 class="text-2xl text-secondary font-bold mb-4">Formulário de Contato</h2>
                <form class="flex flex-col gap-4" onSubmit={sendForm}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            class="input input-bordered w-full"
                            required
                            onChange={(e) => setName((e.target as HTMLInputElement).value)}
                            value={name}
                        />
                    </label>
                    <label>
                        E-mail:
                        <input
                            type="email"
                            class="input input-bordered w-full"
                            required
                            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                            value={email}
                        />
                    </label>
                    <label>
                        Telefone:
                        <input
                            type="tel"
                            class="input input-bordered w-full"
                            required
                            onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                            value={phone}
                        />
                    </label>
                    <label>
                        URL do Site:
                        <input
                            type="text"
                            class="input input-bordered w-full"
                            required
                            onChange={(e) => setSite((e.target as HTMLInputElement).value)}
                            value={site}
                        />
                    </label>
                    <div class="flex justify-end gap-4">
                        <button type="button" class="btn bg-gray-500" onClick={onClose}>Cancelar</button>
                        <button type="submit" class="btn bg-[#FCCC6B]">Enviar</button>
                    </div>
                </form>
            </div>

            {showMessageModal && (
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div class="bg-white rounded-lg p-4 w-[80%] sm:w-full max-w-sm">
                        <p class="text-center text-lg">{message}</p>
                        <button onClick={closeAllModals} class="btn bg-[#FCCC6B] mt-4 w-full">OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}
