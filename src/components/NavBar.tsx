import Image from "next/image";
import SearchBar from "./SearchBar";
import OutlineBtn from "./OutlineBtn";
import FillBtn from "./FillBtn";
import TextBtn from "./TextBtn";


export default function NavBar() {
    return (
        <nav>
            <div className="min-w-dvw min-h-20 flex justify-center items-center mt-4">
                <div className="w-[95%] h-16 rounded-lg flex justify-between items-center px-4">
                    <Image
                        src="/images/IBlog.png"
                        alt="Company Logo"
                        width={80}
                        height={20}
                        priority
                    />
                    <div className="nav-search hidden md:block">
                        <SearchBar />
                    </div>
                    <div className="login-signup-btn flex flex-row items-center space-x-2">
                        <TextBtn label="Login"/>
                        <div className="register-btn h-10">
                        <OutlineBtn  label="Register"/>
                        </div>
                    </div>

                    <div className="icons-avatar text-white hidden">
                        <div className="icons"></div>
                        <div className="avater"></div>
                    </div>

                </div>
            </div>
        </nav>


    );
}