import Image from "next/image";
import emptyIllustration from "../../app/assets/illustrations/empty.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div className="p-[72px] max-w-[1200px] m-auto flex flex-col gap-4 border-t">
        <div className="flex flex-col gap-10 items-center">
          <Image
            src={emptyIllustration}
            width={200}
            height={200}
            alt="empty illustration"
            className="w-80 h-auto"
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-bold">No flights found...!</h1>
            <Button asChild>
              <Link href="/" className="tracking-wider">
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
