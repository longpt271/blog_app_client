import { Link } from "react-router-dom";

import { images } from "../../../../constants";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4">
      {/* logo */}
      <Link to="/">
        <img src={images.Logo} alt="logo" className="w-16" />
      </Link>
      {/* menu burger icon */}
      <div className="cursor-pointer">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
    </header>
  );
};

export default Header;
