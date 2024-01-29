import Image from "next/image";
import car_1 from '../../assets/image 7.png';
import car_2 from '../../assets/image 8.png'
const Header = () => {
    return (
        <div className="container grid gap-10 grid-cols-1 md:grid-cols-2">
            <div className="bg-[url('/add-1.jpg')] bg-no-repeat bg-cover rounded-lg w-full min-h-96 p-10">
                <div className="text-white max-w-sm space-y-3">
                    <h3 className="text-4xl">The Best Platform for Car Rental</h3>
                    <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <button className="px-5 py-2.5 bg-blue-500 rounded-md text-white">Rental Car</button>
                </div>
                <div className="mt-10">
                    <Image src={car_1} width='100%' height='100%' alt="Car One" />
                </div>
            </div>
            <div className="bg-[url('/add-2.jpg')] bg-no-repeat bg-cover rounded-lg w-full min-h-96 p-10">
                <div className="text-white max-w-sm space-y-3">
                    <h3 className="text-4xl">Easy way to rent a car at a low price</h3>
                    <p>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <button className="px-5 py-2.5 bg-blue-500 rounded-md text-white">Rental Car</button>
                </div>
                <div className="mt-10">
                    <Image src={car_2} width='100%' height='100%' alt="Car One" />
                </div>
            </div>
        </div>
    );
};

export default Header;