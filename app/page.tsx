import Image from 'next/image';

export default function Page() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h1>Bienvenido a Milpa! 🌽</h1>
            <Image src={'/nopal_and_mountains.svg'} alt="Nopal and Mountains" width={500} height={300} />
        </div>
    );
}
