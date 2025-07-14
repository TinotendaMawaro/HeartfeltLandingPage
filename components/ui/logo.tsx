import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logos-04.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Him Logo" width={171} height={171} />
    </Link>
  );
}
