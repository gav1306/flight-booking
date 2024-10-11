import Image from "next/image";
import loadingIcon from "../../app/assets/icons/loader.svg";

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        src={loadingIcon}
        width={20}
        height={20}
        className="w-5 h-auto"
        alt="loading icon"
      />
    </div>
  );
};

export default Loading;
