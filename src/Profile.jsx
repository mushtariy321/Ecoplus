import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [coin, setCoin] = useState(0);

    useEffect(() => {
        // LocalStorage'dan ma'lumotlarni olish
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');
        const storedCoin = localStorage.getItem('coin');
        if (storedFirstName && storedLastName && storedCoin) {
            setFirstName(storedFirstName);
            setLastName(storedLastName);
            setCoin(Number(storedCoin));
        } else {
            // Agar localStorage'da ma'lumot mavjud bo'lmasa, backend'dan olish
            const fetchProfile = async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/profile');
                    const data = await response.json();
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setCoin(data.coin);

                    // Ma'lumotlarni localStorage'ga saqlash
                    localStorage.setItem('firstName', data.firstName);
                    localStorage.setItem('lastName', data.lastName);
                    localStorage.setItem('coin', data.coin);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            };

            fetchProfile();
        }
    }, []);

    return (
        <div className="px-[100px] py-[50px] flex">
            <div className="flex gap-10">
                <div>
                    <h1 className="text-[35px]">Profile</h1>
                    <div className="h-[400px] flex flex-col text-center items-center w-[300px] border-[2px] justify-center gap-10 rounded-[10px] mt-[20px]">
                        <img
                            className="w-[150px] rounded-full"
                            src="https://i.pinimg.com/564x/92/45/50/924550f254f939c1fceaa2e6424b0b4c.jpg"
                            alt="User Logo"
                        />
                        <p>{`${firstName} ${lastName}`}</p>
                        <div className="flex gap-10 bg-[orange] w-full py-2 justify-center rounded-[10px] text-white">
                            <p>{`Coins: 100`}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className="carousel rounded-[10px] mt-[20px] h-[360px] w-[643px] mx-[150px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://t3.ftcdn.net/jpg/06/01/60/44/360_F_601604490_HRYfUs5naBf6J9fIWTN5hRXd72LaSMLp.jpg"
                        className="w-full"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg"
                        className="w-full"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://t3.ftcdn.net/jpg/06/01/60/44/360_F_601604490_HRYfUs5naBf6J9fIWTN5hRXd72LaSMLp.jpg"
                        className="w-full"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://wallpapers.com/images/featured/green-nature-tgy6dtxhgtwubez9.jpg"
                        className="w-full"
                        alt="Slide 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
